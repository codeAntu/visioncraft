"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use, useEffect, useState } from "react";
import Nav from "@/components/Nav";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<string>() as any;

 
  async function handleSearch() {
    const response = await fetch(`/api/getImgs`);
    const data = await response.json();
    console.log(data);
  }


  return (
    <main className="bg-white dark:bg-black text-black dark:text-white w-full min-h-screen">
      <div>
        <Nav />

        <div></div>

        <div className="fixed bottom-3 left-0 px-6 w-full flex gap-1.5 items-center">
          <Input
            type="text"
            placeholder="Search"
            className=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
    </main>
  );
}
