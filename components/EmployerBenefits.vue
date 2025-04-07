<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-center text-ukraine-blue mb-12">{{ $t('employers.benefits.title') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="(benefit, index) in benefits" :key="index" class="flex flex-col items-center text-center p-6 bg-ukraine-light rounded-lg">
          <div class="w-16 h-16 flex items-center justify-center bg-ukraine-yellow rounded-full mb-4">
            <svg class="w-8 h-8 text-ukraine-blue" fill="currentColor" viewBox="0 0 24 24">
              <path :d="benefit.icon" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">{{ benefit.title }}</h3>
          <p class="text-gray-600">{{ benefit.description }}</p>
        </div>
      </div>
      
      <PermitInfoCard class="mx-auto max-w-4xl" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Get benefits from translations
const benefits = computed(() => t('employers.benefits.items') || []);
</script>