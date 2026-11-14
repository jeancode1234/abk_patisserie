<script setup>
import { reactive, ref } from 'vue'
import { contact } from '@/data/contact'

const form = reactive({ nom: '', telephone: '', email: '', objet: '', message: '' })
const errors = reactive({ nom: '', telephone: '', email: '', objet: '', message: '' })
// idle | sending | success | mailto | error
const status = ref('idle')

const rules = {
  nom: (v) => v.trim().length >= 2 || 'Veuillez indiquer votre nom complet.',
  telephone: (v) => /^\+?[0-9\s]{8,20}$/.test(v.trim()) || 'Numéro de téléphone invalide.',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Adresse e-mail invalide.',
  objet: (v) => v.trim().length >= 2 || 'Veuillez indiquer un objet.',
  message: (v) => v.trim().length >= 10 || 'Votre message doit contenir au moins 10 caractères.',
}

const validateField = (name) => {
  const res = rules[name](form[name])
  errors[name] = res === true ? '' : res
  return res === true
}

const validateAll = () => {
  const names = Object.keys(rules)
  const results = names.map(validateField)
  const firstInvalid = names.find((_, i) => !results[i])
  if (firstInvalid) document.getElementById(`f-${firstInvalid}`)?.focus()
  return results.every(Boolean)
}

const resetForm = () => Object.keys(form).forEach((k) => (form[k] = ''))

const openMailto = () => {
  const body = [
    `Nom : ${form.nom}`,
    `Téléphone : ${form.telephone}`,
    `E-mail : ${form.email}`,
    '',
    form.message,
  ].join('\n')
  const subject = `[Site] ${form.objet}`
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const onSubmit = async () => {
  if (!validateAll()) return
  status.value = 'sending'

  // Sans clé Web3Forms, on n'affiche jamais « envoyé » : on ouvre la messagerie.
  if (!contact.web3formsKey) {
    openMailto()
    status.value = 'mailto'
    resetForm()
    return
  }

  try {
    const res = await fetch(contact.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: contact.web3formsKey,
        subject: `[Site] ${form.objet}`,
        from_name: form.nom,
        name: form.nom,
        email: form.email,
        phone: form.telephone,
        message: form.message,
      }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.success) throw new Error(data.message || 'envoi refusé')
    resetForm()
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form class="space-y-5 rounded-3xl border border-beige bg-white p-6 sm:p-8" novalidate @submit.prevent="onSubmit">
    <h2 class="text-3xl">Envoyez-nous un message</h2>

    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="f-nom" class="mb-1 block text-sm font-medium">Nom complet</label>
        <input id="f-nom" v-model="form.nom" type="text" autocomplete="name" required :aria-invalid="!!errors.nom" aria-describedby="e-nom" class="field" @blur="validateField('nom')" />
        <p id="e-nom" class="mt-1 min-h-5 text-sm text-red-700" role="alert">{{ errors.nom }}</p>
      </div>
      <div>
        <label for="f-telephone" class="mb-1 block text-sm font-medium">Téléphone</label>
        <input id="f-telephone" v-model="form.telephone" type="tel" autocomplete="tel" placeholder="+237 6 00 00 00 00" required :aria-invalid="!!errors.telephone" aria-describedby="e-telephone" class="field" @blur="validateField('telephone')" />
        <p id="e-telephone" class="mt-1 min-h-5 text-sm text-red-700" role="alert">{{ errors.telephone }}</p>
      </div>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="f-email" class="mb-1 block text-sm font-medium">Adresse e-mail</label>
        <input id="f-email" v-model="form.email" type="email" autocomplete="email" required :aria-invalid="!!errors.email" aria-describedby="e-email" class="field" @blur="validateField('email')" />
        <p id="e-email" class="mt-1 min-h-5 text-sm text-red-700" role="alert">{{ errors.email }}</p>
      </div>
      <div>
        <label for="f-objet" class="mb-1 block text-sm font-medium">Objet</label>
        <input id="f-objet" v-model="form.objet" type="text" required :aria-invalid="!!errors.objet" aria-describedby="e-objet" class="field" @blur="validateField('objet')" />
        <p id="e-objet" class="mt-1 min-h-5 text-sm text-red-700" role="alert">{{ errors.objet }}</p>
      </div>
    </div>

    <div>
      <label for="f-message" class="mb-1 block text-sm font-medium">Message</label>
      <textarea id="f-message" v-model="form.message" rows="5" required :aria-invalid="!!errors.message" aria-describedby="e-message" class="field" @blur="validateField('message')" />
      <p id="e-message" class="mt-1 min-h-5 text-sm text-red-700" role="alert">{{ errors.message }}</p>
    </div>

    <button type="submit" class="btn w-full sm:w-auto" :disabled="status === 'sending'">
      {{ status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message' }}
    </button>

    <p v-if="status === 'success'" role="status" class="rounded-xl bg-emerald-50 p-4 text-emerald-900">
      Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.
    </p>
    <p v-if="status === 'mailto'" role="status" class="rounded-xl bg-beige p-4 text-chocolat">
      Votre messagerie s'ouvre avec votre message prérempli. Envoyez-le depuis votre application pour nous le transmettre.
    </p>
    <p v-if="status === 'error'" role="alert" class="rounded-xl bg-red-50 p-4 text-red-900">
      Le message n'a pas pu être envoyé. Essayez de nous écrire sur WhatsApp ou par e-mail.
    </p>
  </form>
</template>

<style scoped>
.field {
  @apply w-full rounded-xl border border-beige bg-creme px-4 py-3 text-chocolat focus:border-caramel focus:outline-none focus:ring-2 focus:ring-caramel/40 aria-[invalid=true]:border-red-700;
}
</style>
