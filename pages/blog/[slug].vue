<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Back to blog link -->
    <div class="mb-6">
      <NuxtLink to="/blog" class="inline-flex items-center text-ukraine-blue hover:text-ukraine-yellow transition-colors">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        {{ $t('blog.backToBlog') }}
      </NuxtLink>
    </div>

    <!-- Blog post content -->
    <article v-if="post">
      <!-- Hero image -->
      <div class="mb-8 rounded-lg overflow-hidden shadow-lg">
        <img 
          :src="post.image" 
          :alt="post.title" 
          class="w-full h-64 md:h-96 object-cover"
        >
      </div>

      <!-- Post header -->
      <header class="mb-8">
        <div class="flex items-center gap-4 mb-4">
          <span class="bg-ukraine-blue text-white px-3 py-1 rounded-full text-sm font-medium">
            {{ post.category }}
          </span>
          <time class="text-gray-500 text-sm">{{ formatDate(post.date) }}</time>
          <span class="text-gray-400 text-sm">{{ readingTime }} {{ $t('blog.minRead') }}</span>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ post.title }}
        </h1>
        
        <p class="text-xl text-gray-600 leading-relaxed">
          {{ post.excerpt }}
        </p>
      </header>

      <!-- Post content -->
      <div class="prose prose-lg max-w-none mb-8">
        <div v-html="post.content" class="text-gray-800 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-gray-900 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-gray-800 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>ul]:ml-6 [&>li]:mb-2 [&>li]:list-disc"></div>
      </div>

      <!-- Tags -->
      <div v-if="post.tags && post.tags.length" class="mt-8 pt-8 border-t border-gray-200">
        <h3 class="text-sm font-medium text-gray-900 mb-3">{{ $t('blog.tags') }}:</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-ukraine-blue hover:text-white transition-colors cursor-pointer"
          >
            #{{ tag }}
          </span>
        </div>
      </div>

      <!-- Share buttons -->
      <div class="mt-8 pt-8 border-t border-gray-200">
        <h3 class="text-sm font-medium text-gray-900 mb-3">{{ $t('blog.share') }}:</h3>
        <div class="flex flex-wrap gap-4">
          <a 
            :href="shareUrls.linkedin" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a 
            :href="shareUrls.twitter" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
          </a>
          <button 
            @click="copyUrl"
            class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors inline-flex items-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            {{ copied ? $t('blog.copied') : $t('blog.copyLink') }}
          </button>
        </div>
      </div>
    </article>

    <!-- 404 state -->
    <div v-else class="text-center py-16">
      <div class="max-w-md mx-auto">
        <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.463-.64-6.314-1.76M12 3C9.239 3 7 5.216 7 8v2.718C7 15.216 9.239 18 12 18s5-2.784 5-7.282V8c0-2.784-2.239-5-5-5z"></path>
        </svg>
        <h1 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('blog.notFound') }}</h1>
        <p class="text-gray-600 mb-8">{{ $t('blog.notFoundDescription') }}</p>
        <NuxtLink 
          to="/blog" 
          class="bg-ukraine-blue text-white px-6 py-3 rounded-md font-medium hover:bg-ukraine-yellow transition-colors inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          {{ $t('blog.backToBlog') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Related posts -->
    <section v-if="post && relatedPosts.length" class="mt-16 pt-16 border-t border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900 mb-8">{{ $t('blog.relatedArticles') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="relatedPost in relatedPosts" 
          :key="relatedPost.id"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="relatedPost.image" 
              :alt="relatedPost.title" 
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </div>
          <div class="p-6">
            <span class="text-ukraine-blue text-sm font-medium">{{ relatedPost.category }}</span>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-ukraine-blue transition-colors">{{ relatedPost.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ relatedPost.excerpt }}</p>
            <NuxtLink 
              :to="`/blog/${relatedPost.slug}`" 
              class="text-ukraine-blue hover:text-ukraine-yellow transition-colors text-sm font-medium inline-flex items-center gap-1"
            >
              {{ $t('blog.readMore') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

// Get the slug from the route
const slug = route.params.slug as string

// State
const copied = ref(false)

// Blog posts data with your actual content
const blogPosts = [
  {
    id: 1,
    title: 'We staan op de SER-website! 🎉',
    slug: 'ukraine2work-ser-website',
    excerpt: 'Met trots delen we dat Ukraine2Work vanaf vandaag te vinden is op de officiële site van de Sociaal-Economische Raad (SER).',
    category: 'Nieuws',
    date: '2025-01-15',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQEiVAEFuufCeg/feedshare-shrink_2048_1536/B4DZdEznvIGkAo-/0/1749206073094?e=1753920000&v=beta&t=6r-eIbtyNb_0daP0driFv26Fxz1aFiMLiLEg1vGl9AU',
    tags: ['Ukraine2Work', 'SER', 'WerkVoorOekraïne', 'SkillBasedMatching', 'InclusieveArbeidsmarkt'],
    content: `
      <p>Met trots delen we dat Ukraine2Work vanaf vandaag te vinden is op de officiële site van de Sociaal-Economische Raad (SER). Een mooie erkenning van het werk dat we doen om Oekraïense vluchtelingen in Nederland te ondersteunen richting passend werk en een nieuwe toekomst.</p>

      <h2>🔎 Ukraine2Work biedt:</h2>
      <ul>
        <li>✅ Skill-based matching met AI-technologie</li>
        <li>✅ Persoonlijke begeleiding en coaching</li>
        <li>✅ Scholing, taalondersteuning en skills-validatie via o.a. Uitgeverij KleurRijker en EVC Centrum Vigor</li>
        <li>✅ Samenwerkingen met o.a. Gemeenten, Rode Kruis Nederland en Leger des Heils</li>
      </ul>

      <h2>📈 Onze Impact</h2>
      <p>Met bijna 400 actieve kandidaten in onze talentenpool, 5.000 talenten via partners, en het doel om in 2025 1.000 duurzame matches te realiseren, bouwen we aan een arbeidsmarkt waar skills belangrijker zijn dan papieren.</p>

      <h2>💬 De Toekomst</h2>
      <p>Er is nog werk te doen – van betere samenwerking tussen lokale partijen tot structurele financiering van begeleiding – maar dit is een stap in de goede richting. En daar zijn we trots op.</p>

      <p>Deze erkenning door de SER bevestigt dat onze aanpak werkt en dat skill-based matching de toekomst is van inclusieve arbeidsmarktparticipatie.</p>
    `
  },
  {
    id: 2,
    title: 'How to get 10,000 Ukrainians into Work?',
    slug: 'how-to-get-10000-ukrainians-into-work',
    excerpt: 'Helping Ukrainian refugees find suitable jobs—that is the mission of Alex Spaan, founder of Ukraine2Work.',
    category: 'Interview',
    date: '2025-02-24',
    image: '/images/team/alex_spaan.webp',
    tags: ['RefugeeEmployment', 'MaatschappelijkeImpact', 'AIvoorWerk', 'SamenSterk'],
    content: `
      <p>Helping Ukrainian refugees find suitable jobs—that is the mission of Alex Spaan, founder of Ukraine2Work. Together with Nederland Werkt and other partners, he is committed to connecting talent with job opportunities. And with the help of 8vance technology, he has a powerful tool at his disposal.</p>

      <h2>From Idea to Impact</h2>
      <p>The idea was born in 2023 when Alex spoke with his Ukrainian best friend about the challenges refugees in the Netherlands faced. Many found jobs, but often below their skill level. Engineers and IT specialists ended up working as cashiers while companies were in desperate need of skilled talent. Something needed to change.</p>

      <p>Ukraine2work started with a focus on finding suitable jobs for Ukrainian refugees. Since then, it has expanded to include other status holders and now collaborates closely with various shelters, COA, and social organizations.</p>

      <h2>The Challenge: 10,000 People in the System</h2>
      <p>Currently, Ukraine2Work has around 300 refugees in its system, some of whom have already been matched with employers. However, the exact number of successful matches is difficult to determine. Alex estimates that a few dozen have found work through the platform. But the ambition is much greater: Alex wants to have 10,000 candidates in the database by the end of this year and ultimately help 1,000 people find jobs.</p>

      <p>To achieve this, a snowball effect is needed. Companies must be willing to give status holders a chance, and refugees need access to the right tools and guidance. That is why Ukraine2Work organizes recruitment days at shelters and uses social media campaigns to reach and engage refugees.</p>

      <h2>AI and Matching: The Key to Success</h2>
      <p>A crucial element in this process is 8vance's AI matching technology. The system automatically connects candidates to job vacancies based on their skills and experience. Currently, the platform offers access to a vast pool of 300,000 job vacancies from the Dutch labor market, enabling candidates to match themselves with suitable opportunities.</p>

      <p>Yet, human contact remains essential. Alex and his team personally call candidates to refine their profiles and ensure they find the right placement. Employers are also actively approached. Alex sees particular opportunities within SMEs, where the need for workers is high. "Large corporations often work with preferred suppliers, making it hard to get in. With SMEs, we can move much faster."</p>

      <h2>What's Needed?</h2>
      <p>The success of Ukraine2Work depends on employers' willingness to give refugees a chance. Companies with vacancies that are open to diverse talent can get in touch directly. With the right approach and technology, we can not only make the job market more inclusive but also use it more effectively.</p>

      <p>Do you want to contribute to this mission? Contact Ukraine2Work and discover how your organization can make an impact.</p>
    `
  },
  {
    id: 3,
    title: 'Primeur: Ukraine2Work x Metaverse Solutions – ervaar je toekomst in 3D',
    slug: 'ukraine2work-metaverse-solutions-3d',
    excerpt: 'Ukraine2Work en Metaverse Solutions bundelen krachten in digitale beroepsoriëntatie met hyperrealistische 3D-werkomgevingen.',
    category: 'Innovatie',
    date: '2025-01-08',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQFL-nc5EmSnvg/feedshare-shrink_800/B4DZa0qQ0lHQAw-/0/1746787700684?e=1753920000&v=beta&t=tESBAEUOQ2NzSongNCdnwiONZ9djCLFnQIhEHttUg3A',
    tags: ['Metaverse', 'VirtualReality', 'JobTraining', 'Innovation', 'Technology'],
    content: `
      <p>Met trots lanceren we een unieke samenwerking: Ukraine2Work en Metaverse Solutions bundelen krachten in digitale beroepsoriëntatie.</p>

      <h2>Revolutionaire Beroepsoriëntatie</h2>
      <p>Onze hyperrealistische, interactieve 3D-werkomgevingen maken het mogelijk om beroepen écht te ervaren – nog vóór de eerste werkdag. Geen folders of video's, maar zelf rondlopen, machines bedienen of een taak uitvoeren via het web.</p>

      <h2>De Voordelen</h2>
      <p>In combinatie met de persoonlijke bemiddeling van Ukraine2Work zorgt dit voor:</p>
      <ul>
        <li>• Gerichte skilltraining vooraf</li>
        <li>• Meer passende sollicitaties</li>
        <li>• Gemotiveerde kandidaten</li>
        <li>• Snellere, duurzamere plaatsingen</li>
      </ul>

      <h2>Technologie die Werkt</h2>
      <p>Deze innovatieve aanpak combineert de kracht van virtual reality met praktijkgerichte training. Kandidaten kunnen verschillende werkomgevingen verkennen, van productiehallen tot kantoorruimtes, en krijgen zo een realistisch beeld van wat een baan inhoudt.</p>

      <p>Door deze ervaring vooraf op te doen, maken kandidaten betere keuzes en zijn werkgevers zekerder van hun beslissing. Het resultaat? Meer succesvolle plaatsingen en tevreden werknemers én werkgevers.</p>

      <h2>Interesse?</h2>
      <p>Nieuwsgierig naar een demo op locatie? Reageer met "U2W" of mail ons – we laten het graag zien.</p>
    `
  }
]

// Find the current post
const post = computed(() => {
  return blogPosts.find(p => p.slug === slug)
})

// Related posts (exclude current post, limit to 3)
const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts
    .filter(p => p.id !== post.value?.id)
    .slice(0, 3)
})

// Calculate reading time
const readingTime = computed(() => {
  if (!post.value?.content) return 1
  const wordsPerMinute = 200
  const words = post.value.content.replace(/<[^>]*>/g, '').split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
})

// Share URLs
const shareUrls = computed(() => {
  if (!post.value) return { linkedin: '', twitter: '' }
  
  const url = `https://ukraine2work.nl/blog/${post.value.slug}`
  const title = post.value.title
  
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  }
})

// Copy URL function
const copyUrl = async () => {
  if (!post.value) return
  
  const url = `https://ukraine2work.nl/blog/${post.value.slug}`
  
  try {
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy URL:', err)
  }
}

// Format date function
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO and page meta
definePageMeta({
  validate: async (route) => {
    const slug = route.params.slug as string
    return blogPosts.some(post => post.slug === slug)
  }
})

// Set page title and meta description
if (post.value) {
  useSeoMeta({
    title: `${post.value.title} | Ukraine2Work`,
    description: post.value.excerpt,
    ogTitle: post.value.title,
    ogDescription: post.value.excerpt,
    ogImage: post.value.image,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: post.value.title,
    twitterDescription: post.value.excerpt,
    twitterImage: post.value.image
  })
} else {
  // Handle 404 case
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}
</script>