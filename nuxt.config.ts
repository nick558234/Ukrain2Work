// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel',
    storage: {
      redis: {
        driver: 'memory' // Use in-memory cache for cost efficiency
      }
    },
    routeRules: {
      // Temporarily disable prerendering due to SSR issues
      // '/': { prerender: true },
      // '/about': { prerender: true },
      // '/privacy-policy': { prerender: true },
      // '/terms-of-service': { prerender: true },
      // '/sitemap': { prerender: true },
      // Cache static assets aggressively
      '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
      '/images/**': { headers: { 'Cache-Control': 'public, max-age=2592000' } },
      // API routes should not be cached
      '/api/**': { headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } },
      // Dynamic pages with short cache
      '/blog/**': { headers: { 'Cache-Control': 'public, max-age=3600' } },
      '/video/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } }
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', 'nuxt-swiper', '@nuxtjs/sitemap'],

  sitemap: {
    hostname: 'https://ukraine2work.nl',
    gzip: true,
    routes: [
      '/early-adopter',
      '/refugees',
      '/employers',
      '/about',
      '/contact',
      '/faq',
      '/success-stories',
      '/blog',
      '/privacy-policy',
      '/terms-of-service'
    ]
  },

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
      htmlAttrs: {
        lang: 'nl'
      },
      title: 'Ukraine2Work - Connecting Ukrainian Talent with Dutch Businesses',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ukraine2Work is het toonaangevende platform dat Oekraïense vluchtelingen verbindt met Nederlandse werkgevers door middel van skill-based matching. Vind werk of talent in Nederland met onze innovatieve matchingservice voor duurzame arbeidsplaatsing.' },
        { name: 'keywords', content: 'Ukraine2Work, Ukraine 2 Work, Oekraïense vluchtelingen, Nederlandse werkgevers, werk Nederland, recruitment platform, talent matching, skill-based matching, arbeidsmarkt, jobs Nederland, vluchtelingen werk, Ukrainian refugees, Dutch employers, employment services, werkgelegenheid, vacatures, Eindhoven, inclusieve werkgelegenheid, arbeidsplaatsing' },
        { name: 'author', content: 'Ukraine2Work' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#FFD64A' },
        { name: 'msapplication-TileColor', content: '#FFD64A' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ukraine2Work' },
        { property: 'og:title', content: 'Ukraine2Work - Connecting Ukrainian Talent with Dutch Businesses' },
        { property: 'og:description', content: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers. Skill-based matching platform voor duurzame arbeidsplaatsing in Nederland.' },
        { property: 'og:url', content: 'https://ukraine2work.nl' },
        { property: 'og:image', content: 'https://ukraine2work.nl/images/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'nl_NL' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ukraine2Work - Connecting Ukrainian Talent with Dutch Businesses' },
        { name: 'twitter:description', content: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers. Skill-based matching platform voor duurzame arbeidsplaatsing in Nederland.' },
        { name: 'twitter:image', content: 'https://ukraine2work.nl/images/og-image.jpg' },
        
        // Additional SEO
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'google-site-verification', content: 'okFMxixheMRls3VlCBGoOeK1AgbbZjF-2heAR-fH-wE' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
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
    provider: 'ipx',
    // Optimize for static content and caching
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 150,
          height: 150,
          quality: 80
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 85
        }
      }
    }
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