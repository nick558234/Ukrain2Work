<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">For Job Seekers</h1>
    <p class="mb-8 text-lg">Find opportunities that match your skills and experience across Europe.</p>
    
    <div class="bg-blue-50 p-6 rounded-lg shadow mb-8">
      <h2 class="text-xl font-semibold mb-3">How It Works</h2>
      <ul class="space-y-4">
        <li class="flex items-start">
          <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">1</span>
          <div>
            <h3 class="font-medium">Create Your Profile</h3>
            <p class="text-gray-600">Register and build your profile with your skills, experience, and preferences.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">2</span>
          <div>
            <h3 class="font-medium">Browse Opportunities</h3>
            <p class="text-gray-600">Search for job opportunities that match your skills and preferences.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">3</span>
          <div>
            <h3 class="font-medium">Apply and Connect</h3>
            <p class="text-gray-600">Apply for positions and connect directly with potential employers.</p>
          </div>
        </li>
        <li class="flex items-start">
          <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5">4</span>
          <div>
            <h3 class="font-medium">Get Support</h3>
            <p class="text-gray-600">Access resources for relocation, language training, and integration.</p>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="mt-8 text-center">
      <NuxtLink to="/register" class="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-200 inline-block">
        {{ $t('auth.register') || 'Register Now' }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Job Seekers'
})
</script>