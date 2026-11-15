<script setup>
import { RouterLink } from 'vue-router'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import PhotoBox from '@/components/ui/PhotoBox.vue'
import { categories } from '@/data/categories'

</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Nos spécialités" title="Une gourmandise pour chaque envie" text="Sucré, salé, léger ou généreux : explorez nos catégories." />

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <RevealOnScroll v-for="(c, i) in categories" :key="c.slug" :delay="i * 80">
          <RouterLink
            :to="{ path: '/produits', query: { categorie: c.slug } }"
            class="group flex h-full flex-col overflow-hidden rounded-3xl border border-beige bg-white shadow-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <PhotoBox :src="c.image" :alt="c.name" ratio="aspect-[4/3] rounded-none" class="!rounded-none" />
            <div class="flex flex-1 flex-col gap-2 p-6">
              <h3 class="text-2xl text-chocolat">{{ c.name }}</h3>
              <p class="flex-1 text-sm leading-relaxed text-chocolat/75">{{ c.short }}</p>
              <span class="mt-3 text-sm font-semibold text-caramel transition group-hover:translate-x-1">Voir les produits →</span>
            </div>
          </RouterLink>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
