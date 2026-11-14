<script setup>
import PhotoBox from '@/components/ui/PhotoBox.vue'

defineProps({
  items: { type: Array, required: true },
})
defineEmits(['open'])

// Hauteurs variées pour un effet masonry naturel.
const ratios = ['aspect-[4/5]', 'aspect-square', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[5/6]']
</script>

<template>
  <div class="columns-1 gap-4 sm:columns-2 lg:columns-3">
    <button
      v-for="(g, i) in items"
      :key="g.id"
      type="button"
      class="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl text-left focus-visible:outline-caramel"
      :aria-label="`Agrandir : ${g.alt}`"
      @click="$emit('open', i)"
    >
      <PhotoBox :src="g.src" :alt="g.alt" :label="g.alt" :ratio="ratios[i % ratios.length]" />
    </button>
  </div>
</template>
