export default {
  locales: [
    {
      code: 'nl',
      name: 'Nederlands',
      flag: 'nl',
      iso: 'nl-NL'
    },
    {
      code: 'en',
      name: 'English',
      flag: 'gb',
      iso: 'en-US'
    },
    {
      code: 'uk',
      name: 'Українська',
      flag: 'ua',
      iso: 'uk-UA'
    }
  ],
  defaultLocale: 'nl',
  strategy: 'prefix_except_default',
  // Use the lang directory for translations
  langDir: 'i18n/lang/',
  // Use JSON files for translations
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'ukraine2work_i18n',
    redirectOn: 'root'
  },
  // Customize language switching query parameter
  routesNameSeparator: '___',
  // Use Vue I18n options for number and date formatting
  vueI18n: {
    fallbackLocale: 'en',
    formatFallbackMessages: true,
    datetimeFormats: {
      'en': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        },
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      },
      'nl': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        },
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      },
      'uk': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        },
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      }
    },
    numberFormats: {
      'en': {
        currency: {
          style: 'currency',
          currency: 'EUR'
        },
        percent: {
          style: 'percent'
        }
      },
      'nl': {
        currency: {
          style: 'currency',
          currency: 'EUR'
        },
        percent: {
          style: 'percent'
        }
      },
      'uk': {
        currency: {
          style: 'currency',
          currency: 'EUR'
        },
        percent: {
          style: 'percent'
        }
      }
    }
  }
}