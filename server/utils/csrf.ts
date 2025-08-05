import { createHash, randomBytes, timingSafeEqual } from 'crypto'
import { csrfTokenCache } from './cache'

export const generateCSRFToken = (sessionId: string): string => {
  const token = randomBytes(32).toString('hex')
  const tokenHash = createHash('sha256').update(token + sessionId).digest('hex')
  csrfTokenCache.set(`csrf_${sessionId}`, tokenHash)
  return token
}

export const validateCSRFToken = (token: string, sessionId: string): boolean => {
  if (!token || !sessionId) return false
  
  const storedHash = csrfTokenCache.get(`csrf_${sessionId}`)
  if (!storedHash) return false
  
  const tokenHash = createHash('sha256').update(token + sessionId).digest('hex')
  
  // Use timing-safe comparison to prevent timing attacks
  try {
    return timingSafeEqual(Buffer.from(storedHash as string, 'hex'), Buffer.from(tokenHash, 'hex'))
  } catch {
    return false
  }
}

export const validateOrigin = (event: any): boolean => {
  const origin = getHeader(event, 'origin')
  const referer = getHeader(event, 'referer')
  const host = getHeader(event, 'host')
  
  // Allow requests from same origin
  const allowedOrigins = [
    `https://${host}`,
    `http://${host}`,
    'http://localhost:3000',
    'http://localhost:3001', // Add port 3001
    'https://ukraine2work.vercel.app',
    'https://ukraine2work.nl'
  ]
  
  // Check origin header
  if (origin && allowedOrigins.includes(origin)) {
    return true
  }
  
  // Fallback to referer check
  if (referer && allowedOrigins.some(allowed => referer.startsWith(allowed))) {
    return true
  }
  
  return false
}
