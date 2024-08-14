import { Button } from "components/Button/Button"
import { Metadata } from "next"
import Image from "next/image"
import { Cadre } from "components/Cadre/Cadre"
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToogle"
import { NavLink } from "@mantine/core"

export const metadata: Metadata = {
  title: "Nexar - Home",
  description: "Application de gestion des Arrés Municipaux pour la ville de Saint-Jean-Cap-Ferrat"
  }

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center mx-auto">
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
        <h1 className="justify-center max-w-2xl mx-auto mb-4 text-4xl font-extrabold leading-none tracking-normal dark:text-white md:text-5xl xl:text-6xl">
          Nexar
        </h1>
        &#8203; {/* Comme br */}
        <p className="justify-center max-w-2xl p-2 mx-auto mb-6 text-center text-gray-800 border-b border-gray-700 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl bg-gray-300/30 dark:bg-gray-800 bg-blend-normal rounded-3xl">
          Application de gestion des Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat <br/>
        </p>
        <div className="flex justify-center space-x-3 flow-row">
            <Button className="flex flex-col mx-auto mr-3" href="/login">
              <Image
                src="/logo/login.svg"
                alt="Logo Login"
                width={170}
                height={170}
              />
              <span className="block mx-auto font-bold text-center dark:text-gray-400 md:text-base lg:text-lg">Login</span>
            </Button>
            <Button className="flex flex-col mx-auto mr-3" href="/consultation">
              <Image
                src="/logo/loupe.svg"
                alt="Logo Consultation"
                width={170}
                height={170}
              />
              <span className="block mx-auto font-bold text-center dark:text-gray-400 md:text-base lg:text-lg">Consultation</span>
            </Button>
        </div>
      </div>
    </>
  )
}