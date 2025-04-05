<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <h2 class="text-ukraine-blue text-center mb-4">{{ $t('about.team.title') }}</h2>
      <p class="text-center max-w-3xl mx-auto mb-12">{{ $t('about.team.description') }}</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(member, index) in displayedMembers" 
          :key="index"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="relative h-64">
            <img 
              :src="member.photo" 
              :alt="member.name"
              class="w-full h-full object-cover"
            />
            <div 
              v-if="member.ukrainian" 
              class="absolute top-3 right-3 bg-ukraine-yellow rounded-full px-3 py-1 text-xs font-medium"
            >
              {{ $t('about.team.ukrainian') }}
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="font-bold text-lg mb-1">{{ member.name }}</h3>
            <p class="text-ukraine-blue mb-3">{{ member.role }}</p>
            <p class="text-gray-600 mb-4">{{ member.bio }}</p>
            
            <div class="flex space-x-3">
              <a 
                v-if="member.linkedin" 
                :href="member.linkedin" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-400 hover:text-ukraine-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a 
                v-if="member.email" 
                :href="`mailto:${member.email}`" 
                class="text-gray-400 hover:text-ukraine-blue transition-colors"
                aria-label="Email"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a 
                v-if="member.phone" 
                :href="`tel:${member.phone}`" 
                class="text-gray-400 hover:text-ukraine-blue transition-colors"
                aria-label="Phone"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 8.424.211 0 .405-.046.558-.132l2.499-1.24 3.816 7.36-2.396 1.18c-.674.333-1.329.482-1.981.482l-.09-.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="!showAll && teamMembers.length > previewCount" class="text-center mt-12">
        <NuxtLink to="/about" class="text-ukraine-blue font-medium hover:underline">
          {{ $t('about.team.meetFullTeam') }} →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  showAll: {
    type: Boolean,
    default: false
  },
  previewCount: {
    type: Number,
    default: 6
  }
});

// In a real app, team data would be fetched from an API or via CMS
const teamMembers = [
  {
    name: 'Anna Kovalenko',
    role: 'Founder & Executive Director',
    bio: 'Former HR executive with 15+ years of experience. Moved from Kyiv to Amsterdam in 2020 and founded Ukraine2Work in response to the refugee crisis.',
    photo: '/img/team/anna-kovalenko.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'anna@ukraine2work.nl',
    phone: '+31612345678',
    ukrainian: true
  },
  {
    name: 'Jan de Vries',
    role: 'Employer Relations Manager',
    bio: 'Dedicated to connecting Dutch employers with Ukrainian talent. Previously worked in corporate recruitment for 10+ years at major Dutch companies.',
    photo: '/img/team/jan-de-vries.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'jan@ukraine2work.nl',
    phone: null,
    ukrainian: false
  },
  {
    name: 'Oleksandr Shevchenko',
    role: 'Job Seeker Support Specialist',
    bio: 'Helps Ukrainian refugees navigate the Dutch job market. Came to the Netherlands in 2022 and brings firsthand experience of the challenges faced.',
    photo: '/img/team/oleksandr-shevchenko.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'oleksandr@ukraine2work.nl',
    phone: null,
    ukrainian: true
  },
  {
    name: 'Marieke Janssen',
    role: 'Partnerships Manager',
    bio: 'Builds relationships with Dutch organizations, government bodies, and NGOs to create a comprehensive support network for Ukrainian job seekers.',
    photo: '/img/team/marieke-janssen.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: null,
    phone: null,
    ukrainian: false
  },
  {
    name: 'Viktoria Bondar',
    role: 'Career Coach',
    bio: 'Certified career coach providing guidance on CV writing, interview skills, and career transitions specifically tailored to the Dutch work environment.',
    photo: '/img/team/viktoria-bondar.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'viktoria@ukraine2work.nl',
    phone: '+31623456789',
    ukrainian: true
  },
  {
    name: 'Thomas Bakker',
    role: 'Tech Lead',
    bio: 'Software engineer leading the development of the Ukraine2Work platform. Passionate about using technology to solve social challenges.',
    photo: '/img/team/thomas-bakker.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'thomas@ukraine2work.nl',
    phone: null,
    ukrainian: false
  },
  {
    name: 'Natalia Petrova',
    role: 'Community Manager',
    bio: 'Organizes events and maintains communication channels for the Ukrainian community in the Netherlands. Ensures job seekers feel supported throughout their journey.',
    photo: '/img/team/natalia-petrova.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'natalia@ukraine2work.nl',
    phone: null,
    ukrainian: true
  },
  {
    name: 'Erik Jansen',
    role: 'Legal Advisor',
    bio: 'Immigration attorney specializing in refugee employment rights. Provides guidance on work permits, residency, and legal matters for Ukrainian refugees.',
    photo: '/img/team/erik-jansen.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'erik@ukraine2work.nl',
    phone: null,
    ukrainian: false
  },
  {
    name: 'Iryna Koval',
    role: 'Cultural Integration Specialist',
    bio: 'Helps Ukrainian professionals adapt to Dutch work culture and social norms. Provides cultural orientation sessions and ongoing support.',
    photo: '/img/team/iryna-koval.jpg',
    linkedin: 'https://linkedin.com/in/example',
    email: 'iryna@ukraine2work.nl',
    phone: null,
    ukrainian: true
  }
];

const displayedMembers = computed(() => {
  return props.showAll ? teamMembers : teamMembers.slice(0, props.previewCount);
});
</script>