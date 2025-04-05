<template>
  <button 
    :class="[
      'font-medium transition-colors',
      colorClasses,
      sizeClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    :disabled="disabled"
    v-bind="$attrs"
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
    validator: (value) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const colorClasses = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'bg-ukraine-blue text-white hover:bg-opacity-90';
    case 'secondary':
      return 'bg-ukraine-yellow text-ukraine-blue hover:bg-opacity-90';
    case 'outline':
      return 'bg-transparent text-white border border-white hover:bg-white/10';
    case 'text':
      return 'bg-transparent text-ukraine-blue hover:text-opacity-80';
    default:
      return 'bg-ukraine-blue text-white hover:bg-opacity-90';
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-1.5 text-sm rounded';
    case 'md':
      return 'px-5 py-2 rounded';
    case 'lg':
      return 'px-6 py-3 text-lg rounded-md';
    default:
      return 'px-5 py-2 rounded';
  }
});
</script>