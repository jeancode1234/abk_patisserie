<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSeo } from '@/composables/useSeo'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import CategoryFilter from '@/components/products/CategoryFilter.vue'
import ProductGrid from '@/components/products/ProductGrid.vue'
import { categories } from '@/data/categories'
import { products } from '@/data/products'

useSeo({ title: 'Nos produits' })

const route = useRoute()
const router = useRouter()

// Catégorie active lue depuis l'URL (?categorie=nems). Valeur inconnue = « Tout ».
const active = computed(() => {
  const slug = route.query.categorie
  return categories.some((c) => c.slug === slug) ? slug : 'all'
})

const setCategory = (slug) => {
  router.replace({ query: slug === 'all' ? {} : { categorie: slug } })
}

const visible = computed(() =>
  active.value === 'all' ? products : products.filter((p) => p.categorySlug === active.value),
)

const categoryName = (slug) => categories.find((c) => c.slug === slug)?.name ?? ''
</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Notre catalogue" title="Nos produits" text="Parcourez nos créations par catégorie et commandez directement sur WhatsApp." />

      <div class="mt-10">
        <CategoryFilter :categories="categories" :model-value="active" @update:model-value="setCategory" />
      </div>

      <div class="mt-12">
        <ProductGrid :products="visible" :category-name="categoryName" />
      </div>

      <p class="mt-14 text-center text-sm text-chocolat/70">
        Les prix sont communiqués sur demande. Sans panier ni paiement en ligne pour le moment : la commande se finalise sur WhatsApp.
      </p>
    </div>
  </section>
</template>
