import "styles/tailwind.css"
import { Metadata } from "next"
import Link from 'next/link'
import React from "react"
import { Button } from "components/Button/Button"
import MyDocument from '../pages/_document'

export default function MonAppli({ Component, children }) {
  return (
    <RootLayout>
      <Component {...children} />
    </RootLayout>
  )
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold"><img src="/img/Logo-4.png" width={90} height={40} alt="Logo" className="mx-auto" /></h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <button className="text-white hover:underline">Accueil</button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <button className="text-white hover:underline">A propos</button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <button className="text-white hover:underline">Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; @Yonix06 sur Github</p>
      </div>
    </footer>
  </div>
  </>
)
}