<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Guide content -->
        <div>
          <h2 class="text-ukraine-blue mb-8">{{ $t('refugees.guide.title') }}</h2>
          
          <div class="space-y-8">
            <div v-for="(step, index) in guideSteps" :key="index" class="flex">
              <div class="flex-shrink-0 mr-4">
                <div class="flex items-center justify-center w-10 h-10 rounded-full bg-ukraine-blue text-white font-bold">
                  {{ index + 1 }}
                </div>
              </div>
              <div>
                <h3 class="font-bold mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 mb-3">{{ step.description }}</p>
                <ul v-if="step.tips" class="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li v-for="(tip, i) in step.tips" :key="i">{{ tip }}</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <AppButton 
              color="primary" 
              size="lg"
              :href="`${authUrl}&authState=register`"
              target="_blank"
              class="mr-4"
            >
              {{ $t('refugees.guide.createAccount') }}
            </AppButton>
            <AppButton 
              color="outline" 
              size="lg"
              :href="`${authUrl}&authState=login`"
              target="_blank"
            >
              {{ $t('refugees.guide.login') }}
            </AppButton>
          </div>
        </div>
        
        <!-- Profile completion section -->
        <div class="bg-white p-8 rounded-lg shadow-md flex flex-col">
          <h3 class="font-bold mb-6">{{ $t('refugees.guide.profileCompletion.title') }}</h3>
          
          <div class="flex-grow flex flex-col items-center justify-center text-center p-8">
            <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 class="text-lg font-medium mb-2">{{ $t('refugees.guide.profileCompletion.notLoggedIn.title') }}</h3>
            <p class="text-gray-500 mb-6">{{ $t('refugees.guide.profileCompletion.notLoggedIn.description') }}</p>
            <AppButton 
              color="secondary" 
              size="md"
              :href="`${authUrl}&authState=register`"
              target="_blank"
            >
              {{ $t('refugees.guide.createAccount') }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

// External auth URL
const authUrl = computed(() => {
  return `https://nederland-werkt.8vance.com/?language=${locale.value}`;
});

// Guide steps
const guideSteps = [
  {
    title: t('refugees.guide.steps.createAccount.title'),
    description: t('refugees.guide.steps.createAccount.description'),
    tips: [
      t('refugees.guide.steps.createAccount.tips.email'),
      t('refugees.guide.steps.createAccount.tips.password'),
      t('refugees.guide.steps.createAccount.tips.security')
    ]
  },
  {
    title: t('refugees.guide.steps.completeProfile.title'),
    description: t('refugees.guide.steps.completeProfile.description'),
    tips: [
      t('refugees.guide.steps.completeProfile.tips.photo'),
      t('refugees.guide.steps.completeProfile.tips.experience'),
      t('refugees.guide.steps.completeProfile.tips.education')
    ]
  },
  {
    title: t('refugees.guide.steps.uploadCV.title'),
    description: t('refugees.guide.steps.uploadCV.description'),
    tips: [
      t('refugees.guide.steps.uploadCV.tips.format'),
      t('refugees.guide.steps.uploadCV.tips.skills'),
      t('refugees.guide.steps.uploadCV.tips.language')
    ]
  },
  {
    title: t('refugees.guide.steps.browseJobs.title'),
    description: t('refugees.guide.steps.browseJobs.description'),
    tips: [
      t('refugees.guide.steps.browseJobs.tips.filters'),
      t('refugees.guide.steps.browseJobs.tips.save'),
      t('refugees.guide.steps.browseJobs.tips.alerts')
    ]
  },
  {
    title: t('refugees.guide.steps.applyConnect.title'),
    description: t('refugees.guide.steps.applyConnect.description'),
    tips: [
      t('refugees.guide.steps.applyConnect.tips.customize'),
      t('refugees.guide.steps.applyConnect.tips.followup'),
      t('refugees.guide.steps.applyConnect.tips.prepare')
    ]
  }
];
</script>