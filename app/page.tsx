"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h1
        className={
          !click
            ? `font-bold text-3xl mt-[250px]`
            : `font-bold text-4xl mt-[250px] text-green-600`
        }>
        {!click ? "Hello World!" : "Welcome User"}
      </h1>
      <Button
        variant="outline"
        className="mt-10 bg-slate-950 text-white hover:bg-slate-700 hover:text-black"
        onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
}
