<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import { useSeo } from '@/composables/useSeo'
import { whatsappUrl } from '@/composables/useWhatsApp'
import PhotoBox from '@/components/ui/PhotoBox.vue'
import ProductCard from '@/components/products/ProductCard.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

const route = useRoute()
const product = computed(() => products.find((p) => p.id === route.params.id))
const categoryName = (slug) => categories.find((c) => c.slug === slug)?.name ?? ''
const related = computed(() =>
  products.filter((p) => p.id !== product.value?.id && p.categorySlug === product.value?.categorySlug),
)

useSeo({
  title: product.value?.name ?? 'Produit introuvable',
  description: product.value?.description,
})
</script>

<template>
  <section v-if="product" class="section">
    <div class="mx-auto max-w-6xl">
      <RouterLink to="/produits" class="mb-8 inline-flex items-center gap-2 text-sm font-medium text-chocolat hover:text-caramel">
        <ArrowLeft :size="18" /> Retour à nos produits
      </RouterLink>

      <div class="grid items-start gap-10 md:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <PhotoBox :src="product.image" :alt="product.name" ratio="aspect-[4/5]" class="shadow-xl" />
        </RevealOnScroll>

        <RevealOnScroll :delay="150">
          <p class="eyebrow">{{ categoryName(product.categorySlug) }}</p>
          <h1 class="text-4xl text-chocolat sm:text-5xl">{{ product.name }}</h1>
          <p class="mt-5 text-lg leading-relaxed text-chocolat/80">{{ product.description }}</p>

          <p class="mt-6 text-lg font-bold text-caramel">{{ product.price ? product.price : 'Prix sur demande' }}</p>

          <div v-if="product.ingredients" class="mt-8 border-t border-beige pt-6">
            <h2 class="mb-2 font-serif text-xl">Ingrédients</h2>
            <p class="leading-relaxed text-chocolat/80">{{ product.ingredients }}</p>
          </div>

          <a :href="whatsappUrl(product.name)" target="_blank" rel="noopener" class="btn btn-wa mt-10 w-full sm:w-auto">
            Commander sur WhatsApp
          </a>
          <p class="mt-4 text-sm text-chocolat/60">Le message sera prérempli avec le nom du produit.</p>
        </RevealOnScroll>
      </div>

      <div v-if="related.length" class="mt-20">
        <h2 class="mb-8 text-3xl">Dans la même catégorie</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="p in related" :key="p.id" :product="p" :category-name="categoryName(p.categorySlug)" />
        </div>
      </div>
    </div>
  </section>

  <section v-else class="section min-h-[60vh]">
    <h1 class="text-4xl text-chocolat">Produit introuvable</h1>
    <p class="mt-4 text-chocolat/80">Ce produit n'existe pas ou n'est plus proposé.</p>
    <RouterLink to="/produits" class="btn mt-8 w-max">Voir nos produits</RouterLink>
  </section>
</template>
