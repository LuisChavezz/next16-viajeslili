import { type NextRequest, NextResponse } from "next/server";
import { publicRoutes } from "./features/auth/constants/publicRoutes";

export function proxy(request: NextRequest) {

  const { pathname } = request.nextUrl;

  // Allow Next.js internals and static assets
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/assets/")
  ) {
    return NextResponse.next();
  }

  // Handle API routes 
  if (pathname.startsWith("/api/")) {

    if (pathname === "/api/me") {
      return NextResponse.next();
    }

    // Get Bearer token from header
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    // Validate token exists
    if (!token) {
      return new Response(JSON.stringify({ error: "Bearer token required" }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Validate token 
    const validToken = process.env.API_ACCESS_TOKEN;
    if (token !== validToken) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return NextResponse.next();
  }

  const accessToken = request.cookies.get("access_token")?.value;
  const isLoggedIn = Boolean(accessToken);

  // If authenticated, prevent access to /auth/login
  if (pathname.startsWith("/auth/login") && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow public routes
  const isPublic = publicRoutes.some(route =>
    pathname.startsWith(route)
  );
  if (isPublic) return NextResponse.next();

  // Protect private routes
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

