<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import { testimonials } from '@/data/testimonials'
</script>

<template>
  <section class="section bg-beige">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Témoignages" title="Ce que disent nos clients" align="center" />

      <div v-if="testimonials.length" class="mt-12 grid gap-6 md:grid-cols-3">
        <RevealOnScroll v-for="(t, i) in testimonials" :key="t.id" :delay="i * 100">
          <figure class="h-full rounded-3xl bg-white p-8 shadow-sm">
            <blockquote class="leading-relaxed text-chocolat/85">« {{ t.text }} »</blockquote>
            <figcaption class="mt-5 text-sm font-semibold text-caramel">{{ t.author }}</figcaption>
          </figure>
        </RevealOnScroll>
      </div>

      <RevealOnScroll v-else class="mx-auto mt-12 max-w-xl rounded-3xl border border-dashed border-caramel bg-white/60 p-8 text-center">
        <p class="text-chocolat/80">Les avis de nos clients seront publiés ici dès qu'ils seront recueillis.</p>
      </RevealOnScroll>
    </div>
  </section>
</template>
