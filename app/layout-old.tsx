import "../styles/tailwind.css"
import '@mantine/core/styles.css';
import { NextUIProvider } from '@nextui-org/react'
import { Button } from "@nextui-org/react"
import { theme } from '../theme/theme';
import Image from 'next/image'
import Link from 'next/link'
import React from "react"
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { ColorSchemeToggle } from "components/ColorSchemeToggle/ColorSchemeToogle"
import { Metadata } from "next"

export const metadata = {
  style: 'auto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <title>Nexar</title>
      </head>
      <body className="w-screen h-screen">
        <MantineProvider theme={theme}>
        <div className="top-0 left-0 w-screen h-full bg-fixed bg-center bg-no-repeat bg-cover bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-400 bg-clip-content">
            <header className="sticky top-0 w-full text-white bg-gradient-to-b from-grey-700 to-transparent">
              <nav className="container flex justify-between mx-auto bg-inherit">
                <h1 className="flex text-2xl font-bold">
            <Link href="https://github.com/Yonix06/">
                <Image src="/logo/nexar.svg" width={40} height={40} alt="Nexar" className="mx-auto" />
              </Link>
              &nbsp;&nbsp;&nbsp;
              <Link href="/">
                <Image src="/img/Logo-4.png" width={90} height={40} alt="Logo" className="mx-auto" />
              </Link>
              <ColorSchemeToggle/>
            </h1>
            <ul className="flex space-x-4 space-y-2 text-lg font-bold text-black">
              <li></li> {/* Non c'est pas une coquille ne pas toucher cette ligne SVP, merci */}
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
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
      </div>
      </MantineProvider>
      </body>
    </html>
  )
}