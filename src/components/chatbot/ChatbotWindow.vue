<script setup>
import { onBeforeUnmount, watch, nextTick, ref } from 'vue'
import ChatHeader from '@/components/chatbot/ChatHeader.vue'
import ChatMessages from '@/components/chatbot/ChatMessages.vue'
import QuickReplies from '@/components/chatbot/QuickReplies.vue'
import ChatInput from '@/components/chatbot/ChatInput.vue'

const props = defineProps({
  chat: { type: Object, required: true },
})
const emit = defineEmits(['close'])

const windowEl = ref(null)

const onKey = (e) => {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.chat.isOpen.value,
  async (open) => {
    if (open) {
      window.addEventListener('keydown', onKey)
      await nextTick()
      windowEl.value?.querySelector('input')?.focus()
    } else {
      window.removeEventListener('keydown', onKey)
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="chat.isOpen.value"
      ref="windowEl"
      role="dialog"
      aria-modal="false"
      aria-label="Conversation avec Kloé Assistant"
      class="fixed inset-x-3 bottom-[calc(88px+env(safe-area-inset-bottom,0px))] z-50 flex h-[min(560px,70dvh)] flex-col overflow-hidden rounded-3xl border border-beige bg-creme shadow-2xl sm:inset-x-auto sm:right-5 sm:w-[380px]"
    >
      <ChatHeader @close="emit('close')" @reset="chat.reset()" />
      <ChatMessages :messages="chat.messages" :is-typing="chat.isTyping.value" />
      <QuickReplies :suggestions="chat.suggestions.value" @select="chat.send" />
      <ChatInput @send="chat.send" />
    </div>
  </Transition>
</template>
