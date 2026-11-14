// Coordonnées officielles de l'entreprise. Ne rien inventer ici.
export const contact = {
  brand: 'Amuses Bouches de Kloé',
  address: 'Japoma, Douala, Cameroun',
  email: 'belfekavirginie@gmail.com',
  phoneDisplay: '+237 6 99 62 34 56',
  phoneLink: '+237699623456',
  whatsappNumber: '237699623456',
  // Service d'envoi des messages du formulaire : Web3Forms.
  formEndpoint: 'https://api.web3forms.com/submit',
  // Clé d'accès Web3Forms, à définir dans .env.local (voir .env.example).
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || '',
}
