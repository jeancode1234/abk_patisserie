import { watchEffect } from 'vue'

const SITE = 'Amuses Bouches de Kloé'
const DEFAULT_DESCRIPTION =
  'Pâtisseries, crêpes, nems, croquettes et gourmandises à Japoma, Douala, Cameroun. Commandez sur WhatsApp.'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Met à jour le titre, la description, Open Graph et l'URL canonique de la page.
export function useSeo({ title = '', description = DEFAULT_DESCRIPTION } = {}) {
  watchEffect(() => {
    const fullTitle = title ? `${title} | ${SITE}` : SITE
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', window.location.href)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = window.location.origin + window.location.pathname
  })
}
