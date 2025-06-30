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

      <div class="flex justify-center mt-10">
        <button @click="openModal" class="px-6 py-3 bg-ukraine-blue text-white rounded-md font-semibold shadow hover:bg-ukraine-yellow hover:text-ukraine-blue transition-colors">
          {{ $t('howItWorks.moreInfo') }}
        </button>
      </div>
    </div>

    <!-- Onboarding Modal -->
    <transition name="fade">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative animate-fadeIn">
          <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-ukraine-blue text-2xl focus:outline-none">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="py-10 px-6 md:px-12 text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-ukraine-blue">{{ $t('howItWorks.modal.title') }}</h2>
            <p class="text-gray-600 mb-6">{{ $t('howItWorks.modal.subtitle') }}</p>
            <div class="flex items-center justify-center space-x-4 mb-6">
              <button @click="prevStep" :disabled="modalStep === 0" class="p-2 rounded-full bg-gray-100 hover:bg-ukraine-yellow transition disabled:opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span class="sr-only">{{ $t('howItWorks.modal.prev') }}</span>
              </button>
              <div class="flex flex-col items-center p-4 rounded-lg shadow-lg bg-gray-50 w-64 md:w-80">
                <img :src="getStepImg(modalSteps[modalStep].img)" alt="Step image" class="w-full h-48 object-cover rounded mb-2 transition duration-300" />
                <h3 class="text-lg font-semibold text-ukraine-blue mb-1">{{ modalSteps[modalStep].step }}</h3>
                <p class="text-gray-700 text-sm">{{ modalSteps[modalStep].stepText }}</p>
              </div>
              <button @click="nextStep" :disabled="modalStep === modalSteps.length - 1" class="p-2 rounded-full bg-gray-100 hover:bg-ukraine-yellow transition disabled:opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="sr-only">{{ $t('howItWorks.modal.next') }}</span>
              </button>
            </div>
            <div class="flex justify-center space-x-2 mb-2">
              <span v-for="(s, i) in modalSteps.length" :key="i" class="w-3 h-3 rounded-full" :class="i === modalStep ? 'bg-ukraine-blue' : 'bg-gray-300'" />
            </div>
            <button @click="closeModal" class="mt-4 px-6 py-2 bg-ukraine-blue text-white rounded hover:bg-ukraine-yellow hover:text-ukraine-blue font-semibold transition">
              {{ $t('howItWorks.modal.close') }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  userType: {
    type: String,
    default: 'refugees',
    validator: (value) => ['employers', 'refugees'].includes(value)
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
          title: t('howItWorks.steps.refugees.0.title'),
          description: t('howItWorks.steps.refugees.0.description')
        },
        { 
          title: t('howItWorks.steps.refugees.1.title'),
          description: t('howItWorks.steps.refugees.1.description')
        },
        { 
          title: t('howItWorks.steps.refugees.2.title'),
          description: t('howItWorks.steps.refugees.2.description')
        }
      ];
});

// Modal logic
const showModal = ref(false);
const modalStep = ref(0);
const openModal = () => {
  showModal.value = true;
  modalStep.value = 0;
};
const closeModal = () => {
  showModal.value = false;
};
const nextStep = () => {
  if (modalStep.value < modalSteps.length - 1) modalStep.value++;
};
const prevStep = () => {
  if (modalStep.value > 0) modalStep.value--;
};

const modalSteps = [
  {
    img: '/images/onboarding/step1.png',
    step: 'Stap 1',
    stepText: 'Waar wil je werken?'
  },
  {
    img: '/images/onboarding/step2.png',
    step: 'Stap 2',
    stepText: 'Wat is je werk/denk niveau?'
  },
  {
    img: '/images/onboarding/step3.png',
    step: 'Stap 3',
    stepText: 'Jouw vaardighedenprofiel'
  },
  {
    img: '/images/onboarding/step4.png',
    step: 'Stap 4',
    stepText: 'Kies je belangrijkste vaardigheden'
  }
];

const getStepImg = (img) => {
  // Try to use public folder first
  return img;
  // If you want to use assets, use:
  // return new URL(`../assets/onboarding/${img.split('/').pop()}`, import.meta.url).href;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>