<script setup>
import PhotoBox from '@/components/ui/PhotoBox.vue'
import { whatsappUrl } from '@/composables/useWhatsApp'

defineProps({
  product: { type: Object, required: true },
  categoryName: { type: String, default: '' },
})
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-3xl border border-beige bg-white p-4 transition duration-500 hover:-translate-y-1.5 hover:shadow-xl">
    <PhotoBox :src="product.image" :alt="product.name" class="!rounded-2xl" />
    <div class="flex flex-1 flex-col gap-2 px-2 pb-2 pt-5">
      <p v-if="categoryName" class="text-xs font-bold uppercase tracking-widest text-caramel">{{ categoryName }}</p>
      <h3 class="text-2xl text-chocolat">{{ product.name }}</h3>
      <p class="flex-1 text-sm leading-relaxed text-chocolat/75">{{ product.description }}</p>
      <p class="text-sm font-bold text-caramel">{{ product.price ? product.price : 'Prix sur demande' }}</p>
      <a
        :href="whatsappUrl(product.name)"
        target="_blank"
        rel="noopener"
        class="btn btn-wa mt-3 w-full text-sm"
      >Commander sur WhatsApp</a>
    </div>
  </article>
</template>
