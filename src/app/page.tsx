"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
        <Button>Click me</Button>
      </motion.div>
    </main>
  );


  
}
