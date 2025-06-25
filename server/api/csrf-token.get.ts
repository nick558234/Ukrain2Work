import { randomBytes } from 'crypto'
import { generateCSRFToken } from '../utils/csrf'

export default defineEventHandler(async (event) => {
  // Only allow GET requests
  if (getMethod(event) !== 'GET') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  // Get or create session ID
  let sessionId = getCookie(event, 'sessionId')
  
  if (!sessionId) {
    sessionId = randomBytes(16).toString('hex')
    setCookie(event, 'sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
  }

  // Generate CSRF token
  const csrfToken = generateCSRFToken(sessionId)

  return {
    csrfToken,
    sessionId
  }
})
