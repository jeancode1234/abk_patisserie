# Amuses Bouches de Kloé : site vitrine

## Installation
```bash
npm install
npm run dev       # développement, http://localhost:5173
npm run build     # compilation de production dans dist/
npm run preview   # prévisualisation du build
```

## Structure
- `src/data/` : contenu éditable (produits, catégories, galerie, avis, coordonnées)
- `src/components/layout/` : header, footer, bouton WhatsApp
- `src/composables/` : `useWhatsApp.js` (liens WhatsApp), `useSeo.js` (titres)
- `src/views/` : pages (les contenus arrivent aux étapes suivantes)
- `src/router/` : routes Vue Router

## Formulaire de contact (Web3Forms)
1. Créer une clé gratuite sur https://web3forms.com avec l'adresse e-mail de l'entreprise.
2. Copier `.env.example` en `.env.local` et renseigner `VITE_WEB3FORMS_KEY`.
3. Sans clé, le formulaire ouvre la messagerie du visiteur au lieu d'envoyer le message.
4. Renseigner la même variable dans les paramètres de variables d'environnement de l'hébergeur.

## Déploiement
Le site utilise l'historique HTML5 : configurez une réécriture de toutes les routes vers `index.html` sur votre hébergeur.

## Checklist avant mise en ligne
- [ ] Remplacer `VOTRE-DOMAINE` dans `public/robots.txt` et `public/sitemap.xml`.
- [ ] Renseigner `VITE_WEB3FORMS_KEY` (fichier `.env.local` et variables de l'hébergeur).
- [ ] Ajouter les photos dans `public/images/` et renseigner `src` / `image` dans `src/data/`.
- [ ] Compléter les textes « à compléter » de la page À propos et les mentions légales du footer.
- [ ] Fournir horaires et réseaux sociaux, puis les ajouter à `contact.js` et `ContactInfo.vue`.
- [ ] Vérifier `npm run build` puis `npm run preview`, et tester le formulaire et les liens WhatsApp.

## Hébergement
- Vercel : `vercel.json` gère déjà la réécriture des routes.
- Netlify ou Cloudflare Pages : `public/_redirects` gère déjà la réécriture.
- Autre hébergeur : configurer la réécriture de toutes les routes vers `index.html`.
