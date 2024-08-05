import { Metadata } from "next"
import Image from "next/image"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "components/liste-outils"

export const metadata: Metadata = {
  title: "Panel d'administration",
  description: "Page d'administration de l'application",
}

export default function AdminPanel() {
  return (<>
    <section className="bg-blue-100 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="place-self-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            PANEL ADMIN
          </h1>
          <br /> <br />
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            - Faire les TODO dans le code avec //TODO <br />
            - Refaire le ReadMe <br />
            - <span style={{textDecoration: "line-through"}}>Uploader les logo pour le projet</span> <br />
            - Mettre des raccourcis pour les interface de gestion dans un panel admin <br />
            - <span style={{textDecoration: "line-through"}}>FAUT DEJA POUVOIR FAIRE LE DIT PANEL ADMIN</span> <br />
            - Prisma / Prettier / Tailwindcss / Storybook ... <br />
            - <span style={{textDecoration: "line-through"}}>Verifier les routes et les fichiers correspondants</span> <br />
            - Travailler sur les composants react et les composants Next <br />
            - Structurer et build la base de données  <br />
            - Ajouter des tests unitaires <br />
            - Definir toutes les fonctions backend et frontend <br />
            - Travailler sur le design à partir du fichier layout <br />
          </p>
          <Button  href="https://github.com/yonix06/next-gestion-arretes" className="mr-3 bg-gray-800 text-white hover:bg-gray-700">
            Github Yoyo
          </Button>
          <Button href="/panel_admin/panel_admin" className="mr-3">
            Panel Admin
          </Button>
          <Button
            href="https://vercel.com/new/git/external?repository-url=https://github.com/yonix06/next-gestion-arretes"
            intent="secondary"
          >
            Test Déploiement avec Vercel
          </Button>
        </div>
          <object type="image/svg+xml" data="../../graph.svg" width="500" height="100" className="mx-auto" />
      </div>
    </section>
    <section className="bg-blue-100 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <h1>
        </div>
      </div>
    </section>
  </>
  )
}
