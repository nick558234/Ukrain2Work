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
            @click="navigateTo(primaryLink)"
          >
            {{ $t(`cta.${type}.primaryCta`) }}
          </AppButton>
          
          <AppButton 
            color="outline" 
            size="lg"
            @click="navigateTo(secondaryLink)"
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
    default: 'general',
    validator: (value) => ['general', 'employers', 'jobseekers'].includes(value)
  },
  primaryLink: {
    type: String,
    default: '/register'
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

const { navigateTo } = useRouter();
</script>