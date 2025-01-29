"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);

  const handleButtonClick = (path: string) => {
    setAnimate(true);

    setTimeout(() => {
      router.push(path);
    }, 750);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setAnimate(true);
    };

    window.addEventListener("beforeunload", handleRouteChange);

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, [router]);

  return (
    <div
      className={`min-h-screen flex flex-row justify-center items-center ${
        animate ? "animate-slideOut" : "animate-slideIn"
      }`}
    >
      <div>
        <h1 className="text-8xl animate-bounce">chitchat</h1>
        <div className="flex flex-row justify-between text-xl">
          <button
            className="rounded-full bg-transparent border-2 border-white p-4 hover:border-2 hover:border-transparent transition-all duration-200"
            onClick={() => handleButtonClick("/signin")}
          >
            sign in
          </button>
          <button
            className="rounded-full bg-transparent border-2 border-white p-4 hover:border-2 hover:border-transparent transition-all duration-200"
            onClick={() => handleButtonClick("/signup")}
          >
            sign up
          </button>
        </div>
      </div>
    </div>
  );
}
