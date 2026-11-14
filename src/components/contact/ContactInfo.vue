<script setup>
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-vue-next'
import { contact } from '@/data/contact'
import { whatsappUrl } from '@/composables/useWhatsApp'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`
</script>

<template>
  <div class="space-y-4">
    <ul class="grid gap-4">
      <li class="flex gap-4 rounded-2xl border border-beige bg-white p-5">
        <MapPin class="mt-1 shrink-0 text-caramel" :size="22" />
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-caramel">Adresse</p>
          <p class="text-chocolat">{{ contact.address }}</p>
        </div>
      </li>

      <li class="flex gap-4 rounded-2xl border border-beige bg-white p-5">
        <Phone class="mt-1 shrink-0 text-caramel" :size="22" />
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-caramel">Téléphone</p>
          <a :href="`tel:+${contact.phoneLink}`" class="text-chocolat underline-offset-4 hover:underline">{{ contact.phoneDisplay }}</a>
        </div>
      </li>

      <li class="flex gap-4 rounded-2xl border border-beige bg-white p-5">
        <MessageCircle class="mt-1 shrink-0 text-caramel" :size="22" />
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-caramel">WhatsApp</p>
          <a :href="whatsappUrl()" target="_blank" rel="noopener" class="text-chocolat underline-offset-4 hover:underline">{{ contact.phoneDisplay }}</a>
        </div>
      </li>

      <li class="flex gap-4 rounded-2xl border border-beige bg-white p-5">
        <Mail class="mt-1 shrink-0 text-caramel" :size="22" />
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-caramel">E-mail</p>
          <a :href="`mailto:${contact.email}`" class="break-all text-chocolat underline-offset-4 hover:underline">{{ contact.email }}</a>
        </div>
      </li>

      <li class="flex gap-4 rounded-2xl border border-dashed border-caramel bg-white/60 p-5">
        <Clock class="mt-1 shrink-0 text-caramel" :size="22" />
        <div>
          <p class="text-xs font-bold uppercase tracking-widest text-caramel">Horaires</p>
          <p class="italic text-chocolat/70">À communiquer par l'entreprise.</p>
        </div>
      </li>
    </ul>

    <iframe
      :src="mapSrc"
      title="Carte : Japoma, Douala, Cameroun"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="h-72 w-full rounded-2xl border border-beige"
    />
    <a :href="mapLink" target="_blank" rel="noopener" class="text-sm font-semibold text-caramel hover:underline">
      Ouvrir Japoma, Douala dans Google Maps →
    </a>
  </div>
</template>
