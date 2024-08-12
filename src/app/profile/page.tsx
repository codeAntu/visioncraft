"use client";

import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Butterfly_Kids } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<string>() as any;
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) setUser(user);
  //     else router.push("/");
  //   });
  //   return unsubscribe;
  // }, []);

  

  function logout() {
    auth.signOut();
    router.push("/");
  }

  return (
    <div className="">
      <Nav />

      {user ? (
        <div className="profile">
          <img src={user.photoURL} alt="Profile" />
          <h2>{user.displayName}</h2>
          <p>Email: {user.email}</p>
          <p>Provider: Google</p>
          {user.emailVerified && <p>Email Verified</p>}
        </div>
      ) : (
        <div className="profile">
          <h1>Sign in to view your profile</h1>
        </div>
      )}

      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
