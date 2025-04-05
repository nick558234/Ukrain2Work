<template>
  <section class="py-16 bg-ukraine-blue text-white">
    <div class="container">
      <div class="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 class="mb-6">{{ $t(`cta.${type}.title`) }}</h2>
        <p class="text-xl mb-8 text-white/90">{{ $t(`cta.${type}.description`) }}</p>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <AppButton 
            color="secondary" 
            size="lg"
            :href="primaryLink.startsWith('http') ? primaryLink : null"
            :to="!primaryLink.startsWith('http') ? primaryLink : null"
            :target="primaryLink.startsWith('http') ? '_blank' : '_self'"
          >
            {{ $t(`cta.${type}.primaryCta`) }}
          </AppButton>
          
          <AppButton 
            color="outline" 
            size="lg"
            :href="secondaryLink.startsWith('http') ? secondaryLink : null"
            :to="!secondaryLink.startsWith('http') ? secondaryLink : null"
            :target="secondaryLink.startsWith('http') ? '_blank' : '_self'"
            v-if="showSecondary"
          >
            {{ $t(`cta.${type}.secondaryCta`) }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'jobseeker',
    validator: (value) => ['jobseeker', 'employer'].includes(value)
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