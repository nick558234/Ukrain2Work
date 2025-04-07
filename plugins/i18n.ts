import { defineNuxtPlugin } from '#app'
import { useLanguageStore } from '~/stores/language'
import type { RouteLocationNormalized, Router } from 'vue-router'

interface LanguageCode {
  code: string;
}

export default defineNuxtPlugin((nuxtApp) => {
  const languageStore = useLanguageStore()
  
  // Initialize the language store with the current route locale
  if (typeof window !== 'undefined') {
    // Only run this code on the client side
    const route = nuxtApp.$route as RouteLocationNormalized
    const router = nuxtApp.$router as Router
    
    if (route?.fullPath) {
      const path = route.fullPath
      
      // Extract locale from path
      const pathParts = path.split('/').filter(Boolean)
      if (pathParts.length > 0) {
        const possibleLocale = pathParts[0]
        const availableLocales = languageStore.availableLocales.map((l: LanguageCode) => l.code)
        
        if (availableLocales.includes(possibleLocale)) {
          languageStore.currentLocale = possibleLocale
        }
      }
    }
    
    // Watch for route changes to update the language store
    router.afterEach((to: RouteLocationNormalized) => {
      const pathParts = to.fullPath.split('/').filter(Boolean)
      if (pathParts.length > 0) {
        const possibleLocale = pathParts[0]
        const availableLocales = languageStore.availableLocales.map((l: LanguageCode) => l.code)
        
        if (availableLocales.includes(possibleLocale)) {
          languageStore.currentLocale = possibleLocale
        }
      }
    })
  }
}) 