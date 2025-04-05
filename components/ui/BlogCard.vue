<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="h-48 overflow-hidden">
      <img 
        :src="post.image" 
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    
    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span class="text-sm text-ukraine-blue bg-ukraine-light px-2 py-1 rounded-md">
          {{ post.category }}
        </span>
        <span class="text-sm text-gray-500">
          {{ formatDate(post.date) }}
        </span>
      </div>
      
      <h3 class="font-bold mb-2 line-clamp-2">
        <NuxtLink :to="`/blog/${post.slug}`" class="hover:text-ukraine-blue">
          {{ post.title }}
        </NuxtLink>
      </h3>
      
      <p class="text-gray-600 mb-4 line-clamp-3">{{ post.excerpt }}</p>
      
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">
          {{ post.author }}
        </span>
        <NuxtLink 
          :to="`/blog/${post.slug}`" 
          class="text-ukraine-blue font-medium hover:text-ukraine-yellow transition-colors"
        >
          {{ $t('blog.readMore') }} →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
});

// Simple date formatter
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>