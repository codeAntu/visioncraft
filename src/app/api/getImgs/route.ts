import { NextRequest, NextResponse } from "next/server";

export default function GET(request: NextRequest) {
  // log(`Received ${request.method} request to /api/getImgs`);

  console.log("Received GET request to /api/getImgs");
  

  if (request.method !== 'GET') {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  return NextResponse.json({ message: "Hello from the API!" });
}