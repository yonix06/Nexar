import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], { // TODO: Verifier la correcte utilisation du plug in expérimental en dessous.
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: { instrumentationHook: true },
  rewrites() {
    return [ //TODO: creer les pages dans les dossiers correspondant déjà créés.
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
      { source: "/login", destination: "/gestion_utilisateur/login" },
      { source: "/register", destination: "/gestion_utilisateur/register" },
      { source: "/profile", destination: "/gestion_utilisateur/profile" },
      { source: "/ping", destination: "/status/ping" },
      { source: "/health", destination: "/status/health" },
      { source: "/upload_docs", destination: "/gestion_arretes/upload_docs" },
      { source: "/modele_selection", destination: "/gestion_arretes/modele_selection" },
      { source: "/consultation", destination: "/gestion_arretes/consultation" }, //ok
      { source: "/edition_documents", destination: "/gestion_arretes/edition_documents" },
      { source: "/diffusion", destination: "/gestion_arretes/diffusion" },
      { source: "/archivage", destination: "/gestion_arretes/archivage" },
      { source: "/recherche", destination: "/gestion_arretes/recherche" },
      { source: "/panel_admin", destination: "/panel_admin/panel_admin" },
      { source: "/404", destination: "/errpages/404" },
      { source: "/500", destination: "/errpages/500" },
      { source: "/_error", destination: "/errpages/_error" },
      { source: "/admin", destination: "/panel_admin/" },
    ]
  },
})

export default config
