<script setup>
import { MessageCircle, X } from 'lucide-vue-next'
import { useChatbot } from '@/composables/useChatbot'
import ChatbotWindow from '@/components/chatbot/ChatbotWindow.vue'

const chat = useChatbot()
</script>

<template>
  <div>
    <button
      type="button"
      class="fixed bottom-[calc(20px+env(safe-area-inset-bottom,0px))] right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-chocolat text-creme shadow-xl ring-4 ring-caramel/30 transition duration-300 hover:scale-105 hover:bg-caramel"
      :aria-label="chat.isOpen.value ? 'Fermer Kloé Assistant' : 'Ouvrir Kloé Assistant'"
      :aria-expanded="chat.isOpen.value"
      @click="chat.toggle()"
    >
      <X v-if="chat.isOpen.value" :size="24" />
      <MessageCircle v-else :size="26" />
    </button>

    <ChatbotWindow :chat="chat" @close="chat.close()" />
  </div>
</template>
