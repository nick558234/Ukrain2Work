<template>
  <section class="py-16 bg-ukraine-blue text-white">
    <div class="container">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 class="mb-6 text-3xl md:text-4xl font-bold">{{ $t(`cta.${type}.title`) }}</h2>
        <p class="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">{{ $t(`cta.${type}.description`) }}</p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <AppButton 
            color="secondary" 
            size="lg"
            :href="primaryLink.startsWith('http') ? primaryLink : null"
            :to="!primaryLink.startsWith('http') ? primaryLink : null"
            :target="primaryLink.startsWith('http') ? '_blank' : '_self'"
            class="min-w-[200px] font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {{ $t(`cta.${type}.primaryCta`) }}
          </AppButton>
          
          <AppButton 
            color="white" 
            size="lg"
            :href="secondaryLink.startsWith('http') ? secondaryLink : null"
            :to="!secondaryLink.startsWith('http') ? secondaryLink : null"
            :target="secondaryLink.startsWith('http') ? '_blank' : '_self'"
            v-if="showSecondary"
            class="min-w-[200px] font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {{ $t(`cta.${type}.secondaryCta`) }}
          </AppButton>
        </div>
        
        <!-- Optional: Add a subtle decoration -->
        <div class="mt-8 w-16 h-1 bg-ukraine-yellow rounded-full opacity-60"></div>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'jobseeker',
    validator: (value) => ['jobseeker', 'employer', 'general'].includes(value)
  },
  primaryLink: {
    type: String,
    default: `https://nederland-werkt.8vance.com/?authState=register&language=en`
  },
  secondaryLink: {
    type: String,
    default: '/contact'
  },
  showSecondary: {
    type: Boolean,
    default: true
  }
});

// No need for the navigateTo function - using AppButton's to/href props directly
</script>