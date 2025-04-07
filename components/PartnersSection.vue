<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-center text-ukraine-blue mb-12">{{ $t('partners.title') }}</h2>
      
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <div v-for="(partner, index) in partners" :key="index" class="grayscale hover:grayscale-0 transition-all duration-300">
          <img 
            :src="partner.logo" 
            :alt="partner.name"
            class="h-12 md:h-16 w-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Partners data from translations
const partners = computed(() => t('partners.list'));
</script>