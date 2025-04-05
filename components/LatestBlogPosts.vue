<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-ukraine-blue">{{ $t('blog.latestPosts') }}</h2>
        <NuxtLink to="/blog" class="text-ukraine-blue font-medium hover:text-ukraine-yellow transition-colors">
          {{ $t('blog.viewAll') }} →
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogCard 
          v-for="post in latestPosts" 
          :key="post.slug"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// In a real app, this would use queryContent to fetch the latest blog posts
// For now, we'll use mock data
const latestPosts = [
  {
    title: 'Work permits for Ukrainians in the Netherlands: What you need to know',
    excerpt: 'The Dutch government has simplified the process for Ukrainian refugees to work in the Netherlands. Here\'s what you need to know about your rights.',
    slug: 'work-permits-for-ukrainians',
    date: '2023-05-15',
    author: 'Marta Shevchenko',
    image: '/img/blog/work-permits.jpg',
    category: 'Legal Information'
  },
  {
    title: 'Success Story: How Anna found her dream job in Rotterdam',
    excerpt: 'After fleeing Ukraine, Anna wasn\'t sure if she could find work in her field. Read how she connected with an employer through Ukraine2Work.',
    slug: 'success-story-anna',
    date: '2023-04-22',
    author: 'Jan Bakker',
    image: '/img/blog/success-story.jpg',
    category: 'Success Stories'
  },
  {
    title: 'Top 5 skills Dutch employers are looking for in 2023',
    excerpt: 'What skills are in high demand in the Dutch job market? This article explores the most sought-after qualifications and how to highlight them.',
    slug: 'top-skills-2023',
    date: '2023-03-18',
    author: 'Emma de Jong',
    image: '/img/blog/skills.jpg',
    category: 'Job Market'
  }
];
</script>