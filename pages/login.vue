<template>
  <div class="container mx-auto px-4 max-w-md py-8">
    <h1 class="text-2xl font-bold mb-6">{{ $t('auth.login') || 'Login' }}</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
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
      <button 
        type="submit" 
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
      >
        {{ $t('auth.login') || 'Login' }}
      </button>
    </form>
    <p class="mt-4 text-center">
      {{ $t('auth.no_account') || "Don't have an account yet?" }} 
      <NuxtLink to="/register" class="text-blue-600 hover:underline">
        {{ $t('auth.register') || 'Register' }}
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  // Process login
  // Redirect to home page after login
  navigateTo('/')
}

const handleSubmit = async () => {
  if (formValid.value) {
    // Process login
  }
};

definePageMeta({
  title: 'Login'
})
</script>