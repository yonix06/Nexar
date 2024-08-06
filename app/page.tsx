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
      <section className="bg-blue-100 dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <div className="flex flex-row justify-center">
              <a href="/login">
                <Button className="mr-3" href="/login">
                  <Images
                    src="/img/Logo-Login.png"
                    alt="Logo Login"
                    width={200}
                    height={200}
                  />
                </Button>
              </a>
              &nbsp;
              <a href="/consultation">
                <Button className="ml-3" href="/consultation">
                  <Images
                    src="/img/Logo-Consultation.png"
                    alt="Logo Consultation"
                    width={200}
                    height={200}
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
