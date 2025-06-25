import NodeCache from 'node-cache'

// Shared cache instances
export const requestCache = new NodeCache({ stdTTL: 60 }) // 1 minute for rate limiting
export const emailCache = new NodeCache({ stdTTL: 300 }) // 5 minutes for email rate limiting
export const csrfTokenCache = new NodeCache({ stdTTL: 3600 }) // 1 hour for CSRF tokens
