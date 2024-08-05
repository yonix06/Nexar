import "../styles/tailwind.css"
import Link from 'next/link'
import React from "react"
import { Button } from "components/Button/Button"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">
            <Link href="/">
              <img src="/img/Logo-4.png" width={90} height={40} alt="Logo" className="mx-auto" />
            </Link>
          </h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/about">A propos</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
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
  )
}