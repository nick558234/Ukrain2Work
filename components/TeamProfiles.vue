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
          <div class="relative">
            <div class="mb-6">
              <div class="aspect-w-1 aspect-h-1 mb-4">
                <img 
                  :src="member.photo"
                  :alt="member.name"
                  class="w-full h-full object-cover"
                  width="300"
                  height="300"
                />
              </div>
            </div>
            <!-- New label display -->
            <div 
              v-if="member.label" 
              class="absolute top-3 right-3 bg-ukraine-yellow rounded-full px-3 py-1 text-xs font-medium"
            >
              {{ member.label }} <!-- Display the new label -->
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
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

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

// Team data with internationalization
const teamMembers = computed(() => {
  const teamData = {
    nl: [
      {
        name: 'Alex Spaan',
        role: 'Oprichter & CEO',
        bio: 'Oprichter & CEO @ Ukraine2Work | Startup School Pioneer | Skill-Based Job Platform voor Vluchtelingen | Verbindt Talent met Kansen door AI, LLM & Menselijke Ondersteuning',
        photo: '/images/team/alexSpaan_square.webp',
        linkedin: 'https://www.linkedin.com/in/alex-spaan/',
        email: 'alex@ukraine2work.nl',
        phone: '+31638473157',
        label: 'CEO',
        ukrainian: false
      },
      {
        name: 'Floris Deijnen',
        role: 'Matchmaker Werk & Talent',
        bio: 'Helpt vluchtelingen, expats en jongeren uit de jeugdzorg betekenisvol werk te vinden in Nederland. Iedereen verdient een eerlijke kans. Werk is de sleutel tot integratie, onafhankelijkheid en het opbouwen van een toekomst.',
        photo: '/images/team/floris_square.jpeg',
        linkedin: 'https://www.linkedin.com/in/floris-deijnen/',
        email: 'floris@ukraine2work.nl',
        phone: '+31644185220',
        label: 'Matchmaker',
        ukrainian: false
      }
    ],
    en: [
      {
        name: 'Alex Spaan',
        role: 'Founder & CEO',
        bio: 'Founder & CEO @ Ukraine2Work | Startup School Pioneer | Skill-Based Job Platform for Refugees | Connecting Talent to Opportunity through AI, LLM & Human Support',
        photo: '/images/team/alexSpaan_square.webp',
        linkedin: 'https://www.linkedin.com/in/alex-spaan/',
        email: 'alex@ukraine2work.nl',
        phone: '+31638473157',
        label: 'CEO',
        ukrainian: false
      },
      {
        name: 'Floris Deijnen',
        role: 'Work & Talent Matchmaker',
        bio: 'Helping refugees, expats and young adults in youth care find meaningful work in the Netherlands. Everyone deserves a fair chance. Employment is key to integration, independence, and building a future.',
        photo: '/images/team/floris_square.jpeg',
        linkedin: 'https://www.linkedin.com/in/floris-deijnen/',
        email: 'floris@ukraine2work.nl',
        phone: '+31644185220',
        label: 'Matchmaker',
        ukrainian: false
      }
    ],
    uk: [
      {
        name: 'Алекс Спаан',
        role: 'Засновник і CEO',
        bio: 'Засновник і CEO @ Ukraine2Work | Піонер Startup School | Платформа для пошуку роботи на основі навичок для біженців | З\'єднує талант з можливостями через ШІ, LLM і людську підтримку',
        photo: '/images/team/alexSpaan_square.webp',
        linkedin: 'https://www.linkedin.com/in/alex-spaan/',
        email: 'alex@ukraine2work.nl',
        phone: '+31638473157',
        label: 'CEO',
        ukrainian: false
      },
      {
        name: 'Флоріс Дейнен',
        role: 'Спеціаліст з підбору роботи та талантів',
        bio: 'Допомагає біженцям, експатам та молоді з молодіжної опіки знайти значущу роботу в Нідерландах. Кожен заслуговує на справедливий шанс. Робота є ключем до інтеграції, незалежності та побудови майбутнього.',
        photo: '/images/team/floris_square.jpeg',
        linkedin: 'https://www.linkedin.com/in/floris-deijnen/',
        email: 'floris@ukraine2work.nl',
        phone: '+31644185220',
        label: 'Спеціаліст',
        ukrainian: false
      }
    ]
  };

  return teamData[locale.value] || teamData.nl;
});

const displayedMembers = computed(() => {
  return props.showAll ? teamMembers.value : teamMembers.value.slice(0, props.previewCount);
});
</script>

<style scoped>
/* Component styles */
</style>