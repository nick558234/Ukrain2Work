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
          {{ cat.label[locale] }}
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
          <h2 class="text-2xl font-bold text-ukraine-blue mb-6">{{ cat.label[locale] }}</h2>
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
                <span>{{ faq.q[locale] }}</span>
                <svg class="h-5 w-5 transition-transform duration-200" :class="open[cat.id] === i ? 'rotate-180 text-ukraine-blue' : 'text-gray-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="faq-fade">
                <div v-show="open[cat.id] === i" class="pt-4 text-gray-700 px-4" style="overflow:hidden">
                  <p>{{ faq.a[locale] }}</p>
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
import { ref, reactive, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const categories = [
  { id: 'algemeen', label: { nl: 'Algemeen', en: 'General', uk: 'Загальні' } },
  { id: 'registratie', label: { nl: 'Registratie en Profiel', en: 'Registration and Profile', uk: 'Реєстрація та Профіль' } },
  { id: 'vacaturematching', label: { nl: 'Vacaturematching en Beschikbaarheid', en: 'Job Matching and Availability', uk: 'Підбір вакансій та доступність' } },
  { id: 'ondersteuning', label: { nl: 'Ondersteuning en Diensten', en: 'Support and Services', uk: 'Підтримка та послуги' } },
  { id: 'werkgevers', label: { nl: 'Voor Werkgevers', en: 'For Employers', uk: 'Для роботодавців' } },
  { id: 'contact', label: { nl: 'Contactinformatie', en: 'Contact Information', uk: 'Контактна інформація' } }
]

const faqs = {
  algemeen: [
    { q: { nl: 'Wat is Ukraine2Work?', en: 'What is Ukraine2Work?', uk: 'Що таке Ukraine2Work?' }, a: { nl: 'Ukraine2Work is een platform dat Oekraïense vluchtelingen helpt bij het vinden van werk in Nederland.', en: 'Ukraine2Work is a platform that helps Ukrainian refugees find work in the Netherlands.', uk: 'Ukraine2Work — це платформа, яка допомагає українським біженцям знайти роботу в Нідерландах.' } },
    { q: { nl: 'Voor wie is Ukraine2Work bedoeld?', en: 'Who is Ukraine2Work for?', uk: 'Для кого призначений Ukraine2Work?' }, a: { nl: 'Voor Oekraïense vluchtelingen en andere statushouders die in Nederland willen werken.', en: 'For Ukrainian refugees and other status holders who want to work in the Netherlands.', uk: 'Для українських біженців та інших осіб зі статусом, які хочуть працювати в Нідерландах.' } },
    { q: { nl: 'Is Ukraine2Work gratis?', en: 'Is Ukraine2Work free?', uk: 'Чи є Ukraine2Work безкоштовним?' }, a: { nl: 'Ja, het gebruik van Ukraine2Work is volledig gratis voor werkzoekenden.', en: 'Yes, using Ukraine2Work is completely free for job seekers.', uk: 'Так, використання Ukraine2Work повністю безкоштовне для шукачів роботи.' } },
    { q: { nl: 'In welke talen is het platform beschikbaar?', en: 'In which languages is the platform available?', uk: 'Якими мовами доступна платформа?' }, a: { nl: 'Het platform is beschikbaar in het Nederlands, Engels en Oekraïens.', en: 'The platform is available in Dutch, English, and Ukrainian.', uk: 'Платформа доступна нідерландською, англійською та українською мовами.' } },
    { q: { nl: 'Werkt Ukraine2Work alleen voor Oekraïense vluchtelingen?', en: 'Does Ukraine2Work only work for Ukrainian refugees?', uk: 'Чи працює Ukraine2Work лише для українських біженців?' }, a: { nl: 'Nee, ook andere statushouders kunnen gebruikmaken van het platform.', en: 'No, other status holders can also use the platform.', uk: 'Ні, платформою можуть користуватися й інші особи зі статусом.' } }
  ],
  registratie: [
    { q: { nl: 'Hoe kan ik me inschrijven op Ukraine2Work?', en: 'How can I register on Ukraine2Work?', uk: 'Як я можу зареєструватися на Ukraine2Work?' }, a: { nl: 'Je kunt je inschrijven via het registratieformulier op de website.', en: 'You can register via the registration form on the website.', uk: 'Ви можете зареєструватися через реєстраційну форму на сайті.' } },
    { q: { nl: 'Hoe werkt het inschrijfproces?', en: 'How does the registration process work?', uk: 'Як працює процес реєстрації?' }, a: { nl: 'Na het invullen van je gegevens ontvang je een bevestiging en kun je je profiel verder aanvullen.', en: 'After entering your details, you will receive a confirmation and can further complete your profile.', uk: 'Після введення даних ви отримаєте підтвердження і зможете доповнити свій профіль.' } },
    { q: { nl: 'Kan ik mijn profiel later aanpassen?', en: 'Can I edit my profile later?', uk: 'Чи можу я пізніше змінити свій профіль?' }, a: { nl: 'Ja, je kunt je profiel op elk moment aanpassen na inloggen.', en: 'Yes, you can edit your profile at any time after logging in.', uk: 'Так, ви можете змінювати свій профіль у будь-який час після входу.' } },
    { q: { nl: 'Kan ik hulp krijgen tijdens het inschrijfproces?', en: 'Can I get help during the registration process?', uk: 'Чи можу я отримати допомогу під час реєстрації?' }, a: { nl: 'Ja, ons team staat klaar om je te ondersteunen bij het inschrijven.', en: 'Yes, our team is ready to support you during registration.', uk: 'Так, наша команда готова допомогти вам під час реєстрації.' } }
  ],
  vacaturematching: [
    { q: { nl: 'Wat voor soort banen zijn beschikbaar op het platform?', en: 'What types of jobs are available on the platform?', uk: 'Які типи вакансій доступні на платформі?' }, a: { nl: 'Er zijn banen in diverse sectoren, van techniek tot zorg en logistiek.', en: 'There are jobs in various sectors, from technology to healthcare and logistics.', uk: 'На платформі є вакансії у різних секторах: від техніки до медицини та логістики.' } },
    { q: { nl: 'Hoe kan ik een passende baan vinden?', en: 'How can I find a suitable job?', uk: 'Як я можу знайти підходящу роботу?' }, a: { nl: 'Gebruik de zoekfunctie en filters om vacatures te vinden die bij je passen.', en: 'Use the search function and filters to find vacancies that suit you.', uk: 'Використовуйте пошук і фільтри, щоб знайти вакансії, які вам підходять.' } },
    { q: { nl: 'Hoe lang duurt het voordat ik een baan vind via Ukraine2Work?', en: 'How long does it take to find a job through Ukraine2Work?', uk: 'Скільки часу займає пошук роботи через Ukraine2Work?' }, a: { nl: 'Dit verschilt per persoon, maar we doen ons best om je zo snel mogelijk te matchen.', en: 'This varies per person, but we do our best to match you as quickly as possible.', uk: 'Це залежить від людини, але ми робимо все можливе, щоб знайти роботу якнайшвидше.' } },
    { q: { nl: 'Wat gebeurt er als ik geen passende vacature kan vinden?', en: 'What if I can\'t find a suitable vacancy?', uk: 'Що робити, якщо я не можу знайти підходящу вакансію?' }, a: { nl: 'Neem contact op met ons team, we helpen je graag verder.', en: 'Contact our team, we are happy to help you further.', uk: 'Зверніться до нашої команди — ми з радістю допоможемо вам далі.' } }
  ],
  ondersteuning: [
    { q: { nl: 'Hoe helpt Ukraine2Work mij bij het vinden van werk?', en: 'How does Ukraine2Work help me find work?', uk: 'Як Ukraine2Work допомагає мені знайти роботу?' }, a: { nl: 'We bieden persoonlijke begeleiding, cv-checks en sollicitatietraining.', en: 'We offer personal guidance, CV checks, and interview training.', uk: 'Ми пропонуємо персональний супровід, перевірку резюме та тренінги з працевлаштування.' } },
    { q: { nl: 'Welke ondersteuning biedt Ukraine2Work na inschrijving?', en: 'What support does Ukraine2Work offer after registration?', uk: 'Яку підтримку пропонує Ukraine2Work після реєстрації?' }, a: { nl: 'Na inschrijving kun je gebruikmaken van onze jobcoaches en workshops.', en: 'After registration, you can use our job coaches and workshops.', uk: 'Після реєстрації ви можете скористатися послугами наших консультантів та відвідати воркшопи.' } },
    { q: { nl: 'Wat is een Skills APK?', en: 'What is a Skills APK?', uk: 'Що таке Skills APK?' }, a: { nl: 'Een Skills APK is een beoordeling van je vaardigheden om je kansen op de arbeidsmarkt te vergroten.', en: 'A Skills APK is an assessment of your skills to increase your chances on the job market.', uk: 'Skills APK — це оцінка ваших навичок для підвищення шансів на ринку праці.' } }
  ],
  werkgevers: [
    { q: { nl: 'Hoe kunnen werkgevers zich registreren op Ukraine2Work?', en: 'How can employers register on Ukraine2Work?', uk: 'Як роботодавці можуть зареєструватися на Ukraine2Work?' }, a: { nl: 'Werkgevers kunnen zich aanmelden via het werkgeversportaal.', en: 'Employers can sign up via the employer portal.', uk: 'Роботодавці можуть зареєструватися через портал для роботодавців.' } },
    { q: { nl: 'Wat zijn de kosten voor bedrijven?', en: 'What are the costs for companies?', uk: 'Які витрати для компаній?' }, a: { nl: 'Voor bedrijven zijn er kosten verbonden aan het plaatsen van vacatures en het gebruik van extra diensten.', en: 'There are costs for companies to post vacancies and use extra services.', uk: 'Для компаній є витрати на розміщення вакансій та додаткові послуги.' } },
    { q: { nl: 'Hoe garandeert Ukraine2Work dat de vacatures actueel zijn?', en: 'How does Ukraine2Work ensure that vacancies are up to date?', uk: 'Як Ukraine2Work гарантує актуальність вакансій?' }, a: { nl: 'We werken samen met betrouwbare partners en controleren regelmatig de vacatures.', en: 'We work with reliable partners and regularly check the vacancies.', uk: 'Ми співпрацюємо з надійними партнерами та регулярно перевіряємо вакансії.' } }
  ],
  contact: [
    { q: { nl: 'Hoe kan ik contact opnemen met Ukraine2Work?', en: 'How can I contact Ukraine2Work?', uk: 'Як я можу зв\'язатися з Ukraine2Work?' }, a: { nl: 'Je kunt contact opnemen via het contactformulier, e-mail of telefoon. Zie onze contactpagina voor meer informatie.', en: 'You can contact us via the contact form, email, or phone. See our contact page for more information.', uk: 'Ви можете зв\'язатися з нами через контактну форму, електронну пошту або телефон. Детальніше на сторінці контактів.' } }
  ]
}

const open = reactive({})
const activeCategory = ref(categories[0].id)

// SEO meta tags for FAQ page
useSeoMeta({
  title: 'Veelgestelde Vragen (FAQ) - Ukraine2Work',
  description: 'Vind antwoorden op veelgestelde vragen over Ukraine2Work. Informatie over registratie, werk zoeken, talent vinden en working permits.',
  keywords: 'Ukraine2Work FAQ, Ukraine 2 Work vragen, veelgestelde vragen, hulp Ukraine2Work, support, registration help, work permit questions, employer FAQ',
  author: 'Ukraine2Work',
  robots: 'index, follow',
  
  // Open Graph
  ogTitle: 'Veelgestelde Vragen (FAQ) - Ukraine2Work',
  ogDescription: 'Vind antwoorden op veelgestelde vragen over Ukraine2Work. Informatie over registratie, werk zoeken, talent vinden en working permits.',
  ogUrl: 'https://ukraine2work.nl/faq',
  
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Veelgestelde Vragen (FAQ) - Ukraine2Work',
  twitterDescription: 'Vind antwoorden op veelgestelde vragen over Ukraine2Work. Informatie over registratie, werk zoeken, talent vinden en working permits.'
})

// Canonical URL
useHead({
  link: [
    { rel: 'canonical', href: 'https://ukraine2work.nl/faq' }
  ]
})

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
