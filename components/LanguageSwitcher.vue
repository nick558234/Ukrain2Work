<template>
  <div class="language-switcher">
    <select 
      v-model="selectedLocale" 
      @change="changeLanguage"
      class="px-2 py-1 rounded border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ukraine-blue"
    >
      <option 
        v-for="locale in languageStore.availableLocales" 
        :key="locale.code" 
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLanguageStore } from '~/stores/language'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// Use the language store
const languageStore = useLanguageStore()
const { locale } = useI18n()
const route = useRoute()

// Local state for the select input
const selectedLocale = ref(languageStore.currentLocale)

// Initial setup - sync with i18n
onMounted(() => {
  // Set the initial locale from i18n
  languageStore.currentLocale = locale.value
  selectedLocale.value = locale.value
})

// Watch for external changes to the current locale
watch(() => languageStore.currentLocale, (newLocale) => {
  selectedLocale.value = newLocale
})

// Watch for i18n locale changes
watch(() => locale.value, (newLocale) => {
  if (newLocale !== selectedLocale.value) {
    selectedLocale.value = newLocale
    languageStore.currentLocale = newLocale
  }
})

// Function to switch language
function changeLanguage() {
  // This will trigger a page reload with the new locale in the URL
  languageStore.switchLanguage(selectedLocale.value)
}
</script>

<style scoped>
.language-switcher {
  display: inline-block;
}
</style>