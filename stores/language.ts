import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // State - initialize with default locale
  const currentLocale = ref('nl')
  
  // Available locales
  const availableLocales = computed(() => {
    return [
      { code: 'nl', name: 'Nederlands', flag: 'nl' },
      { code: 'en', name: 'English', flag: 'gb' },
      { code: 'uk', name: 'Українська', flag: 'ua' }
    ]
  })

  // Get current locale object
  const currentLocaleObj = computed(() => {
    return availableLocales.value.find(locale => locale.code === currentLocale.value) || availableLocales.value[0]
  })

  // Function to get the localized path for a given route
  function getLocalizedPath(path: string) {
    // Ensure path starts with /
    if (!path.startsWith('/')) {
      path = '/' + path
    }
    
    // If the current locale is the default locale, don't add a prefix
    if (currentLocale.value === 'nl') {
      return path
    }
    
    // Otherwise, add the locale prefix
    return `/${currentLocale.value}${path}`
  }

  return {
    currentLocale,
    availableLocales,
    currentLocaleObj,
    getLocalizedPath
  }
})