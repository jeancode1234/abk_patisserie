import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'accueil', component: () => import('@/views/HomeView.vue') },
  { path: '/produits', name: 'produits', component: () => import('@/views/ProductsView.vue') },
  { path: '/produits/:id', name: 'produit', component: () => import('@/views/ProductDetailView.vue') },
  { path: '/a-propos', name: 'a-propos', component: () => import('@/views/AboutView.vue') },
  { path: '/galerie', name: 'galerie', component: () => import('@/views/GalleryView.vue') },
  { path: '/contact', name: 'contact', component: () => import('@/views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', name: 'introuvable', component: () => import('@/views/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
