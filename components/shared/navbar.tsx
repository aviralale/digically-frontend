import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 w-full text-white bg-purple-700/20 backdrop-blur-2xl z-20 fixed">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={128} height={24} />
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <Link href="/" className="hover:text-pink-200">
          Home
        </Link>
        <Link href="/about" className="hover:text-pink-200">
          About Us
        </Link>
        <Link href="/services" className="hover:text-pink-200">
          Services
        </Link>
        <Link href="/inquire" className="hover:text-pink-200">
          Let&apos;s Talk
        </Link>
      </div>
      <div className="flex space-x-4">
        <Button className="border bg-transparent border-white/30 px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-purple-600 transition-all">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
