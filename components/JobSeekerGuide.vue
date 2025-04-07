<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Guide content -->
        <div>
          <h2 class="text-ukraine-blue mb-8">{{ $t('jobseekers.guide.title') }}</h2>
          
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
              {{ $t('jobseekers.guide.createAccount') }}
            </AppButton>
            <AppButton 
              color="outline" 
              size="lg"
              :href="`${authUrl}&authState=login`"
              target="_blank"
            >
              {{ $t('jobseekers.guide.login') }}
            </AppButton>
          </div>
        </div>
        
        <!-- Profile completion section -->
        <div class="bg-white p-8 rounded-lg shadow-md flex flex-col">
          <h3 class="font-bold mb-6">{{ $t('jobseekers.guide.profileCompletion.title') }}</h3>
          
          <div class="flex-grow flex flex-col items-center justify-center text-center p-8">
            <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 class="text-lg font-medium mb-2">{{ $t('jobseekers.guide.profileCompletion.notLoggedIn.title') }}</h3>
            <p class="text-gray-500 mb-6">{{ $t('jobseekers.guide.profileCompletion.notLoggedIn.description') }}</p>
            <AppButton 
              color="secondary" 
              size="md"
              :href="`${authUrl}&authState=register`"
              target="_blank"
            >
              {{ $t('jobseekers.guide.createAccount') }}
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

const { locale } = useI18n();

// External auth URL
const authUrl = computed(() => {
  return `https://nederland-werkt.8vance.com/?language=${locale.value}`;
});

// Guide steps
const guideSteps = [
  {
    title: $t('jobseekers.guide.steps.createAccount.title'),
    description: $t('jobseekers.guide.steps.createAccount.description'),
    tips: [
      $t('jobseekers.guide.steps.createAccount.tips.email'),
      $t('jobseekers.guide.steps.createAccount.tips.password'),
      $t('jobseekers.guide.steps.createAccount.tips.security')
    ]
  },
  {
    title: $t('jobseekers.guide.steps.completeProfile.title'),
    description: $t('jobseekers.guide.steps.completeProfile.description'),
    tips: [
      $t('jobseekers.guide.steps.completeProfile.tips.photo'),
      $t('jobseekers.guide.steps.completeProfile.tips.experience'),
      $t('jobseekers.guide.steps.completeProfile.tips.education')
    ]
  },
  {
    title: $t('jobseekers.guide.steps.uploadCV.title'),
    description: $t('jobseekers.guide.steps.uploadCV.description'),
    tips: [
      $t('jobseekers.guide.steps.uploadCV.tips.format'),
      $t('jobseekers.guide.steps.uploadCV.tips.skills'),
      $t('jobseekers.guide.steps.uploadCV.tips.language')
    ]
  },
  {
    title: $t('jobseekers.guide.steps.browseJobs.title'),
    description: $t('jobseekers.guide.steps.browseJobs.description'),
    tips: [
      $t('jobseekers.guide.steps.browseJobs.tips.filters'),
      $t('jobseekers.guide.steps.browseJobs.tips.save'),
      $t('jobseekers.guide.steps.browseJobs.tips.alerts')
    ]
  },
  {
    title: $t('jobseekers.guide.steps.applyConnect.title'),
    description: $t('jobseekers.guide.steps.applyConnect.description'),
    tips: [
      $t('jobseekers.guide.steps.applyConnect.tips.customize'),
      $t('jobseekers.guide.steps.applyConnect.tips.followup'),
      $t('jobseekers.guide.steps.applyConnect.tips.prepare')
    ]
  }
];
</script>