"use client";

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

export default function Generation() {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="flex gap-3 flex-col items-center justify-center py-24">
        <div className="text-2xl font-semibold"> Explore</div>

        <div className="text-black/70">
          Generated images will be add here...
        </div>
      </div>
    </div>
  );
}
