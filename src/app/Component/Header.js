"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.9)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(75, 85, 99, 0.3)", "rgba(75, 85, 99, 0.6)"]
  );

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full backdrop-blur-xl border-b z-50"
      style={{ backgroundColor, borderColor }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-pink-400 transition-all"
            >
              {"Devansh Mishra"}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-all relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <motion.span
                className="block h-0.5 w-6 bg-cyan-400 mb-1"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-cyan-400 mb-1"
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 w-6 bg-cyan-400"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden bg-gray-800 rounded-xl mt-4 border border-gray-700"
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-6 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
