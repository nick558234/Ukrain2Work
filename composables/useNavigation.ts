import { useLanguageStore } from '~/stores/language'
import { useRoute, useRouter } from 'vue-router'

export function useNavigation() {
  const languageStore = useLanguageStore()
  const route = useRoute()
  const router = useRouter()

  /**
   * Get a localized path for internal navigation
   * @param path - The path to localize (e.g., '/about', '/contact')
   * @returns The localized path
   */
  const getLocalizedPath = (path: string): string => {
    return languageStore.getLocalizedPath(path)
  }

  /**
   * Navigate to a localized path
   * @param path - The path to navigate to
   */
  const navigateToLocalized = (path: string) => {
    const localizedPath = getLocalizedPath(path)
    return router.push(localizedPath)
  }

  /**
   * Check if a path is active (for highlighting navigation items)
   * @param path - The path to check
   * @returns True if the path is active
   */
  const isActive = (path: string): boolean => {
    const localizedPath = getLocalizedPath(path)
    if (path === '/') {
      return route.path === localizedPath
    }
    return route.path.startsWith(localizedPath)
  }

  /**
   * Get external authentication URLs with language parameter
   * @param authState - The authentication state ('login' or 'register')
   * @returns The authentication URL with language parameter
   */
  const getAuthUrl = (authState: 'login' | 'register' = 'login'): string => {
    const baseUrl = 'https://nederland-werkt.8vance.com/'
    const url = new URL(baseUrl)
    url.searchParams.set('language', languageStore.currentLocale)
    url.searchParams.set('authState', authState)
    return url.toString()
  }

  return {
    getLocalizedPath,
    navigateToLocalized,
    isActive,
    getAuthUrl,
    currentLocale: languageStore.currentLocale
  }
}
