"use client";
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 tracking-wide">Fukusus</h2>
          <p className="text-gray-400 text-sm">Streetwear and bold fashion made for every soul that dares to stand out.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-400 text-xl">
            <Link href="#"><FaInstagram className="hover:text-white transition" /></Link>
            <Link href="#"><FaFacebookF className="hover:text-white transition" /></Link>
            <Link href="mailto:support@fukusus.com"><FaEnvelope className="hover:text-white transition" /></Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay in the Loop</h3>
          <p className="text-gray-400 text-sm mb-3">Subscribe to get style drops, deals & updates.</p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-full text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2025 Fukusus. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
