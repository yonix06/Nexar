import { Metadata } from "next"
import { Button } from "components/Button/Button"


export const metadata: Metadata = {
  title: "Login",
  description: "Nexarr - Login",
}

export default function Login() {
  return (<>
    <section className="bg-blue-100 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <img src="/img/Logo-4.png" width={200} height={200} alt="Logo" className="mx-auto" /> <br />
          <h1 className="place-self-center mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
          WIP: <br /> Application de gestion des Arrêtés Municipaux pour la ville de Saint-Jean-Cap-Ferrat
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            -NextAuth ?
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
  </>
  )
}
