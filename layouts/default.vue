<template>
  <div class="min-h-screen flex flex-col">
   <LayoutsTheHeader/>
    
    <main class="flex-grow">
      <slot />
    </main>
    
<LayoutsTheFooter/>
    
    <!-- Feedback Tool - only show in development or when enabled -->
    <FeedbackTool v-if="showFeedbackTool" />
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '~/stores/language'
import FeedbackTool from '~/components/FeedbackTool.vue'

const languageStore = useLanguageStore()

// Show feedback tool in development or when explicitly enabled
const showFeedbackTool = computed(() => {
  // Only show in development mode or when enabled via environment variable
  return process.dev || process.env.ENABLE_FEEDBACK_TOOL === 'true'
})

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/jobs', label: 'Jobs' },
  { path: '/employers', label: 'Employers' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
]
</script>
