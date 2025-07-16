<template>
  <div class="bg-gray-100 text-gray-800 font-roboto">
    <!-- STICKY PROFESSIONAL HEADER -->
    <header class="bg-white shadow sticky w-full top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex flex-col items-center">
        <div class="flex items-center gap-4">
          <NuxtLink to="/">
            <img src="/images/logo.jpg" alt="Ukraine2Work Logo" class="h-16" />
          </NuxtLink>
          <div class="text-center">
            <h1 class="text-xl font-bold">Word Early Adopter van Ukraine2Work</h1>
            <p class="text-sm text-gray-600">Exclusieve aanbieding voor werkgevers in regio Eindhoven</p>
            <div class="mt-4">
              <button 
                @click="openModal" 
                class="bg-[#FFD64A] text-[#1f2937] px-4 py-2 rounded-lg font-bold shadow hover:bg-yellow-300 hover:scale-102 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD64A] text-sm" 
                aria-label="Plan direct een kennismaking"
              >
                Plan direct een kennismaking
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- VALUE PROPOSITION -->
    <section class="max-w-3xl mx-auto py-10 px-4 md:px-0">
      <h2 class="text-2xl font-semibold mb-6 text-center text-[#0057B8]">Waarom kiezen voor Ukraine2Work?</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 text-base">
        <li class="flex items-start gap-3">
          <span class="inline-block align-middle">
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-[#0057B8]'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
            </svg>
          </span> 
          Skill-based matching met AI-technologie
        </li>
        <li class="flex items-start gap-3">
          <span class="inline-block align-middle">
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-[#0057B8]'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
            </svg>
          </span> 
          Direct toegang tot actieve talenten in de regio
        </li>
        <li class="flex items-start gap-3">
          <span class="inline-block align-middle">
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-[#0057B8]'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
            </svg>
          </span> 
          Geen set-upkosten of langdurige contracten
        </li>
        <li class="flex items-start gap-3">
          <span class="inline-block align-middle">
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-[#0057B8]'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
            </svg>
          </span> 
          Focus op duurzame plaatsingen met impact
        </li>
        <li class="flex items-start gap-3">
          <span class="inline-block align-middle">
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-[#0057B8]'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
            </svg>
          </span> 
          Inclusief Oekraïense vluchtelingen en andere werkzoekenden met afstand tot de arbeidsmarkt
        </li>
      </ul>
    </section>

    <!-- EARLY ADOPTER DEAL CARD -->
    <section class="max-w-2xl mx-auto py-6 px-4 md:px-0">
      <div class="bg-white rounded-2xl shadow-2xl border-4 border-[#FFD64A] p-4 md:p-6 text-center relative overflow-hidden">
        <span class="absolute top-3 right-4 bg-[#FFD64A] text-yellow-900 text-xs font-bold px-2 py-0.5 rounded animate-pulse">Best Deal</span>
        <h2 class="text-lg md:text-xl font-extrabold text-yellow-900 mb-1">
          Early Adopter Deal 
          <span class="text-xs text-gray-500 font-normal">(t/m 15 augustus 2025)</span>
        </h2>
        <p class="text-sm md:text-base text-gray-700 mb-3">
          <strong>Eenmalige deelnamebijdrage van €750 bij ondertekening</strong><br>
          Deze bijdrage helpt ons marketing, reiskosten en opschaling te financieren.
        </p>
        <button 
          @click="openModal" 
          class="bg-[#FFD64A] text-[#1f2937] px-4 py-2 rounded-lg font-bold shadow hover:bg-yellow-300 hover:scale-102 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD64A] text-sm md:text-base w-full md:w-auto" 
          aria-label="Word Early Adopter"
        >
          Word Early Adopter
        </button>
        <div class="text-xs text-gray-500 mt-2">
          Let op: we hebben plek voor maximaal <span class="font-bold">15 early adopters</span>.
        </div>
      </div>
    </section>

    <!-- PACKAGE COMPARISON -->
    <section class="max-w-5xl mx-auto py-10 px-4 md:px-0">
      <h2 class="text-2xl font-bold text-center mb-8">Vergelijk onze pakketten</h2>
      
      <!-- Desktop Table -->
      <div class="hidden md:block">
        <table class="w-full text-base bg-white rounded-2xl shadow overflow-hidden">
          <thead>
            <tr class="bg-blue-100 text-blue-900">
              <th class="py-4 px-2 text-left font-bold">&nbsp;</th>
              <th class="py-4 px-2 font-bold bg-yellow-100 text-yellow-900 border-l-4 border-yellow-300 text-center">Early Adopter Deal</th>
              <th class="py-4 px-2 font-bold text-center">Standaardpakket</th>
              <th class="py-4 px-2 font-bold text-center">Groeipakket</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  Set-up fee
                  <span class="tooltiptext">Eenmalige opstartkosten</span>
                </div>
              </td>
              <td class="py-3 px-2 text-green-700 font-bold bg-yellow-50 text-center">€0</td>
              <td class="py-3 px-2 font-bold text-center">€750</td>
              <td class="py-3 px-2 font-bold text-center">€2.500</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  Per match
                  <span class="tooltiptext">Kosten per succesvolle plaatsing</span>
                </div>
              </td>
              <td class="py-3 px-2 text-green-700 font-bold bg-yellow-50 text-center">€500</td>
              <td class="py-3 px-2 font-bold text-center">€750</td>
              <td class="py-3 px-2 font-bold text-center">€250</td>
            </tr>
            <tr>
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  Maximaal aantal matches
                  <span class="tooltiptext">Aantal plaatsingen binnen pakket</span>
                </div>
              </td>
              <td class="py-3 px-2 font-bold bg-yellow-50 text-center">10</td>
              <td class="py-3 px-2 font-bold text-center">10</td>
              <td class="py-3 px-2 font-bold text-center">Onbeperkt</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  Maandelijkse fee
                  <span class="tooltiptext">Gebruikskosten platform</span>
                </div>
              </td>
              <td class="py-3 px-2 font-bold bg-yellow-50 text-center">
                €100 (sept - jan)<br>
                <span class='text-xs text-gray-500'>Daarna standaardtarief</span>
              </td>
              <td class="py-3 px-2 font-bold text-center">€250</td>
              <td class="py-3 px-2 font-bold text-center">€800</td>
            </tr>
            <tr>
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  Exclusieve toegang
                  <span class="tooltiptext">2 weken eerder toegang tot kandidaten</span>
                </div>
              </td>
              <td class="py-3 px-2 bg-yellow-50 text-center">
                <span class="inline-block align-middle">
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
                  </svg>
                </span>
              </td>
              <td class="py-3 px-2 text-gray-400 text-xl text-center">–</td>
              <td class="py-3 px-2 text-gray-400 text-xl text-center">–</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  1-op-1 support
                  <span class="tooltiptext">Persoonlijke begeleiding</span>
                </div>
              </td>
              <td class="py-3 px-2 bg-yellow-50 text-center">
                <span class="inline-block align-middle">
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
                  </svg>
                </span>
              </td>
              <td class="py-3 px-2 text-gray-400 text-xl text-center">–</td>
              <td class="py-3 px-2 text-center">
                <span class="inline-block align-middle">
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
                  </svg>
                </span>
              </td>
            </tr>
            <tr>
              <td class="py-3 px-2 font-semibold text-left">
                <div class="tooltip">
                  Vermelding als partner
                  <span class="tooltiptext">Jouw logo op onze website</span>
                </div>
              </td>
              <td class="py-3 px-2 bg-yellow-50 text-center">
                <span class="inline-block align-middle">
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
                  </svg>
                </span>
              </td>
              <td class="py-3 px-2 text-center">
                <span class="inline-block align-middle">
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
                  </svg>
                </span>
              </td>
              <td class="py-3 px-2 text-center">
                <span class="inline-block align-middle">
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/>
                  </svg>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards -->
      <div class="md:hidden flex flex-col gap-8 mt-6">
        <!-- Early Adopter Deal Card -->
        <div class="bg-yellow-50 border-2 border-yellow-300 rounded-2xl shadow-lg p-6 flex flex-col items-center relative">
          <span class="absolute top-4 right-4 bg-[#FFD64A] text-yellow-900 text-xs font-bold px-2 py-1 rounded animate-pulse">Best Deal</span>
          <h3 class="text-xl font-bold text-yellow-900 mb-2">Early Adopter Deal</h3>
          <div class="text-xs text-gray-500 mb-4">t/m 15 augustus 2025</div>
          <ul class="text-left space-y-2 mb-4 w-full max-w-xs">
            <li><span class="font-semibold">Set-up fee:</span> <span class="text-green-700 font-bold">€0</span></li>
            <li><span class="font-semibold">Per match:</span> <span class="text-green-700 font-bold">€500</span></li>
            <li><span class="font-semibold">Maximaal aantal matches:</span> <span class="font-bold">10</span></li>
            <li><span class="font-semibold">Maandelijkse fee:</span> <span class="font-bold">€100 (sept - jan)</span><br><span class="text-xs text-gray-500">Daarna standaardtarief</span></li>
            <li><span class="font-semibold">Exclusieve toegang:</span> <span class="inline-block align-middle"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/></svg></span></li>
            <li><span class="font-semibold">1-op-1 support:</span> <span class="inline-block align-middle"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/></svg></span></li>
            <li><span class="font-semibold">Vermelding als partner:</span> <span class="inline-block align-middle"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/></svg></span></li>
          </ul>
        </div>

        <!-- Standaardpakket Card -->
        <div class="bg-white border border-gray-200 rounded-2xl shadow p-6 flex flex-col items-center">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Standaardpakket</h3>
          <ul class="text-left space-y-2 mb-4 w-full max-w-xs">
            <li><span class="font-semibold">Set-up fee:</span> <span class="font-bold">€750</span></li>
            <li><span class="font-semibold">Per match:</span> <span class="font-bold">€750</span></li>
            <li><span class="font-semibold">Maximaal aantal matches:</span> <span class="font-bold">10</span></li>
            <li><span class="font-semibold">Maandelijkse fee:</span> <span class="font-bold">€250</span></li>
            <li><span class="font-semibold">Exclusieve toegang:</span> <span class="text-gray-400 font-bold">–</span></li>
            <li><span class="font-semibold">1-op-1 support:</span> <span class="text-gray-400 font-bold">–</span></li>
            <li><span class="font-semibold">Vermelding als partner:</span> <span class="inline-block align-middle"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/></svg></span></li>
          </ul>
        </div>

        <!-- Groeipakket Card -->
        <div class="bg-blue-50 border-2 border-blue-200 rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h3 class="text-xl font-bold text-blue-900 mb-2">Groeipakket</h3>
          <ul class="text-left space-y-2 mb-4 w-full max-w-xs">
            <li><span class="font-semibold">Set-up fee:</span> <span class="font-bold">€2.500</span></li>
            <li><span class="font-semibold">Per match:</span> <span class="font-bold">€250</span></li>
            <li><span class="font-semibold">Maximaal aantal matches:</span> <span class="font-bold">Onbeperkt</span></li>
            <li><span class="font-semibold">Maandelijkse fee:</span> <span class="font-bold">€800</span></li>
            <li><span class="font-semibold">Exclusieve toegang:</span> <span class="text-gray-400 font-bold">–</span></li>
            <li><span class="font-semibold">1-op-1 support:</span> <span class="inline-block align-middle"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/></svg></span></li>
            <li><span class="font-semibold">Vermelding als partner:</span> <span class="inline-block align-middle"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='3' class='text-green-600'><path stroke-linecap='round' stroke-linejoin='round' d='M5 13l4 4L19 7'/></svg></span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- REPEATED CTA -->
    <section class="max-w-2xl mx-auto py-8 px-4 md:px-0 text-center">
      <p class="mb-4 font-semibold text-lg">Benieuwd wat we voor jouw organisatie kunnen betekenen?</p>
      <button 
        @click="openModal" 
        class="bg-[#FFD64A] text-[#1f2937] px-4 py-2 rounded-lg font-bold shadow hover:bg-yellow-300 hover:scale-102 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD64A] text-sm md:text-base w-full md:w-auto" 
        aria-label="Plan nu een afspraak"
      >
        Plan nu een afspraak
      </button>
      <p class="text-sm text-gray-600 mt-2">
        Let op: we hebben plek voor maximaal <strong>15 early adopters</strong>.
      </p>
    </section>

    <!-- STORY/IMPACT -->
    <section class="max-w-2xl mx-auto py-10 px-4 md:px-0">
      <p class="mt-6 text-gray-700 text-center text-base md:text-lg">
        Ukraine2Work is ontstaan uit de noodzaak om Oekraïense vluchtelingen echt perspectief te bieden. Met hulp van technologie en partners bouwen we aan iets groots — en jij kunt meedoen vanaf het begin. Als werkgever kun je bijdragen aan eerlijke kansen én profiteren van snelle, passende matches.
      </p>
    </section>

    <!-- FOOTER -->
<LayoutsTheFooter></LayoutsTheFooter>

    <!-- MODAL -->
    <div 
      v-if="showModal" 
      class="modal fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300" 
      aria-modal="true" 
      role="dialog"
      @click="closeModal"
    >
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 mx-2 relative" @click.stop>
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold">Maak een afspraak</h3>
          <button 
            @click="closeModal" 
            class="text-2xl font-bold text-gray-500 hover:text-gray-800 transition-colors duration-150" 
            aria-label="Sluit modal"
          >
            &times;
          </button>
        </div>
        <div class="mb-4 p-3 bg-blue-50 border-l-4 border-[#0057B8] rounded text-sm text-gray-800">
          <strong>Let op:</strong> Vermeld bij het veld <span class="font-semibold">'Functie'</span> waarvoor je een afspraak wilt maken (bijvoorbeeld: Early Adopter Deal, standaardpakket, etc.). Zo kunnen we je beter van dienst zijn.
        </div>
        <iframe 
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ12wo0kN60_uvYB2URSbtYLAj-xlEvySc9FDqhLFuFKubHFwi9FSq6CH2kT9OPQY8zW94KSzadF?gv=true" 
          style="border: 0; border-radius: 1rem;" 
          width="100%" 
          height="500" 
          frameborder="0" 
          aria-label="Afspraak plannen"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Disable the default layout (no header/footer from layout)
definePageMeta({
  layout: false
})

// SEO meta tags
useSeoMeta({
  title: 'Early Adopter Deal - Ukraine2Work',
  description: 'Word Early Adopter van Ukraine2Work en profiteer van exclusieve voordelen voor werkgevers in regio Eindhoven. Skill-based matching, geen set-upkosten, en directe toegang tot talenten. Meld je nu aan!',
  keywords: 'Early Adopter, Ukraine2Work, werkgevers, Eindhoven, Oekraïense vluchtelingen, werk, matching, pakket, aanbieding, recruitment, arbeidsmarkt'
})

// Modal state
const showModal = ref(false)

// Current year for footer
const currentYear = computed(() => new Date().getFullYear())

// Modal functions
const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

// Close modal on escape key
onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showModal.value) {
      closeModal()
    }
  })
})
</script>

<style scoped>
/* Roboto font */
.font-roboto {
  font-family: 'Roboto', sans-serif;
}

/* Tooltip styles */
.tooltip {
  position: relative;
  display: inline-block;
  cursor: help;
}

.tooltip .tooltiptext {
  visibility: hidden;
  min-width: 180px;
  max-width: 260px;
  background-color: #555;
  color: #fff;
  text-align: left;
  border-radius: 6px;
  padding: 8px 12px;
  position: absolute;
  z-index: 9999;
  bottom: 125%;
  left: 0;
  margin-left: 0;
  opacity: 0;
  transition: opacity 0.3s;
  white-space: normal;
  font-size: 0.95em;
  word-break: break-word;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.18);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 20px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

@media (max-width: 768px) {
  .tooltip .tooltiptext {
    min-width: 120px;
    max-width: 90vw;
    font-size: 0.95em;
    left: 0;
    margin-left: 0;
  }
  
  .tooltip .tooltiptext::after {
    left: 20px;
  }
}
</style>
