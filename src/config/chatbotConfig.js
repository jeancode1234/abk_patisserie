// Configuration de Kloé Assistant (étape A : sans intelligence artificielle).
export const chatbotConfig = {
  name: 'Kloé Assistant',
  tagline: 'Votre conseiller gourmand',
  welcome: [
    'Coucou ! 👋 Bienvenue chez Amuses Bouches de Kloé.',
    'Je suis Kloé Assistant, votre conseiller gourmand.',
    'Je suis là pour vous faire découvrir nos spécialités et répondre à vos questions.',
    "Comment puis-je vous aider aujourd'hui ?",
  ],
  starters: ['Découvrir nos produits', 'Nos spécialités', 'Comment passer commande ?', 'Contacter notre équipe'],
  maxInputLength: 300,
  // Délai d'affichage de la réponse, pour une lecture naturelle (aucune réponse n'est générée ici).
  replyDelayMs: 500,
}
