<img align="right" width="360px" height="210px" src="./public/img/Logo-SITEINTERNET-1.png">

# Nexar - Application de gestion des arrêtés municipaux basé sur Next.JS </br>  [![GitHub Actions Workflow Status][check-workflow-badge]][check-workflow-badge-link] [![GitHub License][github-license-badge]][github-license-badge-link] [![GitHub contributors][github-contributors-badge]][github-contributors-badge-link] [![Discord][discord-badge]][discord-badge-link] [![Blazity][made-by-blazity-badge]][made-by-blazity-badge-link]

Bienvenue sur le modèle _Nexar basé sur le modèle de Blazity_, un modèle open-source pour les projets d'entreprise ! Il est chargé de fonctionnalités qui vous aideront à construire des applications de haute performance, facilement maintainable et incroyablement passionnantes. 🌍

> [!NOTE]
> **Blazity** est un groupe d'experts Next.js/Headless. Contactez-nous à [contact@blazity.com](https://blazity.com) si vous souhaitez en discuter de votre projet ou simplement pour discuter.

## Fonctionnalités

Avec ce modèle, vous obtenez toutes les fonctionnalités incroyables que vous voulez :
With this template, you get all the awesomeness you need:

- 🏎️ **[Next.js](https://nextjs.org/)** - Rapide par défaut, avec une configuration optimisée pour les performances (avec **App Directory**)
- 💅 **[Tailwind CSS](https://tailwindcss.com/)** - Un framework CSS basé sur les utilitaires pour le développement UI rapide
- ✨ **[ESlint](https://eslint.org/)** et **[Prettier](https://prettier.io/)** - Pour du code propre, cohérent et sans erreurs
- 🛠️ **[TypeScript très strict](https://www.typescriptlang.org/)** - Avec la bibliothèque [`ts-reset`](https://github.com/total-typescript/ts-reset) pour une type safety ultime
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Actions préconfigurées pour des workflows fluides, comprenant des statistiques de taille de paquet et des scores de performance
- 💯 **Score de Lighthouse parfait** - Parce que la performance compte
- **[Plugin de l'analyseur de taille de paquet](https://www.npmjs.com/package/@next/bundle-analyzer)** - Suivez votre taille de paquet
- **[Jest](https://jestjs.io/)** et **[React Testing Library](https://testing-library.com/react)** - Pour des tests unitaires et d'intégration solides
- **[Playwright](https://playwright.dev/)** - Écrivez des tests end-to-end comme un pro
- **[Storybook](https://storybook.js.org/)** - Créez, testez et montrez vos composants
- **Tests de cohérence et de test d'acceptation** - Pour une confiance dans vos déploiements
- **[Git hook d'un message de commit conventionnel](https://www.conventionalcommits.org/)** - Gardez votre historique de commit propre et propre
- **[Intégration de supervision](https://opentelemetry.io/)** - Intégration Open Telemetry pour une supervision facile
- **[Imports absolus](https://nextjs.org/docs/advanced-features/module-path-aliases)** - Pas de spaghetti d'imports
- **[HealthCheck](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)** - Kubernetes-compatibles pour des déploiements robustes
- **[Composants UI en tête](https://www.radix-ui.com/)** - Components UI pour une personnalisation illimitée
- **Création d'un système de design cohérent, réutilisable et atomique** - Outil pour gérer les relations entre les composants
- **[Révisions de code automatisées](https://openai.com/chatgpt/)** - Restez à jour avec des révisions de code basées sur les outils Github !
- **[Semantic Release](https://github.com/semantic-release/semantic-release)** - pour des changelogs automatiques
- **[T3 Env](https://env.t3.gg/)** - Gérez vos variables d'environnement de manière facile

## Sommaire

- [Next.js Enterprise Boilerplate       ](#nextjs-enterprise-boilerplate-------)
  - [Fonctionnalités](#fonctionnalités)
  - [Sommaire](#sommaire)
  - [🎯 Getting Started](#-getting-started)
  - [🚀 Deployment](#-deployment)
  - [📃 Scripts](#-scripts)
  - [🔗 Coupling Graph](#-coupling-graph)
  - [🔗 Prisma (bdd)](#-prisma-bdd)
  - [🧪 Linting](#-linting)
  - [🧪 Testing](#-testing)
    - [Running Tests](#running-tests)
    - [Acceptance Tests](#acceptance-tests)
    - [Smoke Testing](#smoke-testing)
  - [🎨 Styling and Design System](#-styling-and-design-system)
    - [CVA - A New Approach to Variants](#cva---a-new-approach-to-variants)
  - [💾 State Management](#-state-management)
    - [Zustand](#zustand)
    - [Jotai](#jotai)
    - [Recoil](#recoil)
  - [🤖 Code Review](#-code-review)
  - [💻 Environment Variables handling](#-environment-variables-handling)
  - [🤝 Contribution](#-contribution)
  - [Support](#support)
  - [📜 License](#-license)
  - [Contributeurs](#contributeurs)

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/yonix06/next-gestion-arretes.git
```

2. Install the dependencies:

```bash
yarn install --frozen-lockfile
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. This project uses a git hook to enforce [conventional commits](https://github.com/qoomon/git-conventional-commits). To install the git hook, run the following command in the root directory of the project:

```sh
brew install pre-commit
pre-commit install -t commit-msg
```

ou

```sh
yarn add pre-commit
pre-commit install -t commit-msg
```

## 🚀 Deployment

"One-click" déploiement avec [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js) en cliquant sur le bouton ci-dessous:

[![Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yonix06/next-gestion-arretes) [Nopenopenopenope]

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

## 🔗 Coupling Graph

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

- **ESLint**: Run `yarn lint` to lint the code
- **Prettier**: Run `yarn prettier` to format the code

## 🧪 Testing

Ce boilerplate est fourni avec divers configurations de test pour garantir la fiabilité et la robustesse de votre application.

### Running Tests

- **Unit and integration tests**: Run Jest tests using `yarn test`
- **End-to-end tests (headless mode)**: Run Playwright tests in headless mode with `yarn e2e:headless`
- **End-to-end tests (UI mode)**: Run Playwright tests with UI using `yarn e2e:ui`

<img width="1392" alt="image" src="https://user-images.githubusercontent.com/28964599/233666655-93b7d08b-2fd8-406a-b43c-44d4d96cf387.png">

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

### Smoke Testing

In this boilerplate, we use Storybook's out-of-the-box support for smoke testing to verify that components render correctly without any errors. Just run `yarn test-storybook` to perform smoke testing. Remember to write stories in JSX or TSX format only. Smoke testing and a lot of other functionalities dont work well with MDX stories.

## 🎨 Styling and Design System

This boilerplate uses Tailwind CSS for styling and CVA for creating a powerful, easy-to-use design system. If you want to learn more about the setup, check out this fantastic video by Vercel:

[![Styling and Design System](https://img.youtube.com/vi/T-Zv73yZ_QI/0.jpg)](https://www.youtube.com/watch?v=T-Zv73yZ_QI&ab_channel=Vercel)

### CVA - A New Approach to Variants

While CSS-in-TS libraries such as [Stitches](https://stitches.dev/) and [Vanilla Extract](https://vanilla-extract.style/) are great for building type-safe UI components, they might not be the perfect fit for everyone. You may prefer more control over your stylesheets, need to use a framework like Tailwind CSS, or simply enjoy writing your own CSS.

Creating variants using traditional CSS can be a tedious task, requiring you to manually match classes to props and add types. CVA is here to take that pain away, allowing you to focus on the enjoyable aspects of UI development. By providing an easy and type-safe way to create variants, CVA simplifies the process and helps you create powerful design systems without compromising on the flexibility and control of CSS.

## 💾 State Management

While this boilerplate doesn't include a specific state management library, we believe it's essential for you to choose the one that best suits your project's needs. Here are some libraries we recommend for state management:

### Zustand

[Zustand](https://github.com/pmndrs/zustand) is a small, fast, and scalable state management library. It's designed to be simple and intuitive, making it a great choice for small to medium-sized projects. It's also optimized for bundle size, ensuring minimal impact on your app's performance.

### Jotai

[Jotai](https://github.com/pmndrs/jotai) is an atom-based state management library for React that focuses on providing a minimal and straightforward API. Its atom-based approach allows you to manage your state in a granular way while still being highly optimized for bundle size.

### Recoil

[Recoil](https://recoiljs.org/) is a state management library developed by Facebook, specifically designed for React applications. By utilizing atoms and selectors, Recoil allows you to efficiently manage state and derived state. Its key benefit is the ability to update components only when the state they're subscribed to changes, reducing unnecessary re-renders and keeping your application fast and efficient. Recoil also offers great developer experience with built-in debugging tools.

Choose the library that best fits your requirements and project structure to ensure an efficient state management solution for your application.

## 🤖 Revue de Code Automatisée

We've integrated the innovative [ChatGPT Code Review](https://github.com/anc95/ChatGPT-CodeReview) for AI-powered, automated code reviews. This feature provides real-time feedback on your code, helping improve code quality and catch potential issues.

To use ChatGPT Code Review, add an `OPENAI_API_KEY` environment variable with an appropriate key from the OpenAI platform. For setup details, refer to the [Using GitHub Actions](https://github.com/anc95/ChatGPT-CodeReview#using-github-actions) section in the documentation.

![image](https://user-images.githubusercontent.com/28964599/233685071-e1371edf-6359-41c3-a989-335d6ee09cb7.png)

## 💻 Environment Variables handling

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation and transforming. It ensures that your application is using the correct environment variables and their values are of the expected type. You’ll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.mjs`. Simply set your client and server variables and import `env` from any file in your project.

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

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

## 🤝 Participation au projet

Contributions are always welcome! To contribute, please follow these steps:

1. Cloner le repertoire
2. Creer sa propre branche ed dev intitulée: "dev-_'votrenom'_
3. Faites vos changements et faites des commits formattés à l'aide de [Conventional Commits](https://www.conventionalcommits.org/).
4. Push dans la branche créer ci-dessus.
5. Pour rassembler le travail, crée une requete de Pull vers dev-main, pour suite vers le CI depuis main.

## Support

If you're looking for help or simply want to share your thoughts about the project, we encourage you to join our Discord community. Here's the link: [https://blazity.com/discord](https://blazity.com/discord). It's a space where we exchange ideas and help one another. Everyone's input is appreciated, and we look forward to welcoming you.

<br />
<a href="https://discord.gg/fyWtyNKmfX" style="width: 100%; display: flex; justify-content: center;">
  <img src="https://discordapp.com/api/guilds/1111676875782234175/widget.png?style=banner2" alt="Blazity Discord Banner"/>
</a>
<br />

## 📜 License

Creative Commons 2 License. Plus d'info:  [LICENSE](./LICENSE).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.saintjeancapferrat.fr.com/"><img src="[https://avatars.githubusercontent.com/u/28964599?v=4?s=100" width="100px;" alt="Yonix06"/><br /><sub><b>Bart Stefanski</b></sub></a><br /><a href="https://github.com/yonix06/next-gestion-arretes/commits?author=yonix06" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bstefanski.com/"><img src="https://avatars.githubusercontent.com/u/28964599?v=4?s=100" width="100px;" alt="Bart Stefanski"/><br /><sub><b>Bart Stefanski</b></sub></a><br /><a href="https://github.com/Blazity/next-enterprise/commits?author=bmstefanski" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jjablonski-it"><img src="https://avatars.githubusercontent.com/u/51968772?v=4?s=100" width="100px;" alt="Jakub Jabłoński"/><br /><sub><b>Jakub Jabłoński</b></sub></a><br /><a href="#infra-jjablonski-it" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://neg4n.dev/"><img src="https://avatars.githubusercontent.com/u/57688858?v=4?s=100" width="100px;" alt="Igor Klepacki"/><br /><sub><b>Igor Klepacki</b></sub></a><br /><a href="https://github.com/Blazity/next-enterprise/commits?author=neg4n" title="Documentation">📖</a></td>
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

[check-workflow-badge]: https://img.shields.io/github/actions/workflow/status/blazity/next-enterprise/check.yml?label=check
[github-license-badge]: https://img.shields.io/github/license/blazity/next-enterprise?link=https%3A%2F%2Fgithub.com%2FBlazity%2Fnext-enterprise%2Fblob%2Fmain%2FLICENSE
[github-contributors-badge]: https://img.shields.io/github/contributors/blazity/next-enterprise?link=https%3A%2F%2Fgithub.com%2FBlazity%2Fnext-enterprise%2Fgraphs%2Fcontributors
[discord-badge]: https://img.shields.io/discord/1111676875782234175?color=7b8dcd&link=https%3A%2F%2Fblazity.com%2Fdiscord
[made-by-blazity-badge]: https://img.shields.io/badge/made_by-Blazity-blue?color=FF782B&link=https://blazity.com/

[check-workflow-badge-link]: https://github.com/Blazity/next-enterprise/actions/workflows/check.yml
[github-license-badge-link]: https://github.com/Blazity/next-enterprise/blob/main/LICENSE
[github-contributors-badge-link]: https://github.com/Blazity/next-enterprise/graphs/contributors
[discord-badge-link]: https://blazity.com/discord
[made-by-blazity-badge-link]: https://blazity.com/?utm_source=nextenterprise&utm_medium=github
