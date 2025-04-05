<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">Welcome to Ukraine2Work</h1>
    <p class="mb-8">Platform connecting Ukrainian refugees with job opportunities across Europe.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div class="bg-blue-50 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-3">For Job Seekers</h2>
        <p class="mb-4">Find job opportunities across Europe that match your skills and experience.</p>
        <NuxtLink to="/job-seekers" class="text-blue-600 font-medium">Learn More →</NuxtLink>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-3">For Employers</h2>
        <p class="mb-4">Post job openings and find qualified Ukrainian professionals.</p>
        <NuxtLink to="#" class="text-blue-600 font-medium">Post a Job →</NuxtLink>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-3">Success Stories</h2>
        <p class="mb-4">Read about Ukrainians who found employment through our platform.</p>
        <NuxtLink to="/success-stories" class="text-blue-600 font-medium">Read Stories →</NuxtLink>
      </div>
    </div>
    
    <HeroSection pageType="home" />
    
    <HowItWorksSection userType="jobseekers" />
    
    <TestimonialsSection defaultTab="employers" />
    
    <PartnersSection />
    
    <LatestBlogPosts />
    
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home'
})

// Import all the components used in the template


// Homepage is the main landing page for the Ukraine2Work platform
// It showcases content for both employers and job seekers
</script>