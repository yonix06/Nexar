<img align="center" width="360px" height="210px" src="libs/shared/ui/public/SJCF.png">

# Environnement de Dev pour webapps React / Next.js / et PHP (si si). -- Outils pré installés : NX, Tailwind CSS, Jest, Playwright, ESLint, Prettier </br>  [![GitHub Actions Workflow Status][check-workflow-badge]][check-workflow-badge-link] [![GitHub License][github-license-badge]][github-license-badge-link] [![GitHub contributors][github-contributors-badge]][github-contributors-badge-link]

Bienvenue sur _Projet Nexar_, stack de dev basé sur React et compatibles avec Javascript/Typescript et PHP. 🌍

## Fonctionnalités

Composition du stack:

- 🏎️ **[Next.js](https://nextjs.org/)** - Rapide par défaut, avec une configuration optimisée pour les performances (avec **App Directory**)
- 😎 **[NX](https://nx.dev/nx-api/)** - Template, autoconfig, et générateur en tout genre pour a peu près tout ce qui est Javascript. (Ce truc est absolument fou)
- 🥁 **[Penpot](https://penpot.app/)** - Design -> Code, avec ou sans collab. (Docker obligatoire pour cet outil) - Pas top pour mon usage.
- 🥁 **[TipTap](https://tiptap.dev/docs/editor/getting-started/install)** - + [>Surprise pour PHP<](https://tiptap.dev/docs/editor/getting-started/install/php) //TODO: à intégrer
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - Un framework CSS basé sur les utilitaires pour le développement UI rapide
- 🐧 **[Composant UI - Mantine](https://mantine.dev/getting-started/)** - Bibliothèque de [Composants UI](https://ui.mantine.dev/), à choisir entre les trois ! //TODO: à implémenter à la racine du projet
- 🛸 **[Composants UI - MaterialUI](https://mui.com/material-ui/)** - Bibliothèque de Composants UI, à choisir entre les trois ! //TODO: à implémenter à la racine du projet
- 🛸 **[Composants UI - Radix](https://www.radix-ui.com/)** - Bibliothèque de Composants UI, à choisir entre les trois ! //TODO: à implémenter à la racine du projet
- ✨ **[ESlint](https://eslint.org/)** et **[Prettier](https://prettier.io/)** - Pour du code propre, cohérent et sans erreurs
- ✨ **[T3 Env](https://env.t3.gg/)** - Set d'outils T3 pour les variables d'environnements et la gestion des API du projet
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Actions préconfigurées par Github comprenant des statistiques de taille de paquet et des scores de performance
- 🚀 **[Git hook d'un message de commit conventionnel](https://www.conventionalcommits.org/)** - Gardez votre historique de commit propre et propre
- 📖 **[Storybook](https://storybook.js.org/)** - Création et test composants
- 📖 **[Imports absolus](https://nextjs.org/docs/advanced-features/module-path-aliases)** - Pas de spaghetti d'imports
- 🧪 **[Playwright](https://playwright.dev/)** - Gestion UI des tests end-to-end
- 🧪 **[Jest - Tests de cohérence et de test d'acceptance](https://jestjs.io/fr/docs/getting-started)** - Pour une confiance absolu avant intégration
- 🛠️ **[Intégration de supervision](https://opentelemetry.io/)** - Open Telemetry pour une supervision facile et report vers Grafana
- 🛠️ **[TypeScript strict](https://www.typescriptlang.org/)** - Avec la bibliothèque [`ts-reset`](https://github.com/total-typescript/ts-reset)
- 🛠️ **[HealthCheck](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - Kubernetes/Docker compatibles.
- 🛠️ **[NX Graph et N8n - Création d'un système de design/relation cohérent](https://docs.n8n.io/)** - (//TODO: à installer) Outil pour gérer les relations entre les API d'applications, les composants et le flow de travail.

> [!NOTE]
> **Documentation pertinente**
>
> - [Ultra condensé de -presque- tout les concepts du projet (café hautement conseillé)](https://github.com/nrwl/nx/blob/master/docs/README.md), dans les repertoires:
>   - [docs/shared](https://github.com/nrwl/nx/tree/master/docs/shared)
>   - [/concepts](https://github.com/nrwl/nx/tree/master/docs/shared/concepts)
>   - [/decisions](https://github.com/nrwl/nx/tree/master/docs/shared/concepts/decisions)
>
> - [Basé sur Next.JS 14](https://nextjs.org/docs)
> - [OAuth2 avec NextAuth.JS](https://next-auth.js.org/) //TODO: à migrer vers [Auth.JS](https://authjs.dev/), **[Guide](https://authjs.dev/getting-started/migrating-to-v5)**
> - [Management du projet dans Visual Studio avec NX](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)
> - [Penser en React](https://react.dev/learn/thinking-in-react)
> - [T3 Docs - Ressources React](https://create.t3.gg/en/other-recs)
> - [Introduction au composants UI avec Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction)
> - ([Penpot](https://github.com/penpot/penpot) - [Design](https://penpot.app/design))
> - [Creation et design de composants et leur variants avec Storybook](https://storybook.js.org/docs)
> - [Gestion de BDD avec Prisma - Creation, migration, backup, connecteurs, ...](https://www.prisma.io/docs)
> - [Tests du code avec Playwright](https://playwright.dev/docs/intro)
>
> **To do**
>
> - //TODO: Progrès: - Dev.to ✔️ | tRPC Router 🐧❌
> - [Dev.to - Utiliser PHP comme backend pour React](https://dev.to/emmykolic/how-to-use-php-as-a-backend-using-react-for-frontend-3dca)
> - [T3.gg - Configuration du Routeur tRPC avec NextAuth.js](https://create.t3.gg/en/installation#advanced-usage)
> - [tRPC.io - Documentation officielle](https://trpc.io/)

## Sommaire

- [Webapp Monolithique pour la ville de SJCF. -- Outils pré installés : NX, Tailwind CSS, Jest, Playwright, ESLint, Prettier](#webapp-monolithique-pour-la-ville-de-sjcf----outils-pré-installés--nx-tailwind-css-jest-playwright-eslint-prettier-----)
  - [Fonctionnalités](#fonctionnalités)
  - [Sommaire](#sommaire)
  - [🎯 Préparation](#-préparation)
  - [🤝 Participation au projet](#-participation-au-projet)
  - [🚀 Déploiement](#-déploiement)
  - [📃 Scripts](#-scripts)
  - [🔗 Coupling Graph (C'est une usine à gaz, à remplacer par NX Graph et GraphQL)](#-coupling-graph-cest-une-usine-à-gaz-à-remplacer-par-nx-graph-et-graphql)
  - [🔗 Prisma - Gestion BDD](#-prisma---gestion-bdd)
  - [📖 Mise en page automatique du code](#-mise-en-page-automatique-du-code)
  - [🧪 Tests](#-tests)
    - [Tests ponctuels](#tests-ponctuels)
    - [Tests d'acceptance des composants](#tests-dacceptance-des-composants)
    - [Tests de fonctionnement des composants (mode UI)](#tests-de-fonctionnement-des-composants-mode-ui)
  - [🎨 Styling et système de design](#-styling-et-système-de-design)
    - [CVA - Une nouvelle approche des variantes](#cva---une-nouvelle-approche-des-variantes)
  - [💾 Management d'états des composants](#-management-détats-des-composants)
    - [Zustand](#zustand)
    - [Jotai](#jotai)
    - [Recoil](#recoil)
  - [🤖 Assistance au code avec Codeium](#-assistance-au-code-avec-codeium)
  - [💻 Gestion des variables denvironnement](#-gestion-des-variables-denvironnement)
  - [📜 License](#-license)
  - [🐧 Contributors](#-contributors)

## 🎯 Préparation

Avant toute chose: La machine doit être paramétrée correctement, l'outil "Dev Home" de Microsoft permet une configuration rapide et facile de l'environnement.

Configuration minimale obligatoire:

- Windows 11 Pro 21H1 au minimum, 23H2 conseillée: [Pour forcer l'install des Features Updates de Ms, executer l'outil "Assistant d'installation de Windows 11"](https://go.microsoft.com/fwlink/?linkid=2171764)
- [Windows WSL 2: Ubuntu ou Debian](https://learn.microsoft.com/fr-fr/windows/wsl/install)
- [Git configuré dans WSL et Windows](https://dev.to/stephanlamoureux/configuring-git-in-wsl-5e3m)
- [VS Code dans WSL 2](https://code.visualstudio.com/docs/remote/wsl)
- [Docker Desktop ou Podman (en option)](https://code.visualstudio.com/blogs/2020/03/02/docker-in-wsl2)

Les utilitaires suivants sont conseillés:

- [Dev Home](https://github.com/microsoft/devhome): Disponible sur le MS-Store ou sur [Github](https://github.com/microsoft/devhome).
- [UniGetUI](https://github.com/marticliment/UnigetUI): Manager de paquets multi-sources pour Windows (npm, scoop, pip).
- [NodeVersionManager](https://github.com/coreybutler/nvm-windows/releases): pour changer de version Node sans tout casser.
- [NX global install](https://nx.dev/getting-started/installation#installing-nx-globally): Parce que c'est bien mieux avec un project-manager.
- [WinUtil](https://github.com/ChrisTitusTech/winutil): Multi-tool pour optimiser rapidement le système, et installer en masse des programmes.

Pour commencer:

1. Faire ce step-by-step: <https://github.com/microsoft/vscode/wiki/Commit-Signing> - Impératif si volonté de commit.

2. Fork & clone le repertoire avec Github Desktop ou GitKraken dans WSL:

```bash
git clone https://github.com/yonix06/Nexar.git
```

3. Installez les dépendances dans le dossier avec bash ou powershell (de préférence hors VS Code, et penser à relancer régulièrement pour update les dependences du projet qui sont mis à jours par le bot) :

```bash
npm install
```

4. Lancer VS Code et installer les extentions recommandés par l'espace de travail (et faire le tri de celles qu'on ne veut eventuellement pas)

5. Exécuter le serveur de développement :

```bash
npx nx run dev nom-de-l-application
```

6. Ouvrez [http://localhost:4000](http://localhost:4000) (ou bien, suivre le lien donné dans la console) avec votre navigateur pour voir le résultat.

7. Ce projet utilise un hook git pour appliquer les [commits conventionnels](https://github.com/qoomon/git-conventional-commits). Pour installer le hook git, exécutez la commande suivante dans le répertoire racine du projet :

```sh
npm add pre-commit
pre-commit install -t commit-msg #Si besoin
```

## 🤝 Participation au projet

Contributions are always welcome! To contribute, please follow these steps:

1. Cloner le repertoire
2. Creer sa propre branche de dev sous la forme: "dev-_'votrenom'_, à partir de la branche dev-main.
3. Faites vos changements et faites des commits formattés à l'aide de [Conventional Commits](https://www.conventionalcommits.org/) et de l'extension proposée pour automatiser les messages.
4. Les commits dans votre branche, les demandes de pull vers dev-main. La linéarité des commit est recommandée.
5. Les commits soumis à la branche principale de dev doivent être cohérents au risque de se faire squash. //TODO: ajouter liens sur les conseil de base des commits
6. CI lancé depuis main.

## 🚀 Déploiement

//TODO: Ecrire une doc sur une façon de déployer in-house
//TODO: Ajouter un guide d'utilisation des outils CI de Github et de NX Cloud

"One-click" déploiement avec [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js) en cliquant sur le bouton ci-dessous:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yonix06/Nexar--Private/) [Nécessite un compte, peut engendrer des frais]

## 📃 Scripts

Script de dev disponibles à executer avec NX Console dans VS Code: `outils/configs/npm-scripts.json`

- `dev`: Starts the development server
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `analyze`: Analyzes the bundle sizes for Client, Server and Edge environments
- `storybook`: Starts the Storybook server
- `build-storybook`: Builds the Storybook for deployment
- `test`: Runs unit and integration tests
- `e2e:headless`: Runs end-to-end tests in headless mode
- `e2e:ui`: Runs end-to-end tests with UI
- `format`: Formats the code with Prettier
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with nx

## 🔗 Coupling Graph (C'est une usine à gaz, à remplacer par NX Graph et GraphQL)

- Pour installer coupling-graph:
- `winget install graphviz` ou `apt install graphviz`
- `nx add madge`
- `nx add graphviz`
- `nx add gvprss`

- ---

- `npx madge --extensions js,jsx,ts,tsx,css,md,mdx ./ --exclude '.next|tailwind.config.js|reset.d.ts|prettier.config.js|postcss.config.js|playwright.config.ts|next.config.js|next-env.d.ts|instrumentation.ts|e2e/|README.md|.storybook/|.eslintrc.js' --image graph.svg`
- ou `nx coupling-graph` pour run sans les exceptions: **Generates a coupling and cohesion graph for the components**

Le script `coupling-graph` est un outil pratique qui permet de visualiser les liens et les connexions entre les modules internes de votre projet. Il est construit à l'aide de la bibliothèque [Madge](https://github.com/pahen/madge). Pour générer le graphique, exécutez la commande suivante :

```bash
npm coupling-graph ##La commande execute maintenant nx graph par défaut, il faut la modifier avec les éléments ci-dessus pour utiliser madge
```

~~Cela créera un fichier `graph.svg` qui contient une représentation graphique des connexions entre vos composants. Vous pouvez ouvrir le fichier avec n'importe quel visualiseur de fichiers SVG.~~

Cela ouvre un site web qui affiche les liens entre les divers projets et composants.

Madge:
![madge-graph](https://user-images.githubusercontent.com/28964599/233662744-3ba89713-8466-49cd-9be7-e6fb38191f58.png)

NX:
![nx-graph](https://github.com/nrwl/nx/blob/master/docs/shared/images/project-graph.png?raw=true)

## 🔗 Prisma - Gestion BDD

Pour installer le module, executer dans le dossier, via powershell, sans privilèges d'admin. Ne pas lancer via le terminal VSCode car certains fichiers ouverts doivent être modifiés.

```bash
npx add prisma
npx add @prisma/client
npx prisma init --datasource-provider sqlite
  (Set the DATABASE_URL in the .env file to point to your existing database.)
npx prisma migrate dev --name init
```

Seeding:

```bash
npm add tsx
npx tsx .\data\databaseManager.tsx
```

## 📖 Mise en page automatique du code

- **ESLint** : Exécutez `nx lint` pour analyser le code
- **Prettier** : Exécutez `nx prettier` pour mettre en forme le code

## 🧪 Tests

Ce stack est build avec divers configurations de test pour garantir la fiabilité et la robustesse de votre application.

### Tests ponctuels

- **Tests unitaires et d'intégration** : Exécutez les tests Jest en utilisant la commande `nx test`
- **Tests end-to-end (mode headless)** : Exécutez les tests Playwright en mode headless avec la commande `nx e2e:headless`
- **Tests end-to-end (mode UI)** : Exécutez les tests Playwright avec l'interface utilisateur en utilisant la commande `nx e2e:ui`

### Tests d'acceptance des composants

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

### Tests de fonctionnement des composants (mode UI)

Pour vérifier que les composants s'affichent correctement sans erreurs, nous utilisons les fonctionnalités de base de Storybook pour les tests de fonctionnement global. Simplement exécutez la commande `nx test-storybook` pour effectuer ces tests. N'oubliez pas que vous devez écrire les histoires en utilisant soit du JSX, soit du TSX. Les tests fonctionnels ne fonctionnent pas bien avec les fichiers MDX.

## 🎨 Styling et système de design

> (//TODO: Lister les) Editeurs visuels compatibles React/Next:
>
> - [Penpot](https://penpot.app/features)
> - [Plasmic](https://github.com/plasmicapp/plasmic)
> - [Wireflow](https://alternativeto.net/software/wireflow/about/)
>
> (//TODO: Lister les) Templates et Ressources:
>
> - [Penpot templates](https://penpot.app/libraries-templates)
> - [Radix Playground](https://www.radix-ui.com/themes/playground)

### CSS

Ce stack utilise Tailwind CSS pour le style et [CVA](https://cva.style/docs) pour créer un système de design puissant et facile à utiliser.

Alors que les bibliothèques CSS-in-TS comme [Stitches](https://stitches.dev/) et [Vanilla Extract](https://vanilla-extract.style/) sont excellentes pour créer des composants d'interface utilisateur type-safe, elles ne sont peut-être pas la meilleure option pour tout le monde. Vous pourriez préférer plus de contrôle sur vos feuilles de style, utiliser un framework comme Tailwind CSS ou simplement aimer écrire votre propre CSS.

### Class Variance Authority - Une nouvelle approche des variantes

Créer des variantes à l'aide de CSS traditionnel peut être une tâche fastidieuse qui nécessite de faire correspondre manuellement les classes aux props et d'ajouter des types. [CVA](https://cva.style/docs) est là pour vous soustraire de cette peine. En vous offrant une approche facile et type-safe pour créer des variantes, [CVA](https://cva.style/docs) simplifie le processus et vous permet de créer des systèmes de design puissants tout en conservant le contrôle et la flexibilité du CSS.

### :building_construction: Penpot -

## 💾 Management d'états des composants

 //TODO:A choisir pour intégration

### Zustand

[Zustand](https://github.com/pmndrs/zustand) est une bibliothèque de gestion d'état légère, rapide et évolutivite. Elle est conçue pour être simple et intuitive, ce qui en fait un excellent choix pour les petits à moyens projets. Elle est également optimisée pour la taille du bundle, ce qui signifie un impact minimal sur les performances de votre application.

### Jotai

[Jotai](https://github.com/pmndrs/jotai) est une bibliothèque de gestion d'état basée sur des atomes pour React qui se concentre sur une API minimaliste et directe. L'approche basée sur des atomes vous permet de gérer vos états de manière granulaire tout en restant très optimisée pour la taille du bundle.

### Recoil

[Recoil](https://recoiljs.org/) est une bibliothèque de gestion d'état développée par Facebook, spécifiquement conçue pour les applications React. En utilisant des atomes et des sélecteurs, Recoil vous permet de gérer vos états et les états dérivés de manière efficace. Son principal avantage est la possibilité de mettre à jour les composants uniquement lorsque l'état auquel ils sont abonnés change, ce qui réduit les re-renders inutiles et maintient votre application rapide et efficace. Recoil offre également une excellente expérience de développement avec des outils de débogage intégrés.

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

[check-workflow-badge]: https://img.shields.io/github/actions/workflow/status/yonix06/Nexar/ci.yml?label=check
[github-license-badge]: https://img.shields.io/github/license/yonix06/Nexar?link=https%3A%2F%2Fgithub.com%2Fyonix06%2FNexar%2Fblob%2Fmain%2FLICENSE
[github-contributors-badge]: https://img.shields.io/github/contributors/yonix06/Nexar?link=https%3A%2F%2Fgithub.com%2Fyonix06%2FNexar%2Fgraphs%2Fcontributors

[check-workflow-badge-link]: https://github.com/yonix06/Nexar/actions/workflows/check.yml
[github-license-badge-link]: https://github.com/yonix06/Nexar/blob/main/LICENSE
[github-contributors-badge-link]: https://github.com/yonix06/Nexar/graphs/contributors
