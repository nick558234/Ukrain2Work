// Enhanced usage tracking for better cache monitoring
export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  const url = event.node.req.url
  const userAgent = getHeader(event, 'user-agent')
  const cacheControl = getHeader(event, 'cache-control')
  const ifNoneMatch = getHeader(event, 'if-none-match')
  
  // Track all requests for cache analysis
  if (method === 'GET') {
    // Log static asset requests to understand cache behavior
    if (url?.includes('/_nuxt/') || url?.includes('/images/') || 
        url?.match(/\.(css|js|woff2?|png|jpe?g|webp|svg|ico)$/)) {
      console.log(`[STATIC] ${method} ${url} - Cache: ${cacheControl || 'none'} - ETag: ${ifNoneMatch ? 'present' : 'none'}`)
    }
  }
  
  // Track API requests
  if (method === 'POST' && url === '/api/contact') {
    const clientIP = getHeader(event, 'x-forwarded-for') || getHeader(event, 'x-real-ip') || 'unknown'
    console.log(`[API] Contact form submission at ${new Date().toISOString()} - IP: ${clientIP} - UA: ${userAgent?.substring(0, 50)}`)
  }
  
  // Track CSRF token requests
  if (method === 'GET' && url === '/api/csrf-token') {
    console.log(`[CSRF] Token request at ${new Date().toISOString()}`)
  }
})
