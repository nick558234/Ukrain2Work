# Feedback Tool voor Ukraine2Work

## 📋 Overzicht

De feedback tool is een interactieve Vue component die klanten toestaat om direct feedback te geven op je website door te klikken op elementen of tekst te selecteren.

## 🔧 Setup

### 1. Formspree Account
1. Ga naar [https://formspree.io](https://formspree.io)
2. Maak een gratis account aan
3. Creëer een nieuw formulier
4. Kopieer je endpoint URL (bijvoorbeeld: `https://formspree.io/f/mnqvgbxd`)

### 2. Configuratie
Open `components/FeedbackTool.vue` en vervang `YOURENDPOINT` met je Formspree endpoint:

```javascript
const response = await fetch('https://formspree.io/f/YOURENDPOINT', {
```

### 3. Activering
De feedback tool is standaard alleen actief in development mode. Om het in productie te activeren:

**Optie A: Environment Variable**
```bash
# In je .env bestand
ENABLE_FEEDBACK_TOOL=true
```

**Optie B: Code aanpassing**
In `layouts/default.vue`, wijzig:
```javascript
const showFeedbackTool = computed(() => {
  return true // Altijd aan
  // OF
  return process.env.NODE_ENV === 'development' // Alleen in development
})
```

## 🎯 Hoe het werkt

### Voor bezoekers:
1. **Klik** op tekst of elementen op de website
2. **Selecteer** eventueel specifieke tekst (optioneel)
3. **Feedback formulier** verschijnt op de kliklocatie
4. **Typ feedback** en klik "Verstuur"

### Wat jij ontvangt:
- **Feedback bericht** van de gebruiker
- **Geselecteerde tekst** (indien van toepassing)
- **Klik coördinaten** (X, Y positie)
- **URL** van de pagina
- **Timestamp** van de feedback
- **User agent** informatie
- **Viewport grootte** van de gebruiker

## ⚙️ Geavanceerde functies

### Uitgesloten elementen
De feedback tool wordt NIET geactiveerd bij klikken op:
- Buttons (`<button>`)
- Links (`<a>`)
- Form elementen (`<input>`, `<select>`, `<textarea>`)
- Elementen met `[role="button"]`
- De feedback tool zelf

### Responsive positionering
Het formulier blijft altijd binnen het viewport door automatische positie-aanpassing.

### Keyboard shortcuts
- **ESC** - Sluit het feedback formulier

## 🎨 Styling aanpassen

### TailwindCSS classes
De feedback tool gebruikt TailwindCSS classes. Pas deze aan in `components/FeedbackTool.vue`:

```vue
<!-- Hoofdcontainer -->
<div class="feedback-form bg-white border rounded-lg shadow-lg p-4">

<!-- Buttons -->
<button class="bg-ukraine-blue text-white hover:bg-blue-700">

<!-- Textarea -->
<textarea class="border border-gray-300 rounded-md focus:ring-ukraine-blue">
```

### Custom CSS
Extra styling staat in `assets/css/main.css`:

```css
.feedback-form {
  backdrop-filter: blur(4px);
}

.feedback-form textarea {
  resize: vertical;
  min-height: 80px;
}
```

## 🔄 Integratie met backend

### Huidige setup (Formspree)
Gebruikt externe service voor eenvoudige implementatie.

### Eigen backend
Om je eigen backend te gebruiken, wijzig de fetch URL in `FeedbackTool.vue`:

```javascript
const response = await fetch('/api/feedback', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'X-CSRF-Token': await $fetch('/api/csrf-token') // Indien CSRF bescherming
  },
  body: JSON.stringify(payload),
})
```

## 📱 Mobiele ervaring

De feedback tool is geoptimaliseerd voor mobiel gebruik:
- **Touch-friendly** knoppen en invoervelden
- **Responsive** formulier grootte
- **Viewport aanpassingen** voor kleine schermen

## 🚀 Productie tips

### Performance
- Tool voegt minimale overhead toe (~2KB gzipped)
- Event listeners worden correct opgekuind
- Geen external dependencies (behalve Formspree)

### Beveiliging
- CSRF bescherming wordt aanbevolen voor eigen backend
- Validatie van feedback berichten
- Rate limiting voor spam preventie

### Analytics
Voeg Google Analytics tracking toe:

```javascript
// In submitFeedback functie
gtag('event', 'feedback_submitted', {
  'event_category': 'engagement',
  'page_location': window.location.href
})
```

## 🛠️ Troubleshooting

### Tool verschijnt niet
1. Check of je in development mode bent
2. Controleer browser console voor errors
3. Verifieer dat `showFeedbackTool` true returned

### Formulier verstuurt niet
1. Controleer Formspree endpoint URL
2. Check network tab in browser voor API errors
3. Verifieer internet connectie

### Styling problemen
1. Zorg dat TailwindCSS correct gecompileerd is
2. Check voor CSS conflicts
3. Controleer z-index waarden (tool gebruikt 9999)

## 📞 Support

Voor verdere hulp met de feedback tool implementatie, neem contact op via de standaard kanalen.
