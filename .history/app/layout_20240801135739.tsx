import "styles/tailwind.css"
import { Metadata } from "next"
import { Button } from "components/Button/Button"
import PanelAdmin from "../pages/panel_admin/panel_admin"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Logo de l'application</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:underline">Accueil</a></li>
            <li><a href="/what" className="text-white hover:underline">A propos</a></li>
            <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      </div>
      <body>{children}</body>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; @Yonix06 sur Github</p>
        </div>
      </footer>
    </html>
  )
}
