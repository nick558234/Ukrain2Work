<template>
  <section class="py-16 bg-ukraine-light">
    <div class="container">
      <h2 class="text-ukraine-blue text-center mb-12">{{ $t('about.timeline.title') }}</h2>
      
      <div class="max-w-4xl mx-auto">
        <div v-for="(event, index) in timeline" :key="index" class="flex">
          <!-- Timeline line -->
          <div class="flex flex-col items-center">
            <div class="w-5 h-5 rounded-full bg-ukraine-blue"></div>
            <div class="h-full w-px bg-gray-300" :class="{ 'hidden': index === timeline.length - 1 }"></div>
          </div>
          
          <!-- Timeline content -->
          <div class="ml-6 pb-12" :class="{ 'pb-0': index === timeline.length - 1 }">
            <div class="flex flex-col sm:flex-row sm:items-center mb-2">
              <span class="text-sm font-medium text-white bg-ukraine-blue px-3 py-1 rounded-full">{{ event.date }}</span>
              <h3 class="text-lg font-bold mt-2 sm:mt-0 sm:ml-3">{{ event.title }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ event.description }}</p>
            
            <div v-if="event.image" class="rounded-lg overflow-hidden shadow-md my-4">
              <img 
                :src="event.image" 
                :alt="event.title"
                class="w-full"
                width="600"
                height="300"
                :onerror="`this.src='https://placehold.co/600x300/e9f5ff/0057b8?text=${encodeURIComponent(event.title)}'`"
              />
            </div>
            
            <div v-if="event.highlights && event.highlights.length" class="bg-white p-4 rounded-lg border border-gray-100">
              <ul class="space-y-2">
                <li v-for="(highlight, i) in event.highlights" :key="i" class="flex items-start">
                  <svg class="h-5 w-5 text-ukraine-blue mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Timeline data based on actual Ukraine2Work history - localized
const timeline = computed(() => {
  const timelineData = {
    nl: [
      {
        date: 'April 2023',
        title: 'Het begin van het idee',
        description: 'De eerste contouren van Ukraine2Work worden bedacht. De focus ligt vanaf dag één op skill-based matching: mensen helpen op basis van wat ze écht kunnen, in plaats van diploma\'s of taalniveau alleen. Er worden gesprekken gevoerd met opvanglocaties, vrijwilligers en Oekraïense werkzoekenden.',
        image: null,
        highlights: []
      },
      {
        date: 'Mei – September 2023',
        title: 'Onderzoek en voorbereiding',
        description: 'Een intensieve verkenning volgt naar technologiepartners, waaronder 8vance voor slimme matching. De eerste contacten worden gelegd met gemeenten, sociale ondernemingen en opleidingspartners. Ook wordt gekeken naar skills-validatie en taalondersteuning via externe platforms.',
        image: null,
        highlights: []
      },
      {
        date: 'Oktober 2023',
        title: 'Structuur en oprichting',
        description: 'Ukraine2Work wordt officieel opgericht. De technische infrastructuur wordt opgezet, inclusief het matchingsplatform op basis van AI en skills.',
        image: null,
        highlights: []
      },
      {
        date: 'November – December 2023',
        title: 'Eerste partnerschappen',
        description: 'De eerste samenwerkingen gaan van start. De basis wordt gelegd voor regionale uitbreiding.',
        image: null,
        highlights: [
          'SkillsAPK voor validatie van vaardigheden',
          'Kleurrijker voor online taalontwikkeling',
          'De eerste gemeenten tonen interesse'
        ]
      },
      {
        date: 'Begin 2024',
        title: 'Lancering en de eerste matches',
        description: 'De eerste versie van het digitale platform gaat live. De actieve talentenpool groeit snel; dagelijks melden zich nieuwe Oekraïense werkzoekenden aan. Gemeenten, NGO\'s en bedrijven worden actief benaderd om aan te sluiten.',
        image: null,
        highlights: []
      },
      {
        date: 'Voorjaar 2024',
        title: 'Opschaling en zichtbaarheid',
        description: 'Ukraine2Work breidt de focus uit naar meerdere sectoren. Daarnaast wordt actief deelgenomen aan landelijke netwerkevents en maatschappelijke initiatieven.',
        image: null,
        highlights: [
          'Techniek',
          'Logistiek',
          'Zorg',
          'Schoonmaak'
        ]
      },
      {
        date: 'Zomer 2024',
        title: 'Structuur & focus',
        description: 'De doelen worden aangescherpt voor duurzame impact.',
        image: null,
        highlights: [
          'Focus op duurzame plaatsingen',
          'Kandidaten voorrang geven op werk dat aansluit bij hun ervaring',
          'Werkgevers ontzorgen met betrouwbare, gemotiveerde medewerkers'
        ]
      },
      {
        date: 'Najaar 2024',
        title: 'Groei in samenwerking & impact',
        description: 'Ukraine2Work sluit zich aan bij landelijke netwerken van gemeenten en opvangorganisaties. De talentenpool blijft groeien en de eerste plaatsingen zijn een feit.',
        image: null,
        highlights: [
          'Het Rode Kruis',
          'Leger des Heils',
          'Diverse gemeenten'
        ]
      },
      {
        date: 'Begin 2025',
        title: 'Een vacature voor iedereen',
        description: 'Het platform beschikt inmiddels over 300.000 geüpdatete vacatures, afkomstig uit heel Nederland en beschikbaar voor directe matching.',
        image: null,
        highlights: []
      },
      {
        date: 'Mei 2025',
        title: 'Digitale vernieuwing met Metaverse Solutions',
        description: 'Een unieke samenwerking wordt gestart met Metaverse Solutions. Ukraine2Work introduceert hyperrealistische 3D-werkomgevingen waarmee kandidaten werkervaring kunnen simuleren vóór ze aan de slag gaan – een primeur in Nederland.',
        image: null,
        highlights: []
      },
      {
        date: 'Heden',
        title: 'Groei, focus en 400+ talenten',
        description: 'Ukraine2Work ondersteunt inmiddels meer dan 400 Oekraïense vluchtelingen met een actief profiel in het systeem. Het platform combineert geavanceerde AI-technologie met persoonlijke begeleiding.',
        image: null,
        highlights: [
          '1.000 succesvolle plaatsingen (doel eind 2025)',
          '3.000 actieve registraties (doel eind 2025)',
          '10.000 Oekraïense mensen bereiken (doel eind 2025)'
        ]
      }
    ],
    en: [
      {
        date: 'April 2023',
        title: 'The Beginning of the Idea',
        description: 'The first outlines of Ukraine2Work are conceived. From day one, the focus is on skill-based matching: helping people based on what they can truly do, rather than diplomas or language level alone. Conversations are held with reception locations, volunteers, and Ukrainian job seekers.',
        image: null,
        highlights: []
      },
      {
        date: 'May – September 2023',
        title: 'Research and Preparation',
        description: 'An intensive exploration follows into technology partners, including 8vance for smart matching. First contacts are made with municipalities, social enterprises, and training partners. Skills validation and language support through external platforms are also explored.',
        image: null,
        highlights: []
      },
      {
        date: 'October 2023',
        title: 'Structure and Foundation',
        description: 'Ukraine2Work is officially founded. The technical infrastructure is set up, including the AI and skills-based matching platform.',
        image: null,
        highlights: []
      },
      {
        date: 'November – December 2023',
        title: 'First Partnerships',
        description: 'The first collaborations begin. The foundation is laid for regional expansion.',
        image: null,
        highlights: [
          'SkillsAPK for skills validation',
          'Kleurrijker for online language development',
          'First municipalities show interest'
        ]
      },
      {
        date: 'Early 2024',
        title: 'Launch and First Matches',
        description: 'The first version of the digital platform goes live. The active talent pool grows rapidly; new Ukrainian job seekers register daily. Municipalities, NGOs, and companies are actively approached to join.',
        image: null,
        highlights: []
      },
      {
        date: 'Spring 2024',
        title: 'Scaling and Visibility',
        description: 'Ukraine2Work expands focus to multiple sectors. Active participation in national network events and social initiatives also takes place.',
        image: null,
        highlights: [
          'Technology',
          'Logistics',
          'Healthcare',
          'Cleaning'
        ]
      },
      {
        date: 'Summer 2024',
        title: 'Structure & Focus',
        description: 'Goals are sharpened for sustainable impact.',
        image: null,
        highlights: [
          'Focus on sustainable placements',
          'Prioritizing candidates for work that matches their experience',
          'Supporting employers with reliable, motivated employees'
        ]
      },
      {
        date: 'Fall 2024',
        title: 'Growth in Collaboration & Impact',
        description: 'Ukraine2Work joins national networks of municipalities and reception organizations. The talent pool continues to grow and first placements become reality.',
        image: null,
        highlights: [
          'The Red Cross',
          'Salvation Army',
          'Various municipalities'
        ]
      },
      {
        date: 'Early 2025',
        title: 'A Job for Everyone',
        description: 'The platform now has 300,000 updated vacancies from across the Netherlands available for direct matching.',
        image: null,
        highlights: []
      },
      {
        date: 'May 2025',
        title: 'Digital Innovation with Metaverse Solutions',
        description: 'A unique collaboration is started with Metaverse Solutions. Ukraine2Work introduces hyperrealistic 3D work environments where candidates can simulate work experience before starting – a first in the Netherlands.',
        image: null,
        highlights: []
      },
      {
        date: 'Present',
        title: 'Growth, Focus and 400+ Talents',
        description: 'Ukraine2Work now supports more than 400 Ukrainian refugees with an active profile in the system. The platform combines advanced AI technology with personal guidance.',
        image: null,
        highlights: [
          '1,000 successful placements (goal end 2025)',
          '3,000 active registrations (goal end 2025)',
          '10,000 Ukrainian people reached (goal end 2025)'
        ]
      }
    ],
    uk: [
      {
        date: 'Квітень 2023',
        title: 'Початок ідеї',
        description: 'З\'являються перші контури Ukraine2Work. З першого дня фокус спрямований на підбір за навичками: допомога людям на основі того, що вони справді можуть робити, а не тільки за дипломами чи рівнем мови. Ведуться розмови з місцями прийому, волонтерами та українськими шукачами роботи.',
        image: null,
        highlights: []
      },
      {
        date: 'Травень – Вересень 2023',
        title: 'Дослідження та підготовка',
        description: 'Слідує інтенсивне дослідження технологічних партнерів, включаючи 8vance для розумного підбору. Налагоджуються перші контакти з муніципалітетами, соціальними підприємствами та навчальними партнерами. Також розглядається валідація навичок та мовна підтримка через зовнішні платформи.',
        image: null,
        highlights: []
      },
      {
        date: 'Жовтень 2023',
        title: 'Структура та заснування',
        description: 'Ukraine2Work офіційно засновано. Налаштовується технічна інфраструктура, включаючи платформу для підбору на основі ШІ та навичок.',
        image: null,
        highlights: []
      },
      {
        date: 'Листопад – Грудень 2023',
        title: 'Перші партнерства',
        description: 'Починається перше співробітництво. Закладається основа для регіонального розширення.',
        image: null,
        highlights: [
          'SkillsAPK для валідації навичок',
          'Kleurrijker для онлайн розвитку мови',
          'Перші муніципалітети проявляють інтерес'
        ]
      },
      {
        date: 'Початок 2024',
        title: 'Запуск та перші співпадіння',
        description: 'Перша версія цифрової платформи запускається. Активний пул талантів швидко зростає; щодня реєструються нові українські шукачі роботи. Муніципалітети, НГО та компанії активно залучаються до участі.',
        image: null,
        highlights: []
      },
      {
        date: 'Весна 2024',
        title: 'Масштабування та видимість',
        description: 'Ukraine2Work розширює фокус на декілька секторів. Також відбувається активна участь у національних мережевих подіях та соціальних ініціативах.',
        image: null,
        highlights: [
          'Технології',
          'Логістика',
          'Охорона здоров\'я',
          'Прибирання'
        ]
      },
      {
        date: 'Літо 2024',
        title: 'Структура та фокус',
        description: 'Цілі уточнюються для стійкого впливу.',
        image: null,
        highlights: [
          'Фокус на стійкі працевлаштування',
          'Пріоритет кандидатам на роботу, що відповідає їх досвіду',
          'Підтримка роботодавців надійними, мотивованими працівниками'
        ]
      },
      {
        date: 'Осінь 2024',
        title: 'Зростання співпраці та впливу',
        description: 'Ukraine2Work приєднується до національних мереж муніципалітетів та організацій прийому. Пул талантів продовжує зростати, і перші працевлаштування стають реальністю.',
        image: null,
        highlights: [
          'Червоний Хрест',
          'Армія Порятунку',
          'Різні муніципалітети'
        ]
      },
      {
        date: 'Початок 2025',
        title: 'Робота для кожного',
        description: 'Платформа тепер має 300,000 оновлених вакансій з усіх Нідерландів, доступних для прямого підбору.',
        image: null,
        highlights: []
      },
      {
        date: 'Травень 2025',
        title: 'Цифрові інновації з Metaverse Solutions',
        description: 'Розпочинається унікальне співробітництво з Metaverse Solutions. Ukraine2Work запроваджує гіперреалістичні 3D-робочі середовища, де кандидати можуть симулювати робочий досвід перед початком роботи – перший у Нідерландах.',
        image: null,
        highlights: []
      },
      {
        date: 'Сьогодні',
        title: 'Зростання, фокус та 400+ талантів',
        description: 'Ukraine2Work тепер підтримує понад 400 українських біженців з активним профілем у системі. Платформа поєднує передові ШІ-технології з персональним керівництвом.',
        image: null,
        highlights: [
          '1,000 успішних працевлаштувань (ціль кінця 2025)',
          '3,000 активних реєстрацій (ціль кінця 2025)',
          '10,000 українців досягнуто (ціль кінця 2025)'
        ]
      }
    ]
  };

  return timelineData[locale.value] || timelineData.nl;
});
</script>