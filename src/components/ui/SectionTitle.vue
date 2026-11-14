<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="text-3xl text-chocolat sm:text-4xl md:text-5xl">{{ title }}</h2>
    <p v-if="text" class="mt-4 text-base leading-relaxed text-chocolat/80 md:text-lg">{{ text }}</p>
  </div>
</template>
