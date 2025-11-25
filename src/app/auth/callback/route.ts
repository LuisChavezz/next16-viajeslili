import { OAuthTokens } from "@/src/features/auth/types/oauthTokens.type";
import { NextResponse } from "next/server";

// Updated to accept request so we can build an absolute URL
function createSession(tokens: OAuthTokens, request: Request) {

  // Create a redirect URL
  const redirectUrl = new URL("/dashboard", request.url);
  const response = NextResponse.redirect(redirectUrl);

  // Set cookies for session management
  response.cookies.set("access_token", tokens.access_token, {
    httpOnly: true,
    path: "/",
  });

  response.cookies.set("refresh_token", tokens.refreshToken, {
    httpOnly: true,
    path: "/",
  });

  response.cookies.set("expires_at", tokens.expiresAt.toString(), {
    httpOnly: true,
    path: "/",
  });

  return response;
}

// Handle GET request for authentication callback
export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  // Redirect to login if no code is present
  if (!code) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Simulate token exchange process
  const tokens = {
    access_token: "L8VgpqrvcxwrwDOyz2jwqQubWzDZfGFEC3DftLa31FOXzW5rAFhLLk8EfOg5ITDX",
    refreshToken: "ReaQHuMG1Sz4rB492UHvTYkulFteE2LTDAGTJRZmBjjZb7IvVVRhvdIwkRU9CxUH",
    expiresAt: Date.now() + 3600 * 1000, // 1 hour
  };

  return createSession(tokens, request);
}
