<template>
  <div class="flex items-center gap-2">
    <div class="relative w-8 h-8">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl transform rotate-45"></div>
      <div class="absolute inset-[3px] bg-white rounded-lg transform rotate-45"></div>
      <div class="absolute inset-[6px] bg-gradient-to-br from-indigo-600 to-violet-600 rounded-sm transform rotate-45"></div>
    </div>
    <span :class="[
      'font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600',
      size === 'large' ? 'text-2xl' : 'text-xl'
    ]">Protege</span>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'large'].includes(value)
  }
})
</script>