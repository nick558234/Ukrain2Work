<template>
  <div class="language-switcher flex gap-2">
    <button 
      v-for="locale in availableLocales" 
      :key="locale.code"
      @click="switchLanguage(locale.code)"
      class="px-2 py-1 hover:bg-gray-100 rounded"
    >
      {{ locale.code.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, locales } = useI18n({ useScope: 'global' })
const switchLanguage = (localeCode: string) => {
  locale.value = localeCode
}

const availableLocales = computed(() => {
  // Cast to array with expected shape
  return (locales.value as any[])
})
</script>