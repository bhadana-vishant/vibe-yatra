
import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A4D54] text-white py-6 px-6 md:px-20 text-center">
      <h3 className="text-xl font-bold font-display mb-2">Vibe Yatra</h3>
      <p className="text-sm">© {new Date().getFullYear()} Vibe Yatra. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:contact@nomadwheels.in">Email</a>
      </div>
    </footer>
  );
}
