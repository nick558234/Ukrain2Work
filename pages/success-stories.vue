<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Success Stories</h1>
    <p class="mb-8">Stories of Ukrainian refugees who have found employment and built new lives with our help.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="story in stories" :key="story.id" class="bg-white rounded-lg shadow overflow-hidden">
        <div class="md:flex">
          <div class="w-full md:w-1/3 h-48 md:h-auto relative">
            <NuxtImg 
              :src="story.image" 
              :alt="story.name"
              class="w-full h-full object-cover"
              width="400" 
              height="400"
              placeholder
              :fallback="`https://placehold.co/400x400/e9f5ff/0057b8?text=${story.name.split(' ').map(n => n[0]).join('')}`"
            />
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ story.name }}</h2>
            <p class="text-blue-600 mb-4">{{ story.position }} at {{ story.company }}</p>
            <p class="text-gray-600 mb-4">{{ story.story }}</p>
            <p class="text-gray-500 text-sm">{{ story.location }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-10 text-center">
      <h2 class="text-2xl font-semibold mb-6">Share Your Success Story</h2>
      <p class="mb-4">Have you found employment through Ukraine2Work? We'd love to hear your story!</p>
      <button class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
        Share Your Story
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Sample success stories data - in a real application, this would come from an API or CMS
const stories = ref([
  {
    id: 1,
    name: 'Oleksandra Kovalenko',
    position: 'Software Engineer',
    company: 'TechCorp',
    location: 'Amsterdam, Netherlands',
    story: 'After fleeing Ukraine, I found a job as a software engineer through Ukraine2Work. The platform helped me with the relocation process and language resources.',
    image: 'https://picsum.photos/seed/person1/400/400'
  },
  {
    id: 2,
    name: 'Ivan Petrenko',
    position: 'Marketing Specialist',
    company: 'Global Marketing Inc.',
    location: 'Berlin, Germany',
    story: 'Ukraine2Work connected me with a company in Berlin that needed a marketing specialist. They provided support throughout the interview and hiring process.',
    image: 'https://picsum.photos/seed/person2/400/400'
  },
  {
    id: 3,
    name: 'Natalia Shevchenko',
    position: 'Medical Assistant',
    company: 'City Hospital',
    location: 'Vienna, Austria',
    story: 'As a nurse in Ukraine, I was able to find a position as a medical assistant in Austria. Ukraine2Work helped with credential recognition and language training.',
    image: 'https://picsum.photos/seed/person3/400/400'
  },
  {
    id: 4,
    name: 'Volodymyr Tkachenko',
    position: 'Mechanical Engineer',
    company: 'AutoTech Industries',
    location: 'Warsaw, Poland',
    story: 'I found employment as a mechanical engineer in Poland within two months of registering with Ukraine2Work. They provided excellent guidance through the process.',
    image: 'https://picsum.photos/seed/person4/400/400'
  }
])

definePageMeta({
  title: 'Success Stories'
})
</script>