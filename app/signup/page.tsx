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
    setAnimate(false);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-row justify-center items-center ${
        animate ? "animate-slideOut" : "animate-slideIn"
      }`}
    >
      <div>
        <h1 className="text-8xl animate-bounce">sign up</h1>

        {/* Sign In Form */}
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg mb-2">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-full bg-transparent border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-lg mb-2">
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 rounded-full bg-transparent border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-full bg-transparent border-2 border-white text-white hover:border-2 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
          >
            sign up
          </button>
        </form>

        <div className="flex flex-row justify-between text-xl">
          <button
            className="rounded-full bg-transparent border-2 border-white p-4 hover:border-2 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
            onClick={() => handleButtonClick("/signin")}
          >
            sign in
          </button>
          <button
            className="rounded-full bg-transparent border-2 border-white p-4 hover:border-2 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
            onClick={() => handleButtonClick("/")}
          >
            go back
          </button>
        </div>
      </div>
    </div>
  );
}
