"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiShoppingCart,
  FiGrid,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    Pages: false,
    Shop: false,
  });
  const [desktopDropdown, setDesktopDropdown] = useState({
    Pages: false,
    Shop: false,
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Pages",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
      ],
    },
    { label: "Gallery", href: "/gallery" },
    {
      label: "Shop",
      dropdown: [
        { label: "All Products", href: "/shop" },
        { label: "Cart", href: "/cart" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const toggleDesktopDropdown = (label) => {
    setDesktopDropdown((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className={`w-full border-b border-white/10 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 items-center text-sm md:text-base font-medium">
        {/* Logo */}
        <div className={`border-r border-white/10 pr-4 ${
        loaded ? "animate-slide-up" : ""
      }`}>
          <Link href="/" className="text-xl font-bold">
            {/* rj<span className="font-normal">fashions</span> */}
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={100}
              height={50}
              className="w-24 h-auto">
            </Image>

          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex justify-center gap-6 relative ${
        loaded ? "animate-fade-in" : ""
      }`}>
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className={`relative`}>
                <button
                  onClick={() => toggleDesktopDropdown(item.label)}
                  className="cursor-pointer hover:text-yellow-600 flex items-center gap-1"
                >
                  {item.label}
                  {/* <FiChevronDown className="w-4 h-4" /> */}
                </button>
                {/* {desktopDropdown[item.label] && (
                  <div className="absolute top-full  left-0 w-40 mt-2 p-2 rounded shadow border border-white/10 bg-black  animate-slide-up">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        className="block py-1 px-3 text-sm hover:text-yellow-600"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )} */}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="hover:text-yellow-600"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Icons */}
        <div className={`hidden md:flex justify-end items-center gap-6 border-l border-white/10 pl-4 text-xl ${
        loaded ? "animate-slide-down" : ""
      }`}>
          <Link href="/" aria-label="Search">
            <FiSearch />
          </Link>
          <Link href="/" aria-label="Cart">
            <FiShoppingCart />
          </Link>
          <Link href="/" aria-label="Grid">
            <FiGrid />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-end col-span-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black text-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0 animate-slide-in-right"
            : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-4 relative h-full">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* Mobile Menu Items */}
          <div className="pt-10 space-y-4">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <div key={index}>
                  <div
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span className="font-semibold">{item.label}</span>
                    {mobileDropdown[item.label] ? (
                      <FiChevronUp className="w-4 h-4" />
                    ) : (
                      <FiChevronDown className="w-4 h-4" />
                    )}
                  </div>
                  {mobileDropdown[item.label] && (
                    <div className="pl-4 mt-1 space-y-1 animate-slide-up">
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm hover:text-yellow-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-yellow-500"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Icons */}
          <div className="absolute bottom-4 left-4 flex gap-6 text-xl">
            <Link href="/" aria-label="Search">
              <FiSearch />
            </Link>
            <Link href="/" aria-label="Cart">
              <FiShoppingCart />
            </Link>
            <Link href="/" aria-label="Grid">
              <FiGrid />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
