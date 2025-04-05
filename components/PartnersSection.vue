<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-center text-ukraine-blue mb-12">{{ $t('partners.title') }}</h2>
      
      <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        <div v-for="(partner, index) in partners" :key="index" class="grayscale hover:grayscale-0 transition-all duration-300">
          <img 
            :src="partner.logo" 
            :alt="partner.name"
            class="h-12 md:h-16 w-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Mock partners data - in a real application, this would come from an API or CMS
const partners = [
  {
    name: 'Dutch Ministry of Labor',
    logo: '/img/partners/ministry.svg'
  },
  {
    name: 'Amsterdam Business Association',
    logo: '/img/partners/amsterdam.svg'
  },
  {
    name: 'Rotterdam Chamber of Commerce',
    logo: '/img/partners/rotterdam.svg'
  },
  {
    name: 'Utrecht University',
    logo: '/img/partners/utrecht.svg'
  },
  {
    name: 'Ukrainian Embassy in the Netherlands',
    logo: '/img/partners/embassy.svg'
  },
  {
    name: 'Dutch Refugee Council',
    logo: '/img/partners/refugee.svg'
  }
];
</script>