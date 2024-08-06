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
    return [
      { source: "/healthz", destination: "/api/health" },
      { source: "/api/healthz", destination: "/api/health" },
      { source: "/health", destination: "/api/health" },
      { source: "/ping", destination: "/api/health" },
/*  "/login",
    "/register",
    "/profile",
    "/ping",
    "/health",
    "/upload_docs",
    "/modele_selection",
    "/consultation",
    "/edition_documents",
    "/diffusion",
    "/archivage",
    "/recherche",
    "/404",
    "/500",
    "/_error",
    "/_error/*",
*/
      { source: "", destination:}
    ]
  },
})

export default config
