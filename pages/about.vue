<template>
  <div>
    <HeroSection pageType="about" primaryCtaLink="contact" />
    
    <MissionSection />
    
    <TimelineSection />
    
    <TeamProfiles :showAll="true" />
    
    <TestimonialsSection defaultTab="refugees" />
    
    <CtaSection 
      type="general" 
      primaryLink="/contact"
      secondaryLink="donate" 
    />
  </div>
</template>

<script setup>
// About page provides detailed information about Ukraine2Work's mission, history, and team
// Combined with testimonials to build trust with both job seekers and employers
</script>