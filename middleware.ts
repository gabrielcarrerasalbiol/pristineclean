import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple middleware that:
// 1. Redirects unauthenticated requests to protected routes to login
// 2. Blocks public routes when maintenance mode is active (except login + admin)
// Uses next-auth session cookie to check auth status

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check maintenance mode via API
  const isAdminPath = pathname.startsWith("/admin") || pathname.startsWith("/api/admin") || pathname.startsWith("/login");
  const isApiPath = pathname.startsWith("/api/");
  const isStaticAsset = pathname.startsWith("/_next/") || pathname.startsWith("/favicon") || pathname === "/maintenance";

  if (!isAdminPath && !isApiPath && !isStaticAsset) {
    try {
      const settingsRes = await fetch(
        new URL("/api/admin/settings", request.url).toString(),
        { headers: { cookie: request.headers.get("cookie") || "" } }
      );
      if (settingsRes.ok) {
        const settings = await settingsRes.json();
        if (settings.maintenanceMode) {
          return NextResponse.redirect(new URL("/maintenance", request.url));
        }
      }
    } catch {
      // If fetch fails, allow access
    }
  }

  // Auth check for protected routes
  if (pathname.startsWith("/admin") && !pathname.startsWith("/api/")) {
    const sessionCookie = request.cookies.get("authjs.session-token")?.value;
    const secureSessionCookie = request.cookies.get("__Secure-authjs.session-token")?.value;

    if (!sessionCookie && !secureSessionCookie) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Redirect /register to /login when maintenance is active
  if (pathname === "/register" || pathname === "/api/auth/register") {
    try {
      const settingsRes = await fetch(
        new URL("/api/admin/settings", request.url).toString(),
        { headers: { cookie: request.headers.get("cookie") || "" } }
      );
      if (settingsRes.ok) {
        const settings = await settingsRes.json();
        if (settings.maintenanceMode) {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
    } catch {}
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
