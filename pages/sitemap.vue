<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Sitemap - Ukraine2Work</h1>
    <p class="mb-8">Find all the pages and resources available on Ukraine2Work platform.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 class="text-xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="text-blue-600 hover:underline">Home</NuxtLink></li>
          <li><NuxtLink to="/refugees" class="text-blue-600 hover:underline">For Job Seekers</NuxtLink></li>
          <li><NuxtLink to="/employers" class="text-blue-600 hover:underline">For Employers</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-blue-600 hover:underline">About Us</NuxtLink></li>
          <li><NuxtLink to="/success-stories" class="text-blue-600 hover:underline">Success Stories</NuxtLink></li>
          <li><NuxtLink to="/blog" class="text-blue-600 hover:underline">Blog</NuxtLink></li>
          <li><NuxtLink to="/donate" class="text-blue-600 hover:underline">Donate</NuxtLink></li>
        </ul>
      </div>
       
      <div>
        <h2 class="text-xl font-semibold mb-4 border-b pb-2">Special Offers</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/early-adopter" class="text-blue-600 hover:underline">Early Adopter Deal</NuxtLink></li>
        </ul>
        
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 mt-8">Support</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/contact" class="text-blue-600 hover:underline">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/faq" class="text-blue-600 hover:underline">FAQ</NuxtLink></li>
        </ul>
      </div>
      
      <div>
        <h2 class="text-xl font-semibold mb-4 border-b pb-2">Legal & Info</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/privacy-policy" class="text-blue-600 hover:underline">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/terms-of-service" class="text-blue-600 hover:underline">Terms of Service</NuxtLink></li>
          <li><NuxtLink to="/sitemap" class="text-blue-600 hover:underline">Sitemap</NuxtLink></li>
        </ul>
        
        <h2 class="text-xl font-semibold mb-4 border-b pb-2 mt-8">External Links</h2>
        <ul class="space-y-2">
          <li><a href="https://nederland-werkt.8vance.com/?authState=register" target="_blank" class="text-blue-600 hover:underline">Register Platform</a></li>
        </ul>
      </div>
    </div>
    
    <div class="mt-12 p-6 bg-gray-50 rounded-lg">
      <h2 class="text-2xl font-semibold mb-4">About Ukraine2Work</h2>
      <p class="text-gray-700 mb-4">
        Ukraine2Work is a skill-based matching platform that connects Ukrainian refugees with Dutch employers. 
        Our platform helps create meaningful employment opportunities and supports integration into the Dutch workforce.
      </p>
      <p class="text-gray-700">
        Find work opportunities, discover talent, and build connections that matter. 
        All pages are optimized for accessibility and available in multiple languages.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStructuredData } from '~/composables/useStructuredData'

definePageMeta({
  title: 'Sitemap - Ukraine2Work'
})

// SEO optimization
useSeoMeta({
  title: 'Sitemap - Ukraine2Work Website Overzicht',
  description: 'Complete sitemap van Ukraine2Work platform. Vind alle pagina\'s, resources en links voor Oekraïense vluchtelingen en Nederlandse werkgevers.',
  keywords: 'Ukraine2Work sitemap, ukraine 2 work sitemap, website map, ukrainian job platform, dutch employer platform, refugee employment, job matching sitemap',
  
  // Open Graph
  ogTitle: 'Sitemap - Ukraine2Work Website Overzicht',
  ogDescription: 'Complete sitemap van Ukraine2Work platform. Vind alle pagina\'s, resources en links voor Oekraïense vluchtelingen en Nederlandse werkgevers.',
  ogUrl: 'https://ukraine2work.nl/sitemap',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sitemap - Ukraine2Work Website Overzicht',
  twitterDescription: 'Complete sitemap van Ukraine2Work platform. Vind alle pagina\'s, resources en links voor Oekraïense vluchtelingen en Nederlandse werkgevers.',
  
  // Additional meta tags
  author: 'Ukraine2Work',
  robots: 'index, follow'
})

// Structured data
const { addWebsiteSchema } = useStructuredData()
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ukraine2Work",
        "alternateName": "Ukraine 2 Work",
        "description": "Skill-based matching platform connecting Ukrainian refugees with Dutch employers",
        "url": "https://ukraine2work.nl",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ukraine2work.nl/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl/sitemap' }
  ]
})
</script>