// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],

  i18n: {
    langDir: 'i18n/lang/',
    defaultLocale: 'nl',
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.json', name: "Nederlands", },
      { code: 'en', iso: 'en-GB', file: 'en.json', name: "English", },
      { code: 'uk', iso: 'uk-UA', file: 'uk.json', name: "Українська", }
    ],
    strategy: 'prefix_except_default',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
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