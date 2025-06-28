"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfile = () => setShowProfile(!showProfile);

  const cartCount = 3; // Replace with cart state if using context or API

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Fukusus
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/shop" className="hover:text-gray-300 transition">Shop</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FaShoppingBag className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={toggleProfile}>
              <FaUserCircle className="text-xl hover:text-gray-300" />
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-md w-40">
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black px-6 py-6 space-y-4 text-sm font-medium"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" onClick={toggleMenu} className="block hover:text-gray-300">Home</Link>
            <Link href="/shop" onClick={toggleMenu} className="block hover:text-gray-300">Shop</Link>
            <Link href="/about" onClick={toggleMenu} className="block hover:text-gray-300">About</Link>
            <Link href="/contact" onClick={toggleMenu} className="block hover:text-gray-300">Contact</Link>
            <Link href="/cart" onClick={toggleMenu} className="block hover:text-gray-300 flex items-center gap-2">
              <FaShoppingBag /> Cart ({cartCount})
            </Link>
            <Link href="/login" onClick={toggleMenu} className="block hover:text-gray-300">Login</Link>
            <Link href="/register" onClick={toggleMenu} className="block hover:text-gray-300">Register</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
