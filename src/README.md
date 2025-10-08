# Portfolio Hugo Carolin - Développeur Polyvalent

Site vitrine one-page moderne pour un développeur polyvalent, avec une esthétique professionnelle en tons indigo/bleu/violet.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** comme bundler
- **Tailwind CSS v4** pour le styling
- **Lucide React** pour les icônes
- **Motion (Framer Motion)** pour les animations
- **shadcn/ui** pour les composants UI

## 📁 Structure du Projet

```
├── main.tsx                     # Point d'entrée de l'application
├── index.html                   # HTML de base
├── App.tsx                      # Composant principal
├── vite.config.ts              # Configuration Vite
├── tsconfig.json               # Configuration TypeScript
├── package.json                # Dépendances et scripts
├── styles/
│   └── globals.css             # Styles globaux et variables CSS
├── components/
│   ├── Navigation.tsx          # Barre de navigation sticky
│   ├── HeroSection.tsx         # Section d'accueil avec animation typing
│   ├── ServicesSection.tsx     # Présentation des services
│   ├── AboutSection.tsx        # À propos avec visualisation des compétences
│   ├── ProcessSection.tsx      # Méthodologie de travail
│   ├── ContactSection.tsx      # Formulaire et infos de contact
│   ├── Footer.tsx              # Pied de page
│   ├── figma/
│   │   └── ImageWithFallback.tsx  # Composant d'image protégé
│   └── ui/                     # Composants shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── utils.ts
│       └── ... (autres composants UI)
└── README.md
```

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 🎨 Sections du Site

1. **Hero (Accueil)** - Section d'accueil avec animation de texte dynamique
2. **Services** - Présentation des 6 services principaux
3. **À propos** - Profil du développeur avec visualisation interactive des compétences
4. **Processus** - Méthodologie en 6 étapes
5. **Contact** - Informations de contact et réseaux sociaux
6. **Footer** - Liens de navigation et informations légales

## 🎯 Fonctionnalités

- ✨ Design moderne et professionnel
- 📱 Entièrement responsive
- 🎭 Animations fluides et effets 3D légers
- 🎨 Palette de couleurs indigo/bleu/violet
- ⚡ Performance optimisée
- ♿ Accessibilité prise en compte
- 🔄 Navigation smooth scroll
- 📊 Visualisation interactive des compétences
- 🌊 Particules flottantes et effets visuels

## 🛠️ Personnalisation

### Modifier les informations de contact

Éditez les fichiers suivants :
- `/components/ContactSection.tsx` - Email, téléphone, localisation
- `/components/Footer.tsx` - Informations du footer
- `/components/Navigation.tsx` - Logo et liens

### Changer les couleurs

Les variables de couleur sont définies dans `/styles/globals.css` dans la section `:root`.

### Ajouter/Modifier des services

Éditez le tableau `services` dans `/components/ServicesSection.tsx`.

### Modifier le processus

Éditez le tableau `processSteps` dans `/components/ProcessSection.tsx`.

## 📝 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement sur http://localhost:5173
- `npm run build` - Crée un build de production dans `/dist`
- `npm run preview` - Prévisualise le build de production

## 🌐 Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant les sites statiques :
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- etc.

## 📄 License

© 2025 Hugo Carolin - Tous droits réservés.
