
import React, { useState } from "react";

export default function CraftJourney() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <section id="craft" className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-display font-bold text-[#0A4D54] mb-10">Craft Your Journey</h2>
      <p className="max-w-2xl mx-auto mb-6">Tell us your dream destination, travel style, and vibe. We’ll design a tailor-made itinerary just for you.</p>
      <button
        onClick={() => setShowAlert(true)}
        className="bg-[#E4A84A] text-white px-6 py-2 rounded-lg hover:bg-[#d99638] transition">
        Get Started
      </button>
      {showAlert && (
        <div className="mt-4 text-[#0A4D54] font-semibold">Coming Soon! Stay tuned 🚀</div>
      )}
    </section>
  );
}
