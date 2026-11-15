// Moteur de réponses de Kloé Assistant, sans intelligence artificielle.
// Les réponses ne reposent que sur les données du site. Aucun prix, horaire
// ou disponibilité n'est inventé : en cas de doute, l'assistant oriente vers WhatsApp.
import { categories } from '@/data/categories'
import { products } from '@/data/products'
import { contact } from '@/data/contact'
import { intents, categoryKeywords } from '@/data/chatbotKnowledge'
import { whatsappUrl } from '@/composables/useWhatsApp'

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')

const tokenize = (text) => normalize(text).split(/\s+/).filter(Boolean)

const normalizedIntents = Object.fromEntries(
  Object.entries(intents).map(([k, words]) => [k, words.map(normalize)]),
)
const normalizedCategories = Object.fromEntries(
  Object.entries(categoryKeywords).map(([k, words]) => [k, words.map(normalize)]),
)

const findCategory = (tokens) =>
  Object.keys(normalizedCategories).find((slug) =>
    tokens.some((t) => normalizedCategories[slug].includes(t)),
  ) ?? null

const findIntent = (tokens) => {
  // Ordre de priorité : une demande précise l'emporte sur une salutation.
  const order = ['prices', 'order', 'hours', 'delivery', 'location', 'contact', 'products', 'greeting', 'thanks']
  return order.find((name) => tokens.some((t) => normalizedIntents[name].includes(t))) ?? null
}

const categoryName = (slug) => categories.find((c) => c.slug === slug)?.name ?? ''
const categoryShort = (slug) => categories.find((c) => c.slug === slug)?.short ?? ''

const whatsappAction = (label = 'Continuer sur WhatsApp', text) => ({
  label,
  href: whatsappUrl(text),
})

const suggestionsDefault = ['Découvrir nos produits', 'Comment passer commande ?', 'Où nous trouver ?', 'Parler à notre équipe']

export function replyTo(message) {
  const tokens = tokenize(message)
  const slug = findCategory(tokens)
  const intent = findIntent(tokens)

  // Une catégorie précise prime sur une demande générale.
  if (slug && (!intent || ['products', 'greeting', 'prices'].includes(intent))) {
    if (intent === 'prices') {
      const product = products.find((p) => p.categorySlug === slug && p.price)
      return product
        ? {
            text: [`Le tarif de ${product.name} est ${product.price}.`],
            actions: [{ label: 'Voir la fiche produit', to: `/produits/${product.id}` }],
            suggestions: suggestionsDefault,
          }
        : {
            text: [
              `Pour obtenir le tarif exact de ${categoryName(slug)}, je vous invite à contacter directement notre équipe sur WhatsApp. Nous serons ravis de vous renseigner.`,
            ],
            actions: [whatsappAction('Demander le tarif', `Quel est le tarif de : ${categoryName(slug)} ?`)],
            suggestions: suggestionsDefault,
          }
    }
    return {
      text: [categoryShort(slug), 'Vous pouvez parcourir la sélection ou demander directement sur WhatsApp.'],
      actions: [
        { label: `Voir ${categoryName(slug)}`, to: `/produits?categorie=${slug}` },
        whatsappAction('Demander sur WhatsApp', categoryName(slug)),
      ],
      suggestions: ['Demander les tarifs', 'Comment passer commande ?', 'Découvrir nos produits'],
    }
  }

  switch (intent) {
    case 'greeting':
      return {
        text: ['Bonjour et bienvenue ! Que souhaitez-vous découvrir aujourd’hui ?'],
        actions: [],
        suggestions: categories.map((c) => c.name),
      }
    case 'thanks':
      return { text: ['Avec plaisir ! N’hésitez pas si vous avez d’autres questions. 🧁'], actions: [], suggestions: suggestionsDefault }
    case 'products':
      return {
        text: [
          'Nous proposons des gâteaux et pâtisseries, des crêpes, des nems, des croquettes, du taramel et d’autres gourmandises.',
          'Quelle catégorie vous intéresse ?',
        ],
        actions: [{ label: 'Voir nos produits', to: '/produits' }],
        suggestions: categories.map((c) => c.name),
      }
    case 'prices':
      return {
        text: [
          'Les tarifs dépendent des produits et des quantités. Chaque fiche produit indique le prix lorsqu’il est communiqué.',
          'Pour le tarif exact d’une demande, notre équipe vous répond sur WhatsApp.',
        ],
        actions: [{ label: 'Voir nos produits', to: '/produits' }, whatsappAction('Demander les tarifs', 'Je souhaite connaître vos tarifs.')],
        suggestions: suggestionsDefault,
      }
    case 'order':
      return {
        text: [
          'Pour commander, choisissez vos produits sur la page Nos produits, puis cliquez sur « Commander sur WhatsApp » : le message sera prérempli avec le nom du produit.',
          'Notre équipe vous répond ensuite pour finaliser votre commande.',
        ],
        actions: [{ label: 'Voir nos produits', to: '/produits' }, whatsappAction('Commander sur WhatsApp', 'Je souhaite passer une commande.')],
        suggestions: ['Découvrir nos produits', 'Demander les tarifs', 'Parler à notre équipe'],
      }
    case 'hours':
      return {
        text: ['Nos horaires ne sont pas encore affichés sur le site. Pour les connaître, écrivez-nous sur WhatsApp.'],
        actions: [whatsappAction('Demander les horaires', 'Quels sont vos horaires ?')],
        suggestions: suggestionsDefault,
      }
    case 'delivery':
      return {
        text: ['Je n’ai pas encore les informations sur la livraison et le retrait. Notre équipe pourra vous répondre précisément sur WhatsApp.'],
        actions: [whatsappAction('Poser ma question sur WhatsApp', 'Je souhaite savoir si vous livrez ou si je peux retirer ma commande.')],
        suggestions: suggestionsDefault,
      }
    case 'location':
      return {
        text: [`Nous sommes situés à ${contact.address}.`],
        actions: [
          { label: 'Ouvrir dans Google Maps', href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}` },
          { label: 'Page contact', to: '/contact' },
        ],
        suggestions: suggestionsDefault,
      }
    case 'contact':
      return {
        text: [`Vous pouvez nous joindre par téléphone au ${contact.phoneDisplay}, sur WhatsApp ou par e-mail à ${contact.email}.`],
        actions: [
          whatsappAction('Écrire sur WhatsApp', 'Bonjour, j’aimerais échanger avec votre équipe.'),
          { label: 'Appeler', href: `tel:+${contact.phoneLink}` },
        ],
        suggestions: suggestionsDefault,
      }
    default:
      return {
        text: [
          'Je ne suis pas certain de bien comprendre. Je peux vous présenter nos produits, répondre à vos questions sur la commande ou vous mettre en relation avec notre équipe.',
        ],
        actions: [whatsappAction('Parler à notre équipe', 'Bonjour, j’ai une question.')],
        suggestions: ['Découvrir nos produits', 'Comment passer commande ?', 'Parler à notre équipe'],
      }
  }
}
