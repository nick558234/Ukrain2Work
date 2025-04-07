import { defineNuxtPlugin } from '#app'
import { useLanguageStore } from '~/stores/language'

export default defineNuxtPlugin((nuxtApp) => {
  const languageStore = useLanguageStore()
  
  // Initialize the language store with the current route locale
  if (process.client) {
    // Only run this code on the client side
    const route = nuxtApp.$route
    
    if (route && route.fullPath) {
      const path = route.fullPath
      
      // Extract locale from path
      const pathParts = path.split('/').filter(Boolean)
      if (pathParts.length > 0) {
        const possibleLocale = pathParts[0]
        const availableLocales = languageStore.availableLocales.map(l => l.code)
        
        if (availableLocales.includes(possibleLocale)) {
          languageStore.currentLocale = possibleLocale
        }
      }
    }
    
    // Watch for route changes to update the language store
    nuxtApp.$router.afterEach((to) => {
      const pathParts = to.fullPath.split('/').filter(Boolean)
      if (pathParts.length > 0) {
        const possibleLocale = pathParts[0]
        const availableLocales = languageStore.availableLocales.map(l => l.code)
        
        if (availableLocales.includes(possibleLocale)) {
          languageStore.currentLocale = possibleLocale
        }
      }
    })
  }
}) 