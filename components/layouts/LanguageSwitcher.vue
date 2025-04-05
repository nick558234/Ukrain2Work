<template>
  <div class="relative">
    <button 
      @click="toggleDropdown"
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
            @click="selectLanguage(locale.code)"
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useLanguageStore } from '~/stores/language';

const languageStore = useLanguageStore();
const isOpen = ref(false);
const dropdownRef = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectLanguage(localeCode: string) {
  languageStore.switchLanguage(localeCode);
  isOpen.value = false;
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
  background-image: url('/images/flags/nl.svg');
}
.fi-gb {
  background-image: url('/images/flags/gb.svg');
}
.fi-ua {
  background-image: url('/images/flags/ua.svg');
}
</style>