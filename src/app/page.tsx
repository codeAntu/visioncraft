"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menubar } from "@/components/ui/menubar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { use, useEffect, useState } from "react";
import Nav from "@/components/Nav";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<string>() as any;

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);


  



  function handleSearch() {
    console.log(search);
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
