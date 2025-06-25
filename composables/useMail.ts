// useMail.ts
export const useMail = () => {
  const { getCSRFToken, getCSRFHeaders, hasValidToken } = useCSRF()

  /**
   * Send an email using our custom API endpoint with CSRF protection
   * @param formData Email form data
   * @returns Promise with the result
   */
  const sendEmail = async (formData: {
    name: string
    email: string
    subject: string
    message: string
  }) => {
    try {
      // Ensure we have a valid CSRF token
      if (!hasValidToken()) {
        await getCSRFToken()
      }

      const response = await $fetch('/api/contact', {
        method: 'POST',
        headers: getCSRFHeaders(),
        body: formData
      })
      
      return { success: true, data: response }
    } catch (error: any) {
      console.error('Error sending email:', error)
      
      // Handle CSRF errors - try to get new token and retry once
      if (error?.statusCode === 403 && error?.statusMessage?.includes('CSRF')) {
        try {
          await getCSRFToken()
          const retryResponse = await $fetch('/api/contact', {
            method: 'POST',
            headers: getCSRFHeaders(),
            body: formData
          })
          return { success: true, data: retryResponse }
        } catch (retryError: any) {
          console.error('Retry after CSRF refresh failed:', retryError)
          return { 
            success: false, 
            error: 'CSRF_ERROR', 
            message: 'Security validation failed. Please refresh the page and try again.'
          }
        }
      }
      
      // Handle rate limiting
      if (error?.statusCode === 429) {
        return { 
          success: false, 
          error: 'RATE_LIMIT', 
          message: error?.statusMessage || 'Too many emails sent. Please wait before sending another message.'
        }
      }
      
      // Handle validation errors
      if (error?.statusCode === 400) {
        return { 
          success: false, 
          error: 'VALIDATION_ERROR', 
          message: error?.statusMessage || 'Please check your message and try again.'
        }
      }
      
      // Handle other errors
      return { 
        success: false, 
        error: 'SMTP_ERROR', 
        message: error?.statusMessage || 'Failed to send email. Please try again later or contact us directly.'
      }
    }
  }

  return {
    sendEmail
  }
}