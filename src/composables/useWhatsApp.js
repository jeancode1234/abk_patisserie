import { contact } from '@/data/contact'

export const BASE_MESSAGE =
  "Bonjour Amuses Bouches de Kloé ! Je découvre votre site et j'aimerais avoir plus d'informations sur vos produits et vos possibilités de commande. Merci !"

// Construit un lien wa.me avec message prérempli, éventuellement personnalisé par produit.
export function whatsappUrl(productName) {
  const text = productName
    ? `${BASE_MESSAGE} Produit souhaité : ${productName}.`
    : BASE_MESSAGE
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
}

export function useWhatsApp() {
  return { whatsappUrl }
}
