import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

// Accurate Fleet Data for Indian Tour Operations
const fleetData = [
  {
    id: 1,
    name: "Maruti Swift Dzire",
    image: "/images/fleet/dzire.webp",
    capacity: "4 Passengers",
    luggage: "2 Large + 1 Small Bag",
    description: "The most popular and reliable sedan for city tours and intercity travel in India. Known for its exceptional fuel efficiency, spacious legroom, and smooth ride. A highly economical and comfortable choice for couples, business travelers, or small families.",
    features: ["Air Conditioning", "Comfortable Seating", "Radio/Music System", "High Reliability"]
  },
  {
    id: 2,
    name: "Hyundai Aura",
    image: "/images/fleet/aura.webp",
    capacity: "4 Passengers",
    luggage: "3 Large Bags (402L Boot Space)",
    description: "A premium compact sedan that blends modern styling with exceptional comfort. Perfect for taxi services with its substantial 402-liter boot space, making it ideal for daily sightseeing or longer journeys with ample luggage. Enjoy a whisper-quiet cabin and advanced suspension.",
    features: ["Premium AC", "Extra Large Boot Space", "Smooth Ride", "Modern Interiors"]
  },
  {
    id: 3,
    name: "Maruti Ertiga",
    image: "/images/fleet/ertiga.avif",
    capacity: "6 Passengers",
    luggage: "2 Large + 2 Small Bags",
    description: "The preferred 7-seater Multi-Purpose Vehicle (MPV) for family trips and group tours. The Ertiga provides versatile seating, rear AC vents for all rows, and a robust build for comfortable highway cruising. Roof carriers are available for extra luggage on long trips.",
    features: ["Dual AC (Front & Rear)", "Spacious 3-Row Seating", "Family Friendly", "Flexible Luggage Space"]
  },
  {
    id: 4,
    name: "Toyota Innova Crysta",
    image: "/images/fleet/innova_crysta.avif",
    capacity: "6-7 Passengers",
    luggage: "4 Large Bags",
    description: "The undisputed gold standard of premium road travel in India. Offers an unparalleled journey of comfort and sophistication. Ideal for discerning travelers prioritizing space, reliability, and luxury. Features plush interiors, powerful AC, and supreme comfort over any terrain.",
    features: ["Premium Captain Seats", "Ultimate Luxury", "Powerful Dual AC", "Quiet Cabin"]
  }
];

export default function FleetPage() {
  const { t } = useLanguage();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleWhatsapp = () => {
    window.open(`https://wa.me/916361519067?text=${encodeURIComponent("Hi! I would like to get a quote for a vehicle booking.")}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Our Premium Fleet | Vibe Yatra</title>
        <meta name="description" content="Explore Vibe Yatra's premium fleet of vehicles including Swift Dzire, Innova Crysta, and more for your perfect Indian journey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="pt-24 pb-20 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">

        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center pt-[70px] bg-gradient-to-br from-[#0A4D54] to-[#0d6b74]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1 bg-white/10 text-yellow-400 rounded-full text-sm font-semibold mb-6">
              PREMIUM VEHICLES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Your Comfort, Our Priority
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              Travel across India in utmost comfort with our highly maintained, private driver-driven vehicles.
            </p>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {fleetData.map((vehicle) => (
                <div key={vehicle.id} className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl flex flex-col h-full group">

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <h3 className="absolute bottom-6 left-6 text-2xl font-semibold tracking-wide text-white drop-shadow-md">
                      {vehicle.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">

                    {/* Specs */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
                        <span className="text-xl">👥</span>
                        {vehicle.capacity}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
                        <span className="text-xl">🧳</span>
                        {vehicle.luggage}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                      {vehicle.description}
                    </p>

                    {/* Features */}
                    <div className="mb-10">
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <span key={idx} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-auto">
                      <button
                        onClick={() => {
                          setSelectedVehicle(vehicle);
                          setShowBookingForm(true);
                        }}
                        className="w-full py-4 bg-gradient-to-r from-[#0A4D54] to-[#0d6b74] text-white font-medium tracking-wide rounded-xl hover:shadow-lg hover:shadow-[#0A4D54]/25 transition-all duration-300 text-lg flex justify-center items-center gap-2"
                      >
                        Request Quote
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Booking Modal */}
      {showBookingForm && (
        <BookingModal
          vehicle={selectedVehicle}
          onClose={() => {
            setShowBookingForm(false);
            setSelectedVehicle(null);
          }}
        />
      )}

      <Footer />
    </>
  );
}

// Simplified Booking Modal
function BookingModal({ vehicle, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    pickupLocation: '',
    destination: '',
    message: ''
  });
  const [submitAction, setSubmitAction] = useState('whatsapp');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailStr = formData.email ? `%0AEmail: ${formData.email}` : '';
    const messageStr = formData.message ? `%0AMessage: ${formData.message}` : '';
    const text = `Hi, I would like to get a quote for booking a ${vehicle?.name}.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}${emailStr}%0ADate: ${formData.date}%0APickup: ${formData.pickupLocation}%0ADestination: ${formData.destination}${messageStr}`;

    if (submitAction === 'whatsapp') {
      window.open(`https://wa.me/916361519067?text=${text}`, '_blank');
    } else {
      window.open(`mailto:businessvibeyatra@gmail.com?subject=Vehicle Booking Quote: ${vehicle?.name}&body=${text}`, '_blank');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold text-[#0A4D54] dark:text-white mb-2 tracking-tight">
          Request a Quote
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
          Selected Vehicle: <strong className="text-gray-900 dark:text-white">{vehicle?.name}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name *</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A]" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A]" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-gray-400 font-normal">(Optional)</span></label>
              <input type="email" placeholder="e.g. john@gmail.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A]" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Travel Date *</label>
              <input type="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A]" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Pickup Location</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A]" value={formData.pickupLocation} onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Destination</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A]" value={formData.destination} onChange={e => setFormData({ ...formData, destination: e.target.value })} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Any special requirements?</label>
            <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#E4A84A] resize-none" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              onClick={() => setSubmitAction('whatsapp')}
              className="flex-1 py-4 bg-[#25D366] hover:bg-[#20bd5a] shadow-sm hover:shadow-md text-white font-medium tracking-wide rounded-xl transition-all flex items-center justify-center gap-2"
            >
              💬 WhatsApp
            </button>
            <button
              type="submit"
              onClick={() => setSubmitAction('email')}
              className="flex-1 py-4 border-2 border-[#0A4D54] text-[#0A4D54] dark:border-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 shadow-sm hover:shadow-md font-medium tracking-wide rounded-xl transition-all flex items-center justify-center gap-2"
            >
              ✉️ Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}