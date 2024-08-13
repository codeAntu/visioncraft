import { NextRequest, NextResponse } from "next/server";
import kv from "@vercel/kv";

async function saveGeneration(email: string, generationData: string) {
  const timestamp = new Date().toISOString();
  const key = `user:${email}:generations`;
  await kv.lpush(key, JSON.stringify({ data: generationData, timestamp }));
  await kv.ltrim(key, 0, 9);
}

async function getGenerations(email: string) {
  const key = `user:${email}:generations`;
  const generations = await kv.lrange(key, 0, -1);
  const history = generations.map((gen: any) => JSON.stringify(gen));
  return history;
}

export async function GET(req: NextRequest) {
  const generate = req.nextUrl.searchParams.get("query");
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" });
  }

  if (email && generate) {
    const history = await getGenerations(email);
    let count = 0;
    history.forEach((gen) => {
      const genTime = new Date(JSON.parse(gen).timestamp).getTime();
      const currentTime = new Date().getTime();
      if (currentTime - genTime <= 3600000) {
        count++;
      }
    });

    if (count >= 3) {
      return NextResponse.json({ error: "You have exceeded the limit" });
    }

    await saveGeneration(email, generate);
    console.log("Saved generation for user", email);
  }
  const images = [
    "imgs/1.jpeg",
    "imgs/2.jpeg",
    "imgs/3.jpeg",
    "imgs/4.jpeg",
    "imgs/5.jpeg",
    "imgs/6.jpeg",
  ];

  const randomImages = images
    .sort(() => Math.random() - Math.random())
    .slice(0, 4);

  return NextResponse.json(randomImages);
}
