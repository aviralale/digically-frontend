"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const menuItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const ctaButtonVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    visible: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.4,
        ease: easeInOut,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileMenuItemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const hamburgerLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
    open: {
      rotate: 45,
      y: 8,
      opacity: 1,
    },
  };

  const hamburgerLineVariants2 = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const hamburgerLineVariants3 = {
    closed: {
      rotate: 0,
      y: 0,
      opacity: 1,
    },
    open: {
      rotate: -45,
      y: -8,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      className="flex justify-between items-center px-4 sm:px-8 py-4 w-full text-white bg-purple-700/20 backdrop-blur-2xl z-20 fixed"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <motion.div
        className="flex items-center space-x-2"
        variants={logoVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image src="/logo.png" alt="Logo" width={128} height={24} />
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        className="hidden md:flex space-x-8 text-sm font-medium"
        variants={menuItemVariants}
      >
        {["Home", "About Us", "Services", "Let's Talk"].map((item) => {
          const href =
            item === "Home"
              ? "/"
              : item === "About Us"
              ? "/about"
              : item === "Services"
              ? "/services"
              : "/inquire";

          return (
            <motion.div
              key={item}
              variants={menuItemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={href}
                className="hover:text-pink-200 transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Desktop CTA Button */}
      <motion.div
        className="hidden md:flex space-x-4"
        variants={ctaButtonVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            href="/inquire"
            className="border bg-transparent border-white/30 px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-purple-600 transition-all"
          >
            Get Started
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
        aria-label="Toggle mobile menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.span
          className="block w-6 h-0.5 bg-white origin-center"
          variants={hamburgerLineVariants}
          animate={isMobileMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-white"
          variants={hamburgerLineVariants2}
          animate={isMobileMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-white origin-center"
          variants={hamburgerLineVariants3}
          animate={isMobileMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-purple-900/95 backdrop-blur-xl z-50"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col items-center justify-start pt-8 space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Let's Talk", href: "/inquire" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  variants={mobileMenuItemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="text-xl font-medium hover:text-pink-200 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="pt-6"
                variants={mobileMenuItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/inquire"
                  className="border bg-transparent border-white/30 px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-purple-600 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
