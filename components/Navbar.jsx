
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#F8F7F2] fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-display font-bold text-[#0A4D54] hover:text-[#0A4D54]/80 transition-colors cursor-pointer">
          Vibe Yatra
        </a>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-[#0A4D54]">&#9776;</button>
        </div>
        <ul className="hidden md:flex gap-8 text-[#0A4D54] font-semibold">
          <li><a href="/tours">Our Tours</a></li>
          <li><a href="/fleet">Our Fleet</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-[#0A4D54] font-semibold">
          <li><a href="/tours">Our Tours</a></li>
          <li><a href="/fleet">Our Fleet</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      )}
    </nav>
  );
}
