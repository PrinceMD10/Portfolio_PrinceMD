# Portfolio DPM - DIOMANDE Prince Moussa

Portfolio moderne et professionnel d'un développeur web full stack, créé avec React, Vite et des animations fluides.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0e27/00d9ff?text=Portfolio+DPM)

## 🌟 Fonctionnalités

- ✨ **Design moderne** avec animations fluides et micro-interactions
- 🌓 **Mode sombre/clair** avec transition douce
- 📱 **Responsive** - fonctionne parfaitement sur tous les appareils
- 🎨 **Thème personnalisé** avec dégradés et effets glassmorphism
- ⚡ **Performance optimale** avec Vite
- 🎯 **Navigation fluide** avec smooth scroll
- 📧 **Formulaire de contact** fonctionnel
- 🖼️ **Galerie de projets** avec filtres par catégorie
- 📊 **Barres de progression animées** pour les compétences
- 🔄 **Animations au scroll** avec Intersection Observer

## 🚀 Technologies utilisées

### Frontend
- **React 18** - Bibliothèque UI
- **Vite** - Build tool ultra-rapide
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **CSS3** - Styling avec variables CSS

### Outils de développement
- **ESLint** - Linting du code
- **Git** - Contrôle de version

## 📦 Installation

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/diomande-prince/portfolio-dpm.git
cd portfolio-dpm
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🛠️ Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Linter le code
npm run lint
```

## 📁 Structure du projet

```
portfolio-dpm/
├── public/
│   └── (fichiers statiques)
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── sections/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── ContactSection.jsx
│   │   │
│   │   └── ui/
│   │       ├── ProjectCard.jsx
│   │       ├── SkillCategory.jsx
│   │       └── ContactButton.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   │
│   ├── styles/
│   │   ├── AboutSection.css
│   │   ├── ContactSection.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Navigation.css
│   │   ├── ProjectCard.css
│   │   ├── ProjectsSection.css
│   │   ├── SkillCategory.css
│   │   └── SkillsSection.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `src/index.css`:

```css
:root {
  --color-accent-primary: #00d9ff;
  --color-accent-secondary: #7c3aed;
  /* ... autres variables */
}
```

### Ajouter vos projets

Modifiez le fichier `src/data/projects.js`:

```javascript
{
  id: 1,
  title: "Votre Projet",
  description: "Description du projet",
  technologies: ["React", "Node.js"],
  image: "url-de-l-image",
  githubUrl: "lien-github",
  liveUrl: "lien-demo",
  category: "full-stack",
  featured: true
}
```

### Modifier vos compétences

Éditez le fichier `src/data/skills.js`:

```javascript
{
  category: "Frontend",
  icon: "💻",
  skills: [
    { name: "React", level: 90, color: "#61DAFB" },
    // ... autres compétences
  ]
}
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Pushez votre code sur GitHub
2. Connectez votre repository sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Vite
4. Déployez !

### Netlify

1. Construisez le projet
```bash
npm run build
```

2. Déployez le dossier `dist` sur [Netlify](https://netlify.com)

### GitHub Pages

1. Installez `gh-pages`
```bash
npm install --save-dev gh-pages
```

2. Ajoutez dans `package.json`:
```json
"homepage": "https://votre-username.github.io/portfolio-dpm",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Déployez
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 968px
- **Desktop**: > 968px

## ⚡ Performance

- Lazy loading des images
- Code splitting automatique avec Vite
- Optimisation des animations CSS
- Minification en production

## 🔒 Sécurité

- Pas de données sensibles exposées
- Validation des formulaires
- Protection XSS avec React

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 👨‍💻 Auteur

**DIOMANDE Prince Moussa**
- Portfolio: [dpm-dev.com](https://github.com/PrinceMD10/Portfolio_PrinceMD)
- GitHub: [@diomande-prince](https://github.com/PrinceMD10)
- LinkedIn: [DIOMANDE Prince Moussa](https://linkedin.com/in/PrinceMD10)
- Email: princemdiomande@gmail.com

## 🙏 Remerciements

- [React](https://react.dev) pour la bibliothèque UI
- [Vite](https://vitejs.dev) pour le build tool
- [Lucide](https://lucide.dev) pour les icônes
- [Unsplash](https://unsplash.com) pour les images de placeholder

## 📝 Changelog

### Version 1.0.0 (2025)
- ✨ Version initiale
- 🎨 Design moderne et responsive
- 🌓 Mode sombre/clair
- 📧 Formulaire de contact
- 🎯 Animations fluides
- 📊 Barres de progression des compétences

---

**Fait avec ❤️ et React par DIOMANDE Prince Moussa**