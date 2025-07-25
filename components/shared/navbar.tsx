"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-4 w-full text-white bg-purple-700/20 backdrop-blur-2xl z-20 fixed">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={128} height={24} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-pink-200 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-pink-200 transition-colors">
          About Us
        </Link>
        <Link
          href="/services"
          className="hover:text-pink-200 transition-colors"
        >
          Services
        </Link>
        <Link href="/inquire" className="hover:text-pink-200 transition-colors">
          Let&apos;s Talk
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex space-x-4">
        <Link
          href="/inquire"
          className="border bg-transparent border-white/30 px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-purple-600 transition-all"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-purple-900/95 backdrop-blur-xl z-50">
          <div className="flex flex-col items-center justify-start pt-8 space-y-6">
            <Link
              href="/"
              className="text-xl font-medium hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-xl font-medium hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-xl font-medium hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/inquire"
              className="text-xl font-medium hover:text-pink-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </Link>
            <div className="pt-6">
              <Link
                href="/inquire"
                className="border bg-transparent border-white/30 px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-purple-600 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
