<script setup>
import { RouterLink } from 'vue-router'
import { contact } from '@/data/contact'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#2F1D18] px-5 pb-10 pt-14 text-beige sm:px-10 lg:px-16">
    <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
      <div>
        <h2 class="mb-3 font-serif text-xl text-creme">{{ contact.brand }}</h2>
        <p class="max-w-xs text-sm opacity-85">Le plaisir gourmand à chaque bouchée.</p>
      </div>

      <div>
        <h3 class="mb-3 font-serif text-lg text-creme">Navigation</h3>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-caramel">Accueil</RouterLink></li>
          <li><RouterLink to="/produits" class="hover:text-caramel">Nos produits</RouterLink></li>
          <li><RouterLink to="/a-propos" class="hover:text-caramel">À propos</RouterLink></li>
          <li><RouterLink to="/galerie" class="hover:text-caramel">Galerie</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-caramel">Contact</RouterLink></li>
        </ul>
      </div>

      <div>
        <h3 class="mb-3 font-serif text-lg text-creme">Coordonnées</h3>
        <ul class="space-y-2 text-sm">
          <li>{{ contact.address }}</li>
          <li><a :href="`tel:+${contact.phoneLink}`" class="hover:text-caramel">{{ contact.phoneDisplay }}</a></li>
          <li><a :href="`mailto:${contact.email}`" class="break-all hover:text-caramel">{{ contact.email }}</a></li>
        </ul>
      </div>
    </div>

    <div class="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-[#4A3328] pt-6 text-xs opacity-75">
      <span>© {{ year }} {{ contact.brand }}. Tous droits réservés.</span>
      <span>Mentions légales : à compléter par l'entreprise</span>
    </div>
  </footer>
</template>
