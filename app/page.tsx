import { Metadata } from "next"
import Images from "next/image"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "components/liste-outils"

export const metadata: Metadata = {
  title: "Template de départ - Application de gestion pour les arrêtés municipaux pour la ville de Saint-Jean-Cap-Ferrat",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://localhost:3000/",
    images: [
      {
        /* url: "https://raw.githubusercontent.com/yonix06/next-gestion-arretes/main/.github/assets/project-logo.png", */
        url: "/img/Logo-4.png",
      },
    ],
  },
}


export default function Home() {
  return (
    <>
      <div className="bg-blue-200 dark:bg-gray-900 h-screen w-screen flex items-center justify-center text-center">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="place-self-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Nexar
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Application de gestion des Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat
            </p>
            <div className="flex flex-row justify-center">
                <Button className="mr-3" href="/login">
                  <Images
                    src="/img/Logo-Login.png"
                    alt="Logo Login"
                    width={200}
                    height={200}
                  />
                </Button>
                <Button className="mr-3" href="/register">
                  <Images
                    src="/img/Logo-Register.png"
                    alt="Logo Register"
                    width={200}
                    height={200}
                  />
                </Button>
                <Button className="ml-3" href="/consultation">
                  <Images
                    src="/img/Logo-Consultation.png"
                    alt="Logo Consultation"
                    width={200}
                    height={200}
                  />
                </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
