<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink :to="languageStore.getLocalizedPath('/')" class="text-2xl font-bold text-primary">
          Ukraine2Work
        </NuxtLink>
        
        <div class="flex items-center space-x-6">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="languageStore.getLocalizedPath(item.path)"
            class="text-gray-600 hover:text-primary transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          <LayoutsLanguageSwitcher />
        </div>
      </nav>
    </header>
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <footer class="bg-gray-100 py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">Ukraine2Work</h3>
            <p class="text-gray-600">
              Connecting Ukrainian talent with Dutch businesses.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="item in navigationItems" :key="item.path">
                <NuxtLink 
                  :to="languageStore.getLocalizedPath(item.path)"
                  class="text-gray-600 hover:text-primary transition-colors"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact</h3>
            <p class="text-gray-600">
              Email: info@ukraine2work.nl<br>
              Phone: +31 (0)20 123 4567
            </p>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          &copy; {{ new Date().getFullYear() }} Ukraine2Work. All rights reserved.
        </div>
      </div>
    </footer>
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
