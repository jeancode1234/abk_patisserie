<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import PhotoBox from '@/components/ui/PhotoBox.vue'
import { gallery } from '@/data/gallery'

// Grille asymétrique : certaines tuiles s'étendent sur deux colonnes ou lignes.
const spans = ['md:row-span-2', '', 'md:col-span-2', '', '']
</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle eyebrow="Galerie gourmande" title="Un aperçu de nos réalisations" />
        <RouterLink to="/galerie" class="btn btn-ghost">Voir toute la galerie</RouterLink>
      </div>

      <div class="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3">
        <RevealOnScroll v-for="(g, i) in gallery" :key="g.id" :delay="i * 80" :class="spans[i] || ''" class="h-full">
          <PhotoBox :src="g.src" :alt="g.alt" :label="g.alt" ratio="h-full" class="h-full" />
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
