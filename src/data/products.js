// Produits. Renseigner price uniquement si l'entreprise le communique (sinon null).
// image : chemin dans public/images/ ou null (affiche un emplacement).
export const products = [
  { id: 'gateaux', categorySlug: 'gateaux', name: 'Gâteaux et pâtisseries', description: 'Créations sucrées pour vos célébrations et vos envies du quotidien.', price: null, image: null, featured: true },
  { id: 'crepes', categorySlug: 'crepes', name: 'Crêpes', description: 'Des crêpes moelleuses et gourmandes, à toute heure.', price: null, image: null, featured: true },
  { id: 'nems', categorySlug: 'nems', name: 'Nems', description: 'Des nems croustillants pour l’apéritif ou un moment entre amis.', price: null, image: null, featured: true },
  { id: 'croquettes', categorySlug: 'croquettes', name: 'Croquettes', description: 'Des croquettes dorées et savoureuses, à partager.', price: null, image: null, featured: false },
  { id: 'taramel', categorySlug: 'taramel', name: 'Taramel', description: 'Une douceur caramélisée pour les gourmands authentiques.', price: null, image: null, featured: false },
  { id: 'autres', categorySlug: 'autres', name: 'Autres gourmandises', description: 'Demandez-nous conseil pour votre prochaine commande.', price: null, image: null, featured: false },
]
