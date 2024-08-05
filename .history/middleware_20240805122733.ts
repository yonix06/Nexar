import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * This middleware function is executed for every incoming request to the Next.js application.
 * It allows you to define custom logic for handling requests before they are processed by
 * the Next.js router.
 *
 */

  // The first if statement checks if the "host" header of the request contains the string "next-enterprise.vercel.app".
  // If it does, it redirects the request to the URL "https://blazity.com/open-source/nextjs-enterprise-boilerplate".
  // The status code 301 indicates a permanent redirect.

  // The second if statement checks if the "host" header of the request contains the string "admin".
  // If it does, it rewrites the request to the root URL ("/") with a status code of 0.
  // The "location" header is set to "/panel_admin/panel_admin" to indicate the new URL of the request.

export function middleware(request: NextRequest) {
  // TODO: a remplir
  if (request.headers?.get("host")?.includes("admin")) {
    return NextResponse.rewrite("/admin", { status: 0, headers: { location: "/panel_admin" } })
  }
  if (request.headers?.get("host")?.includes("home")) {
    return NextResponse.rewrite("/", { status: 0, headers: { location: "/gestion_utilisateur/login" } })
  }
  return NextResponse.rewrite("/",)

}



//TODO ..
/**
 * This configuration object is used to configure the middleware behavior
 * for requests that do not match any API routes, static files, image optimization
 * files, or the favicon.
 *
 * The `matcher` property is an array of regular expressions that define the request
 * paths that should be matched. In this case, it matches all request paths except
 * for the ones starting with:
 * - "api" (API routes)
 * - "_next/static" (static files)
 * - "_next/image" (image optimization files)
 * - "favicon.ico" (favicon file)
 *
 * This configuration is useful for defining custom behavior for specific request paths,
 * such as redirecting requests or rewriting URLs.
 *
 */
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
