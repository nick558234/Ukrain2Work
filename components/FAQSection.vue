<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-ukraine-blue text-center mb-12">{{ $t('contact.faq.title') }}</h2>
      
      <div class="max-w-4xl mx-auto">
        <div 
          v-for="(item, index) in faqs" 
          :key="index"
          class="border-b border-gray-200 last:border-0"
        >
          <button
            @click="toggleFaq(index)"
            class="flex justify-between items-center w-full py-5 text-left font-medium focus:outline-none"
            :class="openFaq === index ? 'text-ukraine-blue' : 'text-gray-900'"
          >
            <span>{{ item.question }}</span>
            <svg 
              class="h-5 w-5 transition-transform duration-200" 
              :class="openFaq === index ? 'transform rotate-180 text-ukraine-blue' : 'text-gray-500'"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="openFaq === index" 
            class="pb-5 prose max-w-none"
          >
            <p>{{ item.answer }}</p>
            
            <div v-if="item.links && item.links.length" class="mt-4">
              <p class="text-gray-600 font-medium">{{ $t('contact.faq.usefulLinks') }}:</p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li v-for="(link, i) in item.links" :key="i">
                  <NuxtLink :to="link.url" class="text-ukraine-blue hover:underline">
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <p class="mb-6">{{ $t('contact.faq.stillHaveQuestions') }}</p>
        <NuxtLink 
          to="/contact?subject=other" 
          class="inline-flex items-center px-6 py-3 bg-ukraine-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {{ $t('contact.faq.contactUs') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const openFaq = ref(null);

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};

// FAQ data - in a real app this would come from i18n or an API
const faqs = [
  {
    question: 'Do Ukrainian refugees need a work permit in the Netherlands?',
    answer: 'No, Ukrainian refugees do not need a separate work permit to work in the Netherlands. Once you have received your temporary protection status and BSN number, you can legally work for any employer in the Netherlands.',
    links: [
      {
        text: 'Official Dutch government information',
        url: 'https://ind.nl/en/ukraine/Pages/Working-in-the-Netherlands.aspx'
      }
    ]
  },
  {
    question: 'Is Ukraine2Work free to use for job seekers?',
    answer: 'Yes, Ukraine2Work is completely free for Ukrainian job seekers. There are no fees or charges for creating an account, building a profile, searching for jobs, or applying to positions.',
    links: []
  },
  {
    question: 'How can employers verify Ukrainian qualifications?',
    answer: 'The Netherlands has institutions that can help evaluate and recognize Ukrainian diplomas and qualifications. We can assist employers in contacting these credential evaluation services and guide them through the process.',
    links: [
      {
        text: 'IDW (International Credential Evaluation)',
        url: '/resources/credential-evaluation'
      }
    ]
  },
  {
    question: 'What languages do I need to know to work in the Netherlands?',
    answer: 'Language requirements depend on the specific job. Many international companies operate in English, and for these positions, Ukrainian candidates often only need English proficiency. For other positions, Dutch may be required. Our job listings clearly indicate language requirements.',
    links: []
  },
  {
    question: 'How can I find housing in the Netherlands?',
    answer: 'While Ukraine2Work focuses primarily on employment, we understand housing is a critical need. We have partnerships with organizations that provide temporary housing assistance for Ukrainian refugees, and our resources section has information about finding long-term accommodation.',
    links: [
      {
        text: 'Housing resources for Ukrainians',
        url: '/resources/housing'
      },
      {
        text: 'Government temporary shelter information',
        url: '/resources/shelter'
      }
    ]
  },
  {
    question: 'What salary can I expect in the Netherlands?',
    answer: 'Salaries depend on your field, experience level, and location within the Netherlands. The Dutch minimum wage is €1,934.40 per month (as of 2023) for full-time work for adults. Many professional positions offer higher salaries. Our job listings include salary information when available.',
    links: [
      {
        text: 'Salary guide by industry',
        url: '/resources/salary-guide'
      }
    ]
  },
  {
    question: 'Can employers get tax benefits for hiring Ukrainian refugees?',
    answer: 'Dutch employers may be eligible for various subsidies and tax benefits when hiring Ukrainian refugees, depending on circumstances. These can include wage cost subsidies and tax breaks for job training. Our employer resources guide covers available programs in detail.',
    links: [
      {
        text: 'Employer incentives guide',
        url: '/employers/incentives'
      }
    ]
  },
  {
    question: 'How can I improve my CV for the Dutch job market?',
    answer: 'The Dutch job market has specific preferences for CV formatting and content. We provide free CV templates specifically designed for Ukrainian professionals entering the Dutch job market, as well as personalized resume review services through our partner organizations.',
    links: [
      {
        text: 'Download CV templates',
        url: '/resources/cv-templates'
      },
      {
        text: 'Book a free CV review',
        url: '/resources/cv-review'
      }
    ]
  }
];
</script>