import { NextResponse } from "next/server";


export async function GET(request: Request) {
  
  // Create a redirect response to the login page
  const response = NextResponse.redirect(new URL("/auth/login", request.url));

  // Delete authentication cookies
  response.cookies.delete({ name: "access_token", path: "/" });
  response.cookies.delete({ name: "refresh_token", path: "/" });
  response.cookies.delete({ name: "expires_at", path: "/" });

  return response;
}
