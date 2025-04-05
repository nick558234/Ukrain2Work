<template>
  <div class="bg-ukraine-yellow bg-opacity-10 border-l-4 border-ukraine-yellow p-6 rounded-md">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-12 w-12 text-ukraine-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <div class="ml-4">
        <h3 class="text-lg font-bold text-ukraine-blue mb-2">{{ $t('permitInfo.title') }}</h3>
        <p class="mb-3">{{ $t('permitInfo.description') }}</p>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>{{ $t('permitInfo.points.0') }}</li>
          <li>{{ $t('permitInfo.points.1') }}</li>
          <li>{{ $t('permitInfo.points.2') }}</li>
        </ul>
        <div class="flex">
          <NuxtLink 
            :to="policyLink" 
            target="_blank" 
            class="text-ukraine-blue font-medium hover:text-ukraine-blue-dark mr-4"
          >
            {{ $t('permitInfo.learnMore') }} →
          </NuxtLink>
          <NuxtLink 
            :to="contactLink" 
            class="text-ukraine-blue font-medium hover:text-ukraine-blue-dark"
          >
            {{ $t('permitInfo.contact') }} →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  policyLink: {
    type: String,
    default: 'https://ind.nl/en/ukraine/Pages/Working-in-the-Netherlands.aspx'
  },
  contactLink: {
    type: String,
    default: '/contact'
  }
});
</script>