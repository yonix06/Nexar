import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.headers?.get("host")?.includes("admin")) {
    return NextResponse.rewrite("/admin", { status: 0, headers: { location: "/panel_admin/panel_admin" } })
  }
  if (request.headers?.get("host")?.includes("api")) {
    return NextResponse.rewrite("/healthz", { status: 0, headers: { location: "/api/health" } })
  }
  if (!request.headers?.get("host"))?.includes("accueil") {
        return NextResponse.rewrite("/", { status: 0, headers: { location: "/accueil" } })
  }
  }
  return NextResponse.rewrite("/",)
}

//TODO ..
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
