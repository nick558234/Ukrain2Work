<template>
  <div class="relative">
    <button 
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="fi" :class="`fi-${currentLocaleObj.flag}`"></span>
      <span class="hidden sm:inline text-sm font-medium">{{ currentLocaleObj.name }}</span>
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
        class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50"
      >
        <a
          v-for="locale in availableLocales"
          :key="locale.code"
          :href="switchLocalePath(locale.code)"
          class="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-ukraine-blue hover:text-white"
          :class="{ 'bg-ukraine-light': locale.code === $i18n.locale }"
          @click="closeDropdown"
        >
          <span class="fi" :class="`fi-${locale.flag}`"></span>
          <span>{{ locale.name }}</span>
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { locale } = useI18n();
const router = useRouter();
const isOpen = ref(false);

// Get available locales from i18n configuration
const availableLocales = computed(() => {
  return router.app.i18n.locales;
});

// Get current locale object
const currentLocaleObj = computed(() => {
  return availableLocales.value.find(l => l.code === locale.value);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.language-switcher')) {
    isOpen.value = false;
  }
};

// Generate path for language switching
const switchLocalePath = (localeCode) => {
  // Create the path to switch to the new locale
  // This is a simplified version. In real implementation, 
  // use the NuxtLink component or nuxt-i18n's switchLocalePath method
  const currentRoute = router.currentRoute.value;
  const { path, query, hash } = currentRoute;
  
  // For the default locale, don't add prefix
  if (localeCode === router.app.i18n.defaultLocale) {
    return path;
  }
  
  // For other locales, add the prefix
  return `/${localeCode}${path}`;
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Flag icons would typically be imported from a library like flag-icons-css */
.fi {
  width: 1.25em;
  height: 1em;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.fi-nl {
  background-image: url('/img/flags/nl.svg');
}
.fi-gb {
  background-image: url('/img/flags/gb.svg');
}
.fi-ua {
  background-image: url('/img/flags/ua.svg');
}
</style>