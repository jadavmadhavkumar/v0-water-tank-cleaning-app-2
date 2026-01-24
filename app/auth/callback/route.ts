import { NextRequest, NextResponse } from "next/server";

// Convex Auth handles callbacks through HTTP routes automatically
// This route is kept for compatibility but redirects to dashboard
export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  return NextResponse.redirect(new URL("/dashboard", origin));
}
