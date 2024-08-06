import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [ //TODO: creer les pages dans les dossiers correspondant déjà créés. laisser le layout dehors.
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
      { source: "/login", destination: "/categorie/login" },
      { source: "/register", destination: "/categorie/register" },
      { source: "/profile", destination: "/categorie/profile" },
      { source: "/ping", destination: "/categorie/ping" },
      { source: "/health", destination: "/categorie/health" },
      { source: "/upload_docs", destination: "/categorie/upload_docs" },
      { source: "/modele_selection", destination: "/categorie/modele_selection" },
      { source: "/consultation", destination: "/gestion_arretes/consultation" }, //ok
      { source: "/edition_documents", destination: "/categorie/edition_documents" },
      { source: "/diffusion", destination: "/categorie/diffusion" },
      { source: "/archivage", destination: "/categorie/archivage" },
      { source: "/recherche", destination: "/categorie/recherche" },
      { source: "/404", destination: "/categorie/404" },
      { source: "/500", destination: "/categorie/500" },
      { source: "/_error", destination: "/categorie/_error" },
      { source: "/_error/*", destination: "/categorie/_error/*" },
    ]
  },
})

export default config
