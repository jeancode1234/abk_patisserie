<script setup>
import { RotateCcw, X } from 'lucide-vue-next'
import { chatbotConfig } from '@/config/chatbotConfig'

defineEmits(['close', 'reset'])
</script>

<template>
  <header class="flex items-center justify-between gap-3 bg-chocolat px-5 py-4 text-creme">
    <div class="flex items-center gap-3">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-caramel font-serif text-lg font-bold" aria-hidden="true">K</div>
      <div>
        <p class="font-serif text-base font-semibold leading-tight">{{ chatbotConfig.name }}</p>
        <p class="flex items-center gap-1.5 text-xs text-beige">
          <span class="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          {{ chatbotConfig.tagline }}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-1">
      <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label="Recommencer la conversation" title="Recommencer" @click="$emit('reset')">
        <RotateCcw :size="18" />
      </button>
      <button type="button" class="flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10" aria-label="Fermer la conversation" @click="$emit('close')">
        <X :size="20" />
      </button>
    </div>
  </header>
</template>
