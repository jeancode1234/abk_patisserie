<script setup>
import { RouterLink } from 'vue-router'
import RevealOnScroll from '@/components/ui/RevealOnScroll.vue'
import PhotoBox from '@/components/ui/PhotoBox.vue'
</script>

<template>
  <section class="section bg-beige">
    <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      <RevealOnScroll>
        <PhotoBox ratio="aspect-[4/5]" alt="Le savoir-faire d'Amuses Bouches de Kloé" />
      </RevealOnScroll>

      <RevealOnScroll :delay="150">
        <p class="eyebrow">Notre savoir-faire</p>
        <h2 class="text-3xl text-chocolat sm:text-4xl md:text-5xl">La passion au cœur de chaque création</h2>
        <p class="mt-5 leading-relaxed text-chocolat/80">
          Chez Amuses Bouches de Kloé, chaque préparation est pensée avec attention : la passion de la pâtisserie, la diversité des créations et le soin apporté à chaque étape, pour que votre satisfaction soit notre première priorité.
        </p>
        <ul class="mt-6 space-y-3 text-chocolat/85">
          <li class="flex gap-3"><span class="text-caramel">✦</span> Des créations sucrées et salées</li>
          <li class="flex gap-3"><span class="text-caramel">✦</span> Une préparation soignée, du début à la fin</li>
          <li class="flex gap-3"><span class="text-caramel">✦</span> Une attention portée à chaque client</li>
        </ul>
        <RouterLink to="/a-propos" class="btn btn-ghost mt-8">Découvrir notre histoire</RouterLink>
      </RevealOnScroll>
    </div>
  </section>
</template>
