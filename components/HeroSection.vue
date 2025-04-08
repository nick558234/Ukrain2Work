<template>
  <section class="bg-ukraine-light py-16">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Hero Content -->
        <div class="flex flex-col justify-center">
          <h1 class="text-ukraine-blue mb-6 text-2xl md:text-3xl lg:text-4xl">
            {{ $t(`hero.${pageType}.title`) }}
          </h1>
          <p class="text-xl mb-8 text-ukraine-blue">
            {{ $t(`hero.${pageType}.subtitle`) }}
          </p>
          <div class="flex flex-wrap gap-4">
            <!-- Home page has two buttons -->
            <template v-if="pageType === 'home'">
              <AppButton 
                color="primary" 
                size="lg"
                to="refugees"
              >
                {{ $t('hero.home.jobSeekerCta') }}
              </AppButton>
              <AppButton 
                color="secondary" 
                size="lg"
                to="employers"
              >
                {{ $t('hero.home.employerCta') }}
              </AppButton>
            </template>
            
            <!-- Other pages have one primary button -->
            <template v-else>
              <AppButton 
                color="primary" 
                size="lg"
                :to="primaryCtaLink"
              >
                {{ $t(`hero.${pageType}.primaryCta`) }}
              </AppButton>
            </template>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="order-first lg:order-last ">
          <img 
            :src="img" 
            :alt="$t(`hero.${pageType}.imageAlt`)"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
            width="600"
            height="400"
          />
        </div>
      </div>
      
      <!-- Background Decoration - Ukraine Flag Pattern -->
      <div class="absolute top-0 right-0 w-64 h-64 opacity-5 -z-10">
        <div class="w-full h-1/2 bg-ukraine-blue"></div>
        <div class="w-full h-1/2 bg-ukraine-yellow"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  pageType: {
    type: String,
    default: 'home',
    validator: (value) => ['home', 'employers', 'jobseekers', 'about'].includes(value)
  },
  primaryCtaLink: {
    type: String,
    default: '#'
  },
  img: {
    type: String,
    default: '/images/team/alexSpaan_square.webp'
  }
});

// Use a fallback image instead of the missing image
const fallbackImage = computed(() => {
  return 'https://placehold.co/600x400/e9f5ff/0057b8?text=Ukraine2Work';
});
</script>