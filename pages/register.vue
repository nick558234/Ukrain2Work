<template>
  <div class="container mx-auto px-4 max-w-md py-8">
    <h1 class="text-2xl font-bold mb-6">{{ $t('auth.register') || 'Register' }}</h1>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <div>
        <label for="name" class="block mb-1">Full Name</label>
        <input 
          type="text" 
          id="name" 
          v-model="name" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
      </div>
      <div>
        <label for="email" class="block mb-1">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
      </div>
      <div>
        <label for="password" class="block mb-1">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
      </div>
      <div>
        <label for="confirmPassword" class="block mb-1">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPassword" 
          v-model="confirmPassword" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />
      </div>
      <button 
        type="submit" 
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        {{ $t('auth.register') || 'Register' }}
      </button>
    </form>
    <p class="mt-4 text-center">
      {{ $t('auth.already_have_account') || 'Already have an account?' }} 
      <NuxtLink to="/login" class="text-blue-600 hover:underline">
        {{ $t('auth.login') || 'Login' }}
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleRegister() {
  // Check if passwords match
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }
  
  // Implement your registration logic
  console.log('Register with:', {
    name: name.value,
    email: email.value,
    password: password.value
  })
  
  // Redirect to home page after registration
  navigateTo('/')
}

definePageMeta({
  title: 'Register'
})
</script>