<script setup>
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import WhatsAppButton from '@/components/layout/WhatsAppButton.vue'
import ChatbotWidget from '@/components/chatbot/ChatbotWidget.vue'

const route = useRoute()
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">
    Aller au contenu
  </a>
  <AppHeader />
  <main id="main" class="pt-[88px]">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
  <WhatsAppButton />
  <ChatbotWidget />
</template>
