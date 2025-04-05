<template>
  <div class="user-dropdown relative">
    <button @click="isOpen = !isOpen" class="flex items-center gap-1">
      <span v-if="user">{{ user.name }}</span>
      <span v-else>Guest</span>
      <Icon name="heroicons:chevron-down" class="w-4 h-4" />
    </button>
    
    <div v-if="isOpen" class="dropdown-menu absolute right-0 top-full mt-1 bg-white shadow-lg rounded p-2 min-w-40 z-10">
      <template v-if="user">
        <NuxtLink to="/dashboard" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">Dashboard</NuxtLink>
        <NuxtLink to="/profile" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">Profile</NuxtLink>
        <button @click="logout" class="w-full text-left py-2 px-3 hover:bg-gray-100 rounded">Logout</button>
      </template>
      <template v-else>
        <NuxtLink to="/login" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">{{ $t('auth.login') || 'Login' }}</NuxtLink>
        <NuxtLink to="/register" class="block py-2 px-3 hover:bg-gray-100 rounded" @click="isOpen = false">{{ $t('auth.register') || 'Register' }}</NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
// Mock user state - replace with your actual auth system
const user = ref(null)

function logout() {
  // Implement logout functionality
  user.value = null
  isOpen.value = false
}

// Close dropdown when clicking outside
onClickOutside(isOpen, () => {
  isOpen.value = false
})

function onClickOutside(target: Ref<boolean>, callback: () => void) {
  const listener = (event: Event) => {
    if (target.value) {
      callback()
    }
  }
  
  onMounted(() => {
    window.addEventListener('click', listener)
  })
  
  onUnmounted(() => {
    window.removeEventListener('click', listener)
  })
}
</script>