"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });
    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    console.log("signed in");
  };

  return (
    <div className="flex justify-between items-center border-b border-black/5 px-5 py-3 text-sm">
      <div className="flex gap-5 items-center">
        <img src="./next.svg" alt="" className="aspect-square w-5" />
        <div>Vision Craft </div>
        <div className="flex gap-2 items-center ">
          <Button
            onClick={() => router.push("/")}
            className="bg-white text-black border hover:bg-black/5"
          >
            Home
          </Button>
          <Button
            onClick={() => router.push("/generation")}
            className="bg-white text-black border hover:bg-black/5"
          >
            Generation
          </Button>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {user ? (
          <button
            className=""
            onClick={() => {
              router.push("/profile");
            }}
          >
            <img
              src={user.photoURL}
              alt="Profile"
              className="aspect-square w-10 rounded-full border-2 border-slate-200 "
            />
          </button>
        ) : (
          <Button onClick={handleSignIn}>Login</Button>
        )}
      </div>
    </div>
  );
}
