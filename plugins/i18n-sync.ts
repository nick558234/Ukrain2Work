import { useLanguageStore } from '~/stores/language'

export default defineNuxtPlugin(nuxtApp => {
  // Get the Pinia store
  const languageStore = useLanguageStore()
  
  // Access i18n through nuxtApp
  const i18n = nuxtApp.$i18n
  
  // Set initial locale from i18n into store
  languageStore.currentLocale = i18n.locale.value
  
  // Add watchers to keep things in sync
  nuxtApp.hook('app:mounted', () => {
    // When store changes, update i18n
    watch(() => languageStore.currentLocale, (newLocale) => {
      i18n.locale.value = newLocale
    })
    
    // When i18n changes, update store
    watch(() => i18n.locale.value, (newLocale) => {
      languageStore.currentLocale = newLocale
    })
  })
})