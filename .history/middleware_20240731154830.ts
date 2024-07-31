import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TODO: Verifier la redirection, mettre au propre le next.env.mjs en fonction de la forme de creation du lien

  return NextResponse.redirect(new URL("/", request.url))
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)"
  ],
}
