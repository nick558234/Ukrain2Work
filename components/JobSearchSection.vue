<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="mb-10">
        <h2 class="text-ukraine-blue mb-6">{{ $t('jobseekers.search.title') }}</h2>
        <p class="max-w-3xl">{{ $t('jobseekers.search.subtitle') }}</p>
      </div>
      
      <!-- Search bar and filters -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-10">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Main search input -->
          <div class="flex-grow">
            <label for="searchQuery" class="sr-only">{{ $t('jobseekers.search.searchPlaceholder') }}</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                id="searchQuery" 
                v-model="searchQuery"
                type="text"
                class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-ukraine-blue"
                :placeholder="$t('jobseekers.search.searchPlaceholder')"
              />
            </div>
          </div>
          
          <!-- Location filter -->
          <div class="w-full md:w-64">
            <label for="locationFilter" class="sr-only">{{ $t('jobseekers.search.locationPlaceholder') }}</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input 
                id="locationFilter" 
                v-model="location"
                type="text"
                class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-ukraine-blue"
                :placeholder="$t('jobseekers.search.locationPlaceholder')"
              />
            </div>
          </div>
          
          <!-- Search button -->
          <div>
            <button 
              type="button" 
              @click="handleSearch"
              class="w-full md:w-auto px-6 py-3 bg-ukraine-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              {{ $t('jobseekers.search.searchButton') }}
            </button>
          </div>
        </div>
        
        <!-- Advanced filters -->
        <div class="mt-6">
          <div class="flex items-center justify-between mb-4">
            <button 
              type="button" 
              @click="showFilters = !showFilters"
              class="flex items-center text-ukraine-blue font-medium focus:outline-none"
            >
              <span>{{ $t('jobseekers.search.advancedFilters') }}</span>
              <svg 
                class="ml-2 h-5 w-5 transform transition-transform"
                :class="{ 'rotate-180': showFilters }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div v-if="hasActiveFilters" class="flex items-center">
              <span class="text-sm text-gray-500 mr-2">
                {{ $t('jobseekers.search.activeFilters', { count: activeFilterCount }) }}
              </span>
              <button 
                type="button" 
                @click="clearFilters"
                class="text-sm text-ukraine-blue hover:underline focus:outline-none"
              >
                {{ $t('jobseekers.search.clearFilters') }}
              </button>
            </div>
          </div>
          
          <div v-show="showFilters" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Job type filter -->
            <div>
              <label for="jobTypeFilter" class="block text-sm font-medium text-gray-700 mb-1">
                {{ $t('jobseekers.search.filters.jobType') }}
              </label>
              <select 
                id="jobTypeFilter" 
                v-model="filters.jobType"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
              >
                <option value="">{{ $t('jobseekers.search.filters.all') }}</option>
                <option value="full-time">{{ $t('jobseekers.search.filters.fullTime') }}</option>
                <option value="part-time">{{ $t('jobseekers.search.filters.partTime') }}</option>
                <option value="temporary">{{ $t('jobseekers.search.filters.temporary') }}</option>
                <option value="internship">{{ $t('jobseekers.search.filters.internship') }}</option>
                <option value="contract">{{ $t('jobseekers.search.filters.contract') }}</option>
              </select>
            </div>
            
            <!-- Experience level filter -->
            <div>
              <label for="experienceFilter" class="block text-sm font-medium text-gray-700 mb-1">
                {{ $t('jobseekers.search.filters.experience') }}
              </label>
              <select 
                id="experienceFilter" 
                v-model="filters.experience"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
              >
                <option value="">{{ $t('jobseekers.search.filters.all') }}</option>
                <option value="entry">{{ $t('jobseekers.search.filters.entry') }}</option>
                <option value="mid">{{ $t('jobseekers.search.filters.mid') }}</option>
                <option value="senior">{{ $t('jobseekers.search.filters.senior') }}</option>
              </select>
            </div>
            
            <!-- Language filter -->
            <div>
              <label for="languageFilter" class="block text-sm font-medium text-gray-700 mb-1">
                {{ $t('jobseekers.search.filters.language') }}
              </label>
              <select 
                id="languageFilter" 
                v-model="filters.language"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
              >
                <option value="">{{ $t('jobseekers.search.filters.all') }}</option>
                <option value="english">{{ $t('jobseekers.search.filters.english') }}</option>
                <option value="dutch">{{ $t('jobseekers.search.filters.dutch') }}</option>
                <option value="both">{{ $t('jobseekers.search.filters.bothLanguages') }}</option>
              </select>
            </div>
            
            <!-- Posted date filter -->
            <div>
              <label for="dateFilter" class="block text-sm font-medium text-gray-700 mb-1">
                {{ $t('jobseekers.search.filters.date') }}
              </label>
              <select 
                id="dateFilter" 
                v-model="filters.date"
                class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:border-ukraine-blue focus:outline-none"
              >
                <option value="">{{ $t('jobseekers.search.filters.all') }}</option>
                <option value="today">{{ $t('jobseekers.search.filters.today') }}</option>
                <option value="week">{{ $t('jobseekers.search.filters.week') }}</option>
                <option value="month">{{ $t('jobseekers.search.filters.month') }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Search results -->
      <div v-if="hasSearched">
        <div v-if="isLoading" class="flex justify-center my-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-ukraine-blue"></div>
        </div>
        
        <div v-else-if="jobs.length === 0" class="bg-white rounded-lg shadow-md p-8 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="mt-4 text-lg font-medium text-gray-900">{{ $t('jobseekers.search.noResults') }}</h3>
          <p class="mt-2 text-gray-500">{{ $t('jobseekers.search.tryAgain') }}</p>
        </div>
        
        <div v-else>
          <p class="mb-4 font-medium">
            {{ $t('jobseekers.search.resultsCount', { count: jobs.length }) }}
          </p>
          
          <div class="grid grid-cols-1 gap-6">
            <div 
              v-for="job in jobs" 
              :key="job.id"
              class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div class="flex justify-between">
                <div>
                  <h3 class="font-bold text-lg text-ukraine-blue">{{ job.title }}</h3>
                  <p class="text-gray-600 mb-2">{{ job.company }}</p>
                </div>
                <div class="bg-ukraine-blue bg-opacity-10 px-3 py-1 rounded-full text-sm text-ukraine-blue font-medium">
                  {{ job.type }}
                </div>
              </div>
              
              <div class="flex items-center mt-3 mb-4">
                <svg class="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-500">{{ job.location }}</span>
              </div>
              
              <p class="text-gray-700 mb-4 line-clamp-2">{{ job.description }}</p>
              
              <div class="flex items-center justify-between">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(tag, i) in job.tags" 
                    :key="i"
                    class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{{ $t('jobseekers.search.postedDate', { date: job.postedDate }) }}</span>
                </div>
              </div>
              
              <div class="mt-6">
                <AppButton 
                  color="primary" 
                  size="sm"
                  :href="`/job-details/${job.id}`"
                  class="mr-3"
                >
                  {{ $t('jobseekers.search.viewDetails') }}
                </AppButton>
                <AppButton 
                  color="outline" 
                  size="sm"
                  :href="`https://nederland-werkt.8vance.com/job/${job.id}?language=${$i18n.locale}`"
                  target="_blank"
                >
                  {{ $t('jobseekers.search.applyNow') }}
                </AppButton>
              </div>
            </div>
          </div>
          
          <div v-if="jobs.length > 0" class="mt-8 flex justify-center">
            <button 
              type="button" 
              @click="loadMore"
              class="px-6 py-2 border border-ukraine-blue text-ukraine-blue rounded-md hover:bg-ukraine-blue hover:text-white transition-colors"
            >
              {{ $t('jobseekers.search.loadMore') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Search and filter state
const searchQuery = ref('');
const location = ref('');
const showFilters = ref(false);
const hasSearched = ref(false);
const isLoading = ref(false);

const filters = ref({
  jobType: '',
  experience: '',
  language: '',
  date: ''
});

// Mock jobs data - in a real app, this would come from an API
const jobs = ref([
  {
    id: 1,
    title: 'Software Developer',
    company: 'TechNL',
    type: 'Full-time',
    location: 'Amsterdam',
    description: 'We are looking for a talented Software Developer to join our team. Experience with JavaScript and Vue.js is a plus.',
    tags: ['IT', 'Programming', 'English OK'],
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Customer Support Specialist',
    company: 'Service Plus',
    type: 'Full-time',
    location: 'Rotterdam',
    description: 'Customer-focused support role for a growing e-commerce company. English language proficiency required.',
    tags: ['Customer Service', 'E-commerce', 'English OK'],
    postedDate: '1 week ago'
  },
  {
    id: 3,
    title: 'Warehouse Assistant',
    company: 'Logistics Pro',
    type: 'Full-time',
    location: 'Utrecht',
    description: 'Looking for a warehouse assistant to help with inventory management and order processing. No specific language requirements.',
    tags: ['Logistics', 'Warehouse', 'Entry Level'],
    postedDate: 'Today'
  },
  {
    id: 4,
    title: 'Administrative Assistant',
    company: 'Office Support BV',
    type: 'Part-time',
    location: 'The Hague',
    description: 'Part-time administrative role supporting a small team. Basic Dutch helpful but not required.',
    tags: ['Administration', 'Office', 'English OK'],
    postedDate: '3 days ago'
  },
  {
    id: 5,
    title: 'Marketing Intern',
    company: 'Brand Masters',
    type: 'Internship',
    location: 'Amsterdam',
    description: 'Marketing internship opportunity for students or recent graduates. Learn digital marketing in a dynamic environment.',
    tags: ['Marketing', 'Social Media', 'Internship'],
    postedDate: '1 week ago'
  }
]);

const hasActiveFilters = computed(() => {
  return Object.values(filters.value).some(value => value !== '');
});

const activeFilterCount = computed(() => {
  return Object.values(filters.value).filter(value => value !== '').length;
});

const clearFilters = () => {
  filters.value = {
    jobType: '',
    experience: '',
    language: '',
    date: ''
  };
};

const searchJobs = () => {
  isLoading.value = true;
  hasSearched.value = true;
  
  // Simulate API call delay
  setTimeout(() => {
    // In a real app, this would make an API call with search parameters
    console.log('Searching jobs with:', {
      query: searchQuery.value,
      location: location.value,
      filters: filters.value
    });
    
    isLoading.value = false;
    // Results would be returned from the API
  }, 1000);
};

const loadMoreJobs = () => {
  // In a real app, this would load the next page of results
  console.log('Loading more jobs...');
};

const handleSearch = async () => {
  try {
    // Perform search
    await searchJobs();
  } catch (error) {
    // Handle error appropriately
  }
};

const loadMore = async () => {
  try {
    // Load more jobs
    await loadMoreJobs();
  } catch (error) {
    // Handle error appropriately
  }
};

const viewJobDetails = async (jobId) => {
  try {
    // View job details
    await fetchJobDetails(jobId);
  } catch (error) {
    // Handle error appropriately
  }
};

const applyToJob = (jobId) => {
  // Redirect to external application URL
  window.open(`https://nederland-werkt.8vance.com/job/${jobId}?language=${$i18n.locale}`, '_blank');
};
</script>