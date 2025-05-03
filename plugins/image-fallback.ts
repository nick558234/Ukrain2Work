// Handle fallback images for missing assets
export default defineNuxtPlugin((nuxtApp) => {
  // Define fallback image handler
  nuxtApp.provide('handleImageError', (event) => {
    // Replace missing image with a placeholder
    event.target.src = '/images/placeholder.webp';
    // Remove width and height constraints if needed
    event.target.style.width = 'auto';
    event.target.style.height = 'auto';
  });
});