<template>
  <section class="py-8 bg-white">
    <div class="container">
      <div class="flex flex-wrap justify-center gap-8 md:gap-16">
        <div 
          v-for="(badge, index) in badges" 
          :key="index"
          class="flex flex-col items-center text-center max-w-xs"
        >
          <div class="bg-ukraine-yellow bg-opacity-10 p-4 rounded-full mb-3">
            <svg class="w-8 h-8 text-ukraine-blue" fill="currentColor" viewBox="0 0 24 24">
              <path :d="badge.icon" />
            </svg>
          </div>
          <h3 class="font-bold mb-1">{{ badge.title }}</h3>
          <p class="text-gray-600 text-sm">{{ badge.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Safety badges displayed to job seekers to build trust
const badges = [
  {
    title: '100% Free Service',
    description: 'Our platform is completely free for Ukrainian job seekers. No hidden fees or charges, ever.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' // Checkmark icon
  },
  {
    title: 'Verified Employers',
    description: 'All employers on our platform are verified to ensure a safe job search experience.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' // Shield icon
  },
  {
    title: 'Language Support',
    description: 'Get assistance in Ukrainian, English, and Dutch throughout your job search process.',
    icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' // Language icon
  }
];
</script>