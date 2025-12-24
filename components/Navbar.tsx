"use client";

import { useState } from "react";
import { useAnimationTrigger } from "@/app/providers/AnimationProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { trigger } = useAnimationTrigger();

  const scrollTo = (id: string) => {
    setOpen(false);
    trigger();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };


  
  const NavItem = ({
    label,
    target,
  }: {
    label: string;
    target: string;
  }) => (
    <button
      onClick={() => scrollTo(target)}
      className="relative group text-sm text-gray-300 hover:text-white transition"
    >
      {label}
      {/* underline */}
      <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex justify-between items-center">
        {/* Logo */}
        <span
          onClick={() => scrollTo("home")}
          className="text-xl font-semibold text-white cursor-pointer transition hover:blur-[1px]"
        >
          MGDev.
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <NavItem label="Home" target="home" />
          <NavItem label="Experience" target="experience" />
          <NavItem label="Projects" target="projects" />
          <NavItem label="Contact" target="contact" />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-sm text-gray-300 hover:text-white transition"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden max-w-7xl mx-auto px-8 pb-6 flex flex-col gap-4 text-gray-300">
          <button
            onClick={() => scrollTo("home")}
            className="hover:text-white transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="hover:text-white transition"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-white transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
