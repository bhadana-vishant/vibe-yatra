
import React from "react";
import Link from "next/link";

export default function PopularTours() {
  return (
    <section id="popular" className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-display font-bold text-[#0A4D54] text-center mb-10">Popular Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["zanskar", "meghalaya", "thar"].map((place, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={`/${place}.jpg`} alt={place} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#0A4D54] capitalize">{place} Valley</h3>
              <p className="text-sm text-gray-600">Explore the beauty and culture of {place}.</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Explore All Tours Button */}
      <div className="text-center mt-12">
        <Link 
          href="/tours" 
          className="inline-flex items-center px-8 py-4 bg-[#0A4D54] text-white font-semibold rounded-full hover:bg-[#0A4D54]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="mr-2">Feel All The Vibes</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <div className="mt-3 text-sm text-gray-600">
          #VibeYatra #FeelTheVibeIndia
        </div>
      </div>
    </section>
  );
}
