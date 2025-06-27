"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Fukusus</h1>
        <p className="text-xl mb-6">Elevate your wardrobe with timeless streetwear & bold styles.</p>
        <Link href="/shop">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* You can map over real categories */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <Image src="/mens.jpg" alt="Men's Collection" width={500} height={500} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Men’s Collection</h3>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <Image src="/womens.jpg" alt="Women’s Collection" width={500} height={500} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Women’s Collection</h3>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
            <Image src="/accessories.jpg" alt="Accessories" width={500} height={500} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="mb-6">Sign up for drops, deals, and style inspo.</p>
        <form className="flex justify-center gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-full text-black w-full" />
          <button type="submit" className="bg-white text-black px-6 py-2 rounded-r-full font-semibold hover:bg-gray-200">
            Subscribe
          </button>
        </form>
      </section>

   
    </main>
  );
}
