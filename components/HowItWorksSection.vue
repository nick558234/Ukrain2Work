<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h2 class="text-center text-ukraine-blue text-2xl md:text-3xl lg:text-4xl mb-12">
        {{ $t('howItWorks.title') }}
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-ukraine-yellow text-ukraine-blue font-bold text-2xl mb-4">
            {{ index + 1 }}
          </div>
          <h3 class="text-lg font-bold mb-2">{{ step.title }}</h3>
          <p class="text-gray-600">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  userType: {
    type: String,
    default: 'jobseekers',
    validator: (value) => ['employers', 'jobseekers'].includes(value)
  }
});

const steps = computed(() => {
  return props.userType === 'employers'
    ? [
        { 
          title: t('howItWorks.steps.employers.0.title'),
          description: t('howItWorks.steps.employers.0.description')
        },
        { 
          title: t('howItWorks.steps.employers.1.title'),
          description: t('howItWorks.steps.employers.1.description')
        },
        { 
          title: t('howItWorks.steps.employers.2.title'),
          description: t('howItWorks.steps.employers.2.description')
        }
      ]
    : [
        { 
          title: t('howItWorks.steps.jobseekers.0.title'),
          description: t('howItWorks.steps.jobseekers.0.description')
        },
        { 
          title: t('howItWorks.steps.jobseekers.1.title'),
          description: t('howItWorks.steps.jobseekers.1.description')
        },
        { 
          title: t('howItWorks.steps.jobseekers.2.title'),
          description: t('howItWorks.steps.jobseekers.2.description')
        }
      ];
});
</script>