import nodemailer from 'nodemailer'
import { requestCache, emailCache } from '../utils/cache'
import { validateCSRFToken, validateOrigin } from '../utils/csrf'

// Rate limiting configuration
const RATE_LIMITS = {
  perIP: 5,        // 5 requests per IP per minute
  perEmail: 5,     // 5 emails per email address per 5 minutes
  globalDaily: 100 // 100 total emails per day
}

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  // CSRF Protection - Validate Origin/Referer
  if (!validateOrigin(event)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Invalid origin - CSRF protection'
    })
  }

  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  // Validate CSRF token
  const csrfToken = getHeader(event, 'x-csrf-token') || body.csrfToken
  const sessionId = getCookie(event, 'sessionId') || getHeader(event, 'x-session-id')
  
  if (!csrfToken || !sessionId || !validateCSRFToken(csrfToken, sessionId)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Invalid CSRF token'
    })
  }

  // Get client IP for rate limiting
  const clientIP = getHeader(event, 'x-forwarded-for') || 
                  getHeader(event, 'x-real-ip') || 
                  getHeader(event, 'cf-connecting-ip') || // Cloudflare
                  event.node.req.socket?.remoteAddress ||
                  'unknown'

  // Validate required fields
  if (!body.name || !body.email || !body.subject || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }

  // Rate limiting by IP
  const ipKey = `ip_${clientIP}`
  const ipRequests = (requestCache.get(ipKey) as number) || 0
  if (ipRequests >= RATE_LIMITS.perIP) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many requests from this IP. Please wait a minute before trying again.'
    })
  }

  // Rate limiting by email
  const emailKey = `email_${body.email}`
  const emailRequests = (emailCache.get(emailKey) as number) || 0
  if (emailRequests >= RATE_LIMITS.perEmail) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too many emails from this address. Please wait 5 minutes before sending another message.'
    })
  }

  // Basic content validation (prevent spam)
  const suspiciousPatterns = [
    /https?:\/\/[^\s]+/gi, // URLs
    /\b(?:viagra|casino|urgent|claim|)\b/gi, // Spam keywords
    /(.)\1{10,}/gi // Repeated characters
  ]
  
  const content = `${body.name} ${body.email} ${body.subject} ${body.message}`.toLowerCase()
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(content)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message content not allowed'
      })
    }
  }

  // Update rate limiting counters
  requestCache.set(ipKey, ipRequests + 1)
  emailCache.set(emailKey, emailRequests + 1)

  try {
    // Create transporter with optimized settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.strato.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@nickvanhooff.com',
        pass: config.smtpPassword
      },
      // Connection pooling for better performance
      pool: true,
      maxConnections: 1,
      maxMessages: 5,
      // Timeout settings
      connectionTimeout: 30000,  // 30 seconds
      greetingTimeout: 30000,    // 30 seconds
      socketTimeout: 60000       // 60 seconds
    })

    // Sanitize and validate input
    const sanitizedBody = {
      name: body.name.trim().slice(0, 100),
      email: body.email.trim().slice(0, 100),
      subject: body.subject.trim().slice(0, 200),
      message: body.message.trim().slice(0, 2000)
    }

    // Send email with retry logic
    let retryCount = 0
    const maxRetries = 2
          // to: 'Alexspaan295@gmail.com',
    
    while (retryCount <= maxRetries) {
      try {
        const result = await transporter.sendMail({
          from: 'contact@nickvanhooff.com',
          to: 'lexspaan295@gmail.com',
          subject: `Contact Form: ${sanitizedBody.subject}`,
          text: `
Name: ${sanitizedBody.name}
Email: ${sanitizedBody.email}
Subject: ${sanitizedBody.subject}
Message: ${sanitizedBody.message}
          `,
          html: `
<div style="font-family: Arial, sans-serif; line-height: 1.5;">
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> ${sanitizedBody.name} (${sanitizedBody.email})</p>
  <p><strong>Subject:</strong> ${sanitizedBody.subject}</p>
  <p><strong>Message:</strong></p>
  <p>${sanitizedBody.message.replace(/\n/g, '<br>')}</p>
  <hr>
  <p><small>Sent from IP: ${clientIP}</small></p>
</div>
          `
        })

        // Close the transporter connection
        transporter.close()

        return { 
          success: true, 
          messageId: result.messageId,
          message: 'Email sent successfully'
        }

      } catch (sendError: any) {
        retryCount++
        
        if (retryCount > maxRetries) {
          throw sendError
        }
        
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount))
      }
    }

  } catch (error: any) {
    console.error('Email sending error:', error)
    
    // Handle specific rate limit errors from SMTP
    if (error?.message && (
      error.message.includes('rate limit') || 
      error.message.includes('Too many') ||
      error.message.includes('exceeded')
    )) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Server rate limit exceeded. Please try again in a few minutes.'
      })
    }

    // Handle authentication errors
    if (error?.code === 'EAUTH' || error?.responseCode === 535) {
      console.error('SMTP Authentication failed')
      throw createError({
        statusCode: 500,
        statusMessage: 'Email service temporarily unavailable.'
      })
    }

    // Handle connection errors
    if (error?.code === 'ECONNREFUSED' || error?.code === 'ETIMEDOUT') {
      throw createError({
        statusCode: 503,
        statusMessage: 'Email service temporarily unavailable. Please try again later.'
      })
    }

    // Generic error
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email. Please try again later.'
    })
  }
})
