import nodemailer from 'nodemailer'
import { requestCache, emailCache } from '../utils/cache'
import { validateCSRFToken, validateOrigin } from '../utils/csrf'

// Rate limiting configuration for newsletter
const NEWSLETTER_RATE_LIMITS = {
  perIP: 3,        // 3 newsletter subscriptions per IP per hour
  perEmail: 1,     // 1 subscription per email per day
  globalDaily: 50  // 50 total newsletter subscriptions per day
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
                  event.node.req.socket?.remoteAddress || 
                  'unknown'

  // Validate input
  const { email, type } = body
  
  if (!email || !type) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and type are required'
    })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }

  if (type !== 'newsletter') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid subscription type'
    })
  }

  // Rate limiting - Per IP (hourly)
  const ipKey = `newsletter_ip_${clientIP}`
  const ipCount = (requestCache.get(ipKey) as number) || 0
  if (ipCount >= NEWSLETTER_RATE_LIMITS.perIP) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Rate limit exceeded for IP. Try again later.'
    })
  }

  // Rate limiting - Per email (daily)
  const emailKey = `newsletter_email_${email}`
  const emailCount = (emailCache.get(emailKey) as number) || 0
  if (emailCount >= NEWSLETTER_RATE_LIMITS.perEmail) {
    throw createError({
      statusCode: 429,
      statusMessage: 'You have already subscribed today. Please try again tomorrow.'
    })
  }

  // Rate limiting - Global daily
  const globalKey = 'newsletter_global_daily'
  const globalCount = (requestCache.get(globalKey) as number) || 0
  if (globalCount >= NEWSLETTER_RATE_LIMITS.globalDaily) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Daily newsletter subscription limit reached. Please try again tomorrow.'
    })
  }

  try {
    // Create transporter with optimized settings (same as contact form)
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

    // Prepare email content
    const mailOptions = {
      from: 'contact@nickvanhooff.com',
      to: 'alexspaan295@gmail.com',
      subject: 'Newsletter Subscription - Ukraine2Work',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0057B7;">Newsletter Subscription</h2>
          <p><strong>New newsletter subscription received:</strong></p>
          <ul style="list-style: none; padding: 0;">
            <li style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</li>
            <li style="margin-bottom: 10px;"><strong>Subscription Type:</strong> Newsletter</li>
            <li style="margin-bottom: 10px;"><strong>Date:</strong> ${new Date().toLocaleString('nl-NL')}</li>
            <li style="margin-bottom: 10px;"><strong>IP Address:</strong> ${clientIP}</li>
          </ul>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #0057B7; margin-top: 0;">Next Steps:</h3>
            <ol>
              <li>Add the email to your newsletter mailing list</li>
              <li>Send a welcome email to the subscriber</li>
              <li>Consider segmenting based on user preferences</li>
            </ol>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #dee2e6;">
          <p style="color: #6c757d; font-size: 12px;">
            This email was sent from the Ukraine2Work website newsletter subscription form.
          </p>
        </div>
      `,
      text: `
Newsletter Subscription - Ukraine2Work

New newsletter subscription received:
- Email: ${email}
- Subscription Type: Newsletter
- Date: ${new Date().toLocaleString('nl-NL')}
- IP Address: ${clientIP}

Next Steps:
1. Add the email to your newsletter mailing list
2. Send a welcome email to the subscriber
3. Consider segmenting based on user preferences

This email was sent from the Ukraine2Work website newsletter subscription form.
      `
    }

    // Send email with retry logic
    let emailSent = false
    let retryCount = 0
    const maxRetries = 3

    while (!emailSent && retryCount < maxRetries) {
      try {
        await transporter.sendMail(mailOptions)
        emailSent = true
      } catch (emailError) {
        retryCount++
        if (retryCount === maxRetries) {
          throw emailError
        }
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000))
      }
    }

    // Close the transporter connection
    transporter.close()

    // Update rate limiting counters
    requestCache.set(ipKey, ipCount + 1, 3600) // 1 hour TTL
    emailCache.set(emailKey, emailCount + 1, 86400) // 24 hours TTL
    requestCache.set(globalKey, globalCount + 1, 86400) // 24 hours TTL

    // Log successful subscription
    console.log(`Newsletter subscription successful: ${email} from IP: ${clientIP}`)

    return {
      success: true,
      message: 'Newsletter subscription successful'
    }

  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    
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
      statusMessage: 'Failed to process newsletter subscription'
    })
  }
})
