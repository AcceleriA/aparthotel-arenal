# Aparthotel Arenal - Feuille de route de développement

Dernière mise à jour : 30 mars 2026
Statut global : ~95% production-ready (phases 1-7 terminées)

---

## Architecture technique

- Framework : Next.js 14.2.35 (App Router, SSG)
- i18n : next-intl 3.26.5 (5 locales : fr/es/en/de/ca)
- Styling : Tailwind CSS + CSS Variables (design system Littoral Silence)
- Hébergement : Vercel (team_TYkABGzj1ZZDBOt3Zk2QyJVv)
- Repo : github.com/AcceleriA/aparthotel-arenal (branche main)
- Domaine cible : aparthotel-arenal.com

---

## État actuel par composant

### Pages existantes (toutes fonctionnelles)
- / (homepage 9 sections)
- /notre-histoire
- /evenements (12 mois d'événements café)
- /studios (listing 5 studios)
- /studios/[slug] (détail + navigation prev/next)
- /environnement (hub)
- /environnement/golf
- /environnement/plages
- /reservation (widget Lodgify placeholder)
- /contact (formulaire non connecté)
- /mentions-legales (FR uniquement)
- /politique-confidentialite (FR uniquement)

### Composants
- Header (transparent -> solid au scroll, navigation complète, lang switcher)
- Footer (4 colonnes, dark navy)
- GA4.tsx (tracking framework complet, ID placeholder)
- SchemaOrg.tsx (VacationRental + CafeOrCoffeeShop)
- sitemap.ts + robots.ts (dynamiques)

---

## Phase 1 - Pré-requis critiques -- TERMINÉE

### 1.1 Images manquantes
Fichier : public/images/
Statut : CORRIGÉ - fallback sur images existantes

- [x] reservation/page.tsx utilise hero-golf.jpg
- [x] contact/page.tsx utilise arenal-cafe-entrance.jpg

Action : Nuria doit fournir les photos ou on utilise des photos existantes en attendant. En fallback, remplacer les src par une image existante (hero-golf.jpg) pour éviter les 404.

### 1.2 Numéro de téléphone du footer
Fichier : src/components/layout/Footer.tsx
Statut : CORRIGÉ

- [x] Remplacé par +34 972 637 000

### 1.3 Google Maps embed
Fichier : src/app/[locale]/contact/page.tsx
Statut : CORRIGÉ

- [x] Embed Google Maps avec coordonnées Pals (41.9711°N, 3.1486°E)
- [x] Attribut title accessibility ajouté

### 1.4 Domaine personnalisé
Statut : non configuré

- [ ] Acheter/transférer aparthotel-arenal.com si ce n'est pas fait
- [ ] Configurer le domaine dans Vercel (Settings > Domains)
- [ ] Vérifier les DNS (CNAME ou A record vers Vercel)
- [ ] Vérifier que le SSL est actif
- [ ] Tester les redirections www -> non-www (ou inverse)

---

## Phase 2 - Intégrations fonctionnelles -- PARTIELLEMENT TERMINÉE

### 2.1 Lodgify (système de réservation)
Fichier : src/app/[locale]/reservation/page.tsx
Statut : EN ATTENTE - email envoyé au support Lodgify, attente Property ID de Nuria

Étapes :
- [ ] Obtenir le Property ID Lodgify auprès de Nuria
- [ ] Décommenter le widget Lodgify (lignes 74-81)
- [ ] Remplacer YOUR_PROPERTY_ID par l'ID réel
- [ ] Convertir le script en composant Next.js (utiliser next/script avec strategy="lazyOnload")
- [ ] Tester l'affichage du calendrier de disponibilités
- [ ] Tester le flow de réservation complet (dates, paiement)
- [ ] Vérifier la compatibilité mobile du widget
- [ ] Ajouter le tracking GA4 sur les étapes du funnel (bookingWidgetView, bookingDateSelect, etc.)

Code à transformer :
```tsx
// Remplacer le bloc commenté par :
import Script from 'next/script';

<Script
  src="https://www.lodgify.com/lf.embed.js"
  strategy="lazyOnload"
/>
<div
  className="lf-widget"
  data-property-id="REAL_PROPERTY_ID"
  data-theme="light"
/>
```

### 2.2 Formulaire de contact (backend)
Fichier : src/app/api/contact/route.ts + src/app/[locale]/contact/page.tsx
Statut : TERMINÉ (code prêt, attente config Resend)

- [x] Resend installé
- [x] API route créée avec validation, sanitization, honeypot, rate limiting
- [x] Frontend mis à jour (loading state, erreurs, honeypot)
- [x] Fallback console.log si RESEND_API_KEY non configuré
- [ ] Créer un compte Resend et obtenir l'API key (après création du Gmail dédié)
- [ ] Vérifier le domaine aparthotel-arenal.com sur Resend
- [ ] Configurer RESEND_API_KEY dans Vercel

Squelette de l'API route :
```typescript
// src/app/api/contact/route.ts
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Aparthotel Arenal <noreply@aparthotel-arenal.com>',
    to: 'info@aparthotel-arenal.com',
    replyTo: email,
    subject: `Nouveau message de ${name}`,
    html: `<p><strong>Nom:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Tél:</strong> ${phone || 'Non renseigné'}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>`,
  });

  return NextResponse.json({ success: true });
}
```

### 2.3 Google Analytics 4
Fichier : src/components/SEO/GA4.tsx
Statut : TERMINÉ (code prêt, attente Measurement ID)

- [x] Migré vers variable d'environnement (NEXT_PUBLIC_GA_MEASUREMENT_ID)
- [x] Rendu conditionnel (null si pas d'ID configuré)
- [x] Événements branchés : ctaClick (Header), languageSwitch (Header), contactFormSubmit (Contact), phoneClick (Contact)
- [x] .env.example créé avec toutes les variables
- [ ] Créer le compte Gmail dédié (aparthotelarenal@gmail.com)
- [ ] Créer la propriété GA4 sur ce compte
- [ ] Ajouter NEXT_PUBLIC_GA_MEASUREMENT_ID dans Vercel
- [ ] Configurer les objectifs de conversion
- [ ] Tester avec Google Tag Assistant

---

## Phase 3 - SEO avancé -- TERMINÉE

### 3.1 Sitemap
Statut : TERMINÉ

- [x] /evenements et /blog ajoutés au sitemap
- [x] Articles de blog dynamiques ajoutés au sitemap
- [ ] Soumettre dans Google Search Console après mise en prod

### 3.2 Schema.org enrichi
Statut : TERMINÉ

- [x] AggregateOffer ajouté (65-160€/nuit)
- [x] amenityFeature ajouté (WiFi, Parking, Climatisation, Cuisine, Terrasse)
- [x] numberOfRooms: 5
- [ ] AggregateRating à ajouter quand des avis seront disponibles
- [ ] BreadcrumbList sur les pages secondaires (optionnel)
- [ ] Tester avec Google Rich Results Test

### 3.3 Meta tags par page
Statut : TERMINÉ - 8 layouts créés avec metadata

- [x] Metadata unique pour chaque page :
  - /notre-histoire : "Notre histoire | Aparthotel Arenal - L'Arenal de Pals depuis 19XX"
  - /studios : "Nos 5 studios | Aparthotel Arenal - De 30 à 45m²"
  - /reservation : "Réserver | Aparthotel Arenal - Meilleur prix garanti"
  - /environnement : "Environnement | Golf, plages et nature à Pals"
  - /golf : "Golf à Pals | 2 parcours à proximité de l'Arenal"
  - /plages : "Plages de Pals | Costa Brava à 2 min"
  - /contact : "Contact | Aparthotel Arenal Pals"
  - /evenements : "Événements mensuels | Café de l'Arenal"
- [ ] Ajouter des OG images spécifiques par page (hero de chaque page)

### 3.4 Google Search Console
- [ ] Vérifier la propriété aparthotel-arenal.com
- [ ] Soumettre le sitemap
- [ ] Vérifier l'indexation des 5 versions linguistiques
- [ ] Configurer les hreflang dans Search Console
- [ ] Surveiller les erreurs de crawl

### 3.5 Google Business Profile
- [ ] Créer ou mettre à jour la fiche Google Business Profile
- [ ] Catégorie : Aparthotel / Location de vacances
- [ ] Ajouter les photos professionnelles
- [ ] Lier le site web
- [ ] Configurer les horaires, numéro, adresse
- [ ] Activer la réservation directe (lien vers /reservation)

---

## Phase 4 - Blog / Contenu SEO -- TERMINÉE (infrastructure)

### 4.1 Infrastructure blog
Statut : TERMINÉ

Architecture recommandée (fichiers Markdown + MDX) :

```
src/
  app/[locale]/blog/
    page.tsx              # Listing des articles
    [slug]/page.tsx       # Article individuel
  content/blog/
    fr/
      guide-pals.mdx
      meilleures-plages-costa-brava.mdx
    es/
      guia-pals.mdx
    en/
      pals-guide.mdx
    de/
      pals-guide.mdx
    ca/
      guia-pals.mdx
```

Étapes :
- [ ] Installer les dépendances MDX : npm install @next/mdx @mdx-js/loader @mdx-js/react
- [ ] Ou alternative : utiliser contentlayer ou velite pour le parsing MD
- [ ] Créer le layout blog (listing + article)
- [ ] Implémenter la page listing avec pagination
- [ ] Implémenter la page article avec table des matières auto
- [ ] Ajouter le Schema.org Article/BlogPosting sur chaque article
- [ ] Ajouter les meta tags dynamiques par article
- [ ] Générer un flux RSS (/feed.xml)
- [ ] Ajouter le blog au sitemap
- [ ] Ajouter le lien Blog dans le Header

### 4.2 Stratégie de contenu initiale
Articles prioritaires à rédiger (ciblage SEO long-tail) :

1. "Guide complet de Pals : village médiéval de la Costa Brava" (FR/ES/EN/DE/CA)
2. "Les 10 meilleures plages autour de Pals" (FR/ES/EN/DE/CA)
3. "Golf à Pals et Empordà : guide des parcours" (FR/ES/EN/DE/CA)
4. "Que faire à Pals en famille : activités et excursions" (FR/ES/EN/DE/CA)
5. "Gastronomie de l'Empordà : restaurants et marchés" (FR/ES/EN/DE/CA)
6. "Séjour télétravail à Pals : pourquoi choisir la Costa Brava" (FR/ES/EN/DE)
7. "Itinéraire 1 semaine Costa Brava depuis Pals" (FR/ES/EN/DE/CA)
8. "Événements et fêtes à Pals : calendrier annuel" (FR/ES/EN/CA)

Chaque article : 1500-2500 mots, images optimisées, liens internes vers les pages du site.

---

## Phase 5 - Traductions et polissage i18n -- PARTIELLEMENT TERMINÉE

### 5.1 Pages légales multilingues
Statut : hardcodées en français

- [ ] Migrer le contenu des mentions légales vers les fichiers de traduction (messages/*.json)
- [ ] Traduire en ES, EN, DE, CA
- [ ] Vérifier la conformité RGPD pour chaque version linguistique

### 5.2 Cross-links "Découvrir aussi" multilingues
Statut : textes hardcodés en français

- [ ] Migrer tous les textes "Découvrir aussi", "Studio précédent", "Studio suivant" vers les fichiers i18n
- [ ] Fichiers concernés :
  - studios/[slug]/page.tsx (prev/next + cross-links)
  - golf/page.tsx
  - plages/page.tsx
  - notre-histoire/page.tsx
  - reservation/page.tsx
  - studios/page.tsx

### 5.3 Vérification des traductions
- [ ] Comparer les clés entre fr.json et les 4 autres fichiers
- [ ] Vérifier la qualité des traductions DE et CA (les plus susceptibles d'avoir des erreurs)
- [ ] Vérifier l'encodage des caractères spéciaux (é, ç, à, ü, ö, etc.)

---

## Phase 6 - Performance et qualité -- TERMINÉE

### 6.1 Images
- [ ] Optimiser toutes les images (compression WebP/AVIF)
- [ ] Vérifier les dimensions (pas d'images 4000px chargées pour un affichage 800px)
- [ ] Ajouter les dimensions width/height explicites sur tous les composants Image
- [ ] Vérifier le lazy loading (priority uniquement sur les hero above-the-fold)

### 6.2 Core Web Vitals
- [ ] Mesurer LCP, FID, CLS avec Lighthouse
- [ ] Objectif : score 90+ sur mobile et desktop
- [ ] Optimiser le chargement des fonts (preload les fonts critiques)
- [ ] Vérifier qu'aucun layout shift n'est causé par les images ou le header

### 6.3 Accessibilité
- [ ] Vérifier le contraste des couleurs (ratio 4.5:1 minimum)
- [ ] Ajouter les aria-labels manquants (navigation, formulaires)
- [ ] Vérifier la navigation au clavier
- [ ] Tester avec un lecteur d'écran

### 6.4 Tests responsive
- [ ] Mobile 375px (iPhone SE)
- [ ] Mobile 390px (iPhone 14)
- [ ] Tablette 768px
- [ ] Desktop 1280px
- [ ] Desktop 1920px
- [ ] Vérifier le menu hamburger mobile
- [ ] Vérifier la grille des studios sur mobile
- [ ] Vérifier la table des tarifs sur mobile (scroll horizontal si besoin)

---

## Phase 7 - Sécurité et monitoring -- TERMINÉE

### 7.1 Variables d'environnement
- [ ] Créer .env.example avec toutes les variables nécessaires :
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_XXXXXXXXXX
NEXT_PUBLIC_LODGIFY_PROPERTY_ID=XXXXX
NEXT_PUBLIC_SITE_URL=https://aparthotel-arenal.com
```
- [ ] Configurer toutes les variables dans Vercel

### 7.2 Headers de sécurité
Fichier : next.config.js

- [ ] Ajouter les security headers :
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Content-Security-Policy (adapter selon Lodgify et GA4)
  - Strict-Transport-Security

### 7.3 Monitoring
- [ ] Configurer Vercel Analytics (gratuit, inclus)
- [ ] Configurer Vercel Speed Insights
- [ ] Mettre en place des alertes de downtime (UptimeRobot ou similaire)

---

## Phase 8 - Post-lancement

### 8.1 Soumissions et référencements
- [ ] Soumettre à Google Search Console
- [ ] Soumettre à Bing Webmaster Tools
- [ ] Inscrire sur Google Business Profile
- [ ] Inscrire sur Booking.com / Airbnb / TripAdvisor (liens retour)
- [ ] Inscrire dans les annuaires locaux de Pals / Costa Brava

### 8.2 Réseaux sociaux
- [ ] Créer ou lier le compte Instagram
- [ ] Créer ou lier la page Facebook
- [ ] Ajouter les liens sociaux réels dans le Footer (actuellement placeholder #)

### 8.3 Email marketing
- [ ] Considérer un formulaire newsletter sur la homepage ou le blog
- [ ] Intégrer avec Mailchimp ou Brevo si pertinent

---

## Variables et identifiants à collecter auprès de Nuria

| Élément | Statut | Valeur actuelle |
|---------|--------|-----------------|
| Lodgify Property ID | A obtenir | YOUR_PROPERTY_ID |
| GA4 Measurement ID | A créer | G-XXXXXXXXXX |
| Domaine aparthotel-arenal.com | A vérifier | Non configuré |
| Resend API Key | A créer | Non existant |
| Google Maps embed | A générer | Placeholder |
| Liens réseaux sociaux | A obtenir | # (placeholder) |
| Photos beach.jpg et village.jpg | A fournir | Manquantes |
| Vrai numéro de téléphone | A confirmer | +34 972 637 000 |
| Horaires d'ouverture | A confirmer | Dans les traductions |

---

## Ordre d'exécution recommandé

1. Phase 1 (images, téléphone, maps) - 30 min - peut être fait immédiatement
2. Phase 2.3 (GA4) - 15 min dès que l'ID est disponible
3. Phase 2.1 (Lodgify) - 30 min dès que le Property ID est disponible
4. Phase 1.4 (domaine) - 1h dès que le domaine est prêt
5. Phase 3 (SEO avancé) - 2h
6. Phase 5 (traductions) - 2h
7. Phase 2.2 (formulaire contact) - 1h
8. Phase 6 (performance) - 2h
9. Phase 4 (blog) - 4h infrastructure + temps de rédaction
10. Phase 7 (sécurité) - 1h
11. Phase 8 (post-lancement) - continu
