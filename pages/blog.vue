<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Blog</h1>
    <p class="mb-8">Latest insights, stories, and news from Ukraine2Work.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Blog post cards will go here, this is a placeholder -->
      <div v-for="post in blogPosts" :key="post.id" class="bg-white rounded-lg shadow overflow-hidden">
        <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
        <div class="p-4">
          <span class="text-blue-600 text-sm font-medium">{{ post.category }}</span>
          <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 mb-3">{{ post.excerpt }}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ post.date }}</span>
            <NuxtLink :to="`/blog/${post.slug}`" class="text-blue-600 hover:underline">Read more</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Sample blog post data - in a real application, this would come from an API or CMS
const blogPosts = ref([
  {
    id: 1,
    title: 'Finding Employment in the Netherlands',
    slug: 'finding-employment-netherlands',
    excerpt: 'A comprehensive guide for Ukrainians seeking employment opportunities in the Netherlands.',
    category: 'Employment',
    date: 'May 15, 2023',
    image: 'https://picsum.photos/seed/post1/800/600'
  },
  {
    id: 2,
    title: 'Language Resources for Ukrainian Refugees',
    slug: 'language-resources-ukrainian-refugees',
    excerpt: 'Free and accessible language learning resources to help Ukrainian refugees adapt to their new countries.',
    category: 'Resources',
    date: 'April 22, 2023',
    image: 'https://picsum.photos/seed/post2/800/600'
  },
  {
    id: 3,
    title: 'Success Story: From Kyiv to Berlin',
    slug: 'success-story-kyiv-berlin',
    excerpt: "Maria's journey from Ukraine to finding a tech role in Berlin and starting a new life.",
    category: 'Success Stories',
    date: 'March 12, 2023',
    image: 'https://picsum.photos/seed/post3/800/600'
  }
])

definePageMeta({
  title: 'Blog'
})
</script>