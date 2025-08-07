import { ref } from 'vue'

export const useCSRF = () => {
  const csrfToken = ref<string>('')
  const sessionId = ref<string>('')

  /**
   * Get CSRF token from the server
   */
  const getCSRFToken = async () => {
    try {
      const response = await $fetch('/api/csrf-token', {
        method: 'GET'
      })
      
      csrfToken.value = response.csrfToken
      sessionId.value = response.sessionId
      
      return { csrfToken: csrfToken.value, sessionId: sessionId.value }
    } catch (error) {
      console.error('Error fetching CSRF token:', error)
      throw error
    }
  }

  /**
   * Get headers with CSRF protection
   */
  const getCSRFHeaders = () => {
    const headers = {
      'X-CSRF-Token': csrfToken.value,
      'X-Session-ID': sessionId.value
    }

    return headers
  }

  /**
   * Check if we have valid CSRF token
   */
  const hasValidToken = () => {
    return !!csrfToken.value && !!sessionId.value
  }

  return {
    csrfToken: readonly(csrfToken),
    sessionId: readonly(sessionId),
    getCSRFToken,
    getCSRFHeaders,
    hasValidToken
  }
}
