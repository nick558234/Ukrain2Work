<template>
  <section class="py-16 bg-white">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-ukraine-blue mb-6">{{ $t('about.mission.title') }}</h2>
          
          <div class="prose prose-lg">
            <p class="mb-4">{{ $t('about.mission.paragraph1') }}</p>
            <p class="mb-4">{{ $t('about.mission.paragraph2') }}</p>
            <p>{{ $t('about.mission.paragraph3') }}</p>
          </div>
          
          <div class="mt-8 flex flex-wrap gap-4">
            <div class="flex items-center">
              <svg class="h-6 w-6 text-ukraine-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">{{ $t('about.mission.values.free') }}</span>
            </div>
            <div class="flex items-center">
              <svg class="h-6 w-6 text-ukraine-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">{{ $t('about.mission.values.accessible') }}</span>
            </div>
            <div class="flex items-center">
              <svg class="h-6 w-6 text-ukraine-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-medium">{{ $t('about.mission.values.supportive') }}</span>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
            <img 
              alt="Ukraine2Work mission" 
              class="w-full h-full object-cover"
              width="800"
              height="600"
              src="/images/mission_illustration.webp"
              onerror="this.src='https://placehold.co/800x600/e9f5ff/0057b8?text=Our+Mission'"
            />
          </div>
          <div class="absolute -bottom-6 -left-6 w-40 h-40 bg-ukraine-yellow rounded-lg -z-10"></div>
          <div class="absolute -top-6 -right-6 w-40 h-40 bg-ukraine-blue rounded-lg -z-10"></div>
        </div>
      </div>
      
      <!-- Impact statistics -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-ukraine-blue mb-2">{{ impactStats.refugees }}+</div>
          <div class="text-gray-600">{{ $t('about.mission.stats.refugees') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-ukraine-blue mb-2">{{ impactStats.employers }}+</div>
          <div class="text-gray-600">{{ $t('about.mission.stats.employers') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-ukraine-blue mb-2">{{ impactStats.jobsPosted }}+</div>
          <div class="text-gray-600">{{ $t('about.mission.stats.jobsPosted') }}</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-ukraine-blue mb-2">{{ impactStats.successfulHires }}+</div>
          <div class="text-gray-600">{{ $t('about.mission.stats.successfulHires') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// In a real app, these statistics would come from an API
const impactStats = {
  refugees: 5500,
  employers: 0,
  jobsPosted: 300000,
  successfulHires: 1
};
</script>