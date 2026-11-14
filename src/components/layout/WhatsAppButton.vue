<script setup>
import { MessageCircle } from 'lucide-vue-next'
import { whatsappUrl } from '@/composables/useWhatsApp'
</script>

<template>
  <a
    :href="whatsappUrl()"
    target="_blank"
    rel="noopener"
    aria-label="Discuter sur WhatsApp"
    class="fixed bottom-[calc(20px+env(safe-area-inset-bottom,0px))] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
  >
    <MessageCircle :size="28" />
  </a>
</template>
