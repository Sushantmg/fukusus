"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-black text-white">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center opacity-60"
        />
        {/* Overlay content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Fukusus</h1>
          <p className="text-xl md:text-2xl mb-6">Timeless streetwear that defines your edge.</p>
          <Link href="/shop">
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-14">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Collection Item */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl transition group">
            <Image
              src="/mens.jpg"
              alt="Men's Collection"
              width={500}
              height={500}
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Men’s Collection</h3>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl transition group">
            <Image
              src="/womens.jpg"
              alt="Women’s Collection"
              width={500}
              height={500}
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Women’s Collection</h3>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl transition group">
            <Image
              src="/accessories.jpg"
              alt="Accessories"
              width={500}
              height={500}
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay in the Loop</h2>
        <p className="text-sm md:text-base mb-6 text-gray-300">Sign up for drops, deals, and style inspo straight to your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full rounded-full text-black outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
