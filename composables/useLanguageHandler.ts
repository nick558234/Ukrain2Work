import { computed } from 'vue'
import { useLanguageStore } from '~/stores/language'

export function useLanguageHandler() {
  const languageStore = useLanguageStore()
  
  // Get URL for external services with language parameter
  const getExternalUrlWithLang = (baseUrl: string, paramName: string = 'language') => {
    const url = new URL(baseUrl)
    url.searchParams.set(paramName, languageStore.currentLocale)
    return url.toString()
  }
  
  // Get URL for 8vance auth platform
  const getAuthUrl = (authState: 'login' | 'register' | null = null) => {
    const baseUrl = 'https://nederland-werkt.8vance.com/'
    const url = new URL(baseUrl)
    url.searchParams.set('language', languageStore.currentLocale)
    
    if (authState) {
      url.searchParams.set('authState', authState)
    }
    
    return url.toString()
  }
  
  return {
    currentLocale: computed(() => languageStore.currentLocale),
    availableLocales: computed(() => languageStore.availableLocales),
    currentLocaleObject: computed(() => languageStore.currentLocaleObj),
    switchLanguage: languageStore.switchLanguage,
    getExternalUrlWithLang,
    getAuthUrl
  }
}