<template>
  <div v-if="showForm" :style="formStyle" class="feedback-form">
    <form @submit.prevent="submitFeedback">
      <div class="mb-3">
        <label class="block text-sm font-medium text-gray-700 mb-1">
          <strong>{{ $t('feedback.label') || 'Feedback:' }}</strong>
        </label>
        <textarea 
          v-model="message" 
          rows="4" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ukraine-blue focus:border-transparent"
          :placeholder="$t('feedback.placeholder') || 'Bijv: de tekst klopt niet...'"
          required
        ></textarea>
      </div>
      
      <div v-if="selectedText" class="mb-3 p-2 bg-gray-50 rounded text-sm">
        <strong>{{ $t('feedback.selectedText') || 'Geselecteerde tekst:' }}</strong><br>
        <em>"{{ selectedText }}"</em>
      </div>
      
      <!-- Context informatie -->
      <div v-if="clickContext.tagName" class="mb-3 p-2 bg-blue-50 rounded text-sm">
        <strong>{{ $t('feedback.location') || 'Locatie op pagina:' }}</strong><br>
        
        <div v-if="clickContext.nearestHeading" class="mb-1">
          <span class="text-gray-600">Sectie:</span> {{ clickContext.nearestHeading.text }}
        </div>
        
        <div v-if="clickContext.textContent" class="mb-1">
          <span class="text-gray-600">Element tekst:</span> "{{ clickContext.textContent }}"
        </div>
        
        <div class="mb-1">
          <span class="text-gray-600">Element:</span> {{ clickContext.tagName.toLowerCase() }}
          <span v-if="clickContext.className" class="text-gray-500">.{{ clickContext.className.split(' ').slice(0, 2).join('.') }}</span>
        </div>
      </div>
      
      <div class="flex gap-2">
        <button 
          type="submit" 
          class="px-4 py-2 bg-ukraine-blue text-white rounded hover:bg-blue-700 transition-colors"
          :disabled="submitting"
        >
          {{ submitting ? ($t('feedback.sending') || 'Versturen...') : ($t('feedback.send') || 'Verstuur') }}
        </button>
        <button 
          type="button" 
          @click="cancelForm"
          class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
        >
          {{ $t('feedback.cancel') || 'Annuleer' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showForm = ref(false)
const message = ref('')
const x = ref(0)
const y = ref(0)
const selectedText = ref('')
const formStyle = ref({})
const submitting = ref(false)
const clickContext = ref({})

function getClickContext(e) {
  const element = e.target
  const context = {
    // Element informatie
    tagName: element.tagName,
    className: element.className,
    id: element.id,
    textContent: element.textContent?.trim().substring(0, 100) + (element.textContent?.length > 100 ? '...' : ''),
    
    // Pad naar element (CSS selector)
    cssPath: getCSSPath(element),
    
    // Dichtstbijzijnde heading
    nearestHeading: getNearestHeading(element),
    
    // Section informatie
    section: getContainingSection(element),
    
    // Page scroll positie
    scrollPosition: {
      x: window.pageXOffset,
      y: window.pageYOffset
    },
    
    // Element positie relatief aan pagina
    elementPosition: getElementPosition(element)
  }
  
  return context
}

function getCSSPath(element) {
  const path = []
  let current = element
  
  while (current && current !== document.body) {
    let selector = current.tagName.toLowerCase()
    
    if (current.id) {
      selector += `#${current.id}`
    } else if (current.className) {
      selector += `.${current.className.split(' ').join('.')}`
    }
    
    path.unshift(selector)
    current = current.parentElement
    
    // Beperk pad lengte
    if (path.length > 5) break
  }
  
  return path.join(' > ')
}

function getNearestHeading(element) {
  let current = element
  
  // Zoek naar boven voor heading
  while (current && current !== document.body) {
    if (/^H[1-6]$/.test(current.tagName)) {
      return {
        level: current.tagName,
        text: current.textContent?.trim()
      }
    }
    current = current.parentElement
  }
  
  // Zoek in hele pagina voor dichtstbijzijnde heading
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  const elementRect = element.getBoundingClientRect()
  let closest = null
  let closestDistance = Infinity
  
  headings.forEach(heading => {
    const headingRect = heading.getBoundingClientRect()
    const distance = Math.abs(headingRect.top - elementRect.top)
    
    if (distance < closestDistance && headingRect.top <= elementRect.top) {
      closestDistance = distance
      closest = {
        level: heading.tagName,
        text: heading.textContent?.trim()
      }
    }
  })
  
  return closest
}

function getContainingSection(element) {
  let current = element
  
  while (current && current !== document.body) {
    if (current.tagName === 'SECTION' || 
        current.classList.contains('section') || 
        current.getAttribute('data-section') ||
        current.tagName === 'MAIN' ||
        current.tagName === 'ARTICLE') {
      
      // Probeer een identifier te vinden
      const id = current.id
      const className = current.className
      const dataSection = current.getAttribute('data-section')
      
      return {
        tagName: current.tagName,
        id: id || null,
        className: className || null,
        dataSection: dataSection || null
      }
    }
    current = current.parentElement
  }
  
  return null
}

function getElementPosition(element) {
  const rect = element.getBoundingClientRect()
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
    width: rect.width,
    height: rect.height
  }
}

function openForm(e) {
  // Voorkom dat het formulier opent bij klikken op de feedback tool zelf
  if (e.target.closest('.feedback-form')) {
    return
  }
  
  // Voorkom dat het formulier opent bij klikken op interactieve elementen
  if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
    return
  }

  x.value = e.clientX
  y.value = e.clientY
  selectedText.value = window.getSelection().toString().trim()
  
  // Verzamel extra context informatie
  clickContext.value = getClickContext(e)

  // Zorg ervoor dat het formulier binnen het viewport blijft
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const formWidth = 350 // Geschatte breedte van het formulier
  const formHeight = 200 // Geschatte hoogte van het formulier

  let adjustedX = x.value
  let adjustedY = y.value

  if (x.value + formWidth > viewportWidth) {
    adjustedX = viewportWidth - formWidth - 20
  }
  if (y.value + formHeight > viewportHeight) {
    adjustedY = viewportHeight - formHeight - 20
  }

  formStyle.value = {
    position: 'fixed',
    top: `${adjustedY}px`,
    left: `${adjustedX}px`,
    zIndex: 9999,
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    minWidth: '320px',
    maxWidth: '400px',
  }

  showForm.value = true
}

function cancelForm() {
  showForm.value = false
  message.value = ''
  selectedText.value = ''
  submitting.value = false
  clickContext.value = {}
}

async function submitFeedback() {
  if (!message.value.trim()) return
  
  submitting.value = true
  
  const payload = {
    message: message.value,
    x: x.value,
    y: y.value,
    url: window.location.href,
    selection: selectedText.value,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    
    // Uitgebreide locatie context
    context: {
      element: {
        tag: clickContext.value.tagName,
        className: clickContext.value.className,
        id: clickContext.value.id,
        textContent: clickContext.value.textContent,
        cssPath: clickContext.value.cssPath
      },
      location: {
        nearestHeading: clickContext.value.nearestHeading,
        section: clickContext.value.section,
        scrollPosition: clickContext.value.scrollPosition,
        elementPosition: clickContext.value.elementPosition
      }
    }
  }

  try {
    // Vervang dit met je eigen Formspree endpoint
    const response = await fetch('https://formspree.io/f/xjkopoor', {
      method: 'POST',
      headers: { 
        Accept: 'application/json', 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      alert('Feedback succesvol verzonden! Bedankt voor je input.')
    } else {
      alert('Er is een fout opgetreden bij het verzenden. Probeer het opnieuw.')
    }
  } catch (err) {
    console.error('Feedback submission error:', err)
    alert('Netwerkfout. Controleer je internetverbinding en probeer opnieuw.')
  }

  cancelForm()
}

// Event listeners voor feedback activatie
onMounted(() => {
  document.addEventListener('click', openForm)
  
  // Sluit formulier bij ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && showForm.value) {
      cancelForm()
    }
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('click', openForm)
})
</script>

<style scoped>
.feedback-form {
  font-family: system-ui, -apple-system, sans-serif;
}
</style>
