"use client";

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

export default function Generation() {
  const [message, setMessage] = useState("");

  async function getData() {
    const response = await fetch("/api/generation");

    const data = await response.json();

    setMessage(data.message);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/generation");
      const data = await response.json();

      console.log(data);

      setMessage(data.message);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-blue-400 min-h-screen">
      <Nav />
      <div>Generation</div>
    </div>
  );
}
