<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section min-h-[60vh]">
    <h1 class="text-4xl text-chocolat md:text-5xl">Page introuvable</h1>
    <p class="mt-4 text-chocolat/80">Cette page n'existe pas.</p>
    <RouterLink to="/" class="btn mt-8 w-max">Retour à l'accueil</RouterLink>
  </section>
</template>
