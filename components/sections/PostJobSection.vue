<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Job posting form -->
        <div>
          <h2 class="text-ukraine-blue mb-6">{{ $t('employers.postJob.title') }}</h2>
          <p class="mb-8">{{ $t('employers.postJob.subtitle') }}</p>
          
          <form @submit.prevent="submitJobPosting" class="space-y-6">
            <div>
              <label for="jobTitle" class="block text-gray-700 font-medium mb-2">{{ $t('employers.postJob.form.jobTitle') }}</label>
              <input
                id="jobTitle"
                v-model="jobForm.title"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label for="jobLocation" class="block text-gray-700 font-medium mb-2">{{ $t('employers.postJob.form.location') }}</label>
              <input
                id="jobLocation"
                v-model="jobForm.location"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label for="jobType" class="block text-gray-700 font-medium mb-2">{{ $t('employers.postJob.form.jobType') }}</label>
              <select
                id="jobType"
                v-model="jobForm.type"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
                required
              >
                <option value="full-time">{{ $t('employers.postJob.form.types.fullTime') }}</option>
                <option value="part-time">{{ $t('employers.postJob.form.types.partTime') }}</option>
                <option value="temporary">{{ $t('employers.postJob.form.types.temporary') }}</option>
                <option value="contract">{{ $t('employers.postJob.form.types.contract') }}</option>
                <option value="internship">{{ $t('employers.postJob.form.types.internship') }}</option>
              </select>
            </div>
            
            <div>
              <label for="jobDescription" class="block text-gray-700 font-medium mb-2">{{ $t('employers.postJob.form.description') }}</label>
              <textarea
                id="jobDescription"
                v-model="jobForm.description"
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
                required
              ></textarea>
            </div>
            
            <div>
              <label for="jobRequirements" class="block text-gray-700 font-medium mb-2">{{ $t('employers.postJob.form.requirements') }}</label>
              <textarea
                id="jobRequirements"
                v-model="jobForm.requirements"
                rows="3"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
                required
              ></textarea>
            </div>
            
            <div class="flex items-center">
              <input
                id="englishSufficient"
                v-model="jobForm.englishSufficient"
                type="checkbox"
                class="h-4 w-4 text-ukraine-blue focus:ring-ukraine-blue"
              />
              <label for="englishSufficient" class="ml-2 block text-gray-700">
                {{ $t('employers.postJob.form.englishSufficient') }}
              </label>
            </div>
            
            <div>
              <AppButton type="submit" color="primary" size="lg" class="w-full">
                {{ $t('employers.postJob.form.submit') }}
              </AppButton>
            </div>
          </form>
        </div>
        
        <!-- Job preview/info section -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="text-lg font-bold mb-4">{{ $t('employers.postJob.preview.title') }}</h3>
          
          <div class="bg-ukraine-blue bg-opacity-5 p-4 rounded-md mb-6">
            <div v-if="jobForm.title" class="mb-4">
              <h4 class="text-ukraine-blue font-bold">{{ jobForm.title }}</h4>
              <div class="flex items-center mt-2 text-sm text-gray-600">
                <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ jobForm.location || $t('employers.postJob.preview.locationPlaceholder') }}</span>
              </div>
            </div>
            <p v-else class="italic text-gray-500">{{ $t('employers.postJob.preview.placeholder') }}</p>
          </div>
          
          <h3 class="text-lg font-bold mb-4">{{ $t('employers.postJob.tips.title') }}</h3>
          <ul class="list-disc pl-5 space-y-3">
            <li>{{ $t('employers.postJob.tips.tip1') }}</li>
            <li>{{ $t('employers.postJob.tips.tip2') }}</li>
            <li>{{ $t('employers.postJob.tips.tip3') }}</li>
            <li>{{ $t('employers.postJob.tips.tip4') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const jobForm = ref({
  title: '',
  location: '',
  type: 'full-time',
  description: '',
  requirements: '',
  englishSufficient: true
});

const submitJobPosting = () => {
  // In a real application, this would submit the job posting to an API
  alert('Job posting submitted! In a real application, this would save to a database.');
  console.log('Job posting form data:', jobForm.value);
  
  // Reset form after submission
  jobForm.value = {
    title: '',
    location: '',
    type: 'full-time',
    description: '',
    requirements: '',
    englishSufficient: true
  };
};
</script>