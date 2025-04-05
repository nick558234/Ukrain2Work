<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-center text-ukraine-blue mb-12">{{ $t('employers.benefits.title') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="(benefit, index) in benefits" :key="index" class="flex flex-col items-center text-center p-6 bg-ukraine-light rounded-lg">
          <div class="w-16 h-16 flex items-center justify-center bg-ukraine-yellow rounded-full mb-4">
            <svg class="w-8 h-8 text-ukraine-blue" fill="currentColor" viewBox="0 0 24 24">
              <path :d="benefit.icon" />
            </svg>
          </div>
          <h3 class="font-bold mb-2">{{ benefit.title }}</h3>
          <p class="text-gray-600">{{ benefit.description }}</p>
        </div>
      </div>
      
      <PermitInfoCard class="mx-auto max-w-4xl" />
    </div>
  </section>
</template>

<script setup>
// Mock data for the benefits - in a real app, this could come from i18n translations
const benefits = [
  {
    title: 'No Work Permits Required',
    description: 'Ukrainian refugees can work immediately in the Netherlands without requiring special work permits.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' // Checkmark icon
  },
  {
    title: 'Skilled Talent Pool',
    description: 'Access a diverse pool of qualified Ukrainian professionals across various industries and specializations.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' // People icon
  },
  {
    title: 'Fast Onboarding',
    description: 'Our simplified process helps you find and onboard Ukrainian talent quickly and efficiently.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z' // Lightning icon
  },
  {
    title: 'Cultural Support',
    description: 'We provide resources to help with cultural integration and language barriers in the workplace.',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' // Support icon
  },
  {
    title: 'Multilingual Platform',
    description: 'Our platform is available in Dutch, English, and Ukrainian to ensure clear communication for all parties.',
    icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' // Language icon
  },
  {
    title: 'Dedicated Support',
    description: 'Our team provides guidance on legal requirements and best practices for hiring Ukrainian employees.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' // Shield icon
  }
];
</script>