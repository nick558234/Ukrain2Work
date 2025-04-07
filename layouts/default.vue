<template>
  <div class="min-h-screen flex flex-col">
   <LayoutsTheHeader/>
    
    <main class="flex-grow">
      <slot />
    </main>
    
<LayoutsTheFooter/>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '~/stores/language'

const languageStore = useLanguageStore()

const navigationItems = [
  { path: '/', label: 'Home' },
  { path: '/jobs', label: 'Jobs' },
  { path: '/employers', label: 'Employers' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
]
</script>
