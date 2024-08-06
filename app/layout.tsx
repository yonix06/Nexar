import "../styles/tailwind.css"
import Image from 'next/image'
import Link from 'next/link'
import React from "react"
import { Button } from "components/Button/Button"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Nexarr</title>
      </head>
      <body>
        <header className="bg-gradient-to-b from-grey-800 to-blue-300 text-white py-4">
          <nav className="container mx-auto flex justify-between">
            <h1 className="text-2xl font-bold">
              <Link href="/">
                <Image src="/img/Logo-4.png" width={90} height={40} alt="Logo" className="mx-auto" />
              </Link>
            </h1>
            <ul className="flex space-x-4 space-y-2">
              <li></li> {/* Non c'est pas une coquille ne pas toucher SVP */}
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/about">A propos</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/admin">Administration</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-blue-600 text-white py-4 fixed bottom-0 w-full">
          <div className="container mx-auto text-center">
            <p>&copy; @Yonix06 sur Github</p>
          </div>
        </footer>
      </body>
    </html>
  )
}