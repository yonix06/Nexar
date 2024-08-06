import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TODO: Feel free to remove this block
  if (request.headers?.get("host")?.includes("next-enterprise.vercel.app")) {
    return NextResponse.redirect("https://blazity.com/open-source/nextjs-enterprise-boilerplate", { status: 301 })
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/login",
    "/register",
    "/profile",
    "/api/health",
    "/api/healthz",
    "/ping",
    "/health",
    "/upload_docs",
    "/modele_selection",
    "/modele_selection/*",
    "/consultation",
    "/edition_documents",
    "/diffusion",
    "/archivage",
    "/recherche",
    "/404",
    "/500",
    "/_error",
    "/_error/*",
    "/api/*",

  ],
}
