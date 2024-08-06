import { Metadata } from "next"
import Images from "next/image"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Nexarr - A Propos",
}

export default function About() {
  return (
    <>
      <section className="bg-blue-100 dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <img src="/img/Logo-4.png" width={200} height={200} alt="Logo" className="mx-auto" /> <br />
            <h1 className="place-self-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            WIP: <br /> Titre PAGE
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              - A FAIRE -
            </p>
            <Button href="/admin" className="mr-3">
              Panel Admin
            </Button>
            <Button href="/about" className="mr-3">
              A propos
            </Button>
            <Button href="/contact" className="mr-3">
              Contact
            </Button>
            <Button href="/login" className="mr-3">
              Login
            </Button>
            <Button href="/register" className="mr-3">
              Enregistrement
            </Button>
          </div>
          <iframe src="https://open.spotify.com/embed/track/04XLTXre1tdjaCaa67lBR6?utm_source=generator" width="170" height="152" allow="autoplay; encrypted-media"></iframe>
        </div>
      </section>
      <section className="bg-blue-100 dark:bg-gray-900">
        Bouh
      </section>
    </>
  )
}
