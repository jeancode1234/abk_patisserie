<script setup>
import { computed, ref } from 'vue'
import { useSeo } from '@/composables/useSeo'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import CategoryFilter from '@/components/products/CategoryFilter.vue'
import GalleryGrid from '@/components/gallery/GalleryGrid.vue'
import ImageLightbox from '@/components/gallery/ImageLightbox.vue'
import { categories } from '@/data/categories'
import { gallery } from '@/data/gallery'

useSeo({ title: 'Galerie' })

const filter = ref('all')
const lightboxIndex = ref(null)

const visible = computed(() =>
  filter.value === 'all' ? gallery : gallery.filter((g) => g.category === filter.value),
)
</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Galerie gourmande" title="Nos réalisations" text="Un aperçu de nos créations. Cliquez sur une photo pour l'agrandir." />

      <div class="mt-10">
        <CategoryFilter :categories="categories" :model-value="filter" @update:model-value="(v) => (filter = v)" />
      </div>

      <div class="mt-12">
        <GalleryGrid :items="visible" @open="(i) => (lightboxIndex = i)" />
        <p v-if="!visible.length" class="rounded-3xl border border-dashed border-caramel p-10 text-center text-chocolat/80">
          Aucune photo dans cette catégorie pour le moment.
        </p>
      </div>
    </div>

    <ImageLightbox v-model:index="lightboxIndex" :items="visible" />
  </section>
</template>
