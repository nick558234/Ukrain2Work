<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <h2 class="text-center text-ukraine-blue text-2xl md:text-3xl lg:text-4xl mb-12">
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
          :class="activeTab === 'refugees' ? 'bg-ukraine-blue text-white' : 'bg-white text-ukraine-blue'"
          @click="activeTab = 'refugees'"
        >
          {{ $t('testimonials.tabs.refugees') }}
        </button>
      </div>
      
      <!-- Testimonials -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in filteredTestimonials" :key="index" class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                :src="`/images/testimonials/${testimonial.type}-${testimonial.id}.jpg`"
                :alt="testimonial.name"
                class="h-14 w-14 rounded-full object-cover border-2 border-white"
                width="56"
                height="56"
                :onerror="`this.src='https://placehold.co/56x56/e9f5ff/0057b8?text=${testimonial.name.charAt(0)}'`"
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
            <img 
              :src="`/images/testimonials/${testimonial.userType}-${testimonial.id}.jpg`" 
              :alt="`${testimonial.name} portrait`"
              class="w-full h-full object-cover"
              width="96"
              height="96"
              :onerror="`this.src='https://placehold.co/96x96/e9f5ff/0057b8?text=${testimonial.name.split(' ').map(n => n[0]).join('')}'`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const props = defineProps({
  defaultTab: {
    type: String,
    default: 'employers',
    validator: (value) => ['employers', 'refugees'].includes(value)
  }
});

const activeTab = ref(props.defaultTab);

// Get testimonials from translation files
const testimonials = computed(() => {
  try {
    // Get current messages from i18n
    const messages = locale.value === 'nl' ? 
      require('@/i18n/lang/nl.json') : 
      locale.value === 'uk' ? 
        require('@/i18n/lang/uk.json') : 
        require('@/i18n/lang/en.json');
    
    const employersData = messages.testimonials?.employers || [];
    const refugeesData = messages.testimonials?.refugees || [];
    
    // Combine and add type field
    const combined = [
      ...employersData.map(item => ({ ...item, type: 'employers' })),
      ...refugeesData.map(item => ({ ...item, type: 'refugees' }))
    ];
    
    return combined;
  } catch (error) {
    console.warn('Error loading testimonials from translation files:', error);
    // Fallback to working with t() function
    return getFallbackTestimonials();
  }
});

// Fallback function to get testimonials using t()
const getFallbackTestimonials = () => {
  const employersTestimonials = [
    {
      id: 1,
      name: t('testimonials.employers.0.name', 'Jan De Vries'),
      role: t('testimonials.employers.0.role', 'HR Manager, Tech Solutions NL'),
      quote: t('testimonials.employers.0.quote', 'Ukraine2Work made it incredibly easy to find qualified Ukrainian professionals.'),
      type: 'employers'
    },
    {
      id: 2,
      name: t('testimonials.employers.1.name', 'Maria Jansen'),
      role: t('testimonials.employers.1.role', 'CEO, Amsterdam Retail Group'),
      quote: t('testimonials.employers.1.quote', 'We were able to welcome three Ukrainian team members within weeks.'),
      type: 'employers'
    },
    {
      id: 3,
      name: t('testimonials.employers.2.name', 'Alex Spaan'),
      role: t('testimonials.employers.2.role', 'Owner, Ukraine2Work'),
      quote: t('testimonials.employers.2.quote', 'Our mission is to connect talented Ukrainian professionals with Dutch employers.'),
      type: 'employers'
    }
  ];

  const refugeesTestimonials = [
    {
      id: 1,
      name: t('testimonials.refugees.0.name', 'Olena Kovalenko'),
      role: t('testimonials.refugees.0.role', 'Software Developer'),
      quote: t('testimonials.refugees.0.quote', 'Within two weeks of creating my profile, I had three interviews and a job offer.'),
      type: 'refugees'
    },
    {
      id: 2,
      name: t('testimonials.refugees.1.name', 'Andriy Shevchenko'),
      role: t('testimonials.refugees.1.role', 'Marketing Specialist'),
      quote: t('testimonials.refugees.1.quote', 'The platform made it easy to connect with Dutch employers.'),
      type: 'refugees'
    },
    {
      id: 3,
      name: t('testimonials.refugees.2.name', 'Natalia Bondar'),
      role: t('testimonials.refugees.2.role', 'Financial Analyst'),
      quote: t('testimonials.refugees.2.quote', 'Ukraine2Work helped me restart my career in the Netherlands.'),
      type: 'refugees'
    }
  ];

  return [...employersTestimonials, ...refugeesTestimonials];
};

const filteredTestimonials = computed(() => {
  return testimonials.value.filter(testimonial => testimonial.type === activeTab.value);
});
</script>