<template>
  <section class="relative bg-ukraine-light py-20">
    <!-- The image container with overlay -->
    <div class="absolute inset-0 overflow-hidden">
      <img 
        :src="bgImage" 
        alt="Background image"
        class="w-full h-full object-cover"
        :onerror="`this.src='https://placehold.co/1600x400/0057b8/ffffff?text=Ukraine2Work'`"   
      />
      <div class="absolute inset-0 bg-ukraine-blue bg-opacity-60"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="max-w-3xl mx-auto text-center text-white">
        <h1 v-if="title" class="mb-6 text-2xl md:text-3xl lg:text-5xl font-bold">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-xl mb-8 opacity-90">
          {{ subtitle }}
        </p>
        
        <div class="flex flex-wrap justify-center gap-4" v-if="$slots.buttons">
          <slot name="buttons"></slot>
        </div>
        <div class="flex flex-wrap justify-center gap-4" v-else-if="primaryCta || secondaryCta">
          <AppButton 
            v-if="primaryCta"
            :color="primaryCtaColor" 
            :size="ctaSize"
            :to="primaryCtaLink"
          >
            {{ primaryCta }}
          </AppButton>
          <AppButton 
            v-if="secondaryCta"
            :color="secondaryCtaColor" 
            :size="ctaSize"
            :to="secondaryCtaLink"
          >
            {{ secondaryCta }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  bgImage: {
    type: String,
    default: '/images/team/alexSpaan_square.webp'
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  primaryCta: {
    type: String,
    default: ''
  },
  primaryCtaLink: {
    type: [String, Object],
    default: '#'
  },
  primaryCtaColor: {
    type: String,
    default: 'secondary' // Yellow button on blue background
  },
  secondaryCta: {
    type: String,
    default: ''
  },
  secondaryCtaLink: {
    type: [String, Object],
    default: '#'
  },
  secondaryCtaColor: {
    type: String,
    default: 'outline'
  },
  ctaSize: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
});

// Use a fallback image if the provided one doesn't load
const fallbackImage = computed(() => {
  return 'https://placehold.co/1600x400/0057b8/ffffff?text=Ukraine2Work';
});
</script>