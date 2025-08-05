<template>
  <div>   
    <main>
      <!-- Hero Section -->
<section class="bg-gradient-to-br from-ukraine-blue/10 via-white to-ukraine-yellow/10 py-16 md:py-20 border-b border-gray-200 flex items-center justify-center">
  <div class="container mx-auto px-4">
    <div class="max-w-3xl mx-auto text-center animate-fade-in motion-safe:animate-fade-in delay-100 duration-700 ease-out">
      
      <!-- Titel -->
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-ukraine-blue leading-snug tracking-tight drop-shadow-sm text-balance text-center">
        {{ $t('refugees.hero.title') }}
      </h1>

      <!-- Subtitel -->
      <p class="text-lg md:text-xl mb-10 text-gray-700 leading-relaxed text-balance max-w-2xl mx-auto text-center">
        {{ $t('refugees.hero.subtitle') }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        
        <!-- CTA: Register -->
        <AppButton 
          :href="`https://ukraine2work.8vance.com/?language=${$i18n.locale}&authState=register`"
          target="_blank"
          color="outline"
          size="lg"
          class="group flex  gap-2 px-6 py-3 rounded-xl bg-ukraine-blue text-white hover:bg-ukraine-blue/90 hover:scale-105 transition duration-300 shadow-md focus-visible:ring-4 focus-visible:ring-ukraine-yellow focus-visible:ring-offset-2"
        >
          {{ $t('refugees.hero.cta') }}
        </AppButton>

        <!-- CTA: Contact -->
        <AppButton 
          to="contact"
          color="outline-white"
          size="lg"
          class="group flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-ukraine-blue text-ukraine-blue hover:bg-ukraine-blue hover:text-white hover:scale-105 transition duration-300 shadow-md focus-visible:ring-4 focus-visible:ring-ukraine-yellow focus-visible:ring-offset-2"
        >
          {{ $t('refugees.hero.contact') }}
        </AppButton>

      </div>
    </div>
  </div>
</section>

      <!-- Video Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">{{ $t('refugees.video.title') }}</h2>
            <p class="text-xl mb-8">{{ $t('refugees.video.description') }}</p>
            <div class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <iframe 
                :src="videoUrl"
                :title="$t('refugees.video.title')"
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




      <!-- White vs Black Work Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('refugees.whiteVsBlack.title') }}</h2>
          
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- White Work -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-2 border-green-500">
              <div class="flex items-center mb-6">
                <span class="text-4xl mr-3">👍</span>
                <h3 class="text-2xl font-bold text-green-600">{{ $t('refugees.whiteVsBlack.white.title') }}</h3>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.white.socialSecurity') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.pension') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.paidLeave') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.paidAccident') }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.white.safety') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.accidentInsurance') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.unemploymentBenefit') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.collectiveAgreement') }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.white.bonuses') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.thirteenthMonth') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.holidayAllowance') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.salaryIncrease') }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.white.contract') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.noticePeriod') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.noticeTime') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-green-500 mr-2">✓</span>
                      {{ $t('refugees.whiteVsBlack.white.reference') }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Black Work -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-2 border-red-500">
              <div class="flex items-center mb-6">
                <span class="text-4xl mr-3">👎</span>
                <h3 class="text-2xl font-bold text-red-600">{{ $t('refugees.whiteVsBlack.black.title') }}</h3>
              </div>
              
              <div class="space-y-6">
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.black.socialSecurity') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noPension') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noPaidLeave') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.payAccidentYourself') }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.black.risks') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noInsurance') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noUnemploymentBenefit') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noCollectiveAgreement') }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.black.fines') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.taxFine') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.fineAmount') }}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-lg mb-2">{{ $t('refugees.whiteVsBlack.black.contractless') }}</h4>
                  <ul class="space-y-1">
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noNoticePeriod') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.noReference') }}
                    </li>
                    <li class="flex items-center">
                      <span class="text-red-500 mr-2">✗</span>
                      {{ $t('refugees.whiteVsBlack.black.immediateDismissal') }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Statistics -->
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <div class="bg-white rounded-xl shadow-lg p-8 text-center">
              <div class="text-5xl font-bold text-red-600 mb-2">100%</div>
              <p class="text-lg">{{ $t('refugees.whiteVsBlack.statistics.fine') }}</p>
            </div>
            <div class="bg-white rounded-xl shadow-lg p-8 text-center">
              <div class="text-5xl font-bold text-red-600 mb-2">5-10%</div>
              <p class="text-lg">{{ $t('refugees.whiteVsBlack.statistics.undeclared') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Information Section -->
      <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('refugees.information.title') }}</h2>
          
          <div class="max-w-4xl mx-auto">
            <!-- Matchmaking -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
              <h3 class="text-2xl font-bold mb-6">{{ $t('refugees.information.matchmaking.title') }}</h3>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-blue-50 p-6 rounded-lg">
                  <h4 class="font-bold text-lg mb-3">{{ $t('refugees.information.matchmaking.softSkills.title') }}</h4>
                  <p>{{ $t('refugees.information.matchmaking.softSkills.description') }}</p>
                </div>
                <div class="bg-blue-50 p-6 rounded-lg">
                  <h4 class="font-bold text-lg mb-3">{{ $t('refugees.information.matchmaking.hardSkills.title') }}</h4>
                  <p>{{ $t('refugees.information.matchmaking.hardSkills.description') }}</p>
                </div>
                <div class="bg-blue-50 p-6 rounded-lg">
                  <h4 class="font-bold text-lg mb-3">{{ $t('refugees.information.matchmaking.workExperience.title') }}</h4>
                  <p>{{ $t('refugees.information.matchmaking.workExperience.description') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Legal Information -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 class="text-2xl font-bold mb-6">{{ $t('refugees.information.legal.title') }}</h3>
              <p class="mb-6">{{ $t('refugees.information.legal.description') }}</p>
              
              <h4 class="font-bold text-lg mb-4">{{ $t('refugees.information.legal.rules.title') }}</h4>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-ukraine-blue text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-bold">{{ $t('refugees.information.legal.rules.workPermit.title') }}</h5>
                    <p>{{ $t('refugees.information.legal.rules.workPermit.description') }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-ukraine-blue text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-bold">{{ $t('refugees.information.legal.rules.equalRights.title') }}</h5>
                    <p>{{ $t('refugees.information.legal.rules.equalRights.description') }}</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-ukraine-blue text-white rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-bold">{{ $t('refugees.information.legal.rules.temporaryProtection.title') }}</h5>
                    <p>{{ $t('refugees.information.legal.rules.temporaryProtection.description') }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- How to Find Work -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 class="text-2xl font-bold mb-6">{{ $t('refugees.information.howToFindWork.title') }}</h3>
              <p class="mb-6">{{ $t('refugees.information.howToFindWork.description') }}</p>
              <div class="flex justify-center">
                <AppButton 
                  :href="`https://ukraine2work.8vance.com/?language=${$i18n.locale}&authState=register`"
                  target="_blank"
                  color="primary"
                  size="lg"
                >
                  {{ $t('refugees.information.howToFindWork.cta') }}
                </AppButton>
              </div>
            </div>
            
            <!-- Contact -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 class="text-2xl font-bold mb-6">{{ $t('refugees.information.contact.title') }}</h3>
              <p class="mb-6">{{ $t('refugees.information.contact.description') }}</p>
              <div class="flex justify-center">
                <AppButton 
                  to="contact"
                  color="outline"
                  size="lg"
                >
                  {{ $t('refugees.information.contact.cta') }}
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">{{ $t('refugees.faq.title') }}</h2>
          
          <div class="max-w-3xl mx-auto">
            <div class="space-y-6">
              <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-xl font-bold mb-3">{{ $t('refugees.faq.residencePermit.question') }}</h3>
                <p>{{ $t('refugees.faq.residencePermit.answer') }}</p>
              </div>
              
              <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-xl font-bold mb-3">{{ $t('refugees.faq.volunteer.question') }}</h3>
                <p>{{ $t('refugees.faq.volunteer.answer') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const videoUrl = computed(() => {
  // Use YouTube embedded videos based on language
  return locale.value === 'uk'
    ? 'https://www.youtube.com/embed/ir1SFnwL3_w?si=Ut0mzYhGSwrgLHGv'
    : 'https://www.youtube.com/embed/cuLfJyW0KiA?si=oNJh4qJ_rD8j7xZ_';
});

// SEO meta tags for refugees/job seekers page
useSeoMeta({
  title: 'Werk in Nederland voor Oekraïense Vluchtelingen',
  description: 'Vind werk in Nederland als Oekraïense vluchteling met Ukraine2Work. Gratis registratie, skill-based matching, Nederlandse werkgevers.',
  keywords: 'Ukraine2Work work, Ukraine 2 Work jobs, werk Nederland, Oekraïense vluchtelingen werk, job search Ukraine, Ukrainian jobs Netherlands, work permit, skilled jobs',
  author: 'Ukraine2Work',
  robots: 'index, follow',
  
  // Open Graph
  ogTitle: 'Werk in Nederland voor Oekraïense Vluchtelingen',
  ogDescription: 'Vind werk in Nederland als Oekraïense vluchteling met Ukraine2Work. Gratis registratie, skill-based matching, Nederlandse werkgevers.',
  ogUrl: 'https://ukraine2work.nl/refugees',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Werk in Nederland voor Oekraïense Vluchtelingen',
  twitterDescription: 'Vind werk in Nederland als Oekraïense vluchteling met Ukraine2Work. Gratis registratie, skill-based matching, Nederlandse werkgevers.'
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl/refugees' }
  ]
})
</script>