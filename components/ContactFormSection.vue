<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact form -->
        <div>
          <h2 class="text-ukraine-blue mb-6">{{ t('contact.form.title') }}</h2>
          <p class="mb-8">{{ t('contact.form.description') }}</p>
          
          <form @submit.prevent="submitContactForm" class="space-y-6">
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
                :disabled="isSubmitting"
                :text="isSubmitting ? t('contact.form.sending') : t('contact.form.submit')"
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
        </div>
        
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
              <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-ukraine-blue">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-ukraine-blue">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.018 10.018 0 01-3.12 1.195 4.92 4.92 0 00-8.384 4.482A13.935 13.935 0 013.5 3.746a4.92 4.92 0 001.524 6.565 4.89 4.89 0 01-2.226-.616v.061a4.917 4.917 0 003.95 4.82 4.88 4.88 0 01-2.224.084 4.921 4.921 0 004.6 3.42 9.88 9.88 0 01-6.114 2.108c-.398 0-.788-.026-1.176-.064a13.93 13.93 0 007.538 2.21c9.054 0 14-7.503 14-14.001 0-.213-.004-.426-.014-.637a10.001 10.001 0 002.455-2.55z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="text-gray-400 hover:text-ukraine-blue">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMail } from '~/composables/useMail';

// Use the mail composable directly
const { sendEmail } = useMail();

// Import i18n translation function
const { t } = useI18n();

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
  
  isSubmitting.value = true;
  
  try {
    // Send email using our custom mail composable
    const { error } = await sendEmail({
      subject: `Contact Form: ${contactForm.subject}`,
      text: `
Name: ${contactForm.name}
Email: ${contactForm.email}
Subject: ${contactForm.subject}
Message: ${contactForm.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.5;">
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> ${contactForm.name} (${contactForm.email})</p>
  <p><strong>Subject:</strong> ${contactForm.subject}</p>
  <p><strong>Message:</strong></p>
  <p>${contactForm.message.replace(/\n/g, '<br>')}</p>
</div>
      `
    });

    if (error) {
      console.error('Email sending error:', error);
      throw new Error('Failed to send email');
    }
    
    formSubmitted.value = true;
    
    // Reset form
    Object.keys(contactForm).forEach(key => {
      if (key === 'agreeToTerms') {
        contactForm[key] = false;
      } else {
        contactForm[key] = '';
      }
    });
    
  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle error (show error message, etc.)
  } finally {
    isSubmitting.value = false;
  }
};
</script>