<script setup>
import { Heart, Target, Eye, Gift } from 'lucide-vue-next'
import { useSeo } from '@/composables/useSeo'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import PhotoBox from '@/components/ui/PhotoBox.vue'

useSeo({ title: 'À propos' })

const values = [
  { title: 'Gourmandise', text: 'Le plaisir de la dégustation guide chacune de nos créations.' },
  { title: 'Qualité', text: 'Un soin constant apporté à la préparation et aux finitions.' },
  { title: 'Créativité', text: 'Des recettes sucrées et salées qui se renouvellent et surprennent.' },
  { title: 'Satisfaction', text: 'La satisfaction de nos clients est notre meilleure récompense.' },
]

// Contenus institutionnels non fournis : signalés à compléter, sans invention.
const TODO = 'Contenu à compléter par l\'entreprise.'
</script>

<template>
  <section class="section">
    <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      <RevealOnScroll>
        <SectionTitle eyebrow="À propos" title="Amuses Bouches de Kloé" text="Des créations gourmandes, sucrées et salées, préparées avec passion à Japoma, Douala." />
      </RevealOnScroll>
      <RevealOnScroll :delay="150">
        <PhotoBox alt="Amuses Bouches de Kloé" ratio="aspect-[4/3]" />
      </RevealOnScroll>
    </div>
  </section>

  <section class="section bg-beige">
    <div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
      <RevealOnScroll>
        <p class="eyebrow">Notre histoire</p>
        <h2 class="text-3xl sm:text-4xl">Nos origines</h2>
        <p class="mt-4 italic text-chocolat/70">{{ TODO }}</p>
      </RevealOnScroll>
      <RevealOnScroll :delay="120">
        <p class="eyebrow">Notre passion</p>
        <h2 class="text-3xl sm:text-4xl">Le goût de bien faire</h2>
        <p class="mt-4 leading-relaxed text-chocolat/80">
          La pâtisserie est au cœur de notre démarche : chaque création est pensée pour offrir un moment de plaisir, du premier regard à la dernière bouchée.
        </p>
      </RevealOnScroll>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
      <RevealOnScroll>
        <Eye class="mb-4 text-caramel" :size="32" />
        <h2 class="text-3xl sm:text-4xl">Notre vision</h2>
        <p class="mt-4 italic text-chocolat/70">{{ TODO }}</p>
      </RevealOnScroll>
      <RevealOnScroll :delay="120">
        <Target class="mb-4 text-caramel" :size="32" />
        <h2 class="text-3xl sm:text-4xl">Notre mission</h2>
        <p class="mt-4 italic text-chocolat/70">{{ TODO }}</p>
      </RevealOnScroll>
    </div>
  </section>

  <section class="section bg-white">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Nos valeurs" title="Ce qui nous guide" align="center" />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <RevealOnScroll v-for="(v, i) in values" :key="v.title" :delay="i * 100">
          <div class="h-full rounded-3xl border border-beige p-7">
            <Heart v-if="i === 0" class="mb-4 text-caramel" :size="26" />
            <Gift v-else class="mb-4 text-caramel" :size="26" />
            <h3 class="text-2xl">{{ v.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-chocolat/75">{{ v.text }}</p>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="mx-auto max-w-3xl text-center">
      <RevealOnScroll>
        <p class="eyebrow">Notre engagement</p>
        <h2 class="text-3xl sm:text-4xl">Votre satisfaction, notre priorité</h2>
        <p class="mt-5 leading-relaxed text-chocolat/80">
          Nous sommes attentifs à chaque demande, qu'elle soit faite sur WhatsApp, par téléphone ou par e-mail, et nous nous efforçons de répondre avec soin et clarté.
        </p>
      </RevealOnScroll>
    </div>
  </section>
</template>
