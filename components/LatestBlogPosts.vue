<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-ukraine-blue text-2xl md:text-3xl lg:text-4xl">{{ $t('blog.latestPosts') }}</h2>
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
const { t } = useI18n()

// Use the same blog posts as the blog index page
const latestPosts = [
  {
    title: 'We staan op de SER-website! 🎉',
    slug: 'ukraine2work-ser-website',
    excerpt: 'Met trots delen we dat Ukraine2Work vanaf vandaag te vinden is op de officiële site van de Sociaal-Economische Raad (SER).',
    category: 'Nieuws',
    date: '2025-01-15',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQEiVAEFuufCeg/feedshare-shrink_2048_1536/B4DZdEznvIGkAo-/0/1749206073094?e=1753920000&v=beta&t=6r-eIbtyNb_0daP0driFv26Fxz1aFiMLiLEg1vGl9AU',
    tags: ['Ukraine2Work', 'SER', 'WerkVoorOekraïne', 'SkillBasedMatching', 'InclusieveArbeidsmarkt']
  },
  {
    title: 'How to get 10,000 Ukrainians into Work?',
    slug: 'how-to-get-10000-ukrainians-into-work',
    excerpt: 'Helping Ukrainian refugees find suitable jobs—that is the mission of Alex Spaan, founder of Ukraine2Work.',
    category: 'Interview',
    date: '2025-02-24',
    image: '/images/team/alex_spaan.webp',
    tags: ['RefugeeEmployment', 'MaatschappelijkeImpact', 'AIvoorWerk', 'SamenSterk']
  },
  {
    title: 'Primeur: Ukraine2Work x Metaverse Solutions – ervaar je toekomst in 3D',
    slug: 'ukraine2work-metaverse-solutions-3d',
    excerpt: 'Ukraine2Work en Metaverse Solutions bundelen krachten in digitale beroepsoriëntatie met hyperrealistische 3D-werkomgevingen.',
    category: 'Innovatie',
    date: '2025-01-08',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQFL-nc5EmSnvg/feedshare-shrink_800/B4DZa0qQ0lHQAw-/0/1746787700684?e=1753920000&v=beta&t=tESBAEUOQ2NzSongNCdnwiONZ9djCLFnQIhEHttUg3A',
    tags: ['Metaverse', 'VirtualReality', 'JobTraining', 'Innovation', 'Technology']
  }
];
</script>