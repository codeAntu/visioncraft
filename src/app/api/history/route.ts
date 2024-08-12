import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

async function getGenerations(email: string) {
  const key = `user:${email}:generations`;
  const generations = await kv.lrange(key, 0, -1);
  const history = generations.map((gen: any) => JSON.stringify(gen));
  return history;
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.error();
  const user = await getGenerations(email);
  return NextResponse.json(user);
}
