
"use client";
import React, { useState } from "react";
import "./nav.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <button onClick={() => handleScroll("home")}>
        <Link href="/home" className="hover:bg-gray-100 p-2 rounded-full">HOME</Link>
      </button>
      <button onClick={() => handleScroll("services")}>
        <Link href="/home#services" className="hover:bg-gray-100 p-2 rounded-full">SERVICES</Link>
      </button>
      <button onClick={() => handleScroll("projects")}>
        <Link href="/home#projects" className="hover:bg-gray-100 p-2 rounded-full">ABOUT PROJECTS</Link>
      </button>
      <button onClick={() => handleScroll("testimonials")}>
        <Link href="/home#testimonials" className="hover:bg-gray-100 p-2 rounded-full">TESTIMONIALS</Link>
      </button>
      <Link href="#contact">
        <Button className="w-full md:w-auto" >CONTACT US</Button>
      </Link>
      <Link href="/admin/projects">
        <Button variant="outline" className="w-full md:w-auto">ADMIN PANEL</Button>
      </Link>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-16 py-4 flex justify-between items-center ">
      {/* Logo */}
      <Link href="/home">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={180}
          height={60}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center text-sm md:text-base ">
        <NavLinks />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden hover:bg-gray-100 p-2 rounded-full">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50">
          <NavLinks />
        </div>
      )}
    </nav>
  );
}
