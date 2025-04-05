// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],

  i18n: {
    langDir: 'i18n/lang/',
    defaultLocale: 'nl',
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.json' },
      { code: 'en', iso: 'en-GB', file: 'en.json' },
      { code: 'uk', iso: 'uk-UA', file: 'uk.json' }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'ukraine2work_locale',
      redirectOn: 'root'
    }
  },

  css: [
    '~/assets/css/main.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})