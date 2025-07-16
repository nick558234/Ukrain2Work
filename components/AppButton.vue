<template>
    <!-- Use NuxtLink when a 'to' prop is provided (internal links) -->
    <NuxtLink 
      v-if="to" 
      :to="to" 
      :class="[
        'inline-block text-center px-6 py-2 rounded-md font-medium transition-colors duration-200',
        colorClasses,
        sizeClasses,
        { 'opacity-50 cursor-not-allowed': disabled }
      ]"
      :aria-disabled="disabled"
      @click="disabled ? $event.preventDefault() : null"
    >
      <slot>{{ text }}</slot>
    </NuxtLink>
    
    <!-- Use anchor tag for external links -->
    <a 
      v-else-if="href" 
      :href="href" 
      :target="target"
      :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
      :class="[
        'inline-block text-center px-6 py-2 rounded-md font-medium transition-colors duration-200',
        colorClasses,
        sizeClasses,
        { 'opacity-50 cursor-not-allowed': disabled }
      ]"
      :aria-disabled="disabled"
      @click="disabled ? $event.preventDefault() : null"
    >
      <slot></slot>
    </a>
    
    <!-- Use regular button when no link is provided -->
    <button 
      v-else
      :class="[
        'px-6 py-2 rounded-md font-medium transition-colors duration-200',
        colorClasses,
        sizeClasses,
        { 'opacity-50 cursor-not-allowed': disabled }
      ]"
      :disabled="disabled"
      @click="$emit('click')"
      :type="type"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'white'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // Props for NuxtLink
    to: {
      type: [String, Object],
      default: null
    },
    // Props for external links
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    // HTML button type
    type: {
      type: String,
      default: 'button'
    },
    text: {
      type: String,
  
    }
  });
  
  const colorClasses = computed(() => {
    switch (props.color) {
      case 'primary':
        return 'bg-ukraine-blue text-white hover:bg-opacity-90';
      case 'secondary':
        return 'bg-ukraine-yellow text-ukraine-blue hover:bg-opacity-90';
      case 'outline':
        return 'bg-transparent border-2 border-ukraine-blue text-ukraine-blue hover:bg-ukraine-blue hover:text-white';
      case 'white':
        return 'bg-white text-ukraine-blue hover:bg-gray-100 border-2 border-white';
      default:
        return '';
    }
  });
  
  const sizeClasses = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'text-sm px-4 py-1';
      case 'md':
        return 'px-6 py-2';
      case 'lg':
        return 'text-lg px-8 py-3';
      default:
        return '';
    }
  });
  
  defineEmits(['click']);
  </script>