<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  message: { type: Object, required: true },
})

const isInternal = (action) => Boolean(action.to)
</script>

<template>
  <div :class="['flex flex-col gap-2', message.from === 'user' ? 'items-end' : 'items-start']">
    <div
      :class="[
        'max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm',
        message.from === 'user' ? 'rounded-br-sm bg-caramel text-white' : 'rounded-bl-sm bg-white text-chocolat',
      ]"
    >
      {{ message.text }}
    </div>

    <div v-if="message.actions?.length" class="flex max-w-[85%] flex-wrap gap-2">
      <template v-for="action in message.actions" :key="action.label">
        <RouterLink
          v-if="isInternal(action)"
          :to="action.to"
          class="rounded-full border border-caramel px-3 py-1.5 text-xs font-semibold text-chocolat transition hover:bg-caramel hover:text-white"
        >
          {{ action.label }}
        </RouterLink>
        <a
          v-else
          :href="action.href"
          target="_blank"
          rel="noopener"
          :class="[
            'rounded-full px-3 py-1.5 text-xs font-semibold transition',
            action.href?.startsWith('https://wa.me') ? 'bg-[#25D366] text-white hover:bg-[#1ebe5a]' : 'border border-caramel text-chocolat hover:bg-caramel hover:text-white',
          ]"
        >
          {{ action.label }}
        </a>
      </template>
    </div>
  </div>
</template>
