<script setup>
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import ProductCard from '@/components/products/ProductCard.vue'

defineProps({
  products: { type: Array, required: true },
  categoryName: { type: Function, required: true },
})
</script>

<template>
  <div v-if="products.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <RevealOnScroll v-for="(p, i) in products" :key="p.id" :delay="(i % 3) * 80">
      <ProductCard :product="p" :category-name="categoryName(p.categorySlug)" />
    </RevealOnScroll>
  </div>
  <p v-else class="rounded-3xl border border-dashed border-caramel p-10 text-center text-chocolat/80">
    Aucun produit dans cette catégorie pour le moment.
  </p>
</template>
