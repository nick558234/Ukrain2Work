// useMail.ts
export const useMail = () => {
  /**
   * Send an email using our custom API endpoint
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
      const response = await $fetch('/api/contact', {
        method: 'POST',
        body: formData
      })
      
      return { success: true, data: response }
    } catch (error: any) {
      console.error('Error sending email:', error)
      
      // Handle rate limiting
      if (error?.statusCode === 429) {
        return { 
          success: false, 
          error: 'RATE_LIMIT', 
          message: 'Too many emails sent. Please wait before sending another message.'
        }
      }
      
      // Handle other errors
      return { 
        success: false, 
        error: 'SMTP_ERROR', 
        message: 'Failed to send email. Please try again later or contact us directly.'
      }
    }
  }

  return {
    sendEmail
  }
}