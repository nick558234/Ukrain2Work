<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <h2 class="text-ukraine-blue text-center mb-12">{{ $t('about.timeline.title') }}</h2>
      
      <div class="max-w-4xl mx-auto">
        <div v-for="(event, index) in timeline" :key="index" class="flex">
          <!-- Timeline line -->
          <div class="flex flex-col items-center">
            <div class="w-5 h-5 rounded-full bg-ukraine-blue"></div>
            <div class="h-full w-px bg-gray-300" :class="{ 'hidden': index === timeline.length - 1 }"></div>
          </div>
          
          <!-- Timeline content -->
          <div class="ml-6 pb-12" :class="{ 'pb-0': index === timeline.length - 1 }">
            <div class="flex flex-col sm:flex-row sm:items-center mb-2">
              <span class="text-sm font-medium text-white bg-ukraine-blue px-3 py-1 rounded-full">{{ event.date }}</span>
              <h3 class="text-lg font-bold mt-2 sm:mt-0 sm:ml-3">{{ event.title }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ event.description }}</p>
            
            <div v-if="event.image" class="rounded-lg overflow-hidden shadow-md my-4">
              <NuxtImg 
                :src="event.image" 
                :alt="event.title"
                class="w-full"
                width="600"
                height="300"
                placeholder
                :fallback="`https://placehold.co/600x300/e9f5ff/0057b8?text=${encodeURIComponent(event.title)}`"
              />
            </div>
            
            <div v-if="event.highlights && event.highlights.length" class="bg-white p-4 rounded-lg border border-gray-100">
              <ul class="space-y-2">
                <li v-for="(highlight, i) in event.highlights" :key="i" class="flex items-start">
                  <svg class="h-5 w-5 text-ukraine-blue mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Timeline data - in a real app would be fetched from an API or CMS
const timeline = [
  {
    date: 'February 2022',
    title: 'Russian Invasion of Ukraine',
    description: 'Following the Russian invasion of Ukraine, millions of Ukrainians were forced to flee their homes, creating the largest refugee crisis in Europe since World War II.',
    image: '/img/about/timeline-war.jpg',
    highlights: []
  },
  {
    date: 'March 2022',
    title: 'Foundation of Ukraine2Work',
    description: 'Ukraine2Work was founded by Anna Kovalenko, who recognized the urgent need to help Ukrainian refugees rebuild their lives through meaningful employment in the Netherlands.',
    image: '/img/about/timeline-foundation.jpg',
    highlights: [
      'Initial partnership with 5 Dutch companies',
      'First website launch with basic job listings',
      'Team of 3 volunteers assembled'
    ]
  },
  {
    date: 'June 2022',
    title: 'First 100 Job Placements',
    description: 'Within three months of launch, Ukraine2Work had successfully helped 100 Ukrainian refugees secure employment with Dutch companies.',
    image: null,
    highlights: [
      'Partnerships expanded to 25 companies',
      'First career workshop conducted with 45 attendees',
      'Multilingual support services established'
    ]
  },
  {
    date: 'September 2022',
    title: 'Official NGO Status Obtained',
    description: 'Ukraine2Work was officially registered as a non-profit organization in the Netherlands, enabling it to expand its operations and apply for grants.',
    image: '/img/about/timeline-ngo.jpg',
    highlights: []
  },
  {
    date: 'January 2023',
    title: 'Launch of Enhanced Platform',
    description: 'A completely redesigned platform was launched with additional features for job matching, profile creation, and resources for both employers and job seekers.',
    image: '/img/about/timeline-platform.jpg',
    highlights: [
      'Intelligent job matching algorithm implemented',
      'Dedicated employer portal created',
      'CV templates and interview preparation resources added'
    ]
  },
  {
    date: 'May 2023',
    title: 'Government Partnership',
    description: 'Ukraine2Work established an official partnership with the Dutch government to provide employment services specifically for Ukrainian refugees under temporary protection.',
    image: null,
    highlights: [
      'Integration with government assistance programs',
      'Formal recognition as a key employment service provider',
      'Additional funding secured for capacity expansion'
    ]
  },
  {
    date: 'Today',
    title: 'Growing Impact',
    description: 'Ukraine2Work continues to expand its services, now supporting thousands of Ukrainian professionals in finding meaningful employment across the Netherlands.',
    image: '/img/about/timeline-today.jpg',
    highlights: [
      'Over 5,800 active job seekers registered',
      '340+ Dutch employers participating',
      'Expanded team with dedicated staff and volunteers',
      'New services including skill training programs'
    ]
  }
];
</script>