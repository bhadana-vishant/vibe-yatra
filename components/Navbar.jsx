
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#F8F7F2] fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold text-[#0A4D54] hover:text-[#0A4D54]/80 transition-colors cursor-pointer">
          Vibe Yatra
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-[#0A4D54]">&#9776;</button>
        </div>
        <ul className="hidden md:flex gap-8 text-[#0A4D54] font-semibold">
          <li><Link href="/tours">Our Tours</Link></li>
          <li><Link href="/fleet">Our Fleet</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-[#0A4D54] font-semibold">
          <li><Link href="/tours">Our Tours</Link></li>
          <li><Link href="/fleet">Our Fleet</Link></li>
          <li><Link href="/about">About Us</Link></li>
        </ul>
      )}
    </nav>
  );
}
