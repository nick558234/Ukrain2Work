import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  // State - initialize with browser language or default to 'nl'
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

  // Actions
  function switchLanguage(newLocale) {
    if (newLocale === currentLocale.value) return
    
    // Update store state
    currentLocale.value = newLocale
    
    // Create language path prefix
    let prefix = ''
    if (newLocale !== 'nl') { // assuming nl is the default locale
      prefix = `/${newLocale}`
    }
    
    // Create the new URL
    const currentPath = window.location.pathname
    
    // Remove existing locale prefix if present
    let pathWithoutLocale = currentPath
    const locales = availableLocales.value.map(l => l.code)
    
    for (const locale of locales) {
      if (currentPath === `/${locale}` || currentPath.startsWith(`/${locale}/`)) {
        pathWithoutLocale = currentPath.substring(locale.length + 1) || '/'
        break
      }
    }
    
    // Build new path with language prefix
    const newPath = prefix + (pathWithoutLocale === '/' ? '' : pathWithoutLocale)
    
    // Force a full page reload to apply language change
    window.location.href = newPath || '/'
  }

  return {
    currentLocale,
    availableLocales,
    currentLocaleObj,
    switchLanguage
  }
})