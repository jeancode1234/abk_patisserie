<script setup>
import { ref } from 'vue'
import { Send } from 'lucide-vue-next'
import { chatbotConfig } from '@/config/chatbotConfig'

const emit = defineEmits(['send'])
const text = ref('')

const submit = () => {
  const value = text.value.trim()
  if (!value) return
  emit('send', value)
  text.value = ''
}
</script>

<template>
  <form class="flex items-center gap-2 border-t border-beige bg-white p-3" @submit.prevent="submit">
    <label for="kloe-input" class="sr-only">Votre message</label>
    <input
      id="kloe-input"
      v-model="text"
      type="text"
      :maxlength="chatbotConfig.maxInputLength"
      placeholder="Écrivez votre message…"
      autocomplete="off"
      class="min-w-0 flex-1 rounded-full border border-beige bg-creme px-4 py-2.5 text-sm text-chocolat focus:border-caramel focus:outline-none focus:ring-2 focus:ring-caramel/40"
    />
    <button
      type="submit"
      :disabled="!text.trim()"
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-caramel text-white transition hover:bg-chocolat disabled:opacity-40"
      aria-label="Envoyer le message"
    >
      <Send :size="18" />
    </button>
  </form>
</template>
