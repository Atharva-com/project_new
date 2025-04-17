"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cloud } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center">
          <Cloud className="w-7 h-7 mr-2" />
          DocuNimbus
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/demo-dms"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Demo
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white py-4 px-6 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-gray-600"
                } transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/demo-dms"
              className="text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
