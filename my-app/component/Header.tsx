'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import { NavLink } from "../mock_data/data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className={`top-0 left-0 transition-shadow  w-full py-10 px-6 md:px-12 xl:px-18 bg-white `}>
      <nav className="relative flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={200} height={76} className="xl:w-[306]"/>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-center flex-1">
          <div className="space-x-8">
            {NavLink.map((item) => (
              <Link key={item.label} href={item.href} className="lg:text-sm xl:text-xl font-semibold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Donate button (desktop) */}
        <div className="hidden lg:block">
          <Link
            href="#"
            className="bg-primary text-body py-3.5 px-13 rounded-full font-semibold lg:text-sm xl:text-xl"
          >
            Donate
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-primary z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={25} className="text-body"/> : <Menu size={25} className="text-body"/>}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-xl/20 z-40 px-6 pt-4 pb-6 flex flex-col gap-4 lg:hidden">
            {NavLink.map((link) => (
              <Link key={link.label} href={link.href} className="text-base font-medium text-center" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="bg-primary text-body text-center py-3 rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
