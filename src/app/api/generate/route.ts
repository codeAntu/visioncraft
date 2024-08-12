import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Extract the 'query' parameter from the request URL
  const search = req.nextUrl.searchParams.get('query');

  console.log("Search query:", search);

  const message = `You searched for ${search}`;

  return NextResponse.json({ message });
}