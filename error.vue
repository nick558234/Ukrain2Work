<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <LayoutsTheHeader />
    
    <!-- Main content -->
    <main class="flex-grow flex items-center justify-center bg-gray-50">
      <div class="container mx-auto px-4 py-16">
        <div class="text-center max-w-2xl mx-auto">
          <!-- Error illustration or icon -->
          <div class="mb-8 flex justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" role="img" class="mx-auto">
              <title>Помилка - Error</title>
              <circle cx="32" cy="32" r="30" fill="#f0f4ff" stroke="#0057B7" stroke-width="2"/>
              <line x1="32" y1="18" x2="32" y2="36" stroke="#FFD700" stroke-width="4" stroke-linecap="round"/>
              <circle cx="32" cy="45" r="2.5" fill="#FFD700"/>
            </svg>
          </div>
          
          <!-- Error Code -->
          <h1 class="text-8xl md:text-9xl font-bold text-ukraine-blue mb-4">
            {{ error?.statusCode || '500' }}
          </h1>
          
          <!-- Error Message -->
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ getErrorTitle() }}
          </h2>
          
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            {{ getErrorMessage() }}
          </p>
          
          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <div class="flex justify-center">
            <AppButton 
              @click="handleError"
              color="primary"
              size="lg"
              class="inline-flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Ga naar home</span>
            </AppButton>
            </div>
            <AppButton 
              v-if="error?.statusCode !== 404"
              @click="refresh"
              color="outline"
              size="lg"
              class="inline-flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Probeer opnieuw</span>
            </AppButton>
          </div>

          <!-- Additional help links for 404 -->
          <div v-if="error?.statusCode === 404" class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Zoekt u naar:</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <NuxtLink 
                :to="getLocalizedPath('/employers')" 
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-ukraine-blue group"
              >
                <div class="text-ukraine-blue group-hover:text-ukraine-blue">
                  <svg class="w-6 h-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span class="text-sm font-medium text-gray-900">Werkgevers</span>
                </div>
              </NuxtLink>
              
              <NuxtLink 
                :to="getLocalizedPath('/refugees')" 
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-ukraine-blue group"
              >
                <div class="text-ukraine-blue group-hover:text-ukraine-blue">
                  <svg class="w-6 h-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-900">Werkzoekenden</span>
                </div>
              </NuxtLink>
              
              <NuxtLink 
                :to="getLocalizedPath('/about')" 
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-ukraine-blue group"
              >
                <div class="text-ukraine-blue group-hover:text-ukraine-blue">
                  <svg class="w-6 h-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-900">Over ons</span>
                </div>
              </NuxtLink>
              
              <NuxtLink 
                :to="getLocalizedPath('/contact')" 
                class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-ukraine-blue group"
              >
                <div class="text-ukraine-blue group-hover:text-ukraine-blue">
                  <svg class="w-6 h-6 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-900">Contact</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- Footer -->
    <LayoutsTheFooter />
  </div>
</template>

<script setup lang="ts">
import { useNavigation } from '~/composables/useNavigation'

interface ErrorProps {
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}

const props = defineProps<ErrorProps>()

// Get navigation composable for localized paths
const { getLocalizedPath } = useNavigation()

const getErrorTitle = () => {
  switch (props.error?.statusCode) {
    case 404:
      return 'Pagina niet gevonden'
    case 500:
      return 'Server fout'
    default:
      return 'Er ging iets mis'
  }
}

const getErrorMessage = () => {
  switch (props.error?.statusCode) {
    case 404:
      return 'De pagina die u zoekt bestaat niet.'
    case 500:
      return 'Er is een server fout opgetreden. Probeer het later opnieuw.'
    default:
      return 'Er is een onverwachte fout opgetreden.'
  }
}

const handleError = () => {
  // Clear the error and navigate to home
  clearError({ redirect: '/' })
}

const refresh = () => {
  // Clear the error and refresh the page
  clearError()
  if (process.client) {
    window.location.reload()
  }
}

// Set page meta
useHead({
  title: `${props.error?.statusCode || 'Error'} - Ukraine2Work`,
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})
</script>
