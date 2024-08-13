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
  // TODO: a remplir ici pour faire des liens de pages
  if (request.nextUrl.pathname === "/about") {
    return NextResponse.redirect(new URL("/basic/about", request.url));
  }
  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.rewrite(new URL("/panel_admin", request.url));
  }
  if (request.nextUrl.pathname === "/contact") {
    return NextResponse.redirect(new URL("/basic/contact", request.url));
  }
  if (request.nextUrl.pathname === "/404") {
    return NextResponse.rewrite(new URL("/errpages/404", request.url));
  }
  if (request.nextUrl.pathname === "/500") {
    return NextResponse.rewrite(new URL("/errpages/500", request.url));
  }
  if (request.nextUrl.pathname === "/_error") {
    return NextResponse.rewrite(new URL("/errpages/_error", request.url));
  }
  if (request.nextUrl.pathname === "/about") {
    return NextResponse.rewrite(new URL("/basic/about", request.url));
  }
  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.rewrite(new URL("/panel_admin", request.url));
  }
  if (request.nextUrl.pathname === "/api/healthz") {
    return NextResponse.rewrite(new URL("/api/health", request.url));
  }
  if (request.nextUrl.pathname === "/archivage") {
    return NextResponse.rewrite(new URL("/gestion_arretes/archivage", request.url));
  }
  if (request.nextUrl.pathname === "/contact") {
    return NextResponse.rewrite(new URL("/basic/contact", request.url));
  }
  if (request.nextUrl.pathname === "/consultation") {
    return NextResponse.rewrite(new URL("/gestion_arretes/consultation", request.url));
  }
  if (request.nextUrl.pathname === "/diffusion") {
    return NextResponse.rewrite(new URL("/gestion_arretes/diffusion", request.url));
  }
  if (request.nextUrl.pathname === "/edition_documents") {
    return NextResponse.rewrite(new URL("/gestion_arretes/edition_documents", request.url));
  }
  if (request.nextUrl.pathname === "/health") {
    return NextResponse.rewrite(new URL("/api/health", request.url));
  }
  if (request.nextUrl.pathname === "/healthz") {
    return NextResponse.rewrite(new URL("/api/health", request.url));
  }
  if (request.nextUrl.pathname === "/ping") {
    return NextResponse.rewrite(new URL("/api/health", request.url));
  }
  return NextResponse.next();
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
