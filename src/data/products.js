// Produits. Renseigner price uniquement si l'entreprise le communique (sinon null).
// image : chemin dans public/images/ ou null (affiche un emplacement).
import image1 from '../assets/images/gf.png'
import image2 from '../assets/images/fg.png'
import image3 from '../assets/images/nems.png'
import image4 from '../assets/images/croquette.png'
import image5 from '../assets/images/cara.png'
import image6 from '../assets/images/gour.png'
export const products = [
  { id: 'gateaux', categorySlug: 'gateaux', name: 'Gâteaux et pâtisseries', description: 'Créations sucrées pour vos célébrations et vos envies du quotidien.', price: null, image: image1, featured: true },
  { id: 'crepes', categorySlug: 'crepes', name: 'Crêpes', description: 'Des crêpes moelleuses et gourmandes, à toute heure.', price: null, image: image2, featured: true },
  { id: 'nems', categorySlug: 'nems', name: 'Nems', description: 'Des nems croustillants pour l’apéritif ou un moment entre amis.', price: null, image: image3, featured: true },
  { id: 'croquettes', categorySlug: 'croquettes', name: 'Croquettes', description: 'Des croquettes dorées et savoureuses, à partager.', price: null, image: image4, featured: false },
  { id: 'taramel', categorySlug: 'taramel', name: 'Taramel', description: 'Une douceur caramélisée pour les gourmands authentiques.', price: null, image: image5, featured: false },
  { id: 'autres', categorySlug: 'autres', name: 'Autres gourmandises', description: 'Demandez-nous conseil pour votre prochaine commande.', price: null, image: image6, featured: false },
]
