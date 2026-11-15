import { reactive, ref } from 'vue'
import { chatbotConfig } from '@/config/chatbotConfig'
import { replyTo } from '@/services/chatbotService'

let nextId = 0
const makeMessage = (from, text, extra = {}) => ({
  id: ++nextId,
  from,
  text,
  time: new Date(),
  ...extra,
})

export function useChatbot() {
  const isOpen = ref(false)
  const isTyping = ref(false)
  const suggestions = ref([...chatbotConfig.starters])
  const messages = reactive([])
  let timer = null

  // Message d'accueil : chaque ligne est un message distinct.
  chatbotConfig.welcome.forEach((line) => messages.push(makeMessage('bot', line)))

  const pushBotReply = (reply) => {
    messages.push(
      makeMessage('bot', reply.text.join('\n\n'), { actions: reply.actions ?? [] }),
    )
    suggestions.value = reply.suggestions ?? chatbotConfig.starters
  }

  const send = (raw) => {
    const text = (raw ?? '').trim().slice(0, chatbotConfig.maxInputLength)
    if (!text) return
    messages.push(makeMessage('user', text))
    suggestions.value = []
    isTyping.value = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      isTyping.value = false
      pushBotReply(replyTo(text))
    }, chatbotConfig.replyDelayMs)
  }

  const open = () => (isOpen.value = true)
  const close = () => (isOpen.value = false)
  const toggle = () => (isOpen.value = !isOpen.value)

  const reset = () => {
    clearTimeout(timer)
    isTyping.value = false
    messages.splice(0, messages.length)
    chatbotConfig.welcome.forEach((line) => messages.push(makeMessage('bot', line)))
    suggestions.value = [...chatbotConfig.starters]
  }

  return { isOpen, isTyping, messages, suggestions, send, open, close, toggle, reset }
}
