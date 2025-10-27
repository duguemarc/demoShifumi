# ✊✋✌️ Pierre Papier Ciseaux

> Un jeu classique de Pierre Papier Ciseaux développé avec React, TypeScript et Framer Motion

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

## 📋 Description

Un jeu interactif de Pierre Papier Ciseaux (Shifumi) où vous pouvez affronter un adversaire IA ou jouer en local contre un autre joueur.

### ✨ Fonctionnalités

- 🤖 **Mode Solo** : Affrontez une IA en 1v1 directement
- 👥 **Mode Multijoueur Local** : Jouez à deux sur le même appareil (en développement)
- 🎨 **Interface Moderne** : Design responsive avec animations Framer Motion
- ⚡ **Performance Optimale** : Build rapide avec Vite
- 🔒 **Type-Safe** : Développé entièrement en TypeScript
- 🧪 **Tests** : Suite de tests avec Vitest et Testing Library

## 🚀 Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm

### Installation rapide

```bash
# Cloner le dépôt
git clone https://github.com/[votre-username]/demoshifumi.git

# Accéder au répertoire
cd demoshifumi

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📦 Technologies Utilisées

- **React 19** - Bibliothèque UI
- **TypeScript 5.9** - Typage statique
- **Vite 7** - Build tool et dev server ultra-rapide
- **Framer Motion 12** - Animations fluides
- **Sass** - Préprocesseur CSS
- **Vitest** - Framework de tests unitaires
- **Testing Library** - Tests de composants React
- **ESLint** - Linter pour la qualité du code

## 📁 Structure du Projet

```
demoshifumi/
├── src/
│   ├── assets/                  # Images, icônes et ressources
│   ├── components/              # Composants React
│   │   ├── common/             # Composants réutilisables
│   │   ├── GameBoard/          # Plateau de jeu principal
│   │   ├── GameHistory/        # Historique des parties
│   │   ├── GameSetup/          # Configuration du jeu
│   │   └── ParallaxBackground/ # Arrière-plan animé
│   ├── hooks/                   # Hooks personnalisés React
│   ├── types/                   # Définitions de types TypeScript
│   ├── utils/                   # Fonctions utilitaires
│   ├── App.tsx                  # Composant racine
│   ├── App.scss                 # Styles globaux
│   ├── index.css                # Styles de base
│   └── main.tsx                 # Point d'entrée de l'application
├── public/                      # Assets statiques
├── package.json
└── vite.config.ts
```

## 🧪 Tests

Le projet utilise Vitest et Testing Library pour les tests unitaires et d'intégration.

```bash
# Lancer les tests
npm run test

# Lancer les tests en mode watch
npm run test -- --watch

# Lancer les tests avec coverage
npm run test -- --coverage
