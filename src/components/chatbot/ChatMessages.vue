<script setup>
import { nextTick, ref, watch } from 'vue'
import ChatMessage from '@/components/chatbot/ChatMessage.vue'
import TypingIndicator from '@/components/chatbot/TypingIndicator.vue'

const props = defineProps({
  messages: { type: Array, required: true },
  isTyping: { type: Boolean, default: false },
})

const box = ref(null)

// Défilement automatique vers le dernier message.
watch(
  () => [props.messages.length, props.isTyping],
  async () => {
    await nextTick()
    if (box.value) box.value.scrollTop = box.value.scrollHeight
  },
)
</script>

<template>
  <div ref="box" class="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4" aria-live="polite" aria-relevant="additions">
    <ChatMessage v-for="m in messages" :key="m.id" :message="m" />
    <TypingIndicator v-if="isTyping" />
  </div>
</template>
