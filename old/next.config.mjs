import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], { // TODO: Verifier la correcte utilisation du plug in expérimental en dessous.
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    instrumentationHook: true,
    optimizePackageImports: ['@mantine/core', '@mantine/hooks']
   },
  rewrites() {
    return [
      { source: "/404", destination: "/errpages/404" },
      { source: "/500", destination: "/errpages/500" },
      { source: "/about", destination: "/basic/about" },
      { source: "/admin", destination: "/panel_admin" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/archivage", destination: "/gestion_arretes/archivage" },
      { source: "/contact", destination: "/basic/contact" },
      { source: "/consultation", destination: "/gestion_arretes/consultation" },
      { source: "/diffusion", destination: "/gestion_arretes/diffusion" },
      { source: "/edition_documents", destination: "/gestion_arretes/edition_documents" },
      { source: "/health", destination: "/api/health" },
      { source: "/healthz", destination: "/api/health" },
      { source: "/login", destination: "/gestion_utilisateur/login" },
      { source: "/modele_selection", destination: "/gestion_arretes/modele_selection" },
      { source: "/panel_admin", destination: "/panel_admin" },
      { source: "/ping", destination: "/api/health" },
      { source: "/profile", destination: "/gestion_utilisateur/profil" },
      { source: "/register", destination: "/gestion_utilisateur/register" },
      { source: "/recherche", destination: "/gestion_arretes/recherche" },
      { source: "/upload_docs", destination: "/gestion_arretes/upload_docs" },
    ]
  },
})

export default config

//TODO:: pour obfusquer les liens et/ou rediriger correctement
