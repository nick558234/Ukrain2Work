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
            <span>{{ $t(item.question) }}</span>
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
            <p>{{ $t(item.answer) }}</p>
            
            <div v-if="item.links && item.links.length" class="mt-4">
              <p class="text-gray-600 font-medium">{{ $t('contact.faq.usefulLinks') }}:</p>
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li v-for="(link, i) in item.links" :key="i">
                  <NuxtLink :to="link.url" class="text-ukraine-blue hover:underline">
                    {{ $t(link.text) }}
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

// FAQ data now references translation keys
const faqs = [
  {
    question: 'contact.faq.q1.question',
    answer: 'contact.faq.q1.answer',
    links: [
      {
        text: 'contact.faq.q1.link1.text',
        url: 'https://ind.nl/en/ukraine/Pages/Working-in-the-Netherlands.aspx'
      }
    ]
  },
  {
    question: 'contact.faq.q2.question',
    answer: 'contact.faq.q2.answer',
    links: []
  },
  {
    question: 'contact.faq.q3.question',
    answer: 'contact.faq.q3.answer',
    links: [
      {
        text: 'contact.faq.q3.link1.text',
        url: '/resources/credential-evaluation'
      }
    ]
  },
  {
    question: 'contact.faq.q4.question',
    answer: 'contact.faq.q4.answer',
    links: []
  },
  {
    question: 'contact.faq.q5.question',
    answer: 'contact.faq.q5.answer',
    links: [
      {
        text: 'contact.faq.q5.link1.text',
        url: '/resources/housing'
      },
      {
        text: 'contact.faq.q5.link2.text',
        url: '/resources/shelter'
      }
    ]
  },
  {
    question: 'contact.faq.q6.question',
    answer: 'contact.faq.q6.answer',
    links: [
      {
        text: 'contact.faq.q6.link1.text',
        url: '/resources/salary-guide'
      }
    ]
  },
  {
    question: 'contact.faq.q7.question',
    answer: 'contact.faq.q7.answer',
    links: [
      {
        text: 'contact.faq.q7.link1.text',
        url: '/employers/incentives'
      }
    ]
  },
  {
    question: 'contact.faq.q8.question',
    answer: 'contact.faq.q8.answer',
    links: [
      {
        text: 'contact.faq.q8.link1.text',
        url: '/resources/cv-templates'
      },
      {
        text: 'contact.faq.q8.link2.text',
        url: '/resources/cv-review'
      }
    ]
  }
];
</script>