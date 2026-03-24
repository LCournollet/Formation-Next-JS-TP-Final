# DEV - Plateforme d'offres d'emploi

Application web de gestion et de consultation d'offres d'emploi, construite avec Next.js 16, Prismic CMS et Tailwind CSS.

---

## Stack technique

- **Next.js 16** (App Router) - Framework React avec rendu serveur
- **Prismic** - CMS headless pour la gestion du contenu
- **Slice Machine** - Outil de modélisation des composants Prismic
- **Tailwind CSS v4** - Framework CSS utilitaire
- **Zustand** - Gestion d'état côté client
- **TypeScript** - Typage statique

---

## Prérequis

- Node.js 18+
- Un compte [Prismic](https://prismic.io) avec un repository configuré

---

## Installation

```bash
npm install
```

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=votre-repository-name
```

---

## Lancer le projet

**Mode développement :**

```bash
npm run dev
```

**Slice Machine (gestion des modèles Prismic) :**

```bash
npm run slicemachine
```

**Build de production :**

```bash
npm run build
npm run start
```

---

## Structure du projet

```
src/
├── app/
│   ├── page.tsx                  # Page d'accueil
│   ├── offres/                   # Liste de toutes les offres
│   ├── [uid]/                    # Page détail d'une offre
│   ├── techno/[techno]/          # Offres filtrées par technologie
│   ├── profile/                  # Profil utilisateur
│   ├── candidature-envoyee/      # Confirmation de candidature
│   └── mentions-legales/         # Mentions légales
├── components/
│   ├── Navbar.tsx                # Barre de navigation
│   ├── Footer.tsx                # Pied de page
│   ├── JobCard.tsx               # Carte d'offre d'emploi
│   ├── BookmarkButton.tsx        # Bouton de sauvegarde d'offre
│   └── ApplicationForm.tsx       # Formulaire de candidature
├── slices/
│   └── LastJobs/                 # Slice Prismic - dernières offres
├── lib/
│   ├── parseTechnos.ts           # Utilitaire de parsing des technologies
│   ├── bookmarkStore.ts          # Store Zustand - offres sauvegardées
│   └── applicationStore.ts       # Store Zustand - historique candidatures
└── types/
    └── job.ts                    # Type TypeScript Job
```

---

## Gestion du contenu avec Prismic

### Types de documents

**`homepage`** - Page d'accueil
Contient un champ `slices` qui accepte le slice `LastJobs`.

**`job`** - Offre d'emploi (répétable)
Champs disponibles :
- `uid` - Identifiant unique utilisé dans l'URL
- `titre` - Titre du poste (Text)
- `date` - Date de publication (Date)
- `technos` - Technologies requises, séparées par `/` (Text). Exemple : `React/TypeScript/Node.js`
- `description` - Description du poste (Text)

### Slice `LastJobs`

Slice utilisé sur la homepage pour afficher les dernières offres.
Champs :
- `title` - Titre de la section
- `joblist` - Liste de références vers des documents `job`

Pour afficher les 6 dernières offres sur l'accueil, liez manuellement 6 documents `job` dans ce slice depuis l'interface Prismic.

---

## Fonctionnalités

### Navigation par technologie

Les technos affichées sur les cartes sont cliquables et redirigent vers `/techno/[nom]`, qui liste toutes les offres contenant cette technologie. Le filtrage est insensible à la casse.

La liste complète des technologies disponibles comme filtres sur `/offres` est définie dans `src/app/offres/OffresClient.tsx`.

### Sauvegarde d'offres

Le bouton marque-page sur chaque carte permet de sauvegarder une offre. Les offres sauvegardées sont accessibles depuis la page profil (`/profile`), via l'icône utilisateur dans la navbar.

Les données sont stockées en mémoire via Zustand et sont perdues au rechargement de la page.

### Candidature

Depuis la page détail d'une offre, un formulaire permet de saisir un message de candidature. La soumission enregistre la candidature dans le store Zustand et redirige vers une page de confirmation. L'historique des candidatures est visible sur la page profil.

---

## Déploiement sur Vercel

1. Connectez votre repository GitHub à Vercel
2. Ajoutez la variable d'environnement `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` dans les paramètres du projet
3. Vercel détecte automatiquement Next.js et configure le build

Pour activer la revalidation automatique du cache lors des publications Prismic, configurez le webhook Prismic vers `https://votre-domaine.vercel.app/api/revalidate`.
