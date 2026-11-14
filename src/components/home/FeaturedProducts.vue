<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import PhotoBox from '@/components/ui/PhotoBox.vue'
import { products } from '@/data/products'
import { whatsappUrl } from '@/composables/useWhatsApp'

const featured = products.filter((p) => p.featured)
</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Nos coups de cœur" title="Nos sélections du moment" text="Une sélection de nos produits à découvrir en premier." />

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <RevealOnScroll v-for="(p, i) in featured" :key="p.id" :delay="i * 100">
          <article class="group flex h-full flex-col overflow-hidden rounded-3xl border border-beige bg-white p-4 transition duration-500 hover:-translate-y-1.5 hover:shadow-xl">
            <PhotoBox :src="p.image" :alt="p.name" class="!rounded-2xl" />
            <div class="flex flex-1 flex-col gap-2 px-2 pb-2 pt-5">
              <h3 class="text-2xl text-chocolat">{{ p.name }}</h3>
              <p class="flex-1 text-sm leading-relaxed text-chocolat/75">{{ p.description }}</p>
              <p class="text-sm font-bold text-caramel">{{ p.price ? p.price : 'Prix sur demande' }}</p>
              <a
                :href="whatsappUrl(p.name)"
                target="_blank"
                rel="noopener"
                class="btn btn-wa mt-3 w-full text-sm"
              >Demander ce produit</a>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
