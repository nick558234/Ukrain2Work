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
          
          <div v-if="isAuthenticated" class="mt-8">
            <AppButton 
              color="primary" 
              size="lg"
              @click="navigateTo('/profile/edit')"
            >
              {{ $t('jobseekers.guide.editProfile') }}
            </AppButton>
          </div>
          <div v-else class="mt-8">
            <AppButton 
              color="primary" 
              size="lg"
              @click="navigateTo('/register?type=jobseeker')"
              class="mr-4"
            >
              {{ $t('jobseekers.guide.createAccount') }}
            </AppButton>
            <AppButton 
              color="outline" 
              size="lg"
              @click="navigateTo('/login')"
            >
              {{ $t('jobseekers.guide.login') }}
            </AppButton>
          </div>
        </div>
        
        <!-- Profile completion section -->
        <div class="bg-white p-8 rounded-lg shadow-md flex flex-col">
          <h3 class="font-bold mb-6">{{ $t('jobseekers.guide.profileCompletion.title') }}</h3>
          
          <div v-if="isAuthenticated">
            <ProfileCompletionBar :progress="profileProgress" class="mb-8" />
            
            <div class="space-y-4">
              <div 
                v-for="(task, index) in completionTasks" 
                :key="index"
                class="flex items-start"
              >
                <div 
                  class="flex-shrink-0 w-6 h-6 mr-3 rounded-full flex items-center justify-center"
                  :class="task.completed ? 'bg-green-100' : 'bg-gray-100'"
                >
                  <svg 
                    v-if="task.completed"
                    class="w-4 h-4 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span v-else class="text-xs text-gray-400">{{ index + 1 }}</span>
                </div>
                <div>
                  <div class="flex items-center">
                    <span 
                      :class="task.completed ? 'line-through text-gray-400' : 'font-medium'"
                    >
                      {{ task.title }}
                    </span>
                    <span v-if="task.points" class="ml-2 text-xs bg-ukraine-yellow bg-opacity-10 text-ukraine-blue px-2 py-1 rounded">
                      +{{ task.points }}
                    </span>
                  </div>
                  <p v-if="!task.completed" class="text-sm text-gray-500">
                    {{ task.hint }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="flex-grow flex flex-col items-center justify-center text-center p-8">
            <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h3 class="text-lg font-medium mb-2">{{ $t('jobseekers.guide.profileCompletion.notLoggedIn.title') }}</h3>
            <p class="text-gray-500 mb-6">{{ $t('jobseekers.guide.profileCompletion.notLoggedIn.description') }}</p>
            <AppButton 
              color="secondary" 
              size="md"
              @click="navigateTo('/register?type=jobseeker')"
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
import { ref } from 'vue';

// In a real app, authentication state would come from a store/API
const isAuthenticated = ref(false);

// Mock profile progress data
const profileProgress = ref(70);

// Guide steps
const guideSteps = [
  {
    title: 'Create Your Account',
    description: 'Sign up with your email or social media accounts to get started. It only takes a few minutes.',
    tips: [
      'Use a professional email address',
      'Choose a secure password',
      'Enable two-factor authentication for extra security'
    ]
  },
  {
    title: 'Complete Your Profile',
    description: 'Add your work experience, education, and skills. A complete profile increases your chance of being noticed by employers.',
    tips: [
      'Upload a professional profile photo',
      'List all relevant work experience, even from Ukraine',
      'Add your education credentials'
    ]
  },
  {
    title: 'Upload Your CV',
    description: 'Upload your existing CV or create one using our templates designed for the Dutch job market.',
    tips: [
      'Format your CV according to Dutch standards',
      'Highlight transferable skills',
      'Include language proficiency levels'
    ]
  },
  {
    title: 'Browse Available Jobs',
    description: 'Search through available positions that match your skills and experience.',
    tips: [
      'Use filters to narrow down your search',
      'Save jobs that interest you',
      'Set up job alerts for new opportunities'
    ]
  },
  {
    title: 'Apply and Connect',
    description: 'Apply directly to jobs and connect with employers who are open to hiring Ukrainian professionals.',
    tips: [
      'Customize your application for each position',
      'Follow up after applying',
      'Prepare for interviews, including potential language requirements'
    ]
  }
];

// Profile completion tasks
const completionTasks = [
  {
    title: 'Create account',
    completed: true,
    points: 10,
    hint: 'Sign up to start your job search journey'
  },
  {
    title: 'Add personal information',
    completed: true,
    points: 10,
    hint: 'Fill in your basic contact details'
  },
  {
    title: 'Upload profile photo',
    completed: true,
    points: 5,
    hint: 'Add a professional photo to your profile'
  },
  {
    title: 'Add work experience',
    completed: true,
    points: 20,
    hint: 'List your previous jobs and responsibilities'
  },
  {
    title: 'Add education',
    completed: true,
    points: 15,
    hint: 'Add your educational background'
  },
  {
    title: 'List skills',
    completed: false,
    points: 15,
    hint: 'Add relevant skills to help match with jobs'
  },
  {
    title: 'Upload your CV',
    completed: false,
    points: 20,
    hint: 'Upload your resume or create one with our tools'
  },
  {
    title: 'Set job preferences',
    completed: false,
    points: 5,
    hint: 'Tell us what type of work you're looking for'
  }
];

// Navigation function
const { navigateTo } = useRouter();
</script>