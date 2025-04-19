<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-center text-ukraine-blue mb-12">{{ $t('partners.title') }}</h2>
      
        <swiper-container
          ref="containerRef"
          :slides-per-view="2"
          :space-between="20"
          :pagination="true"
          :breakpoints="{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: partnersList.length > 3 ? 4 : partnersList.length,
              spaceBetween: 50,
            },
          }"
          class="partners-swiper"
        >
          <swiper-slide v-for="(partner, index) in partnersList" :key="index">
            <div class="flex justify-center items-center h-full">
              <a :href="partner.url" target="_blank" rel="noopener noreferrer">
                <NuxtImg 
                  :src="partner.logo" 
                  :alt="partner.name"
                  class="h-24 p-2 grayscale hover:grayscale-0 transition-all duration-300"
                  format="avif"
                  sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
                />
              </a>
            </div>
          </swiper-slide>
        </swiper-container>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useSwiper } from '#imports';

const containerRef = ref(null);

const partnersList = [
  {
    name: '8vance',
    logo: '/images/partners/8vance-logo.svg',
    url: 'https://www.8vance.com'
  },
  {
    name: 'Kleurrijker',
    logo: '/images/partners/Kleurrijker-Logo.svg',
    url: 'https://www.kleurrijker.nl'
  },
  {
    name: 'NederlandWerkt',
    logo: '/images/partners/NW-logo-2023-2.png',
    url: 'https://nederlandwerkt.org/'
  },
  {
    name: 'SkillsAPK',
    logo: '/images/partners/skillsapk.webp',
    url: 'https://www.skillsapk.nl'
  }
];

// Initialize Swiper
const swiper = useSwiper(containerRef, {
  pagination: {
    clickable: true
  }
});
</script>

<style>
.partners-swiper {
  width: 100%;
  padding-bottom: 50px;
}

:deep(swiper-pagination) {
  position: relative;
  margin-top: 2rem;
}

:deep(swiper-pagination-bullet) {
  background: #0057b8;
}

:deep(swiper-pagination-bullet-active) {
  background: #0057b8;
}

:deep(swiper-slide) {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>