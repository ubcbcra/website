"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  // Close on route change (basic – relies on hashchange/popstate)
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("hashchange", handler);
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-solid border-b-[#f0f2f4] px-4 sm:px-6 lg:px-10 py-3 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-40">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-6 text-[#1773cf] shrink-0">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <Link href="/" className="font-bold tracking-[-0.015em] text-[#111418] text-sm xs:text-base sm:text-lg line-clamp-1">
            <span className="hidden md:inline">Brock Commons Residence Association</span>
            <span className="md:hidden">Brock Commons RA</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((i) => (
            <Link key={i.href} href={i.href} className="text-[#111418] text-sm font-medium leading-normal hover:text-[#1773cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1773cf] rounded">
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden md:flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] px-2.5"
            aria-label="Search"
          >
            <div className="text-[#111418]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
          </button>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#111418] hover:bg-[#f0f2f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1773cf]"
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle navigation</span>
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
                <path d="M40,64a8,8,0,0,1,8-8H208a8,8,0,0,1,0,16H48A8,8,0,0,1,40,64Zm0,64a8,8,0,0,1,8-8H208a8,8,0,0,1,0,16H48A8,8,0,0,1,40,128Zm0,64a8,8,0,0,1,8-8H208a8,8,0,0,1,0,16H48A8,8,0,0,1,40,192Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        id="primary-navigation"
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-1 pt-3 pb-4">
          {navItems.map((i) => (
            <li key={i.href}>
              <Link
                href={i.href}
                className="block px-2 py-2 rounded-md text-[#111418] text-sm font-medium hover:bg-[#f0f2f4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1773cf]"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


