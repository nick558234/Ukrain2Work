<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <h2 class="text-center text-ukraine-blue mb-12">
        {{ $t('testimonials.title') }}
      </h2>
      
      <!-- Tabs -->
      <div class="flex justify-center mb-8">
        <button 
          class="px-6 py-2 rounded-l-md font-medium transition-colors duration-200"
          :class="activeTab === 'employers' ? 'bg-ukraine-blue text-white' : 'bg-white text-ukraine-blue'"
          @click="activeTab = 'employers'"
        >
          {{ $t('testimonials.tabs.employers') }}
        </button>
        <button 
          class="px-6 py-2 rounded-r-md font-medium transition-colors duration-200"
          :class="activeTab === 'jobseekers' ? 'bg-ukraine-blue text-white' : 'bg-white text-ukraine-blue'"
          @click="activeTab = 'jobseekers'"
        >
          {{ $t('testimonials.tabs.jobseekers') }}
        </button>
      </div>
      
      <!-- Testimonials -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in filteredTestimonials" :key="index" class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <NuxtImg
                :src="`/images/testimonials/${testimonial.type}-${testimonial.id}.jpg`"
                :alt="testimonial.name"
                class="h-14 w-14 rounded-full object-cover border-2 border-white"
                width="56"
                height="56"
                placeholder
                :fallback="`https://placehold.co/56x56/e9f5ff/0057b8?text=${testimonial.name.charAt(0)}`"
              />
            </div>
            <div>
              <div class="text-base font-medium text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.role }}</div>
            </div>
          </div>
          <div class="bg-ukraine-yellow bg-opacity-10 p-4 rounded-md italic">
            <p>{{ testimonial.quote }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonial content with profile image -->
      <div class="max-w-3xl mx-auto text-center pt-8">
        <div 
          v-for="(testimonial, i) in filteredTestimonials" 
          :key="i"
          class="space-y-6"
          v-show="i === activeTestimonial"
        >
          <div class="mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-ukraine-yellow">
            <NuxtImg 
              :src="`/images/testimonials/${testimonial.userType}-${testimonial.id}.jpg`" 
              :alt="`${testimonial.name} portrait`"
              class="w-full h-full object-cover"
              width="96"
              height="96"
              placeholder
              :fallback="`https://placehold.co/96x96/e9f5ff/0057b8?text=${testimonial.name.split(' ').map(n => n[0]).join('')}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  defaultTab: {
    type: String,
    default: 'employers',
    validator: (value) => ['employers', 'jobseekers'].includes(value)
  }
});

const activeTab = ref(props.defaultTab);

// Generate placeholder images for Alex Spaan (the business owner)
const getTestimonialImageSrc = (testimonial) => {
  try {
    return `/images/testimonials/${testimonial.type}-${testimonial.id}.jpg`;
  } catch (e) {
    // Return placeholder for each testimonial type with colored backgrounds
    const bgColor = testimonial.type === 'employers' ? '0057b8' : 'ffd700';
    const textColor = testimonial.type === 'employers' ? 'ffffff' : '000000';
    return `https://placehold.co/96x96/${bgColor}/${textColor}?text=${testimonial.name.charAt(0)}`;
  }
};

// Mock testimonials data with added ID field
// In a real application, this would come from an API or CMS
const testimonials = [
  {
    id: 1,
    type: 'employers',
    name: 'Jan De Vries',
    role: 'HR Manager, Tech Solutions NL',
    quote: 'Ukraine2Work made it incredibly easy to find qualified Ukrainian professionals. The process was smooth and we found a perfect match for our development team.'
  },
  {
    id: 2,
    type: 'employers',
    name: 'Maria Jansen',
    role: 'CEO, Amsterdam Retail Group',
    quote: 'We were able to welcome three Ukrainian team members within weeks. Their skills and work ethic have been outstanding, and the integration was seamless.'
  },
  {
    id: 3,
    type: 'employers',
    name: 'Alex Spaan',
    role: 'Owner, Ukraine2Work',
    quote: 'Our mission is to connect talented Ukrainian professionals with Dutch employers. I\'ve seen firsthand how these connections transform lives and businesses.'
  },
  {
    id: 1,
    type: 'jobseekers',
    name: 'Olena Kovalenko',
    role: 'Software Developer',
    quote: 'Within two weeks of creating my profile, I had three interviews and a job offer. Ukraine2Work helped me start my new life in the Netherlands.'
  },
  {
    id: 2,
    type: 'jobseekers',
    name: 'Andriy Shevchenko',
    role: 'Logistics Specialist',
    quote: 'I was concerned about the language barrier, but found many opportunities where English was sufficient. My new employer even offers Dutch lessons.'
  },
  {
    id: 3,
    type: 'jobseekers',
    name: 'Natalia Ivanenko',
    role: 'Accountant',
    quote: 'The platform made it easy to showcase my qualifications to Dutch employers. The process was straightforward and I found a welcoming workplace.'
  }
];

const filteredTestimonials = computed(() => {
  return testimonials.filter(testimonial => testimonial.type === activeTab.value);
});
</script>