<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import PhotoBox from '@/components/ui/PhotoBox.vue'

const props = defineProps({
  items: { type: Array, required: true },
  index: { type: Number, default: null },
})
const emit = defineEmits(['update:index'])

const closeBtn = ref(null)
let lastFocus = null

const isOpen = computed(() => props.index !== null && props.items.length > 0)
const current = computed(() => props.items[props.index])

const close = () => emit('update:index', null)
const next = () => emit('update:index', (props.index + 1) % props.items.length)
const prev = () => emit('update:index', (props.index - 1 + props.items.length) % props.items.length)

const onKey = (e) => {
  if (!isOpen.value) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

watch(isOpen, async (open) => {
  if (open) {
    lastFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    await nextTick()
    closeBtn.value?.focus()
  } else {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', onKey)
    lastFocus?.focus?.()
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-chocolat/95 p-4 sm:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Aperçu de la photo"
      @click.self="close"
    >
      <button
        ref="closeBtn"
        type="button"
        class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-creme hover:bg-white/10"
        aria-label="Fermer"
        @click="close"
      >
        <X :size="26" />
      </button>

      <button
        v-if="items.length > 1"
        type="button"
        class="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-creme hover:bg-white/10 sm:left-6"
        aria-label="Photo précédente"
        @click="prev"
      >
        <ChevronLeft :size="30" />
      </button>

      <div class="w-full max-w-4xl">
        <PhotoBox :src="current.src" :alt="current.alt" :label="current.alt" ratio="aspect-[4/3]" />
        <p class="mt-4 text-center text-sm text-creme/80">
          {{ current.alt }}<span v-if="items.length > 1"> · {{ index + 1 }} / {{ items.length }}</span>
        </p>
      </div>

      <button
        v-if="items.length > 1"
        type="button"
        class="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-creme hover:bg-white/10 sm:right-6"
        aria-label="Photo suivante"
        @click="next"
      >
        <ChevronRight :size="30" />
      </button>
    </div>
  </Transition>
</template>
