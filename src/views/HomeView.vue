<script setup>
import { useSeo } from '@/composables/useSeo'
import HeroSection from '@/components/home/HeroSection.vue'
import ReassuranceBar from '@/components/home/ReassuranceBar.vue'
import CategoriesSection from '@/components/home/CategoriesSection.vue'
import AboutPreview from '@/components/home/AboutPreview.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import WhyChooseUs from '@/components/home/WhyChooseUs.vue'
import GalleryPreview from '@/components/home/GalleryPreview.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FinalCTA from '@/components/home/FinalCTA.vue'

useSeo({ title: '' })
</script>

<template>
  <HeroSection />
  <ReassuranceBar />
  <CategoriesSection />
  <AboutPreview />
  <FeaturedProducts />
  <WhyChooseUs />
  <GalleryPreview />
  <TestimonialsSection />
  <FinalCTA />
</template>
