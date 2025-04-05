<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-3xl mx-auto">
      <!-- Breadcrumbs -->
      <div class="flex items-center text-sm text-gray-500 mb-6">
        <NuxtLink to="/" class="hover:text-ukraine-blue">Home</NuxtLink>
        <span class="mx-2">/</span>
        <NuxtLink to="/blog" class="hover:text-ukraine-blue">Blog</NuxtLink>
        <span class="mx-2">/</span>
        <span>{{ post.title }}</span>
      </div>
      
      <!-- Post Header -->
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <div class="flex items-center mb-8">
        <span class="text-blue-600 text-sm font-medium">{{ post.category }}</span>
        <span class="mx-2 text-gray-400">•</span>
        <span class="text-gray-500 text-sm">{{ post.date }}</span>
      </div>
      
      <!-- Featured Image -->
      <div class="mb-8">
        <img :src="post.image" :alt="post.title" class="w-full h-auto rounded-lg shadow">
      </div>
      
      <!-- Post Content -->
      <div class="prose prose-lg max-w-none">
        <p v-for="(paragraph, index) in post.content" :key="index" class="mb-6">
          {{ paragraph }}
        </p>
      </div>
      
      <!-- Tags -->
      <div class="mt-8">
        <div class="flex flex-wrap gap-2">
          <span v-for="(tag, index) in post.tags" :key="index" class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
            {{ tag }}
          </span>
        </div>
      </div>
      
      <!-- Related Posts -->
      <div class="mt-12">
        <h2 class="text-xl font-bold mb-6">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="relatedPost in relatedPosts" :key="relatedPost.slug" class="bg-white rounded-lg shadow overflow-hidden">
            <img :src="relatedPost.image" :alt="relatedPost.title" class="w-full h-48 object-cover">
            <div class="p-4">
              <span class="text-blue-600 text-sm font-medium">{{ relatedPost.category }}</span>
              <h3 class="text-lg font-semibold mb-2">{{ relatedPost.title }}</h3>
              <p class="text-gray-600 mb-3 line-clamp-2">{{ relatedPost.excerpt }}</p>
              <NuxtLink :to="`/blog/${relatedPost.slug}`" class="text-ukraine-blue hover:underline">Read more</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#app';

// Get the current route
const route = useRoute();
const slug = route.params.slug;

// Sample blog posts data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: 'Finding Employment in the Netherlands',
    slug: 'finding-employment-netherlands',
    excerpt: 'A comprehensive guide for Ukrainians seeking employment opportunities in the Netherlands.',
    content: [
      'Finding employment in the Netherlands as a Ukrainian refugee can seem challenging at first, but there are many resources available to help you succeed. This article provides a step-by-step guide to navigating the Dutch job market.',
      'The Netherlands has a robust economy with opportunities in various sectors, particularly IT, healthcare, logistics, and agriculture. Many Dutch employers are specifically looking to hire Ukrainian professionals due to their strong work ethic and qualifications.',
      'To start your job search, it\'s important to understand the work permit exemptions available to Ukrainian refugees. Currently, Ukrainians can work in the Netherlands without requiring a special work permit, which simplifies the hiring process for employers.',
      'Creating a Dutch-style CV is an important first step. Dutch resumes are typically concise (no more than 2 pages) and focus on relevant skills and experience. Including a brief personal profile at the top is common practice.',
      'Networking is crucial in the Dutch job market. Attend industry events, join professional groups on LinkedIn, and reach out to Ukrainian community organizations that may have employment resources or connections.',
      'Language can be both a barrier and an opportunity. While many jobs in international companies require only English, learning some Dutch will greatly expand your options and help with integration. Free language courses are available for Ukrainian refugees in most municipalities.',
      'Ukrainian2Work offers specialized services to connect Ukrainian job seekers with Dutch employers, including resume review, interview preparation, and direct introductions to companies looking to hire Ukrainian talent.',
      'Remember that finding the right job takes time. Stay persistent, be open to temporary positions that might lead to permanent opportunities, and take advantage of the resources available to you as a Ukrainian refugee in the Netherlands.'
    ],
    category: 'Employment',
    date: 'May 15, 2023',
    image: 'https://picsum.photos/seed/post1/1200/600',
    tags: ['Employment', 'Netherlands', 'Job Search', 'Work Permits'],
    related: [2, 3]
  },
  {
    id: 2,
    title: 'Language Resources for Ukrainian Refugees',
    slug: 'language-resources-ukrainian-refugees',
    excerpt: 'Free and accessible language learning resources to help Ukrainian refugees adapt to their new countries.',
    content: [
      'Learning the local language is one of the most important steps for Ukrainian refugees looking to integrate and find employment in their new host countries. This article compiles the best free and low-cost language learning resources available specifically for Ukrainians.',
      'Many European countries offer free language courses for refugees. These government-sponsored programs often include both in-person classes and online options. Check with your local municipality or refugee assistance center to find programs in your area.',
      'For self-study, there are numerous apps and online platforms offering language courses. Duolingo has added Ukrainian as an interface language for many of their courses. Other apps like Babbel and Rosetta Stone have offered free subscriptions to Ukrainian refugees.',
      'Language exchange groups are an excellent way to practice your new language skills while making social connections. Facebook and Meetup host many language exchange groups in major cities across Europe.',
      'YouTube channels devoted to language learning provide free instruction in many European languages. Channels like "Dutch for Beginners" or "Easy German" offer lessons specifically designed for new learners.',
      'For those with children, many schools offer additional language support for Ukrainian students. Parents can also benefit from family language programs where both adults and children learn together.',
      'Professional language certification can be valuable for job seekers. Organizations like the Goethe Institut (German), Alliance Française (French), and British Council (English) offer certification programs, with some providing discounts for refugees.',
      'Remember that language learning takes time and consistency. Even spending just 15-30 minutes daily on language practice can lead to significant progress over time. Don\'t be afraid to speak from day one, even if you make mistakes.'
    ],
    category: 'Resources',
    date: 'April 22, 2023',
    image: 'https://picsum.photos/seed/post2/1200/600',
    tags: ['Language Learning', 'Education', 'Integration', 'Resources'],
    related: [1, 3]
  },
  {
    id: 3,
    title: 'Success Story: From Kyiv to Berlin',
    slug: 'success-story-kyiv-berlin',
    excerpt: 'Marias journey from Ukraine to finding a tech role in Berlin and starting a new life.',
    content: [
      'When the war began, Maria Kovalenko was working as a senior developer for a prominent tech company in Kyiv. Within days, she made the difficult decision to leave her home and seek safety in Germany, bringing only a small suitcase and her laptop.',
      '"The hardest part wasn\'t leaving my apartment or possessions behind," Maria recalls. "It was the uncertainty of not knowing when I would see my family and friends again, or if I would ever return to the life I had built."',
      'After a challenging journey through Poland, Maria arrived in Berlin where a volunteer organization helped her find temporary accommodation. Despite the trauma of displacement, she was determined to rebuild her professional life quickly.',
      'Within her first week in Berlin, Maria updated her LinkedIn profile and began reaching out to tech companies. "Many German companies were specifically looking to hire Ukrainians. The tech community in Berlin was incredibly supportive," she explains.',
      'After several interviews, Maria received three job offers. She accepted a senior developer position at a Berlin-based fintech startup that not only matched her previous salary but also provided assistance with finding permanent housing and navigating German bureaucracy.',
      'The company offered flexible working arrangements that allowed Maria to support family members who remained in Ukraine. They also connected her with other Ukrainian professionals in Berlin, helping her build a new social network.',
      'Today, six months after arriving in Berlin, Maria has settled into her new role and apartment. She has begun learning German and volunteers on weekends with an organization that helps newly arrived Ukrainian refugees navigate the job market.',
      '"Of course I miss home," she says, "but I ve found a way to build a meaningful life here while still supporting my country from abroad. My advice to other Ukrainian professionals is to leverage your skills and experience - they are valuable in the European job market."',
      'Maria\'s story represents just one of many successful transitions made by Ukrainian professionals in European countries. While each journey is unique, the resilience and determination shown by refugees like Maria continue to inspire both employers and host communities.'
    ],
    category: 'Success Stories',
    date: 'March 12, 2023',
    image: 'https://picsum.photos/seed/post3/1200/600',
    tags: ['Success Stories', 'Tech Jobs', 'Berlin', 'Career Transition'],
    related: [1, 2]
  }
];

// Find the current post based on the slug
const post = computed(() => {
  const foundPost = blogPosts.find(post => post.slug === slug);
  
  // If not found, provide a default post
  if (!foundPost) {
    return {
      title: 'Article not found',
      category: 'Unknown',
      date: '',
      image: 'https://picsum.photos/seed/default/1200/600',
      content: ['This article could not be found. Please check the URL or go back to the blog homepage.'],
      tags: [],
      related: []
    };
  }
  
  return foundPost;
});

// Related posts based on the related IDs from the current post
const relatedPosts = computed(() => {
  if (!post.value.related) return [];
  
  return blogPosts
    .filter(relatedPost => post.value.related.includes(relatedPost.id))
    .map(post => ({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: post.category,
      image: post.image
    }));
});

// Set page metadata
useHead({
  title: post.value.title + ' | Ukraine2Work Blog',
  meta: [
    { name: 'description', content: post.value.excerpt || '' }
  ]
});
</script>