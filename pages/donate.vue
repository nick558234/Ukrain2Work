<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Support Our Mission</h1>
    <p class="mb-8 text-lg">Your donation helps us connect Ukrainian refugees with employment opportunities and provide essential resources.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-blue-50 p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">How Your Donation Helps</h2>
        <ul class="space-y-3">
          <li class="flex items-start">
            <Icon name="heroicons:check-circle" class="text-green-500 w-5 h-5 mr-2 mt-0.5" />
            <span>Support job placement services for Ukrainian refugees</span>
          </li>
          <li class="flex items-start">
            <Icon name="heroicons:check-circle" class="text-green-500 w-5 h-5 mr-2 mt-0.5" />
            <span>Provide language learning resources and translation services</span>
          </li>
          <li class="flex items-start">
            <Icon name="heroicons:check-circle" class="text-green-500 w-5 h-5 mr-2 mt-0.5" />
            <span>Assist with relocation logistics and housing resources</span>
          </li>
          <li class="flex items-start">
            <Icon name="heroicons:check-circle" class="text-green-500 w-5 h-5 mr-2 mt-0.5" />
            <span>Offer skills training and professional development</span>
          </li>
          <li class="flex items-start">
            <Icon name="heroicons:check-circle" class="text-green-500 w-5 h-5 mr-2 mt-0.5" />
            <span>Maintain and improve the Ukraine2Work platform</span>
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 class="text-xl font-semibold mb-4">Donate Now</h2>
        <form @submit.prevent="handleDonation" class="space-y-4">
          <div>
            <label for="amount" class="block mb-1 font-medium">Select Amount</label>
            <div class="grid grid-cols-3 gap-2 mb-4">
              <button 
                v-for="(amt, index) in donationAmounts" 
                :key="index"
                type="button"
                @click="selectedAmount = amt"
                :class="[
                  'py-2 border rounded-md transition-colors', 
                  selectedAmount === amt ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:border-blue-500'
                ]"
              >
                €{{ amt }}
              </button>
            </div>
            <input 
              type="number" 
              id="customAmount" 
              v-model="customAmount"
              placeholder="Custom amount" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              @input="selectedAmount = Number(customAmount)"
            />
          </div>
          
          <div>
            <label for="name" class="block mb-1 font-medium">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          
          <div>
            <label for="email" class="block mb-1 font-medium">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
          >
            Donate €{{ selectedAmount }}
          </button>
        </form>
      </div>
    </div>
    
    <div class="text-center">
      <h3 class="text-xl font-semibold mb-4">Other Ways to Support</h3>
      <p>For corporate donations or other forms of support, please contact us at:</p>

      <a 
        href="mailto:alex@ukraine2work.org" 
        class="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Contact Us
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const donationAmounts = [25, 50, 100]
const selectedAmount = ref(50)
const customAmount = ref('')
const name = ref('')
const email = ref('')

const handleDonation = async () => {
  if (formValid.value) {
    // Process donation
  }
};

definePageMeta({
  title: 'Donate'
})
</script>