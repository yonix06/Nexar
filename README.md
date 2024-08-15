<img align="right" width="360px" height="210px" src="./public/logo/nexar.svg">

# Nexar - Application de gestion des arrêtés municipaux basé sur Next.JS </br>  [![GitHub Actions Workflow Status][check-workflow-badge]][check-workflow-badge-link] [![GitHub License][github-license-badge]][github-license-badge-link] [![GitHub contributors][github-contributors-badge]][github-contributors-badge-link]

Bienvenue _Nexar_, application fullstack personnalisé basé sur Next.JS 14. 🌍

> [!NOTE]
> **Documentation** [https://demos.themeselection.com/materio-mui-nextjs-admin-template/documentation/docs/guide/overview]

## Fonctionnalités

Dans ce Stack, nous avons:

- 🏎️ **[Next.js](https://nextjs.org/)** - Rapide par défaut, avec une configuration optimisée pour les performances (avec **App Directory**)
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - Un framework CSS basé sur les utilitaires pour le développement UI rapide
- 🛸 **[Composants UI - MaterialUI](https://demos.themeselection.com/materio-mui-nextjs-admin-template/documentation/docs/guide/components/mui/avatar)** - Components UI
- 🛸 **[Composants UI -Radix](https://www.radix-ui.com/)** - Components UI
- ✨ **[ESlint](https://eslint.org/)** et **[Prettier](https://prettier.io/)** - Pour du code propre, cohérent et sans erreurs
- ✨ **[T3 Env](https://env.t3.gg/)** - Gérez vos variables d'environnement efficacement.
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Actions préconfigurées pour des workflows fluides, comprenant des statistiques de taille de paquet et des scores de performance
- 🚀 **[Git hook d'un message de commit conventionnel](https://www.conventionalcommits.org/)** - Gardez votre historique de commit propre et propre
- 📖 **[Plugin de l'analyseur de taille de paquet](https://www.npmjs.com/package/@next/bundle-analyzer)** - Suivez votre taille de paquet
- 📖 **[Storybook](https://storybook.js.org/)** - Créez, testez et montrez vos composants
- 📖 **[Semantic Release](https://github.com/semantic-release/semantic-release)** - pour des changelogs automatiques
- 📖 **[Imports absolus](https://nextjs.org/docs/advanced-features/module-path-aliases)** - Pas de spaghetti d'imports
- 🧪 **[React Testing Library](https://testing-library.com/react)** - Pour des tests unitaires et d'intégration solides
- 🧪 **[Playwright](https://playwright.dev/)** - Écrivez des tests end-to-end comme un pro
- 🧪 **[Jest - Tests de cohérence et de test d'acceptation](https://jestjs.io/fr/docs/getting-started)** - Pour une confiance dans vos déploiements
- 🛠️ **[Intégration de supervision](https://opentelemetry.io/)** - Intégration Open Telemetry pour une supervision facile et report vers Grafana
- 🛠️ **[TypeScript très strict](https://www.typescriptlang.org/)** - Avec la bibliothèque [`ts-reset`](https://github.com/total-typescript/ts-reset) pour une type safety ultime
- 🛠️ **[HealthCheck](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - Kubernetes/Docker-compatibles pour des déploiements robustes
- 🛠️ **[N8n - Création d'un système de design/relation cohérent, réutilisable et atomique](https://docs.n8n.io/)** - Outil pour gérer les relations entre les composants et le flow de travail.

## Sommaire

- [Nexar - Application de gestion des arrêtés municipaux basé sur Next.JS     ](#nexar---application-de-gestion-des-arrêtés-municipaux-basé-sur-nextjs-----)
  - [Fonctionnalités](#fonctionnalités)
  - [Sommaire](#sommaire)
  - [🎯 Getting Started](#-getting-started)
  - [🤝 Participation au projet](#-participation-au-projet)
  - [🚀 Deployment](#-deployment)
  - [📃 Scripts](#-scripts)
  - [🔗 Coupling Graph (a remplacer par GraphQL et n8n)](#-coupling-graph-a-remplacer-par-graphql-et-n8n)
  - [🔗 Prisma (bdd)](#-prisma-bdd)
  - [🧪 Linting](#-linting)
  - [🧪 Testing](#-testing)
    - [Running Tests](#running-tests)
    - [Acceptance Tests](#acceptance-tests)
    - [Tests de fonctionnement global (mode UI)](#tests-de-fonctionnement-global-mode-ui)
  - [🎨 Styling et système de design](#-styling-et-système-de-design)
    - [CVA - Une nouvelle approche des variantes](#cva---une-nouvelle-approche-des-variantes)
  - [💾 State Management](#-state-management)
    - [Zustand](#zustand)
    - [Jotai](#jotai)
    - [Recoil](#recoil)
  - [🤖 Assistance au code avec Codeium](#-assistance-au-code-avec-codeium)
  - [💻 Gestion des variables d'environnement](#-gestion-des-variables-denvironnement)
  - [📜 License](#-license)
  - [🐧 Contributors](#contributors)

## 🎯 Getting Started

Avant toute chose: La machine doit être paramétrée correctement, l'outil "Dev Home" de Microsoft permet une configuration rapide et facile de l'environnement.

Configuration minimale obligatoire:

- Windows WSL 2: Ubuntu ou Debian.
- Git configuré dans WSL et Windows: <https://dev.to/stephanlamoureux/configuring-git-in-wsl-5e3m>.
- VS Code dans WSL 2.
- Docker Desktop ou Podman (en option).

Les utilitaires suivants sont conseillés:

- Dev Home: Disponible sur le MS-Store.
- UniGetUI: Manager de paquets multi-sources pour Windows (npm, scoop, pip).
- NodeVersionManager: pour changer de version Node sans tout casser.
- Yarn 4: Parce que c'est bien mieux avec un package-manager à jour.
- WinUtil: Multi-tool pour optimiser rapidement le système, et installer en masse des programmes.

Pour commencer:

1. Faire ce step-by-step: <https://github.com/microsoft/vscode/wiki/Commit-Signing> - Impératif si volonté de commit.

2. Fork & clone le repertoire avec Github Desktop ou GitKraken:

```bash
git clone https://github.com/yonix06/nexar--private.git
```

3. Installez les dépendances :

```bash
yarn install --frozen-lockfile
```

4. Exécuter le serveur de développement :

```bash
yarn dev
```

5. Ouvrez [http://localhost:4000](http://localhost:4000) avec votre navigateur pour voir le résultat.

6. Ce projet utilise un hook git pour appliquer les [commits conventionnels](https://github.com/qoomon/git-conventional-commits). Pour installer le hook git, exécutez la commande suivante dans le répertoire racine du projet :

```sh
yarn add pre-commit
pre-commit install -t commit-msg
```

## 🤝 Participation au projet

Contributions are always welcome! To contribute, please follow these steps:

1. Cloner le repertoire
2. Creer sa propre branche ed dev intitulée: "dev-_'votrenom'_
3. Faites vos changements et faites des commits formattés à l'aide de [Conventional Commits](https://www.conventionalcommits.org/).
4. Push dans la branche créer ci-dessus.
5. Pour rassembler le travail, crée une requete de Pull vers dev-main, pour suite vers le CI depuis main.

## 🚀 Deployment

"One-click" déploiement avec [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js) en cliquant sur le bouton ci-dessous:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yonix06/Nexar--Private) [Nécessite un compte, peut engendrer des frais]

## 📃 Scripts

Script de dev disponibles: `package.json`: (à executer avec yarn, exemple "yarn dev")

- `yarn dev`: Starts the development server with colorized output
- `yarn build`: Builds the app for production
- `yarn start`: Starts the production server
- `yarn lint`: Lints the code using ESLint
- `yarn lint:fix`: Automatically fixes linting errors
- `yarn prettier`: Checks the code for proper formatting
- `yarn prettier:fix`: Automatically fixes formatting issues
- `yarn analyze`: Analyzes the bundle sizes for Client, Server and Edge environments
- `yarn storybook`: Starts the Storybook server
- `yarn build-storybook`: Builds the Storybook for deployment
- `yarn test`: Runs unit and integration tests
- `yarn e2e:headless`: Runs end-to-end tests in headless mode
- `yarn e2e:ui`: Runs end-to-end tests with UI
- `yarn format`: Formats the code with Prettier
- `yarn postinstall`: Applies patches to external dependencies
- `yarn preinstall`: Ensures the project is installed with Yarn

## 🔗 Coupling Graph (a remplacer par GraphQL et n8n)

- Pour installer coupling-graph:
- `winget install graphviz` ou `apt install graphviz`
- `yarn add madge`
- `yarn add graphviz`
- `yarn add gvprss`

- ---

- `npx madge --extensions js,jsx,ts,tsx,css,md,mdx ./ --exclude '.next|tailwind.config.js|reset.d.ts|prettier.config.js|postcss.config.js|playwright.config.ts|next.config.js|next-env.d.ts|instrumentation.ts|e2e/|README.md|.storybook/|.eslintrc.js' --image graph.svg`
- ou `yarn coupling-graph` pour run sans les exceptions: **Generates a coupling and cohesion graph for the components**

Le script `coupling-graph` est un outil pratique qui permet de visualiser les liens et les connexions entre les modules internes de votre projet. Il est construit à l'aide de la bibliothèque [Madge](https://github.com/pahen/madge). Pour générer le graphique, exécutez la commande suivante :

```bash
yarn coupling-graph
```

Cela créera un fichier `graph.svg` qui contient une représentation graphique des connexions entre vos composants. Vous pouvez ouvrir le fichier avec n'importe quel visualiseur de fichiers SVG.

![graph](https://user-images.githubusercontent.com/28964599/233662744-3ba89713-8466-49cd-9be7-e6fb38191f58.png)

## 🔗 Prisma (bdd)

Pour installer le module, executer dans le dossier, via powershell, sans privilèges d'admin. Ne pas lancer via le terminal VSCode car certains fichiers ouverts doivent être modifiés.

```bash
yarn add prisma
yarn add @prisma/client
npx prisma init --datasource-provider sqlite
  (Set the DATABASE_URL in the .env file to point to your existing database.)
npx prisma migrate dev --name init
```

Seeding:

```bash
yarn add tsx
npx tsx .\data\databaseManager.tsx
```

## 🧪 Linting

- **ESLint** : Exécutez `yarn lint` pour analyser le code
- **Prettier** : Exécutez `yarn prettier` pour mettre en forme le code

## 🧪 Testing

Ce stack est build avec divers configurations de test pour garantir la fiabilité et la robustesse de votre application.

### Running Tests

- **Tests unitaires et d'intégration** : Exécutez les tests Jest en utilisant la commande `yarn test`
- **Tests end-to-end (mode headless)** : Exécutez les tests Playwright en mode headless avec la commande `yarn e2e:headless`
- **Tests end-to-end (mode UI)** : Exécutez les tests Playwright avec l'interface utilisateur en utilisant la commande `yarn e2e:ui`

### Acceptance Tests

Pour écrire des tests d'acceptation, nous utilisons la fonctionnalité de Storybook [`play`][1] qui vous permet d'interagir avec vos composants et de tester divers flux d'utilisateurs dans Storybook.

[1]: https://storybook.js.org/docs/react/writing-stories/play-function#writing-stories-with-the-play-function

```ts
/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const emailInput = canvas.getByLabelText("email", {
      selector: "input",
    })

    await userEvent.type(emailInput, "example-email@email.com", {
      delay: 100,
    })

    const passwordInput = canvas.getByLabelText("password", {
      selector: "input",
    })

    await userEvent.type(passwordInput, "ExamplePassword", {
      delay: 100,
    })
    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole("button")

    await userEvent.click(submitButton)
  },
}
```

### Tests de fonctionnement global (mode UI)

Pour vérifier que les composants s'affichent correctement sans erreurs, nous utilisons les fonctionnalités de base de Storybook pour les tests de fonctionnement global. Simplement exécutez la commande `yarn test-storybook` pour effectuer ces tests. N'oubliez pas que vous devez écrire les histoires en utilisant soit du JSX, soit du TSX. Les tests fonctionnels ne fonctionnent pas bien avec les fichiers MDX.

## 🎨 Styling et système de design

Ce stack utilise Tailwind CSS pour le style et CVA pour créer un système de design puissant et facile à utiliser.

[Styling et système de design]

Alors que les bibliothèques CSS-in-TS comme [Stitches](https://stitches.dev/) et [Vanilla Extract](https://vanilla-extract.style/) sont excellentes pour créer des composants d'interface utilisateur type-safe, elles ne sont peut-être pas la meilleure option pour tout le monde. Vous pourriez préférer plus de contrôle sur vos feuilles de style, utiliser un framework comme Tailwind CSS ou simplement aimer écrire votre propre CSS.

### CVA - Une nouvelle approche des variantes
Créer des variantes à l'aide de CSS traditionnel peut être une tâche fastidieuse qui nécessite de faire correspondre manuellement les classes aux props et d'ajouter des types. CVA est là pour vous soustraire de cette peine. En vous offrant une approche facile et type-safe pour créer des variantes, CVA simplifie le processus et vous permet de créer des systèmes de design puissants tout en conservant le contrôle et la flexibilité du CSS.

## 💾 State Management

 //TODO:A choisir pour intégration

### Zustand

[Zustand](https://github.com/pmndrs/zustand) est une bibliothèque de gestion d'état légère, rapide et évolutivite. Elle est conçue pour être simple et intuitive, ce qui en fait un excellent choix pour les petits à moyens projets. Elle est également optimisée pour la taille du bundle, ce qui signifie un impact minimal sur les performances de votre application.

### Jotai

[Jotai](https://github.com/pmndrs/jotai) est une bibliothèque de gestion d'état basée sur des atomes pour React qui se concentre sur une API minimaliste et directe. L'approche basée sur des atomes vous permet de gérer vos états de manière granulaire tout en restant très optimisée pour la taille du bundle.

### Recoil

[Recoil](https://recoiljs.org/) est une bibliothèque de gestion d'état développée par Facebook, spécifiquement conçue pour les applications React. En utilisant des atomes et des sélecteurs, Recoil vous permet de gérer vos états et les états dérivés de manière efficace. Son principal avantage est la possibilité de mettre à jour les composants uniquement lorsque l'état auquel ils sont abonnés change, ce qui réduit les re-renders inutiles et maintient votre application rapide et efficace. Recoil offre également une excellente expérience de développement avec des outils de débogage intégrés.

A choisir !

## 🤖 Assistance au code avec Codeium

Codeium est un outil d'autocomplétion de code basé sur l'IA qui vous aide à écrire du code de meilleure qualité, plus rapide. Il fournit des suggestions de code, des refactoings de code, et des révisions de code. Codeium peut comprendre le contexte de votre code et fournir des suggestions pertinentes. Il peut également détecter les erreurs et suggérer des corrections. Codeium est totalement personnalisable et peut être utilisé avec n'importe quel langage de programmation.

Avec Codeium, vous pouvez :

- Obtenir des suggestions de code en temps réel
- Refactoriser votre code avec un clic
- Obtenir des erreurs et des avertissements en temps réel
- Utiliser Codeium avec n'importe quel langage de programmation
- Personnaliser Codeium pour répondre à vos besoins

Codeium est une révolution pour le développement logiciel. Il vous aide à écrire du code de meilleure qualité, plus rapidement. Il vous aide également à réduire les erreurs et à améliorer la qualité du code. Codeium est un outil indispensable pour tout développeur logiciel.

## 💻 Gestion des variables denvironnement

[T3 Env](https://env.t3.gg/) est une bibliothèque qui fournit une vérification des variables d'environnement au moment de la compilation, une validation de type et une transformation. Elle garantit que votre application utilise les bonnes variables d'environnement et que leurs valeurs sont du type attendu. Vous n'aurez plus jamais de problèmes de runtime causés par des erreurs de variables d'environnement.

Le fichier de configuration est situé à `env.mjs`. Il suffit de définir vos variables client et serveur et d'importer `env` dans n'importe quel fichier de votre projet.

```ts
export const env = createEnv({
  server: {
    // Server variables
    SECRET_KEY: z.string(),
  },
  client: {
    // Client variables
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
})
```

Si les variables d'environnement requises ne sont pas définies, vous obtiendrez un message d'erreur :

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

## 📜 License

Creative Commons License. Plus d'info:  [LICENSE](./LICENSE).

## 🐧 Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.saintjeancapferrat.fr/"><img src="https://avatars.githubusercontent.com/u/15114126?v=4?s=100" width="100px;" alt="Yonix06"/><br /><sub><b>Yonix06</b></sub></a><br /><a href="https://github.com/yonix06/Nexar--Private/commits?author=yonix06" title="Code">💻</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- Badges and links -->

[check-workflow-badge]: https://img.shields.io/github/actions/workflow/status/yonix06/Nexar--Private/check.yml?label=check
[github-license-badge]: https://img.shields.io/github/license/yonix06/Nexar--Private?link=https%3A%2F%2Fgithub.com%2Fyonix06%2FNexar--Private%2Fblob%2Fmain%2FLICENSE
[github-contributors-badge]: https://img.shields.io/github/contributors/yonix06/Nexar--Private?link=https%3A%2F%2Fgithub.com%2Fyonix06%2FNexar--Private%2Fgraphs%2Fcontributors

[check-workflow-badge-link]: https://github.com/yonix06/Nexar--Private/actions/workflows/check.yml
[github-license-badge-link]: https://github.com/yonix06/Nexar--Private/blob/main/LICENSE
[github-contributors-badge-link]: https://github.com/yonix06/Nexar--Private/graphs/contributors
