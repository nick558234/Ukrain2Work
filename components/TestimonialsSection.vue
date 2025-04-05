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
          <div class="flex items-center mb-4">
            <img 
              :src="testimonial.imageSrc" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="ml-4">
              <h4 class="font-bold">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="bg-ukraine-yellow bg-opacity-10 p-4 rounded-md italic">
            <p>{{ testimonial.quote }}</p>
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

// Mock testimonials data
// In a real application, this would come from an API or CMS
const testimonials = [
  {
    type: 'employers',
    name: 'Jan De Vries',
    role: 'HR Manager, Tech Solutions NL',
    imageSrc: '/img/testimonials/employer-1.jpg',
    quote: 'Ukraine2Work made it incredibly easy to find qualified Ukrainian professionals. The process was smooth and we found a perfect match for our development team.'
  },
  {
    type: 'employers',
    name: 'Maria Jansen',
    role: 'CEO, Amsterdam Retail Group',
    imageSrc: '/img/testimonials/employer-2.jpg',
    quote: 'We were able to welcome three Ukrainian team members within weeks. Their skills and work ethic have been outstanding, and the integration was seamless.'
  },
  {
    type: 'employers',
    name: 'Peter Bakker',
    role: 'Owner, Bakker Construction',
    imageSrc: '/img/testimonials/employer-3.jpg',
    quote: 'The clarity around work permits and legal requirements was very helpful. We found skilled workers who have become invaluable to our projects.'
  },
  {
    type: 'jobseekers',
    name: 'Olena Kovalenko',
    role: 'Software Developer',
    imageSrc: '/img/testimonials/jobseeker-1.jpg',
    quote: 'Within two weeks of creating my profile, I had three interviews and a job offer. Ukraine2Work helped me start my new life in the Netherlands.'
  },
  {
    type: 'jobseekers',
    name: 'Andriy Shevchenko',
    role: 'Logistics Specialist',
    imageSrc: '/img/testimonials/jobseeker-2.jpg',
    quote: 'I was concerned about the language barrier, but found many opportunities where English was sufficient. My new employer even offers Dutch lessons.'
  },
  {
    type: 'jobseekers',
    name: 'Natalia Ivanenko',
    role: 'Accountant',
    imageSrc: '/img/testimonials/jobseeker-3.jpg',
    quote: 'The platform made it easy to showcase my qualifications to Dutch employers. The process was straightforward and I found a welcoming workplace.'
  }
];

const filteredTestimonials = computed(() => {
  return testimonials.filter(testimonial => testimonial.type === activeTab.value);
});
</script>