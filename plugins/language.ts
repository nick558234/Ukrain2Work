import { useLanguageStore } from '~/stores/language'

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const languageStore = useLanguageStore()
  
  // Extract locale from URL path
  const path = route.fullPath
  const pathParts = path.split('/').filter(Boolean)
  
  // Check if the first part of the path is a locale
  if (pathParts.length > 0) {
    const possibleLocale = pathParts[0]
    const availableLocales = languageStore.availableLocales.map(locale => locale.code)
    
    if (availableLocales.includes(possibleLocale)) {
      // Set the current locale in the store
      languageStore.currentLocale = possibleLocale
    }
  }
}) 