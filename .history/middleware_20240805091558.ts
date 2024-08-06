import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // TODO: Feel free to remove this block
  if (request.headers?.get("host")?.includes("next-enterprise.vercel.app")) {
    return NextResponse.redirect("https://blazity.com/open-source/nextjs-enterprise-boilerplate", { status: 301 })
  }
  if (request.headers?.get("host")?.includes("admin")) {
    return NextResponse.rewrite("/", { status: 0, headers: { location: "/panel_admin/panel_admin" } })
  }
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
 * //@type {Object}
 * //@property {Array} matcher - An array of regular expressions that define the request paths to match.
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
