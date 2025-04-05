<template>
  <div class="user-dropdown relative">
    <button @click="isOpen = !isOpen" class="flex items-center gap-1">
      <span v-if="user">{{ user.name }}</span>
      <span v-else>Guest</span>
      <Icon name="heroicons:chevron-down" class="w-4 h-4" />
    </button>
    
    <div v-if="isOpen" class="dropdown-menu absolute right-0 top-full mt-1 bg-white shadow-lg rounded p-2 min-w-40 z-10">
      <template v-if="user">
        <NuxtLink to="/dashboard" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">Dashboard</NuxtLink>
        <NuxtLink to="/profile" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">Profile</NuxtLink>
        <button @click="logout" class="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Logout</button>
      </template>
      <template v-else>
        <a :href="languageHandler.getAuthUrl('login')" target="_blank" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">
          {{ $t('auth.login') || 'Login' }}
        </a>
        <a :href="languageHandler.getAuthUrl('register')" target="_blank" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">
          {{ $t('auth.register') || 'Register' }}
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLanguageHandler } from '~/composables/useLanguageHandler';

// All composables must be called at the top level
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

// Define the click outside handler
function handleClickOutside(event: Event) {
  if (isOpen.value) {
    isOpen.value = false;
  }
}

// Use lifecycle hooks at the top level
onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>