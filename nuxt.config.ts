// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  nitro: {
    preset: 'vercel',
    experimental: {
      wasm: true
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', 'nuxt-swiper'],

  runtimeConfig: {
    // Private keys (only available on server-side)
    smtpPassword: process.env.SMTP_PASSWORD,
    // Public keys (exposed to client-side)
    public: {
      // Add any public config here
    }
  },

  i18n: {
    locales: [
      { code: 'nl', iso: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'uk', iso: 'uk-UA', name: 'Українська', file: 'uk.json' }
    ],
    defaultLocale: 'nl',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    langDir: 'i18n/lang/',
    lazy: true
  },

  app: {
    head: {
      title: 'Ukraine2Work',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Connecting Ukrainian talent with Dutch businesses' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    'flag-icons/css/flag-icons.min.css'
  ],

  build: {
    transpile: ['flag-icons']
  },
  
  image: {
    // Improve image handling
    quality: 80,
    format: ['webp', 'jpg', 'png', 'svg'],
    dir: 'public/images', // Set correct image directory
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    provider: 'ipx'
  },
  
  experimental: {
    payloadExtraction: false // Disable payload extraction which can cause issues
  },

  // Build optimizations
  vite: {
    ssr: {
      noExternal: ['nodemailer'] // Ensure server-side packages are bundled
    }
  },
  
  compatibilityDate: '2025-04-07'
})