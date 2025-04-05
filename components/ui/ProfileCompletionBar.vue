<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-2">
      <div class="text-sm font-medium text-gray-700">
        {{ $t('profile.completion.title') }}
      </div>
      <div class="text-sm font-medium text-ukraine-blue">
        {{ progress }}%
      </div>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        class="h-2.5 rounded-full transition-all duration-500" 
        :class="barColorClass"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
    <div class="mt-2 text-xs text-gray-500">
      {{ progressMessage }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  progress: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  }
});

const barColorClass = computed(() => {
  if (props.progress < 30) return 'bg-red-500';
  if (props.progress < 70) return 'bg-yellow-500';
  return 'bg-green-500';
});

const progressMessage = computed(() => {
  if (props.progress < 30) {
    return $t('profile.completion.low');
  } else if (props.progress < 70) {
    return $t('profile.completion.medium');
  } else if (props.progress < 100) {
    return $t('profile.completion.high');
  } else {
    return $t('profile.completion.complete');
  }
});
</script>