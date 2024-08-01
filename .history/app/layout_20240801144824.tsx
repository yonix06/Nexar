import "styles/tailwind.css"
import Link from 'next/link'
import React from "react"
import { Metadata } from "next"
import { Button } from "components/Button/Button"
import PanelAdmin from "../pages/panel_admin/panel_admin"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Logo de l'application</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white hover:underline">Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="/what">
              <a className="text-white hover:underline">A propos</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:underline">Contact</a>
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
)
}