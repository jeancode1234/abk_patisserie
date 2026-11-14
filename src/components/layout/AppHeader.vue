<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { whatsappUrl } from '@/composables/useWhatsApp'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Nos produits' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/contact', label: 'Contact' },
]

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-beige bg-creme/90 backdrop-blur-md pt-[env(safe-area-inset-top,0px)]">
    <nav class="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 py-4 sm:px-10" aria-label="Navigation principale">
      <RouterLink to="/" class="font-serif text-lg font-bold leading-tight text-chocolat">
        Amuses Bouches<br />de Kloé
      </RouterLink>

      <ul class="hidden items-center gap-7 lg:flex">
        <li v-for="l in links" :key="l.to">
          <RouterLink :to="l.to" class="link-underline text-sm font-medium text-chocolat transition hover:text-caramel" active-class="text-caramel">
            {{ l.label }}
          </RouterLink>
        </li>
        <li>
          <a :href="whatsappUrl()" target="_blank" rel="noopener" class="btn btn-wa px-5 py-2 text-sm">Commander</a>
        </li>
      </ul>

      <button
        class="flex h-11 w-11 items-center justify-center text-chocolat lg:hidden"
        :aria-expanded="open"
        aria-controls="menu-mobile"
        aria-label="Ouvrir le menu"
        @click="open = !open"
      >
        <X v-if="open" :size="26" />
        <Menu v-else :size="26" />
      </button>
    </nav>

    <div
      id="menu-mobile"
      v-show="open"
      class="border-t border-beige bg-creme px-5 pb-6 lg:hidden"
    >
      <RouterLink
        v-for="l in links"
        :key="l.to"
        :to="l.to"
        class="block border-b border-beige py-4 font-medium text-chocolat"
      >
        {{ l.label }}
      </RouterLink>
      <a :href="whatsappUrl()" target="_blank" rel="noopener" class="btn btn-wa mt-6 w-full">Commander sur WhatsApp</a>
    </div>
  </header>
</template>
