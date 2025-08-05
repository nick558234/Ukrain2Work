<template>
  <div>
    <h3 class="font-bold mb-6">{{ t('footer.newsletter.title') }}</h3>
    <p class="text-gray-200 mb-4">{{ t('footer.newsletter.description') }}</p>
    <form @submit.prevent="subscribeToNewsletter" class="flex flex-col sm:flex-row gap-2">
      <input 
        type="email" 
        v-model="email"
        :placeholder="t('footer.newsletter.placeholder')"
        class="px-4 py-2 rounded-md  text-gray-800 focus:outline-none focus:ring-2 focus:ring-ukraine-yellow"
        :class="widthNormal"
        required
        :disabled="isSubscribing"
      />
      <button 
        type="submit" 
        class="bg-ukraine-yellow text-ukraine-blue px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors disabled:opacity-50"
        :disabled="isSubscribing || !email"
      >
        {{ isSubscribing ? '...' : t('footer.newsletter.subscribe') }}
      </button>
    </form>
    <p v-if="subscriptionMessage" class="mt-2 text-sm" :class="subscriptionSuccess ? 'text-green-300' : 'text-red-300'">
      {{ subscriptionMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const prop = defineProps({
  widthNormal: {
    type: String,
    default: 'flex-grow '
  }
})
const email = ref('')
const isSubscribing = ref(false)
const subscriptionMessage = ref('')
const subscriptionSuccess = ref(false)

const { t, locale } = useI18n()

const subscribeToNewsletter = async () => {
  if (!email.value) return
  
  try {
    isSubscribing.value = true
    subscriptionMessage.value = ''
    
    // Get CSRF token (only on client side)
    if (process.client) {
      // Get CSRF token
      const tokenResponse = await $fetch('/api/csrf-token')
      const { csrfToken, sessionId } = tokenResponse
      
      // Send newsletter subscription request with current language
      const response = await $fetch('/api/newsletter', {
        method: 'POST',
        body: {
          email: email.value,
          type: 'newsletter',
          language: locale.value, // Use locale from setup
          csrfToken: csrfToken
        },
        headers: {
          'X-CSRF-Token': csrfToken,
          'X-Session-ID': sessionId
        }
      })
      
      subscriptionSuccess.value = true
      subscriptionMessage.value = t('footer.newsletter.success')
      email.value = ''
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        if (subscriptionSuccess.value) {
          subscriptionMessage.value = ''
        }
      }, 5000)
    }
    
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    subscriptionSuccess.value = false
    
    if (error.status === 429) {
      subscriptionMessage.value = t('footer.newsletter.rateLimited')
    } else if (error.status === 403) {
      subscriptionMessage.value = t('footer.newsletter.securityError')
    } else {
      subscriptionMessage.value = t('footer.newsletter.error')
    }
  } finally {
    isSubscribing.value = false
  }
}
</script>
