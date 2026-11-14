<script setup>
// Affiche une photo si src est renseigné, sinon un emplacement « à fournir ».
defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: '' },
  label: { type: String, default: 'Photo à fournir' },
  ratio: { type: String, default: 'aspect-[4/3]' },
})
</script>

<template>
  <div :class="['group relative overflow-hidden rounded-2xl bg-gradient-to-br from-beige to-rose', ratio]">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
    <div v-else role="img" :aria-label="alt || label" class="flex h-full w-full items-end p-4">
      <span class="rounded-full bg-white/60 px-3 py-1 text-xs text-chocolat/80">{{ label }}</span>
    </div>
  </div>
</template>
