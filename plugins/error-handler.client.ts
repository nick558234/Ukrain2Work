export default defineNuxtPlugin((nuxtApp) => {
  // Handle Vue errors gracefully
  nuxtApp.vueApp.config.errorHandler = (error: any, instance, info) => {
    // Check if it's a serialization error
    if (error?.message?.includes('hasOwnProperty is not a function')) {
      console.warn('Serialization error detected, redirecting to home')
      // Navigate to home page to recover
      navigateTo('/')
      return
    }
    
    // Log other errors
    console.error('Vue error:', error, info)
  }

  // Handle general app errors
  nuxtApp.hook('app:error', (error: any) => {
    // Check if it's a Pinia serialization error
    if (error?.message?.includes('hasOwnProperty is not a function')) {
      console.warn('App serialization error detected, redirecting to home')
      // Navigate to home page to recover
      navigateTo('/')
      return
    }
  })
})
