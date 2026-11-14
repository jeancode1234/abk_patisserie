<script setup>
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { whatsappUrl } from '@/composables/useWhatsApp'
import { contact } from '@/data/contact'
</script>

<template>
  <section class="bg-chocolat px-5 py-20 text-center text-creme sm:px-10">
    <RevealOnScroll class="mx-auto max-w-2xl">
      <p class="eyebrow !text-beige">Commander</p>
      <h2 class="text-4xl sm:text-5xl">Une envie de gourmandise ?</h2>
      <p class="mx-auto mt-5 max-w-md text-beige/90">Faites-vous plaisir avec les créations d'Amuses Bouches de Kloé.</p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a :href="whatsappUrl()" target="_blank" rel="noopener" class="btn btn-wa">Contactez-nous sur WhatsApp</a>
        <a :href="`tel:+${contact.phoneLink}`" class="btn btn-ghost !border-creme !text-creme hover:!bg-creme hover:!text-chocolat">Appeler</a>
      </div>
    </RevealOnScroll>
  </section>
</template>
