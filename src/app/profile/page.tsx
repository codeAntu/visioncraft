"use client";

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Butterfly_Kids } from "next/font/google";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  function logout() {
    auth.signOut();
    setUser(null);
    router.push("/");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
      if (!user) {
        router.push("/");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="">
      <Nav />
      {user ? (
        <div className="profile flex flex-col items-center py-10 gap-4">
          <img
            src={user.photoURL}
            alt="Profile"
            className="rounded-full w-16"
          />
          <div className="text-center">
            <h2 className="text-lg font-semibold">{user.displayName}</h2>
            <p className="text-sm text-black/60">Email: {user.email}</p>
          </div>
          <Button onClick={logout} className="">
            Logout
          </Button>
        </div>
      ) : (
        <div className="profile">
          <h1>Sign in to view your profile</h1>
        </div>
      )}
    </div>
  );
}
