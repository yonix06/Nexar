import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TODO: Verifier la redirection, comment elle marche, et ou elle s'applique
  if (request.headers?.get("host")?.includes("next-gestion-arretes.vercel.app")) {
    return NextResponse.redirect("https://arretes.saintjeancapferrat.fr/", { status: 301 })
  }
}

//TODO: Ajouter les paths ici aussi
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
    "/gestion_arretes/(?!upload_docs|modele_selection|consultation|edition_documents|diffusion|archivage|recherche).*",
    "/gestion_utilisateur/(?!login|register|profile).*"
  ],
}
