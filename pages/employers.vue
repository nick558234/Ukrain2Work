<template>
  <div>
    <HeroSection pageType="employers" primaryCtaLink="https://nederland-werkt.8vance.com/?language=${$i18n.locale}&authState=register" />
    
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl font-bold mb-6">{{ $t('employers.matchmaking.title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.matchmaking.softSkills.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.matchmaking.softSkills.description') }}</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.matchmaking.hardSkills.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.matchmaking.hardSkills.description') }}</p>
            </div>
            <div class="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.matchmaking.workExperience.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.matchmaking.workExperience.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold mb-6 text-center">{{ $t('employers.importantInfo.title') }}</h2>
          <p class="text-gray-600 mb-8 text-center">{{ $t('employers.importantInfo.description') }}</p>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.importantInfo.noWorkPermit.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.importantInfo.noWorkPermit.description') }}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.importantInfo.languageSupport.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.importantInfo.languageSupport.description') }}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.importantInfo.employmentTerms.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.importantInfo.employmentTerms.description') }}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 class="text-xl font-semibold mb-4">{{ $t('employers.importantInfo.temporaryProtection.title') }}</h3>
              <p class="text-gray-600">{{ $t('employers.importantInfo.temporaryProtection.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">{{ $t('employers.costs.title') }}</h2>
          <p class="text-gray-600 mb-8">{{ $t('employers.costs.description') }}</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">{{ $t('employers.contact.title') }}</h2>
          <p class="text-gray-600 mb-8">{{ $t('employers.contact.description') }}</p>
          <a href="/contact" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            {{ $t('employers.contact.cta') }}
          </a>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">{{ $t('employers.video.title') }}</h2>
          <p class="text-gray-600 mb-8">{{ $t('employers.video.description') }}</p>
          <!-- Add your video component here -->
        </div>
      </div>
    </section>
    
    <EmployerBenefits />
    
    <HowItWorksSection userType="employers" />
    
    <PostJobSection />
    
    <TestimonialsSection defaultTab="employers" />
    
    <CtaSection 
      type="employers" 
      primaryLink="/register?type=employer"
      secondaryLink="/contact?subject=employer-question" 
    />
  </div>
</template>

<script setup>
// Employers page targeting Dutch businesses looking to hire Ukrainian talent
// Emphasizes the benefits and straightforward process of hiring Ukrainian workers
</script>