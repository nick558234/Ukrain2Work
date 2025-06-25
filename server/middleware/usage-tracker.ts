// Simple usage tracking for contact form
export default defineEventHandler(async (event) => {
  // Only track POST requests to contact endpoint
  if (getMethod(event) === 'POST' && event.node.req.url === '/api/contact') {
    console.log(`Contact form submission at ${new Date().toISOString()}`)
  }
})
