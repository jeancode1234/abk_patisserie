// Mots-clés reconnus par l'assistant. Les réponses sont dans chatbotService.js
// et reposent uniquement sur les données du site (products.js, categories.js, contact.js).
export const intents = {
  greeting: ['bonjour', 'bonsoir', 'salut', 'hello', 'coucou', 'hey', 'salam'],
  thanks: ['merci', 'thanks', 'super', 'parfait', 'genial', 'top'],
  prices: ['prix', 'tarif', 'tarifs', 'combien', 'cout', 'couts', 'cher', 'budget'],
  order: ['commander', 'commande', 'commandes', 'acheter', 'achat', 'reserver', 'reservation', 'reserve'],
  hours: ['horaire', 'horaires', 'ouvert', 'ouverture', 'ouvrez', 'fermez', 'fermer', 'heure', 'heures'],
  delivery: ['livraison', 'livrer', 'livrez', 'livrez-vous', 'zone', 'zones', 'quartier', 'quartiers', 'retrait', 'emporter'],
  location: ['adresse', 'localisation', 'situe', 'situee', 'emplacement', 'japoma', 'ou', 'trouver'],
  contact: ['contact', 'contacter', 'telephone', 'tel', 'appeler', 'mail', 'email', 'whatsapp', 'equipe', 'parler', 'joindre', 'numero'],
  products: ['produit', 'produits', 'vendez', 'vendre', 'proposez', 'proposer', 'catalogue', 'menu', 'offre', 'avez', 'choix'],
}

// Mots-clés associés à chaque catégorie de produits.
export const categoryKeywords = {
  gateaux: ['gateau', 'gateaux', 'patisserie', 'patisseries', 'tarte', 'dessert', 'desserts'],
  crepes: ['crepe', 'crepes'],
  nems: ['nem', 'nems'],
  croquettes: ['croquette', 'croquettes'],
  taramel: ['taramel'],
  autres: ['autre', 'autres', 'gourmandise', 'gourmandises'],
}
