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
      <body className="bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-400 dark:bg-gradient-to-tl dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 h-screen w-screen justify-items-center justify-center">
        <header className=" sticky top-0 bg-gradient-to-b from-grey-700 to-transparent text-white w-full">
          <nav className="container mx-auto flex justify-between bg-inherit">
            <h1 className="text-2xl font-bold flex">
            <Link href="https://github.com/Yonix06/">
                <Image src="/logo/nexar.svg" width={40} height={40} alt="Nexar" className="mx-auto" />
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link href="/">
                <Image src="/img/Logo-4.png" width={90} height={40} alt="Logo" className="mx-auto" />
              </Link>
            </h1>
            <ul className="flex space-x-4 space-y-2 text-black font-bold text-lg">
              <li></li> {/* Non c'est pas une coquille ne pas toucher cette ligne SVP, merci */}
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

        <footer className="w-full py-1 fixed -bottom-0.5 border-t-inherit">
          <div className="container mx-auto text-center">
            <p>&copy;Nexar - <a href="https://github.com/yonix06">Johann May @Github</a></p>
          </div>
        </footer>
      </body>
    </html>
  )
}