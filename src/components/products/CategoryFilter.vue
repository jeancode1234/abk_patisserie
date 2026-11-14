<script setup>
defineProps({
  categories: { type: Array, required: true },
  modelValue: { type: String, default: 'all' },
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-wrap gap-3" role="group" aria-label="Filtrer par catégorie">
    <button
      type="button"
      :aria-pressed="modelValue === 'all'"
      class="rounded-full border px-5 py-2 text-sm font-medium transition"
      :class="modelValue === 'all' ? 'border-caramel bg-caramel text-white' : 'border-caramel text-chocolat hover:bg-caramel/10'"
      @click="$emit('update:modelValue', 'all')"
    >
      Tout
    </button>
    <button
      v-for="c in categories"
      :key="c.slug"
      type="button"
      :aria-pressed="modelValue === c.slug"
      class="rounded-full border px-5 py-2 text-sm font-medium transition"
      :class="modelValue === c.slug ? 'border-caramel bg-caramel text-white' : 'border-caramel text-chocolat hover:bg-caramel/10'"
      @click="$emit('update:modelValue', c.slug)"
    >
      {{ c.name }}
    </button>
  </div>
</template>
