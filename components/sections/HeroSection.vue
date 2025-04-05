<template>
  <section class="bg-ukraine-light py-16">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Hero Content -->
        <div class="flex flex-col justify-center">
          <h1 class="text-ukraine-blue mb-6">
            {{ $t(`hero.${pageType}.title`) }}
          </h1>
          <p class="text-xl mb-8">
            {{ $t(`hero.${pageType}.subtitle`) }}
          </p>
          <div class="flex flex-wrap gap-4">
            <AppButton 
              color="primary" 
              size="lg"
              @click="navigateTo('/jobseekers')"
              v-if="pageType === 'home'"
            >
              {{ $t('hero.home.jobSeekerCta') }}
            </AppButton>
            <AppButton 
              color="secondary" 
              size="lg"
              @click="navigateTo('/employers')"
              v-if="pageType === 'home'"
            >
              {{ $t('hero.home.employerCta') }}
            </AppButton>
            <AppButton 
              color="primary" 
              size="lg"
              @click="navigateTo(primaryCtaLink)"
              v-else
            >
              {{ $t(`hero.${pageType}.primaryCta`) }}
            </AppButton>
          </div>
        </div>
        
        <!-- Hero Image -->
        <div class="order-first lg:order-last">
          <img 
            :src="`/img/heroes/${pageType}-hero.jpg`" 
            :alt="$t(`hero.${pageType}.imageAlt`)"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
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
    validator: (value) => ['home', 'employers', 'jobseekers'].includes(value)
  },
  primaryCtaLink: {
    type: String,
    default: '#'
  }
});

const { navigateTo } = useRouter();
</script>