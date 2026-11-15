<script setup>
import { reassurance } from '@/data/reassurance'
</script>

<template>
  <section aria-label="Pourquoi nous commander" class="border-b border-beige bg-creme">
    <ul class="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:px-10 md:grid-cols-4 lg:px-16">
      <li v-for="item in reassurance" :key="item.title" class="flex items-start gap-3">
        <component :is="item.icon" :size="22" class="mt-0.5 shrink-0 text-caramel" aria-hidden="true" />
        <div>
          <p class="text-sm font-bold text-chocolat">{{ item.title }}</p>
          <p class="text-xs leading-snug text-chocolat/70">{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
