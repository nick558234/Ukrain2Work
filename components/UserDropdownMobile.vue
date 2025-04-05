<template>
  <div class="user-dropdown-mobile relative">
    <button @click="isOpen = !isOpen" class="flex items-center gap-1">
      <span v-if="user">{{ user.name }}</span>
      <span v-else>Menu</span>
      <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-5 h-5" />
    </button>
    
    <div v-if="isOpen" class="dropdown-menu fixed inset-x-0 top-[60px] bg-white border-t border-gray-200 p-4 z-50">
      <template v-if="user">
        <NuxtLink to="/dashboard" class="block py-3 border-b border-gray-100" @click="isOpen = false">Dashboard</NuxtLink>
        <NuxtLink to="/profile" class="block py-3 border-b border-gray-100" @click="isOpen = false">Profile</NuxtLink>
        <button @click="logout" class="w-full text-left py-3 border-b border-gray-100">Logout</button>
      </template>
      <template v-else>
        <a :href="languageHandler.getAuthUrl('login')" target="_blank" class="block py-3 border-b border-gray-100" @click="isOpen = false">
          {{ $t('auth.login') || 'Login' }}
        </a>
        <a :href="languageHandler.getAuthUrl('register')" target="_blank" class="block py-3 border-b border-gray-100" @click="isOpen = false">
          {{ $t('auth.register') || 'Register' }}
        </a>
      </template>
      
      <!-- Navigation Links -->
      <NuxtLink to="/job-seekers" class="block py-3 border-b border-gray-100" @click="isOpen = false">Job Seekers</NuxtLink>
      <NuxtLink to="/blog" class="block py-3 border-b border-gray-100" @click="isOpen = false">Blog</NuxtLink>
      <NuxtLink to="/success-stories" class="block py-3 border-b border-gray-100" @click="isOpen = false">Success Stories</NuxtLink>
      <NuxtLink to="/donate" class="block py-3 border-b border-gray-100" @click="isOpen = false">Donate</NuxtLink>
      <NuxtLink to="/privacy-policy" class="block py-3 border-b border-gray-100" @click="isOpen = false">Privacy Policy</NuxtLink>
      <NuxtLink to="/terms-of-service" class="block py-3 border-b border-gray-100" @click="isOpen = false">Terms of Service</NuxtLink>
      <NuxtLink to="/sitemap" class="block py-3" @click="isOpen = false">Sitemap</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageHandler } from '~/composables/useLanguageHandler';

const { t } = useI18n();
const languageHandler = useLanguageHandler();
const isOpen = ref(false);

// Mock user state - replace with your actual auth system
const user = ref(null);

function logout() {
  // Implement logout functionality
  user.value = null;
  isOpen.value = false;
}
</script>