<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink :to="getLocalizedPath('/')" class="flex items-center">
          <img src="/images/logo.jpg" alt="Ukraine2Work" width="64" height="64" class="w-16"/>
        </NuxtLink>

        <!-- Desktop navigation -->
        <nav class="hidden lg:flex items-center space-x-6">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.route"
            :to="getLocalizedPath(item.route)"
            class="text-gray-700 hover:text-ukraine-blue font-medium transition-colors"
            :class="{ 'text-ukraine-blue': isActive(item.route) }"
          >
            {{ $t(`nav.${item.key}`) }}
          </NuxtLink>
          
          <!-- Auth buttons -->
          <div class="flex items-center space-x-4 ml-4">
            <AppButton 
              :href="getAuthUrl('login')"
              target="_blank"
              color="outline"
              size="sm"
            >
              {{ $t('auth.login') }}
            </AppButton>
            <AppButton 
              :href="getAuthUrl('register')"
              target="_blank"
              color="primary"
              size="sm"
            >
              {{ $t('auth.register') }}
            </AppButton>
          </div>
          
          <!-- Language switcher -->
          <div class="ml-4">
            <LayoutsLanguageSwitcher />
          </div>
        </nav>

        <!-- Mobile menu button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden text-gray-700 hover:text-ukraine-blue"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <nav
          v-if="mobileMenuOpen"
          class="lg:hidden mt-4 py-4 border-t border-gray-200"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.route"
              :to="getLocalizedPath(item.route)"
              class="text-gray-700 hover:text-ukraine-blue px-2 py-1 rounded-md transition-colors"
              :class="{ 'text-ukraine-blue': isActive(item.route) }"
              @click="mobileMenuOpen = false"
            >
              {{ $t(`nav.${item.key}`) }}
            </NuxtLink>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-200 flex flex-col space-y-4">
            <AppButton 
              :href="getAuthUrl('login')"
              target="_blank"
              color="outline"
              size="sm"
              class="w-full"
            >
              {{ $t('auth.login') }}
            </AppButton>
            <AppButton 
              :href="getAuthUrl('register')"
              target="_blank"
              color="primary"
              size="sm"
              class="w-full"
            >
              {{ $t('auth.register') }}
            </AppButton>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-200">
            <LayoutsLanguageSwitcher />
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useNavigation } from '~/composables/useNavigation';

// Get navigation composable
const { getLocalizedPath, isActive, getAuthUrl } = useNavigation();

// Navigation data
const navigationItems = [
  { key: 'home', route: '/' },
  { key: 'employers', route: '/employers' },
  { key: 'refugees', route: '/refugees' },
  { key: 'blog', route: '/blog' },
  { key: 'about', route: '/about' },
  { key: 'contact', route: '/contact' },
];

// Mobile menu state
const mobileMenuOpen = ref(false);

// Get current route
const route = useRoute();
</script>

<style scoped>
/* Add any component-specific styles here */
</style>