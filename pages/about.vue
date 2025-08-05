<template>
  <div>
    <HeroSection pageType="about" primaryCtaLink="contact" />
    
    <MissionSection />
    
    <TeamProfiles :showAll="true" />
    
    <TimelineSection />
    
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

// SEO meta tags for about page
useSeoMeta({
  title: 'Over Ukraine2Work - Onze Missie en Team',
  description: 'Leer meer over Ukraine2Work, het platform dat Oekraïense vluchtelingen verbindt met Nederlandse werkgevers via skill-based matching.',
  keywords: 'Ukraine2Work over ons, Ukraine 2 Work missie, Oekraïense vluchtelingen, Nederlandse werkgevers, skill-based matching, arbeidsplaatsing, inclusieve werkgelegenheid, team Ukraine2Work',
  author: 'Ukraine2Work',
  robots: 'index, follow',
  
  // Open Graph
  ogTitle: 'Over Ukraine2Work - Onze Missie en Team',
  ogDescription: 'Leer meer over Ukraine2Work, het platform dat Oekraïense vluchtelingen verbindt met Nederlandse werkgevers via skill-based matching.',
  ogUrl: 'https://ukraine2work.nl/about',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Over Ukraine2Work - Onze Missie en Team',
  twitterDescription: 'Leer meer over Ukraine2Work, het platform dat Oekraïense vluchtelingen verbindt met Nederlandse werkgevers via skill-based matching.'
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl/about' }
  ]
})
</script>