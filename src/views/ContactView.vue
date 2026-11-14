<script setup>
import { useSeo } from '@/composables/useSeo'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactForm from '@/components/contact/ContactForm.vue'

useSeo({
  title: 'Contact',
  description: 'Contactez Amuses Bouches de Kloé à Japoma, Douala, Cameroun : téléphone, WhatsApp, e-mail et formulaire.',
})
</script>

<template>
  <section class="section">
    <div class="mx-auto max-w-6xl">
      <SectionTitle eyebrow="Contact" title="Parlons de votre commande" text="Par WhatsApp, par téléphone, par e-mail ou via le formulaire." />
      <div class="mt-12 grid gap-10 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
</template>
