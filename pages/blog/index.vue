<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Page header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ $t('nav.blog') }}</h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        {{ $t('blog.latestPosts') }} van Ukraine2Work - ontdek verhalen, inzichten en nieuws over onze missie om Oekraïense vluchtelingen te helpen.
      </p>
    </div>
    
    <!-- Blog posts grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="post in blogPosts" 
        :key="post.id" 
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
      >
        <!-- Post image -->
        <div class="relative overflow-hidden">
          <img 
            :src="post.image" 
            :alt="post.title" 
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          >
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
        </div>
        
        <!-- Post content -->
        <div class="p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="bg-ukraine-blue text-white px-3 py-1 rounded-full text-sm font-medium">
              {{ post.category }}
            </span>
            <time class="text-gray-500 text-sm">{{ formatDate(post.date) }}</time>
          </div>
          
          <h2 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-ukraine-blue transition-colors line-clamp-2">
            {{ post.title }}
          </h2>
          
          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ post.excerpt }}
          </p>
          
          <!-- Tags -->
          <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-1 mb-4">
            <span 
              v-for="tag in post.tags.slice(0, 3)" 
              :key="tag"
              class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
            >
              #{{ tag }}
            </span>
            <span v-if="post.tags.length > 3" class="text-gray-400 text-xs">
              +{{ post.tags.length - 3 }} meer
            </span>
          </div>
          
          <!-- Read more link -->
          <NuxtLink 
            :to="`/blog/${post.slug}`" 
            class="inline-flex items-center text-ukraine-blue hover:text-ukraine-yellow font-medium transition-colors group"
          >
            {{ $t('blog.readMore') }}
            <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </article>
    </div>

    <!-- Empty state -->
    <div v-if="!blogPosts.length" class="text-center py-16">
      <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.463-.64-6.314-1.76M12 3C9.239 3 7 5.216 7 8v2.718C7 15.216 9.239 18 12 18s5-2.784 5-7.282V8c0-2.784-2.239-5-5-5z"></path>
      </svg>
      <h3 class="text-lg font-medium text-gray-900 mb-2">Geen blogposts gevonden</h3>
      <p class="text-gray-500">Check later terug voor nieuwe artikelen en verhalen.</p>
    </div>

    <!-- Newsletter CTA -->
    <section class="mt-16 bg-ukraine-blue rounded-lg p-8 text-center text-white">
      <div class="max-w-md mx-auto">
        <NewsletterSubscription widthNormal="w-full" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Blog posts data - same as in [slug].vue for consistency
const blogPosts = [
  {
    id: 1,
    title: 'We staan op de SER-website! 🎉',
    slug: 'ukraine2work-ser-website',
    excerpt: 'Met trots delen we dat Ukraine2Work vanaf vandaag te vinden is op de officiële site van de Sociaal-Economische Raad (SER).',
    category: 'Nieuws',
    date: '2025-01-15',
    image: '/images/ser.jpg',
    tags: ['Ukraine2Work', 'SER', 'WerkVoorOekraïne', 'SkillBasedMatching', 'InclusieveArbeidsmarkt']
  },
  {
    id: 2,
    title: 'How to get 10,000 Ukrainians into Work?',
    slug: 'how-to-get-10000-ukrainians-into-work',
    excerpt: 'Helping Ukrainian refugees find suitable jobs—that is the mission of Alex Spaan, founder of Ukraine2Work.',
    category: 'Interview',
    date: '2025-02-24',
    image: '/images/team/alex_spaan.webp',
    tags: ['RefugeeEmployment', 'MaatschappelijkeImpact', 'AIvoorWerk', 'SamenSterk']
  },
  {
    id: 3,
    title: 'Primeur: Ukraine2Work x Metaverse Solutions – ervaar je toekomst in 3D',
    slug: 'ukraine2work-metaverse-solutions-3d',
    excerpt: 'Ukraine2Work en Metaverse Solutions bundelen krachten in digitale beroepsoriëntatie met hyperrealistische 3D-werkomgevingen.',
    category: 'Innovatie',
    date: '2025-01-08',
    image: '/images/metaverse_solutions.jpg',
    tags: ['Metaverse', 'VirtualReality', 'JobTraining', 'Innovation', 'Technology']
  }
]

// Format date function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO
useSeoMeta({
  title: `${t('nav.blog')} | Ukraine2Work`,
  description: 'Ontdek de laatste verhalen, inzichten en nieuws van Ukraine2Work. Lees over onze missie om Oekraïense vluchtelingen te helpen bij het vinden van passend werk in Nederland.',
  ogTitle: `${t('nav.blog')} | Ukraine2Work`,
  ogDescription: 'Ontdek de laatste verhalen, inzichten en nieuws van Ukraine2Work.',
  ogType: 'website'
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>