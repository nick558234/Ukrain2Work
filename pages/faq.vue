<template>
  <section class="py-16 bg-white">
    <div class="container">
      <h1 class="text-3xl md:text-4xl font-bold text-center text-ukraine-blue mb-12">Veelgestelde Vragen</h1>
      <!-- Category navigation -->
      <nav class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="scrollTo(cat.id)"
          class="px-4 py-2 rounded-md font-medium transition-colors"
          :class="activeCategory === cat.id ? 'bg-ukraine-blue text-white' : 'bg-gray-100 text-ukraine-blue hover:bg-ukraine-yellow hover:text-white'"
        >
          {{ cat.label }}
        </button>
      </nav>
      <!-- FAQ sections -->
      <div>
        <section
          v-for="cat in categories"
          :key="cat.id"
          :id="cat.id"
          class="mb-12 scroll-mt-24"
        >
          <h2 class="text-2xl font-bold text-ukraine-blue mb-6">{{ cat.label }}</h2>
          <div class="divide-y divide-gray-200">
            <div
              v-for="(faq, i) in faqs[cat.id]"
              :key="i"
              class="py-2"
            >
              <button
                @click="toggle(cat.id, i)"
                class="flex justify-between items-center w-full text-left font-medium focus:outline-none transition-colors duration-200 px-4 py-4 rounded-lg hover:bg-ukraine-light"
                :class="open[cat.id] === i ? 'text-ukraine-blue bg-ukraine-light shadow-md' : 'text-gray-900'"
              >
                <span>{{ faq.q }}</span>
                <svg class="h-5 w-5 transition-transform duration-200" :class="open[cat.id] === i ? 'rotate-180 text-ukraine-blue' : 'text-gray-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="faq-fade">
                <div v-show="open[cat.id] === i" class="pt-4 text-gray-700 px-4" style="overflow:hidden">
                  <p>{{ faq.a }}</p>
                </div>
              </transition>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const categories = [
  { id: 'algemeen', label: 'Algemeen' },
  { id: 'registratie', label: 'Registratie en Profiel' },
  { id: 'vacaturematching', label: 'Vacaturematching en Beschikbaarheid' },
  { id: 'ondersteuning', label: 'Ondersteuning en Diensten' },
  { id: 'werkgevers', label: 'Voor Werkgevers' },
  { id: 'contact', label: 'Contactinformatie' }
]

const faqs = {
  algemeen: [
    { q: 'Wat is Ukraine2Work?', a: 'Ukraine2Work is een platform dat Oekraïense vluchtelingen helpt bij het vinden van werk in Nederland.' },
    { q: 'Voor wie is Ukraine2Work bedoeld?', a: 'Voor Oekraïense vluchtelingen en andere statushouders die in Nederland willen werken.' },
    { q: 'Is Ukraine2Work gratis?', a: 'Ja, het gebruik van Ukraine2Work is volledig gratis voor werkzoekenden.' },
    { q: 'In welke talen is het platform beschikbaar?', a: 'Het platform is beschikbaar in het Nederlands, Engels en Oekraïens.' },
    { q: 'Werkt Ukraine2Work alleen voor Oekraïense vluchtelingen?', a: 'Nee, ook andere statushouders kunnen gebruikmaken van het platform.' }
  ],
  registratie: [
    { q: 'Hoe kan ik me inschrijven op Ukraine2Work?', a: 'Je kunt je inschrijven via het registratieformulier op de website.' },
    { q: 'Hoe werkt het inschrijfproces?', a: 'Na het invullen van je gegevens ontvang je een bevestiging en kun je je profiel verder aanvullen.' },
    { q: 'Kan ik mijn profiel later aanpassen?', a: 'Ja, je kunt je profiel op elk moment aanpassen na inloggen.' },
    { q: 'Kan ik hulp krijgen tijdens het inschrijfproces?', a: 'Ja, ons team staat klaar om je te ondersteunen bij het inschrijven.' }
  ],
  vacaturematching: [
    { q: 'Wat voor soort banen zijn beschikbaar op het platform?', a: 'Er zijn banen in diverse sectoren, van techniek tot zorg en logistiek.' },
    { q: 'Hoe kan ik een passende baan vinden?', a: 'Gebruik de zoekfunctie en filters om vacatures te vinden die bij je passen.' },
    { q: 'Hoe lang duurt het voordat ik een baan vind via Ukraine2Work?', a: 'Dit verschilt per persoon, maar we doen ons best om je zo snel mogelijk te matchen.' },
    { q: 'Wat gebeurt er als ik geen passende vacature kan vinden?', a: 'Neem contact op met ons team, we helpen je graag verder.' }
  ],
  ondersteuning: [
    { q: 'Hoe helpt Ukraine2Work mij bij het vinden van werk?', a: 'We bieden persoonlijke begeleiding, cv-checks en sollicitatietraining.' },
    { q: 'Welke ondersteuning biedt Ukraine2Work na inschrijving?', a: 'Na inschrijving kun je gebruikmaken van onze jobcoaches en workshops.' },
    { q: 'Wat is een Skills APK?', a: 'Een Skills APK is een beoordeling van je vaardigheden om je kansen op de arbeidsmarkt te vergroten.' }
  ],
  werkgevers: [
    { q: 'Hoe kunnen werkgevers zich registreren op Ukraine2Work?', a: 'Werkgevers kunnen zich aanmelden via het werkgeversportaal.' },
    { q: 'Wat zijn de kosten voor bedrijven?', a: 'Voor bedrijven zijn er kosten verbonden aan het plaatsen van vacatures en het gebruik van extra diensten.' },
    { q: 'Hoe garandeert Ukraine2Work dat de vacatures actueel zijn?', a: 'We werken samen met betrouwbare partners en controleren regelmatig de vacatures.' }
  ],
  contact: [
    { q: 'Hoe kan ik contact opnemen met Ukraine2Work?', a: 'Je kunt contact opnemen via het contactformulier, e-mail of telefoon. Zie onze contactpagina voor meer informatie.' }
  ]
}

const open = reactive({})
const activeCategory = ref(categories[0].id)

function toggle(catId, i) {
  open[catId] = open[catId] === i ? null : i
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeCategory.value = id
  }
}

onMounted(() => {
  // Optional: update activeCategory on scroll
  window.addEventListener('scroll', () => {
    for (const cat of categories) {
      const el = document.getElementById(cat.id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          activeCategory.value = cat.id
        }
      }
    }
  })
})
</script>

<style scoped>
.faq-fade-enter-active, .faq-fade-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1);
}
.faq-fade-enter-from, .faq-fade-leave-to {
  max-height: 0;
  opacity: 0;
}
.faq-fade-enter-to, .faq-fade-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
