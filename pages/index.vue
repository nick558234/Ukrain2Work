<template>
  <div class="mx-auto">
    <!-- New hero header with background image and small CTAs -->
    <PageHeader
      bgImage="/images/team/alexSpaan_square.webp"
      title="Connect Ukrainian Talent with Dutch Opportunities"
      subtitle="Ukraine2Work bridges skilled Ukrainian professionals with employers across the Netherlands"
      primaryCta="Find a Job"
      primaryCtaLink="/refugees"
      secondaryCta="Hire Talent"
      secondaryCtaLink="/employers"
      :overlayOpacity="60"
      :darkText="false"
      ctaSize="lg"
      :debug="true"
    />
  
    <!-- Existing content -->
    <div class="container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="bg-blue-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-3">For Refugees</h2>
          <p class="mb-4">Find job opportunities across the Netherlands that match your skills and experience.</p>
          <NuxtLink to="/refugees" class="text-blue-600 font-medium">Learn More →</NuxtLink>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-3">For Employers</h2>
          <p class="mb-4">Post job openings and find qualified Ukrainian professionals.</p>
          <NuxtLink to="/employers" class="text-blue-600 font-medium">Post a Job →</NuxtLink>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-3">Success Stories</h2>
          <p class="mb-4">Read about Ukrainians who found employment through our platform.</p>
          <NuxtLink to="/success-stories" class="text-blue-600 font-medium">Read Stories →</NuxtLink>
        </div>
      </div>
    </div>
    
    <HowItWorksSection userType="refugees" />
    
    <TestimonialsSection defaultTab="employers" />
    
    <PartnersSection />
    
    <LatestBlogPosts />
    
    <CtaSection type="general" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

definePageMeta({
  title: 'Home'
});
</script>