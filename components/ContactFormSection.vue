<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact form -->
        <div>
          <h2 class="text-ukraine-blue mb-6">{{ t('contact.form.title') }}</h2>
          <p class="mb-8">{{ t('contact.form.description') }}</p>
          


          <form @submit.prevent="submitContactForm" class="space-y-6">
    <!-- Appointment Modal -->
    <div 
      v-if="showModal" 
      class="modal fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300" 
      aria-modal="true" 
      role="dialog"
      @click="closeModal"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 mx-2 relative" @click.stop>
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold">{{ t('contact.form.makeAppointment') }}</h3>
          <button 
            @click="closeModal" 
            class="text-2xl font-bold text-gray-500 hover:text-gray-800 transition-colors duration-150" 
            aria-label="Sluit modal"
          >
            &times;
          </button>
        </div>
        <div class="mb-4 p-3 bg-blue-50 border-l-4 border-[#0057B8] rounded text-sm text-gray-800">
          <strong>{{ t('contact.form.note') }}</strong> {{ t('contact.form.noteDetail') }}
        </div>
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ12wo0kN60_uvYB2URSbtYLAj-xlEvySc9FDqhLFuFKubHFwi9FSq6CH2kT9OPQY8zW94KSzadF?gv=true" 
          style="border: 0; border-radius: 1rem;" 
          width="100%" 
          height="500" 
          frameborder="0" 
          aria-label="Afspraak plannen"
        ></iframe>
      </div>
    </div>
            <div>
              <label for="name" class="block text-gray-700 font-medium mb-2">{{ t('contact.form.name') }}</label>
              <input
                id="name"
                v-model="contactForm.name"
                type="text"
                :class="['w-full px-4 py-2 border rounded-md focus:outline-none', 
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-ukraine-blue']"
                @blur="validateField('name')"
              />
              <p v-if="errors.name" class="mt-1 text-red-500 text-sm">{{ errors.name }}</p>
            </div>
            
            <div>
              <label for="email" class="block text-gray-700 font-medium mb-2">{{ t('contact.form.email') }}</label>
              <input
                id="email"
                v-model="contactForm.email"
                type="email"
                :class="['w-full px-4 py-2 border rounded-md focus:outline-none', 
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-ukraine-blue']"
                @blur="validateField('email')"
              />
              <p v-if="errors.email" class="mt-1 text-red-500 text-sm">{{ errors.email }}</p>
            </div>
            
            <div>
              <label for="subject" class="block text-gray-700 font-medium mb-2">{{ t('contact.form.subject') }}</label>
              <select
                id="subject"
                v-model="contactForm.subject"
                :class="['w-full px-4 py-2 border rounded-md focus:outline-none', 
                  errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-ukraine-blue']"
                @blur="validateField('subject')"
              >
                <option value="">{{ t('contact.form.selectSubject') }}</option>
                <option value="employer-question">{{ t('contact.form.subjects.employer') }}</option>
                <option value="jobseeker-question">{{ t('contact.form.subjects.jobseeker') }}</option>
                <option value="partnership">{{ t('contact.form.subjects.partnership') }}</option>
                <option value="technical-issue">{{ t('contact.form.subjects.technical') }}</option>
                <option value="other">{{ t('contact.form.subjects.other') }}</option>
              </select>
              <p v-if="errors.subject" class="mt-1 text-red-500 text-sm">{{ errors.subject }}</p>
            </div>
            
            <div>
              <label for="message" class="block text-gray-700 font-medium mb-2">{{ t('contact.form.message') }}</label>
              <textarea
                id="message"
                v-model="contactForm.message"
                rows="5"
                :class="['w-full px-4 py-2 border rounded-md focus:outline-none', 
                  errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-ukraine-blue']"
                @blur="validateField('message')"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-red-500 text-sm">{{ errors.message }}</p>
            </div>
            
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="agreeToTerms"
                  v-model="contactForm.agreeToTerms"
                  type="checkbox"
                  class="h-4 w-4 text-ukraine-blue focus:ring-ukraine-blue border-gray-300 rounded"
                  @change="validateField('agreeToTerms')"
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="agreeToTerms" class="text-gray-700">
                  {{ t('contact.form.agreeToTerms') }} 
                  <NuxtLink to="/privacy" class="text-ukraine-blue hover:underline">{{ t('contact.form.privacyPolicy') }}</NuxtLink>
                </label>
                <p v-if="errors.agreeToTerms" class="mt-1 text-red-500 text-sm">{{ errors.agreeToTerms }}</p>
              </div>
            </div>
            
            <div>
              <AppButton 
                type="submit" 
                color="primary" 
                size="lg" 
                :disabled="isSubmitting || isRateLimited"
              >
                <template v-if="isSubmitting">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ t('contact.form.sending') }}
                </template>
                <template v-else>
                  {{ t('contact.form.submit') }}
                </template>
              </AppButton>
            </div>
          </form>
          
          <div v-if="formSubmitted" class="mt-8 bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
            <div class="flex">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="font-medium">{{ t('contact.form.success.title') }}</h3>
                <p class="mt-1 text-sm">{{ t('contact.form.success.message') }}</p>
              </div>
            </div>
          </div>

          <div v-if="showError" class="mt-8 bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
            <div class="flex">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 class="font-medium">{{ t('contact.form.error.title') }}</h3>
                <p class="mt-1 text-sm">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Maak afspraak button (right column) -->
        
        <!-- Contact info -->
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h3 class="font-bold mb-6">{{ t('contact.info.title') }}</h3>
          
          <div class="space-y-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-ukraine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-sm font-medium text-gray-900">{{ t('contact.info.email.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ t('contact.info.email.description') }}</p>
                <a href="mailto:alex@ukraine2work.nl" class="mt-2 text-ukraine-blue font-medium hover:text-ukraine-blue-dark">
                  alex@ukraine2work.nl
                </a>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-ukraine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-sm font-medium text-gray-900">{{ t('contact.info.phone.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ t('contact.info.phone.description') }}</p>
                <a href="tel:+31638473157" class="mt-2 text-ukraine-blue font-medium hover:text-ukraine-blue-dark">
                  +31 6 38473157
                </a>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-ukraine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-sm font-medium text-gray-900">{{ t('contact.info.address.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ t('contact.info.address.description') }}</p>
                <address class="mt-2 not-italic text-sm">
            
                  The Netherlands
                </address>
              </div>
            </div>
            
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-ukraine-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4">
                <h4 class="text-sm font-medium text-gray-900">{{ t('contact.info.hours.title') }}</h4>
                <p class="mt-1 text-sm text-gray-600">{{ t('contact.info.hours.description') }}</p>
                <p class="mt-2 text-sm">
                  {{ t('contact.info.hours.weekdays') }}: 9:00 - 17:00<br />
                  {{ t('contact.info.hours.weekend') }}: {{ t('contact.info.hours.closed') }}
                </p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h4 class="text-sm font-medium text-gray-900 mb-4">{{ t('contact.info.followUs') }}</h4>
            <div class="flex space-x-4">

              <a href="https://www.linkedin.com/company/ukraine2work/" target="_blank" aria-label="LinkedIn" class="text-gray-400 hover:text-ukraine-blue">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div class="mt-8">
          <AppButton color="secondary" size="md" @click="openModal">
            {{ t('contact.form.makeAppointment') }}
          </AppButton>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useMail } from '~/composables/useMail';
import { useCSRF } from '~/composables/useCSRF';

// Use the mail composable and CSRF protection
const { sendEmail } = useMail();
const { getCSRFToken } = useCSRF();

// Import i18n translation function
const { t } = useI18n();

// Initialize CSRF token on component mount
onMounted(async () => {
  try {
    await getCSRFToken();
  } catch (error) {
    console.error('Failed to initialize CSRF token:', error);
  }
});

// Form state
const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  agreeToTerms: false
});

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  agreeToTerms: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);
const showError = ref(false);
const errorMessage = ref('');

// Modal state for appointment
const showModal = ref(false);
const openModal = () => { showModal.value = true; };
const closeModal = () => { showModal.value = false; };

// Enhanced rate limiting
const lastSubmissionTime = ref(0);
const submissionCount = ref(0);
const cooldownPeriod = 60000; // 1 minute
const maxSubmissionsPerHour = 3;

// Check rate limits
const isRateLimited = computed(() => {
  const now = Date.now();
  const timeSinceLastSubmission = now - lastSubmissionTime.value;
  
  // Reset submission count if more than an hour has passed
  if (timeSinceLastSubmission > 3600000) { // 1 hour
    submissionCount.value = 0;
  }
  
  // Check if in cooldown period
  if (timeSinceLastSubmission < cooldownPeriod) {
    return true;
  }
  
  // Check if exceeded hourly limit
  if (submissionCount.value >= maxSubmissionsPerHour) {
    return true;
  }
  
  return false;
});

const rateLimitMessage = computed(() => {
  const now = Date.now();
  const timeSinceLastSubmission = now - lastSubmissionTime.value;
  
  if (timeSinceLastSubmission < cooldownPeriod) {
    const remainingTime = Math.ceil((cooldownPeriod - timeSinceLastSubmission) / 1000);
    return `Please wait ${remainingTime} seconds before sending another message.`;
  }
  
  if (submissionCount.value >= maxSubmissionsPerHour) {
    return 'You have reached the maximum number of messages per hour. Please try again later.';
  }
  
  return '';
});

// Get query parameter for subject if available
const route = useRoute();
if (route.query.subject) {
  contactForm.subject = route.query.subject;
}

// Form validation
const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.name = !contactForm.name ? t('contact.form.validation.nameRequired') : '';
      break;
    case 'email':
      if (!contactForm.email) {
        errors.email = t('contact.form.validation.emailRequired');
      } else if (!isValidEmail(contactForm.email)) {
        errors.email = t('contact.form.validation.emailValid');
      } else {
        errors.email = '';
      }
      break;
    case 'subject':
      errors.subject = !contactForm.subject ? t('contact.form.validation.subjectRequired') : '';
      break;
    case 'message':
      errors.message = !contactForm.message ? t('contact.form.validation.messageRequired') : '';
      break;
    case 'agreeToTerms':
      errors.agreeToTerms = !contactForm.agreeToTerms ? t('contact.form.validation.agreeRequired') : '';
      break;
  }
};

const validateForm = () => {
  validateField('name');
  validateField('email');
  validateField('subject');
  validateField('message');
  validateField('agreeToTerms');
  
  return !errors.name && !errors.email && !errors.subject && !errors.message && !errors.agreeToTerms;
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const submitContactForm = async () => {
  if (!validateForm()) return;
  
  // Check rate limiting
  if (isRateLimited.value) {
    showError.value = true;
    errorMessage.value = rateLimitMessage.value;
    return;
  }
  
  isSubmitting.value = true;
  showError.value = false;
  errorMessage.value = '';
  
  try {
    // Send email using our custom mail composable with CSRF protection
    const result = await sendEmail({
      name: contactForm.name,
      email: contactForm.email,
      subject: contactForm.subject,
      message: contactForm.message
    });

    if (result.success) {
      formSubmitted.value = true;
      
      // Update rate limiting counters
      lastSubmissionTime.value = Date.now();
      submissionCount.value += 1;
      
      // Reset form
      Object.keys(contactForm).forEach(key => {
        if (key === 'agreeToTerms') {
          contactForm[key] = false;
        } else {
          contactForm[key] = '';
        }
      });
    } else {
      showError.value = true;
      errorMessage.value = result.message || 'Failed to send email. Please try again.';
    }
    
  } catch (error) {
    console.error('Error submitting form:', error);
    showError.value = true;
    
    // Handle specific error types
    if (error.statusCode === 429) {
      errorMessage.value = 'Too many requests. Please wait before sending another message.';
    } else if (error.statusCode === 400) {
      errorMessage.value = 'Please check your message and try again.';
    } else if (error.statusCode === 403) {
      errorMessage.value = 'Security validation failed. Please refresh the page and try again.';
    } else {
      errorMessage.value = 'An error occurred. Please try again or contact us directly.';
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>