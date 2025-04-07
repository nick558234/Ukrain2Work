<template>
  <div class="relative">
    <button 
      @click.stop="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="fi" :class="`fi-${languageStore.currentLocaleObj.flag}`"></span>
      <span class="hidden sm:inline text-sm font-medium">{{ languageStore.currentLocaleObj.name }}</span>
      <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        role="menu"
        ref="dropdownRef"
      >
        <div class="py-1" role="none">
          <button
            v-for="locale in languageStore.availableLocales"
            :key="locale.code"
            class="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            :class="{ 'bg-gray-50': locale.code === languageStore.currentLocale }"
            role="menuitem"
            @click.stop="selectLanguage(locale.code)"
          >
            <span class="fi mr-3" :class="`fi-${locale.flag}`"></span>
            {{ locale.name }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useLanguageStore } from '~/stores/language';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const languageStore = useLanguageStore();
const { locale } = useI18n();
const router = useRouter();
const isOpen = ref(false);
const dropdownRef = ref(null);

// Sync the language store with the current i18n locale
onMounted(() => {
  // Set the initial locale in the store based on the current i18n locale
  languageStore.currentLocale = locale.value;
  
  // Watch for changes in the i18n locale and update the store
  watch(locale, (newLocale) => {
    languageStore.currentLocale = newLocale;
  });
});

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

async function selectLanguage(localeCode: string) {
  // Update both the i18n locale and the store
  locale.value = localeCode;
  
  // Get current route
  const currentRoute = router.currentRoute.value;
  
  if (currentRoute && currentRoute.fullPath) {
    // Create language path prefix
    let prefix = '';
    if (localeCode !== 'nl') { // assuming nl is the default locale
      prefix = `/${localeCode}`;
    }
    
    // Remove existing locale prefix if present
    let pathWithoutLocale = currentRoute.fullPath;
    const locales = languageStore.availableLocales.map(l => l.code);
    
    for (const locale of locales) {
      if (pathWithoutLocale === `/${locale}` || pathWithoutLocale.startsWith(`/${locale}/`)) {
        pathWithoutLocale = pathWithoutLocale.substring(locale.length + 1) || '/';
        break;
      }
    }
    
    // Build new path with language prefix
    const newPath = prefix + (pathWithoutLocale === '/' ? '' : pathWithoutLocale);
    
    // Navigate to the new path
    await router.push(newPath || '/');
  } else {
    // If route is not available, just navigate to the root with the locale prefix
    const newPath = localeCode === 'nl' ? '/' : `/${localeCode}`;
    await router.push(newPath);
  }
  
  // Force a page reload to ensure all translations are applied
  window.location.reload();
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Component-specific styles */
</style>