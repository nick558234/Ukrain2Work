// Fix for Pinia hasOwnProperty error
export default defineNuxtPlugin(() => {
  if (process.client) {
    // Ensure proper prototype chain for objects during hydration
    const originalParse = JSON.parse
    JSON.parse = function(text, reviver) {
      const result = originalParse.call(this, text, reviver)
      
      // Ensure objects have proper prototype chain
      function fixPrototype(obj) {
        if (obj && typeof obj === 'object' && obj.constructor === Object) {
          Object.setPrototypeOf(obj, Object.prototype)
        }
        return obj
      }
      
      if (typeof result === 'object' && result !== null) {
        return fixPrototype(result)
      }
      
      return result
    }
  }
})
