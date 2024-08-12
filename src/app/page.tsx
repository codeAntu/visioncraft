"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use, useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import { useStore } from "@/store/store";

interface searchRes {
  search: string;
  imgs: string[];
}

export default function Home() {
  const [generate, setGenerate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchRes, setSearchRes] = useState<searchRes[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const user = useStore((state) => state.user);
  const [history, setHistory] = useState<string[]>([]);
  const [limitExceeded, setLimitExceeded] = useState<boolean>(false);

  async function handleSearch() {
    if (generate == "") return;
    setLoading(true);
    setSearchRes([...searchRes, { search: generate, imgs: [] }]);
    try {
      const res = await axios.get("/api/generate", {
        params: {
          query: generate,
          email: user.email,
        },
      });

      if (res.data.error) {
        setLimitExceeded(true);
        setLoading(false);
        return;
      }

      setSearchRes([...searchRes, { search: generate, imgs: res.data }]);
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } catch (err) {
      console.log("error", err);
    }
    setLoading(false);
  }

  async function handleHistory() {
    try {
      const res = await axios.get("/api/history", {
        params: {
          email: user.email,
        },
      });
      console.log("history", res.data);
      setHistory(res.data);
    } catch (err) {
      console.log("error", err);
    }
  }

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white w-full min-h-screen">
      <div>
        <Nav />

        <div className="px-5 py-10 flex flex-col gap-9">
          {limitExceeded && (
            <div className="bg-red-500 text-white p-2 rounded-3xl text-sm text-center">
              You have exceeded the limit
            </div>
          )}

          {searchRes.map((res, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="flex justify-end items-center pl-6 ">
                <h1 className="bg-slate-200 px-4 py-2 rounded-3xl text-sm">
                  {res.search}
                </h1>
              </div>
              <div className="flex justify-start">
                <div className="p-2.5 bg-slate-200 rounded-[20px]">
                  <div className="grid grid-cols-2  rounded-2xl overflow-hidden">
                    {res.imgs.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="image"
                        className="w-44 aspect-square object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div ref={ref} className="flex justify-center items-center h-32 ">
            {loading && (
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            )}
          </div>
        </div>

        <div className="fixed bottom-0 pb-4 pt-3 border-t border-black/5 left-0 px-6 w-full flex gap-1.5 items-center bg-white">
          <Input
            type="text"
            placeholder="Search"
            className=""
            value={generate}
            onChange={(e) => setGenerate(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Search
          </Button>
          <Button
            onClick={handleHistory}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            History
          </Button>
        </div>
      </div>
    </main>
  );
}
