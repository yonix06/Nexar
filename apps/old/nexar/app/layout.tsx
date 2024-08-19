import "./globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Nexar - Application de gestion des arrêtés municipaux",
  description:
    "Solution de création, diffusion, cartographie et suivi des arrêtés municipaux",
  metadataBase: new URL("https://localhost:3000/"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed w-full h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex flex-col items-center justify-center w-full min-h-screen py-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
