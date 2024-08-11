import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [user, setUser] = useState<string>() as any;

  const router = useRouter();

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

  const handleSignOut = async () => {
    await signOut(auth);
  };

  console.log(user);

  return (
    <div className="flex justify-between items-center border-b border-black dark:bg-white px-5 py-3 text-sm">
      <div className="flex gap-5 items-center">
        <img src="./vercel.svg" alt="" className="aspect-square w-5" />
        <div>Vision Craft </div>
        <Button onClick={() => router.push("/")}>Home</Button>
        <Button onClick={() => router.push("/generation")}  >Generation</Button>
      </div>
      <div className="flex gap-5 items-center">
        {user ? (
          <Button onClick={handleSignOut}>Logout</Button>
        ) : (
          <Button onClick={handleSignIn}>Login</Button>
        )}
      </div>
    </div>
  );
}