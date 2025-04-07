<template>
  <footer class="bg-ukraine-blue text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Logo and tagline -->
        <div>
          <NuxtLink to="/" class="inline-block mb-4">
            <!-- <img src="/img/logo-white.svg" alt="Ukraine2Work" class="h-10" /> -->logo
          </NuxtLink>
          <p class="text-gray-200 mb-6">{{ $t('footer.tagline') }}</p>
          <div class="flex space-x-4">
            <a 
              href="https://facebook.com/ukraine2work" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-ukraine-yellow transition-colors" 
              aria-label="Facebook"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/ukraine2work" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-ukraine-yellow transition-colors" 
              aria-label="LinkedIn"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a 
              href="https://instagram.com/ukraine2work" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white hover:text-ukraine-yellow transition-colors" 
              aria-label="Instagram"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick links -->
        <div>
          <h3 class="font-bold mb-6">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/about" class="text-gray-200 hover:text-white transition-colors">
                {{ $t('footer.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-200 hover:text-white transition-colors">
                {{ $t('footer.contact') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms-of-service" class="text-gray-200 hover:text-white transition-colors">
                Algemene Voorwaarden
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy-policy" class="text-gray-200 hover:text-white transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-gray-200 hover:text-white transition-colors">
                FAQ
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Contact info -->
        <div>
          <h3 class="font-bold mb-6">{{ $t('contact.info.title') }}</h3>
          <div class="space-y-4">
            <div class="flex items-start">
              <svg class="h-5 w-5 mt-1 mr-3 text-ukraine-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="font-medium">Email</p>
                <a href="mailto:Alex@ukraine2work.com" class="text-gray-200 hover:text-white">
                  Alex@ukraine2work.com
                </a>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="h-5 w-5 mt-1 mr-3 text-ukraine-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p class="font-medium">Phone</p>
                <a href="tel:+31638473157" class="text-gray-200 hover:text-white">
                  +31 6 38473157
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Newsletter -->
        <div>
          <h3 class="font-bold mb-6">{{ $t('footer.newsletter.title') }}</h3>
          <p class="text-gray-200 mb-4">{{ $t('footer.newsletter.description') }}</p>
          <form @submit.prevent="subscribeToNewsletter" class="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              v-model="email"
              placeholder="Vul je e-mailadres in"
              class="px-4 py-2 rounded-md flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-ukraine-yellow"
              required
            />
            <button 
              type="submit" 
              class="bg-ukraine-yellow text-ukraine-blue px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              :disabled="isSubscribing"
            >
              {{ isSubscribing ? '...' : 'Abonneer' }}
            </button>
          </form>
          <p v-if="subscriptionMessage" class="mt-2 text-sm" :class="subscriptionSuccess ? 'text-green-300' : 'text-red-300'">
            {{ subscriptionMessage }}
          </p>
        </div>
      </div>
      
      <!-- Bottom footer -->
      <div class="border-t border-blue-700 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Ukraine2Work. All Rights Reserved.
          </p>
          <div class="flex space-x-6">
            <NuxtLink to="/privacy-policy" class="text-gray-300 text-sm hover:text-white transition-colors">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms-of-service" class="text-gray-300 text-sm hover:text-white transition-colors">
              Algemene Voorwaarden
            </NuxtLink>
            <NuxtLink to="/faq" class="text-gray-300 text-sm hover:text-white transition-colors">
              FAQ
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const isSubscribing = ref(false);
const subscriptionMessage = ref('');
const subscriptionSuccess = ref(false);

// Simulate API call for newsletter subscription
const subscribeToNewsletter = async () => {
  if (!email.value) return;
  
  try {
    isSubscribing.value = true;
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    subscriptionSuccess.value = true;
    subscriptionMessage.value = 'Bedankt voor je inschrijving!';
    email.value = '';
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      if (subscriptionSuccess.value) {
        subscriptionMessage.value = '';
      }
    }, 5000);
  } catch (error) {
    subscriptionSuccess.value = false;
    subscriptionMessage.value = 'Inschrijving mislukt. Probeer het opnieuw.';
  } finally {
    isSubscribing.value = false;
  }
};
</script>