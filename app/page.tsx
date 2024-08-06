import { Metadata } from "next"
import Image from "next/image"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "components/liste-outils"

export const metadata: Metadata = {
  title: "Template de départ - Application de gestion pour les arrêtés municipaux pour la ville de Saint-Jean-Cap-Ferrat",
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
      <div className="mx-auto bg-blue-300 dark:bg-gray-900 h-screen w-screen flex justify-items-center justify-center text-center">
          <div className="mx-auto flex flex-col">
            <h1 className="mx-auto justify-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-normal dark:text-white md:text-5xl xl:text-6xl">
              Nexar
            </h1>
            <p className="mx-auto justify-center mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Application de gestion des Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat
            </p>
            <div className="flex flow-row justify-center">
                <Button className="mr-3" href="/login">
                  <Image
                    src="/../public/logo/loupe.png"
                    alt="Logo Login"
                    width={200}
                    height={200}
                  />
                </Button>
                <Button className="mr-3" href="/register">
                  <Image
                    src="/../public/logo/loupe.png"
                    alt="Logo Register"
                    width={200}
                    height={200}
                  />
                </Button>
                <Button className="mr-3" href="/consultation">
                  <Image
                    src="/../public/logo/loupe.png"
                    alt="Logo Consultation"
                    width={200}
                    height={200}
                  />
                </Button>
            </div>
          </div>
      </div>
    </>
  )
}
