<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Sitemap</h1>
    <p class="mb-8">Find all the pages and resources available on Ukraine2Work.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 class="text-xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/" class="text-blue-600 hover:underline">Home</NuxtLink></li>
          <li><NuxtLink to="/job-seekers" class="text-blue-600 hover:underline">Job Seekers</NuxtLink></li>
          <li><NuxtLink to="/blog" class="text-blue-600 hover:underline">Blog</NuxtLink></li>
          <li><NuxtLink to="/success-stories" class="text-blue-600 hover:underline">Success Stories</NuxtLink></li>
          <li><NuxtLink to="/donate" class="text-blue-600 hover:underline">Donate</NuxtLink></li>
        </ul>
      </div>
       
      <div>
        <h2 class="text-xl font-semibold mb-4 border-b pb-2">Account</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/login" class="text-blue-600 hover:underline">Login</NuxtLink></li>
          <li><NuxtLink to="/register" class="text-blue-600 hover:underline">Register</NuxtLink></li>
          <li><NuxtLink to="/dashboard" class="text-blue-600 hover:underline">Dashboard</NuxtLink></li>
          <li><NuxtLink to="/profile" class="text-blue-600 hover:underline">Profile</NuxtLink></li>
        </ul>
      </div>
      
      <div>
        <h2 class="text-xl font-semibold mb-4 border-b pb-2">Legal & Info</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/privacy-policy" class="text-blue-600 hover:underline">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/terms-of-service" class="text-blue-600 hover:underline">Terms of Service</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-blue-600 hover:underline">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-blue-600 hover:underline">About Us</NuxtLink></li>
          <li><NuxtLink to="/faq" class="text-blue-600 hover:underline">FAQ</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Sitemap'
})
</script>