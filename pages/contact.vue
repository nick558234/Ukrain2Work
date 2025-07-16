<template>
  <div>
    <HeroSection pageType="contact" img="/images/partners.webp"/>
    
    <ContactFormSection />
    
    <FAQSection />
    
    <TeamProfiles />
  </div>
</template>

<script setup>
// Contact page provides multiple ways for users to get in touch with Ukraine2Work:
// - Contact form with validation
// - Answers to frequently asked questions
// - Team member information with contact details

// SEO meta tags for contact page
useSeoMeta({
  title: 'Contact Ukraine2Work - Neem Contact Op',
  description: 'Neem contact op met Ukraine2Work voor vragen over werk voor Oekraïense vluchtelingen of het vinden van talent als Nederlandse werkgever.',
  keywords: 'Ukraine2Work contact, Ukraine 2 Work contact, contact formulier, vragen Ukraine2Work, hulp werk zoeken, werkgevers contact, Oekraïense vluchtelingen hulp, Nederlandse werkgevers contact',
  author: 'Ukraine2Work',
  robots: 'index, follow',
  
  // Open Graph
  ogTitle: 'Contact Ukraine2Work - Neem Contact Op',
  ogDescription: 'Neem contact op met Ukraine2Work voor vragen over werk voor Oekraïense vluchtelingen of het vinden van talent als Nederlandse werkgever.',
  ogUrl: 'https://ukraine2work.nl/contact',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Ukraine2Work - Neem Contact Op',
  twitterDescription: 'Neem contact op met Ukraine2Work voor vragen over werk voor Oekraïense vluchtelingen of het vinden van talent als Nederlandse werkgever.'
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl/contact' }
  ]
})
</script>