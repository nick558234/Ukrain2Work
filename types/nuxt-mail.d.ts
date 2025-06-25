declare module 'nuxt-mail' {
  interface SMTPConfig {
    host: string
    port: number
    secure?: boolean
    auth: {
      user: string
      pass: string
    }
  }

  interface MailConfig {
    message: {
      to: string
    }
    smtp: SMTPConfig
  }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    mail?: {
      message: {
        to: string
      }
      smtp: {
        host: string
        port: number
        secure?: boolean
        auth: {
          user: string
          pass: string
        }
      }
    }
  }
}

export {}
