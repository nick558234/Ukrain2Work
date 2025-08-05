<template>
  <div>
    <HeroSection 
      pageType="employers" 
      primaryCtaLink="https://ukraine2work.8vance.com/?authState=register&language=eng" 
      class="bg-ukraine-blue text-white"
    />
    
    <!-- Video Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">{{ $t('employers.video.title') }}</h2>
          <p class="text-xl mb-8">{{ $t('employers.video.description') }}</p>
          <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            <iframe 
              :src="employerVideoUrl"
              :title="$t('employers.video.title')"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              class="w-full h-full bg-black rounded"
              style="aspect-ratio: 16/9; min-height: 315px;"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-6 text-ukraine-blue">{{ $t('employers.matchmaking.title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6 bg-ukraine-light rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.matchmaking.softSkills.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.matchmaking.softSkills.description') }}</p>
            </div>
            <div class="p-6 bg-ukraine-light rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.matchmaking.hardSkills.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.matchmaking.hardSkills.description') }}</p>
            </div>
            <div class="p-6 bg-ukraine-light rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.matchmaking.workExperience.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.matchmaking.workExperience.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 text-ukraine-blue">{{ $t('employers.importantInfo.title') }}</h2>
          <p class="text-gray-700 mb-8">{{ $t('employers.importantInfo.description') }}</p>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.importantInfo.noWorkPermit.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.importantInfo.noWorkPermit.description') }}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.importantInfo.languageSupport.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.importantInfo.languageSupport.description') }}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.importantInfo.employmentTerms.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.importantInfo.employmentTerms.description') }}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4 text-ukraine-blue">{{ $t('employers.importantInfo.temporaryProtection.title') }}</h3>
              <p class="text-gray-700">{{ $t('employers.importantInfo.temporaryProtection.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 text-ukraine-blue">{{ $t('employers.costs.title') }}</h2>
          <p class="text-gray-700 mb-8">{{ $t('employers.costs.description') }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6 text-ukraine-blue">{{ $t('employers.contact.title') }}</h2>
          <p class="text-gray-700 mb-8">{{ $t('employers.contact.description') }}</p>
          <a href="/contact" class="inline-block bg-ukraine-blue text-white px-8 py-3 rounded-lg hover:bg-ukraine-yellow transition-colors">
            {{ $t('employers.contact.cta') }}
          </a>
        </div>
      </div>
    </section>
    
    <EmployerBenefits />
    
    <HowItWorksSection userType="employers" />
    
    <!-- <PostJobSection /> -->
    
    <TestimonialsSection defaultTab="employers" />
    
    <CtaSection 
      type="employers" 
      primaryLink="contact"
      secondaryLink="#" 
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Computed property for employer video URL based on language
const employerVideoUrl = computed(() => {
  // Use YouTube embedded videos based on language
  return locale.value === 'uk'
    ? 'https://www.youtube.com/embed/ir1SFnwL3_w?si=Ut0mzYhGSwrgLHGv' // Ukrainian video for employers
    : 'https://www.youtube.com/embed/cuLfJyW0KiA?si=oNJh4qJ_rD8j7xZ_'; // Dutch/English video for employers
});

// Employers page targeting Dutch businesses looking to hire Ukrainian talent
// Emphasizes the benefits and straightforward process of hiring Ukrainian workers

// SEO meta tags for employers page
useSeoMeta({
  title: 'Voor Werkgevers - Vind Oekraïens Talent',
  description: 'Ukraine2Work helpt Nederlandse werkgevers bij het vinden van gekwalificeerd Oekraïens talent via skill-based matching. Geen wervingskosten.',
  keywords: 'Ukraine2Work werkgevers, Ukraine 2 Work employers, Oekraïens talent, Nederlandse werkgevers, recruitment platform, personeel zoeken, skilled workers, Ukrainian professionals',
  author: 'Ukraine2Work',
  robots: 'index, follow',
  
  // Open Graph
  ogTitle: 'Voor Werkgevers - Vind Oekraïens Talent',
  ogDescription: 'Ukraine2Work helpt Nederlandse werkgevers bij het vinden van gekwalificeerd Oekraïens talent via skill-based matching. Geen wervingskosten.',
  ogUrl: 'https://ukraine2work.nl/employers',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Voor Werkgevers - Vind Oekraïens Talent',
  twitterDescription: 'Ukraine2Work helpt Nederlandse werkgevers bij het vinden van gekwalificeerd Oekraïens talent via skill-based matching. Geen wervingskosten.'
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl/employers' }
  ]
})
</script>