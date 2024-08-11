"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menubar } from "@/components/ui/menubar";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  
  const [search , setSearch] = useState<string>("")

  function handleSearch() {
    console.log(search)
  }



  return (
    <main className="bg-white dark:bg-black text-black dark:text-white w-full min-h-screen">
      <div>
      


        <div>

        </div>


        <div className="fixed bottom-3 left-0 px-6 w-full flex gap-1.5 items-center">
            <Input type="text" placeholder="Search" className="" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            
            />
            <Button 
            onClick = {handleSearch}
            >Search</Button>
        </div>

      </div>
    </main>
  );
}
