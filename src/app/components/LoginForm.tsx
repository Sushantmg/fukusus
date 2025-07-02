"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login successful!");
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link href="/">
          <Image
            alt="Fukusus Logo"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=green&shade=600"
            width={40}
            height={40}
            className="mx-auto"
          />
        </Link>
        <h2 className="mt-8 text-center text-3xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleLogin} className="space-y-6 bg-gray-900 p-8 rounded-2xl shadow-lg">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md bg-gray-800 px-4 py-2 text-base text-white focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md bg-gray-800 px-4 py-2 text-base text-white focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!email || !password || loading}
              className={`w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-green-500 hover:text-green-400"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
