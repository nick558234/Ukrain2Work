<template>
  <div class="mx-auto">
    <!-- New hero header with background image and small CTAs -->
    <PageHeader
      bgImage="/images/team/alexSpaan_square.webp"
      :title="$t('home.heroTitle')"
      :subtitle="$t('home.heroSubtitle')"
      :primaryCta="$t('home.heroPrimaryCta')"
      primaryCtaLink="/refugees"
      :secondaryCta="$t('home.heroSecondaryCta')"
      secondaryCtaLink="/employers"
      :overlayOpacity="60"
      :darkText="false"
      ctaSize="lg"

    />
  
    <!-- Existing content -->
    <div class="container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="bg-blue-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-3">{{$t('home.forRefugees')}}</h2>
          <p class="mb-4">{{$t('home.forRefugeesDesc')}}</p>
          <NuxtLink :to="getLocalizedPath('/refugees')" class="text-blue-600 font-medium">{{$t('home.learnMore')}} →</NuxtLink>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-3">{{$t('home.forEmployers')}}</h2>
          <p class="mb-4">{{$t('home.forEmployersDesc')}}</p>
          <NuxtLink :to="getLocalizedPath('/employers')" class="text-blue-600 font-medium">{{$t('home.postJob')}} →</NuxtLink>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-3">{{$t('home.successStories')}}</h2>
          <p class="mb-4">{{$t('home.successStoriesDesc')}}</p>
          <NuxtLink :to="getLocalizedPath('/success-stories')" class="text-blue-600 font-medium">{{$t('home.readStories')}} →</NuxtLink>
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
import { useNavigation } from '~/composables/useNavigation';

// Get navigation composable
const { getLocalizedPath } = useNavigation();

// Add structured data for home page
const { addOrganizationSchema, addWebsiteSchema, addServiceSchema } = useStructuredData()
addOrganizationSchema()
addWebsiteSchema()
addServiceSchema()

// SEO meta tags for home page
useSeoMeta({
  title: 'Ukraine2Work - Oekraïense Vluchtelingen & Jobs',
  description: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers via skill-based matching. Vind werk of talent in Nederland.',
  keywords: 'Ukraine2Work, Ukraine 2 Work, Oekraïense vluchtelingen, Nederlandse werkgevers, werk Nederland, talent matching, jobs Nederland, vluchtelingen werk',
  author: 'Ukraine2Work',
  robots: 'index, follow',
  
  // Open Graph
  ogTitle: 'Ukraine2Work - Oekraïense Vluchtelingen & Jobs',
  ogDescription: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers via skill-based matching. Vind werk of talent in Nederland.',
  ogUrl: 'https://ukraine2work.nl',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Ukraine2Work - Oekraïense Vluchtelingen & Jobs',
  twitterDescription: 'Ukraine2Work verbindt Oekraïense vluchtelingen met Nederlandse werkgevers via skill-based matching. Vind werk of talent in Nederland.',
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl' }
  ]
})

definePageMeta({
  title: 'Home'
});
</script>