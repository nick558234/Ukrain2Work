<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-ukraine-blue text-center mb-12">
        {{ $t('jobseekers.categories.title') }}
      </h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="(category, index) in categories" 
          :key="index"
          @click="selectCategory(category.slug)"
          class="flex flex-col items-center text-center p-6 rounded-lg cursor-pointer transition-colors"
          :class="selectedCategory === category.slug ? 'bg-ukraine-blue bg-opacity-5' : 'hover:bg-gray-50'"
        >
          <div class="w-16 h-16 flex items-center justify-center bg-ukraine-light rounded-full mb-4">
            <svg class="w-8 h-8 text-ukraine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon" />
            </svg>
          </div>
          <h3 class="font-bold mb-1">{{ category.name }}</h3>
          <p class="text-sm text-gray-500">{{ category.jobCount }} {{ $t('jobseekers.categories.jobs') }}</p>
        </div>
      </div>
      
      <div v-if="selectedCategory" class="mt-12">
        <h3 class="font-bold mb-6">{{ getCategoryName(selectedCategory) }}</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(job, index) in filteredJobs"
            :key="index"
            class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-ukraine-blue">{{ job.title }}</h4>
                <p class="text-gray-600 text-sm">{{ job.company }}</p>
              </div>
              <span class="text-sm text-ukraine-blue bg-ukraine-light px-2 py-1 rounded">
                {{ job.type }}
              </span>
            </div>
            <div class="mt-3 flex items-center text-gray-500 text-sm">
              <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{{ job.location }}</span>
            </div>
            <div class="mt-4">
              <AppButton color="outline" size="sm" @click="viewJobDetails(job.id)">
                {{ $t('jobseekers.categories.viewJob') }}
              </AppButton>
            </div>
          </div>
        </div>
        
        <div class="mt-6 text-center">
          <NuxtLink :to="`/jobs?category=${selectedCategory}`" class="text-ukraine-blue font-medium hover:text-ukraine-blue-dark">
            {{ $t('jobseekers.categories.browseMore') }} →
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedCategory = ref('');

const categories = [
  {
    name: 'IT & Technology',
    slug: 'it-technology',
    jobCount: 143,
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    jobCount: 89,
    icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    jobCount: 76,
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    name: 'Administration',
    slug: 'administration',
    jobCount: 65,
    icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    jobCount: 54,
    icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    jobCount: 47,
    icon: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z'
  },
  {
    name: 'Education',
    slug: 'education',
    jobCount: 43,
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 006.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z'
  },
  {
    name: 'Retail',
    slug: 'retail',
    jobCount: 39,
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
  }
];

// Mock jobs data - in a real app this would come from an API
const jobsData = [
  {
    id: 101,
    title: 'Software Developer',
    company: 'TechNL',
    location: 'Amsterdam',
    type: 'Full-time',
    category: 'it-technology'
  },
  {
    id: 102,
    title: 'Frontend Developer',
    company: 'Digital Solutions',
    location: 'Utrecht',
    type: 'Full-time',
    category: 'it-technology'
  },
  {
    id: 103,
    title: 'Restaurant Manager',
    company: 'Restaurant Group BV',
    location: 'Rotterdam',
    type: 'Full-time',
    category: 'hospitality'
  },
  {
    id: 104,
    title: 'Chef',
    company: 'Grand Hotel',
    location: 'Amsterdam',
    type: 'Full-time',
    category: 'hospitality'
  },
  {
    id: 105,
    title: 'Nurse',
    company: 'Health Center',
    location: 'The Hague',
    type: 'Part-time',
    category: 'healthcare'
  },
  {
    id: 106,
    title: 'Administrative Assistant',
    company: 'Business Services',
    location: 'Eindhoven',
    type: 'Full-time',
    category: 'administration'
  },
  {
    id: 107,
    title: 'Warehouse Worker',
    company: 'Logistics BV',
    location: 'Rotterdam',
    type: 'Full-time',
    category: 'logistics'
  },
  {
    id: 108,
    title: 'Production Worker',
    company: 'Dutch Manufacturing',
    location: 'Eindhoven',
    type: 'Full-time',
    category: 'manufacturing'
  }
];

const selectCategory = (slug) => {
  selectedCategory.value = selectedCategory.value === slug ? '' : slug;
};

const getCategoryName = (slug) => {
  const category = categories.find(cat => cat.slug === slug);
  return category ? category.name : '';
};

const filteredJobs = computed(() => {
  if (!selectedCategory.value) return [];
  return jobsData
    .filter(job => job.category === selectedCategory.value)
    .slice(0, 4); // Limit to 4 jobs for preview
});

const viewJobDetails = (jobId) => {
  // In a real app, this would navigate to job details
  console.log('Viewing job details for ID:', jobId);
};
</script>