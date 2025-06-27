import nodemailer from 'nodemailer'
import { requestCache, emailCache } from '../utils/cache'
import { validateCSRFToken, validateOrigin } from '../utils/csrf'

// Function to get localized email content
const getWelcomeEmailContent = (email: string, language: string = 'nl') => {
  const content: Record<string, any> = {
    nl: {
      subject: 'Welkom bij de Ukraine2Work Nieuwsbrief!',
      welcome: 'Welkom bij onze nieuwsbrief! 🎉',
      thankYou: 'Bedankt voor het aanmelden voor de Ukraine2Work nieuwsbrief! We zijn blij je te verwelkomen in onze gemeenschap.',
      expectTitle: 'Wat je kunt verwachten:',
      expectations: [
        '🔔 Laatste vacatures in Nederland',
        '📋 Informatie over werkvergunningen en visa',
        '💼 Carrière ontwikkelingstips',
        '🏢 Bedrijfsportretten en partnerships',
        '📈 Marktinzichten en trends'
      ],
      mission: 'Onze missie is om getalenteerde Oekraïense professionals te verbinden met kansen in Nederland, en zowel vluchtelingen als mensen die nieuwe carrièrepaden zoeken te ondersteunen.',
      visitButton: 'Bezoek Ukraine2Work',
      helpText: 'Hulp nodig? Neem contact met ons op via',
      unsubscribeText: 'Je ontvangt deze e-mail omdat je je hebt aangemeld voor onze nieuwsbrief op ukraine2work.nl'
    },
    en: {
      subject: 'Welcome to Ukraine2Work Newsletter!',
      welcome: 'Welcome to our Newsletter! 🎉',
      thankYou: 'Thank you for subscribing to the Ukraine2Work newsletter! We\'re excited to have you as part of our community.',
      expectTitle: 'What you can expect:',
      expectations: [
        '🔔 Latest job opportunities in the Netherlands',
        '📋 Work permit and visa information',
        '💼 Career development tips',
        '🏢 Company spotlights and partnerships',
        '📈 Market insights and trends'
      ],
      mission: 'Our mission is to connect talented Ukrainian professionals with opportunities in the Netherlands, supporting both refugees and those seeking new career paths.',
      visitButton: 'Visit Ukraine2Work',
      helpText: 'Need help? Contact us at',
      unsubscribeText: 'You received this email because you subscribed to our newsletter at ukraine2work.nl'
    },
    uk: {
      subject: 'Ласкаво просимо до розсилки Ukraine2Work!',
      welcome: 'Ласкаво просимо до нашої розсилки! 🎉',
      thankYou: 'Дякуємо за підписку на розсилку Ukraine2Work! Ми раді вітати вас у нашій спільноті.',
      expectTitle: 'Що вас чекає:',
      expectations: [
        '🔔 Останні вакансії в Нідерландах',
        '📋 Інформація про дозволи на роботу та візи',
        '💼 Поради щодо розвитку кар\'єри',
        '🏢 Огляди компаній та партнерства',
        '📈 Ринкові інсайти та тренди'
      ],
      mission: 'Наша місія - з\'єднувати талановитих українських професіоналів з можливостями в Нідерландах, підтримуючи як біженців, так і тих, хто шукає нові кар\'єрні шляхи.',
      visitButton: 'Відвідати Ukraine2Work',
      helpText: 'Потрібна допомога? Зв\'яжіться з нами за адресою',
      unsubscribeText: 'Ви отримали цей лист, тому що підписалися на нашу розсилку на ukraine2work.nl'
    }
  }

  return content[language] || content.nl
}

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
    // Create transporter with Vercel-optimized settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.strato.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@nickvanhooff.com',
        pass: config.smtpPassword
      },
      // Optimized for serverless/Vercel environment
      pool: false, // Disable connection pooling for serverless
      maxConnections: 1,
      maxMessages: 1,
      // Shorter timeouts for faster response in serverless
      connectionTimeout: 10000,  // 10 seconds
      greetingTimeout: 10000,    // 10 seconds
      socketTimeout: 10000       // 10 seconds
    } as any)

    // Prepare email content for admin notification
    const adminMailOptions = {
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

    // Detect language from multiple sources
    const acceptLanguage = getHeader(event, 'accept-language') || ''
    const referer = getHeader(event, 'referer') || ''
    const bodyLanguage = body.language || body.locale || body.lang
    
    let userLanguage = 'nl' // Default to Dutch
    
    // 1. Check if language is explicitly provided in the request body
    if (bodyLanguage) {
      if (['nl', 'en', 'uk'].includes(bodyLanguage)) {
        userLanguage = bodyLanguage
      }
    }
    // 2. Check the referer URL for language prefix
    else if (referer) {
      if (referer.includes('/en/') || referer.includes('/en?') || referer.includes('/en#')) {
        userLanguage = 'en'
      } else if (referer.includes('/uk/') || referer.includes('/uk?') || referer.includes('/uk#')) {
        userLanguage = 'uk'
      }
      // Default remains 'nl' for no prefix (Dutch is default)
    }
    // 3. Fallback to Accept-Language header
    else if (acceptLanguage.includes('en') && !acceptLanguage.includes('nl')) {
      userLanguage = 'en'
    } else if (acceptLanguage.includes('uk') || acceptLanguage.includes('ua')) {
      userLanguage = 'uk'
    }

    console.log(`Newsletter language detection: ${userLanguage} (referer: ${referer}, accept-lang: ${acceptLanguage}, body-lang: ${bodyLanguage})`)

    // Get localized content
    const emailContent = getWelcomeEmailContent(email, userLanguage)

    // Prepare confirmation email for subscriber with localization
    const subscriberMailOptions = {
      from: 'contact@nickvanhooff.com',
      to: email,
      subject: emailContent.subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #0057B7; margin: 0; font-size: 28px;">Ukraine2Work</h1>
              <div style="width: 50px; height: 3px; background-color: #FFD700; margin: 10px auto;"></div>
            </div>
            
            <h2 style="color: #0057B7; margin-bottom: 20px;">${emailContent.welcome}</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              ${emailContent.thankYou}
            </p>
            
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0057B7; margin-top: 0;">${emailContent.expectTitle}</h3>
              <ul style="color: #333; line-height: 1.6;">
                ${emailContent.expectations.map((item: string) => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              ${emailContent.mission}
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://ukraine2work.nl" style="background-color: #0057B7; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                ${emailContent.visitButton}
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; color: #856404; font-size: 14px;">
                <strong>${emailContent.helpText}</strong> 
                <a href="mailto:contact@ukraine2work.nl" style="color: #0057B7;">contact@ukraine2work.nl</a>
              </p>
            </div>
            
            <p style="font-size: 12px; color: #6c757d; text-align: center; margin-top: 30px;">
              ${emailContent.unsubscribeText}<br>
              <a href="#" style="color: #6c757d;">Unsubscribe</a> | 
              <a href="https://ukraine2work.nl/privacy-policy" style="color: #6c757d;">Privacy Policy</a>
            </p>
          </div>
        </div>
      `,
      text: `
${emailContent.welcome}

${emailContent.thankYou}

${emailContent.expectTitle}
${emailContent.expectations.map((item: string) => `- ${item.replace(/🔔|📋|💼|🏢|📈/g, '')}`).join('\n')}

${emailContent.mission}

Visit us at: https://ukraine2work.nl

${emailContent.helpText} contact@ukraine2work.nl

${emailContent.unsubscribeText}
Unsubscribe: [link] | Privacy Policy: https://ukraine2work.nl/privacy-policy
      `
    }

    // Send both emails with retry logic
    let adminEmailSent = false
    let subscriberEmailSent = false
    let retryCount = 0
    const maxRetries = 2

    while ((!adminEmailSent || !subscriberEmailSent) && retryCount < maxRetries) {
      try {
        // Send admin notification email
        if (!adminEmailSent) {
          await transporter.sendMail(adminMailOptions)
          adminEmailSent = true
          console.log(`Admin notification sent for newsletter subscription: ${email}`)
        }
        
        // Send subscriber confirmation email
        if (!subscriberEmailSent) {
          await transporter.sendMail(subscriberMailOptions)
          subscriberEmailSent = true
          console.log(`Confirmation email sent to subscriber: ${email}`)
        }
        
      } catch (emailError) {
        retryCount++
        console.error(`Email sending attempt ${retryCount} failed:`, emailError)
        
        if (retryCount === maxRetries) {
          // If admin email fails but subscriber email succeeds, still consider it a success
          if (subscriberEmailSent) {
            console.warn('Admin notification failed, but subscriber confirmation was sent')
            break
          }
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
