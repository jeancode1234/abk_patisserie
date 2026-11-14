<script setup>
import { RouterLink } from 'vue-router'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import PhotoBox from '@/components/ui/PhotoBox.vue'
import { whatsappUrl } from '@/composables/useWhatsApp'
</script>

<template>
  <section class="relative overflow-hidden bg-chocolat text-creme">
    <div class="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-5 py-16 sm:px-10 md:grid-cols-2 lg:px-16">
      <RevealOnScroll>
        <p class="eyebrow !text-beige">Bienvenue dans notre univers gourmand</p>
        <h1 class="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Le plaisir gourmand à chaque bouchée.</h1>
        <p class="mt-6 max-w-lg text-lg leading-relaxed text-beige/90">
          Découvrez un univers de saveurs et de gourmandises à travers nos créations sucrées et salées, préparées avec passion pour rendre vos moments encore plus délicieux.
        </p>
        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink to="/produits" class="btn">Découvrir nos créations</RouterLink>
          <a :href="whatsappUrl()" target="_blank" rel="noopener" class="btn btn-wa">Commander sur WhatsApp</a>
        </div>
      </RevealOnScroll>

      <RevealOnScroll :delay="200">
        <PhotoBox ratio="aspect-[4/5]" alt="Pâtisseries et gourmandises d'Amuses Bouches de Kloé" class="shadow-2xl" />
      </RevealOnScroll>
    </div>
  </section>
</template>
