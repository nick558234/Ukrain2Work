<template>
  <button 
    :class="[
      'px-6 py-2 rounded-md font-medium transition-colors duration-200',
      colorClasses,
      sizeClasses,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
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
      return 'bg-transparent border-2 border-ukraine-blue text-ukraine-blue hover:bg-ukraine-blue hover:text-white';
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