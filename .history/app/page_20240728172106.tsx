import { Metadata } from "next"
import Images from "next/image"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "lp-items"
import { pathToFileURL } from "url"
import { url } from "inspector"

export const metadata: Metadata = {
  title: "Template de départ - Application de gestion pour les arrêtés municipaux pour la ville de Saint-Jean-Cap-Ferrat",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://localhost:3000/",
    images: [
      {
        width: 1200,
        height: 630,
        /* url: "https://raw.githubusercontent.com/yonix06/next-gestion-arretes/main/.github/assets/project-logo.png", */
        url: "/public/img/Logo-4.png",
      },
    ],
  },
}


export default function Web() {
  return (
    <>
      <section className="bg-blue-100 dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            WIP: <Images src="../public/img/Logo-4.png" width={200} height={200} /> <br /> Application de gestion: Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              - Faire les TODO dans le code avec slash slash TODO<br />
              - Refaire le ReadMe <br />
              - Uploader les logo pour le projet <br />
              - Mettre des raccourcis pour les interface de gestion dans un panel admin <br />
                 exemple: Prisma / Prettier / Tailwindcss etc ... <br />
              - Verifier les routes et les fichiers correspondants <br />
              - Travailler sur les composants react et les composants Next <br />
              - Structurer et build la base de données  <br />
              - Ajouter des tests unitaires
              - Definir toutes les fonctions backend et frontend <br />
              - Travailler sur le design à partir du fichier layout <br />
            </p>
            <Button href="https://github.com/yonix06/next-gestion-arretes" className="mr-3">
              On démarre ici
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
        </div>
      </section>
      <section className="bg-blue-100 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:size-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
