<script setup>
defineProps({
  suggestions: { type: Array, required: true },
})
defineEmits(['select'])
</script>

<template>
  <div v-if="suggestions.length" class="flex flex-wrap gap-2 px-4 pb-3" role="group" aria-label="Suggestions">
    <button
      v-for="s in suggestions"
      :key="s"
      type="button"
      class="rounded-full border border-caramel bg-creme px-3 py-1.5 text-xs font-medium text-chocolat transition hover:bg-caramel hover:text-white"
      @click="$emit('select', s)"
    >
      {{ s }}
    </button>
  </div>
</template>
