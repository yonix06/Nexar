import { Metadata } from "next"
import Image from "next/image"
import { Button } from "components/Button/Button"
import { Cadre } from "components/Cadre/Cadre" 

export const metadata: Metadata = {
  title: "Nexar - Home",
  }



export default function Home() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center">
        <br />
        <Image
          src="/logo/nexar.svg"
          alt="Logo Nexar"
          width={250}
          height={250}
          priority
          quality={100}
          placeholder="blur"
          blurDataURL="/logo/nexar.svg"
          style={{ objectFit: "fill" }}
          className="mx-auto"
        />
        <br />
        <h1 className="mx-auto justify-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-normal dark:text-white md:text-5xl xl:text-6xl">
          Nexar
        </h1>
        &#8203;
        <p className="mx-auto text-center justify-center mb-6 max-w-2xl border-b border-gray-700 text-gray-800 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl p-2 bg-gray-300/30 dark:bg-gray-800 bg-blend-normal rounded-3xl">
          Application de gestion des Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat <br/>
          //TODO: remplacer p et /p par <Cadre>Cadre</Cadre>
        </p>
        <div className="flex flow-row justify-center space-x-3">
            <Button className="mr-3 mx-auto flex flex-col" href="/login">
              <Image
                src="/logo/login.svg"
                alt="Logo Login"
                width={170}
                height={170}
              />
              <span className="mx-auto block text-center dark:text-gray-400 md:text-base lg:text-lg font-bold">Login</span>
            </Button>
            <Button className="mr-3 mx-auto flex flex-col" href="/register">
              <Image
                src="/logo/user.svg"
                alt="Logo Register"
                width={170}
                height={170}
              />
              <span className="mx-auto block text-center dark:text-gray-400 md:text-base lg:text-lg font-bold">Nouvel Utilisateur</span>
            </Button>
            <Button className="mr-3 mx-auto flex flex-col" href="/consultation">
              <Image
                src="/logo/loupe.svg"
                alt="Logo Consultation"
                width={170}
                height={170}
              />
              <span className="mx-auto block text-center dark:text-gray-400 md:text-base lg:text-lg font-bold">Consultation</span>
            </Button>
        </div>
      </div>
    </>
  )
}
