<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  as: { type: String, default: 'div' },
})

const el = ref(null)
const visible = ref(false)
let observer = null

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce || !('IntersectionObserver' in window)) {
    visible.value = true
    return
  }
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 },
  )
  observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="transition duration-700 ease-out"
    :class="visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </component>
</template>
