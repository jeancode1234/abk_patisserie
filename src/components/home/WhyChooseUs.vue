<script setup>
import { Sparkles, Gem, Layers, Smile } from 'lucide-vue-next'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'

const reasons = [
  { icon: Sparkles, title: 'Des créations gourmandes', text: 'Des saveurs pensées pour procurer du plaisir à chaque dégustation.' },
  { icon: Gem, title: 'Une attention aux détails', text: 'Une finition soignée pour chaque commande, petite ou grande.' },
  { icon: Layers, title: 'Une diversité de spécialités', text: 'Gâteaux, crêpes, nems, croquettes, taramel et bien plus encore.' },
  { icon: Smile, title: 'Une expérience chaleureuse', text: 'Un accueil attentif, par WhatsApp ou par téléphone.' },
]
</script>

<template>
  <section class="section bg-white">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Pourquoi nous choisir" title="Pourquoi choisir Amuses Bouches de Kloé ?" align="center" />

      <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <RevealOnScroll v-for="(r, i) in reasons" :key="r.title" :delay="i * 100" class="text-center">
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-beige text-caramel">
            <component :is="r.icon" :size="28" />
          </div>
          <h3 class="mt-5 text-xl text-chocolat">{{ r.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-chocolat/75">{{ r.text }}</p>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
