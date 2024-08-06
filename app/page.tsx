import { Metadata } from "next"
import Image from "next/image"
import { Button } from "components/Button/Button"
import { LP_GRID_ITEMS } from "components/liste-outils"
import path from "path"

export const metadata: Metadata = {
  title: "Template de départ - Application de gestion pour les arrêtés municipaux pour la ville de Saint-Jean-Cap-Ferrat"
  }



export default function Home() {
  return (
    <>
      <div className="mx-auto bg-gradient-to-tl from-blue-500 via-blue-300 to-blue-100 dark:bg-gradient-to-tl dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 h-screen w-screen flex justify-items-center justify-center text-center">
          <div className="mx-auto flex flex-col items-center">
            <Image
              src="/logo/nexar.svg"
              alt="Logo Nexar"
              width={200}
              height={200}
            />
            <h1 className="mx-auto justify-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-normal dark:text-white md:text-5xl xl:text-6xl">
              Nexar
            </h1>
            <p className="mx-auto justify-center mb-6 max-w-2xl font-light text-gray-800 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Application de gestion des Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat
            </p>
            <div className="flex flow-row justify-center">
                <Button className="mr-3 mx-auto flex flex-col" href="/login">
                  <Image
                    src="/logo/login.svg"
                    alt="Logo Login"
                    width={200}
                    height={200}
                  />
                  <span className="mx-auto block text-center text-gray-800 dark:text-gray-400 md:text-base lg:text-lg font-bold">Login</span>
                </Button>
                <Button className="mr-3 mx-auto flex flex-col" href="/register">
                  <Image
                    src="/logo/user.svg"
                    alt="Logo Register"
                    width={200}
                    height={200}
                  />
                  <span className="mx-auto block text-center text-gray-800 dark:text-gray-400 md:text-base lg:text-lg font-bold">Nouvel Utilisateur</span>
                </Button>
                <Button className="mr-3 mx-auto flex flex-col" href="/consultation">
                  <Image
                    src="/logo/loupe.svg"
                    alt="Logo Consultation"
                    width={200}
                    height={200}
                  />
                  <span className="mx-auto block text-center text-gray-800 dark:text-gray-400 md:text-base lg:text-lg font-bold">Consultation</span>
                </Button>
            </div>
          </div>
      </div>
    </>
  )
}
