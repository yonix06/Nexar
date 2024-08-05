import { Metadata } from "next"
import Image from "next/image"
import ReactMarkdown from 'react-markdown'
import MarkdownRenderer from '../../components/MarkdownRenderer'
import { Button } from "components/Button/Button"


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
            🔑PANEL ADMIN💻
          </h1>
          <br /> 
          <iframe className="mx-auto" src="https://open.spotify.com/embed/track/6ACGFCYTDYE9qNAEy2T9zN?utm_source=generator" width="70%" height="200" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <br />
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
          <Button href="/" className="mr-3 bg-red-400">
            Accueil
          </Button>
          <Button
            href="/about"
            intent="secondary"
          >
            Test Déploiement avec Vercel
          </Button>
        </div>
          <Image type="image/svg+xml" data="../../graph.svg" width="100%" height="100" />
      </div>
    </section>
    <section className="bg-blue-100 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
        <div className="justify-center">
                      <h1 className="mx-auto text-xl font-bold dark:text-white">ReadMe</h1>
              <br />
              <p className="mx-auto max-w-screen-xl px-4 py-8 text-left sm:py-16 lg:px-6">
              <MarkdownRenderer filePath="../../README.md" />
              </p>
        </div>
      </div>
    </section>
  </>
  )
}
