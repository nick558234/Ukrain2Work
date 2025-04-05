<template>
  <div>
    <HeroSection pageType="jobseekers" primaryCtaLink="/jobs" />
    
    <SafetyBadges />
    
    <JobSeekerGuide />
    
    <JobSearchSection />
    
    <JobCategories />
    
    <TestimonialsSection defaultTab="jobseekers" />
    
    <CtaSection 
      type="jobseekers" 
      primaryLink="/register?type=jobseeker"
      secondaryLink="/contact?subject=jobseeker-question" 
    />
  </div>
</template>

<script setup>
// Job seekers page focused on connecting Ukrainian refugees with Dutch job opportunities
// Provides search tools, resources, and guidance for finding employment in the Netherlands
</script>