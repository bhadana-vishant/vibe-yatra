import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Fleet Data
const fleetData = [
  {
    id: 1,
    category: "Luxury Sedans",
    vehicles: [
      {
        name: "Mercedes-Benz E-Class",
        image: "https://images.unsplash.com/photo-1563720223420-8a29b4f74f4f?w=500",
        capacity: "4 Passengers",
        luggage: "3 Large Bags",
        features: ["Premium Interiors", "Climate Control", "Premium Sound", "WiFi"],
        priceRange: "₹4,500 - ₹6,500/day",
        ideal: "Business Trips, Airport Transfers, VIP Transport"
      },
      {
        name: "BMW 5 Series",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
        capacity: "4 Passengers",
        luggage: "3 Large Bags",
        features: ["Leather Seats", "Navigation", "Premium Audio", "Safety Features"],
        priceRange: "₹4,000 - ₹6,000/day",
        ideal: "Corporate Events, Executive Travel, Special Occasions"
      },
      {
        name: "Audi A6",
        image: "https://images.unsplash.com/photo-1606016159283-d0b6e5e48143?w=500",
        capacity: "4 Passengers",
        luggage: "3 Large Bags",
        features: ["Luxury Comfort", "Advanced Tech", "Premium Materials", "Performance"],
        priceRange: "₹4,200 - ₹6,200/day",
        ideal: "Luxury Travel, Business Meetings, Premium Tours"
      }
    ]
  },
  {
    id: 2,
    category: "Premium SUVs",
    vehicles: [
      {
        name: "Toyota Fortuner",
        image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=500",
        capacity: "7 Passengers",
        luggage: "5 Large Bags",
        features: ["4WD Capability", "High Seating", "Spacious Interior", "Safety Tech"],
        priceRange: "₹3,500 - ₹5,000/day",
        ideal: "Family Tours, Hill Stations, Adventure Trips"
      },
      {
        name: "Mahindra Scorpio",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500",
        capacity: "8 Passengers",
        luggage: "6 Large Bags",
        features: ["Rugged Build", "All-Terrain", "Spacious", "Reliable"],
        priceRange: "₹2,800 - ₹4,200/day",
        ideal: "Group Travel, Off-Road Adventures, Long Journeys"
      },
      {
        name: "Ford Endeavour",
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500",
        capacity: "7 Passengers",
        luggage: "5 Large Bags",
        features: ["Premium SUV", "Advanced Safety", "Comfort Features", "Power"],
        priceRange: "₹3,800 - ₹5,200/day",
        ideal: "Luxury Family Travel, Corporate Outings, Premium Tours"
      }
    ]
  },
  {
    id: 3,
    category: "Tempo Travelers",
    vehicles: [
      {
        name: "12-Seater Tempo Traveller",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=500",
        capacity: "12 Passengers",
        luggage: "15+ Bags",
        features: ["AC", "Music System", "Comfortable Seats", "GPS"],
        priceRange: "₹2,200 - ₹3,500/day",
        ideal: "Group Tours, Corporate Outings, Family Gatherings"
      },
      {
        name: "17-Seater Tempo Traveller",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
        capacity: "17 Passengers",
        luggage: "20+ Bags",
        features: ["Push Back Seats", "Entertainment", "Extra Space", "Safety"],
        priceRange: "₹2,800 - ₹4,000/day",
        ideal: "Large Group Tours, Wedding Parties, Corporate Events"
      },
      {
        name: "26-Seater Mini Bus",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
        capacity: "26 Passengers",
        luggage: "30+ Bags",
        features: ["Spacious Interior", "Modern Amenities", "Safety First", "Comfort"],
        priceRange: "₹3,500 - ₹5,500/day",
        ideal: "Large Corporate Groups, Educational Tours, Events"
      }
    ]
  },
  {
    id: 4,
    category: "Luxury Coaches",
    vehicles: [
      {
        name: "35-Seater Volvo Coach",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
        capacity: "35 Passengers",
        luggage: "40+ Bags",
        features: ["Premium Comfort", "Entertainment System", "Restroom", "WiFi"],
        priceRange: "₹6,000 - ₹9,000/day",
        ideal: "Long Distance Tours, Corporate Retreats, Premium Groups"
      },
      {
        name: "45-Seater Luxury Bus",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500",
        capacity: "45 Passengers",
        luggage: "50+ Bags",
        features: ["Reclining Seats", "Entertainment", "Safety Systems", "Comfort"],
        priceRange: "₹7,500 - ₹11,000/day",
        ideal: "Large Group Tours, Multi-City Tours, Corporate Travel"
      }
    ]
  }
];

// Customer Testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Outstanding service! The Mercedes was immaculate and our driver Ravi was incredibly professional. Made our Golden Triangle tour absolutely memorable. Will definitely book again!",
    tour: "Golden Triangle Tour",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "USA",
    rating: 5,
    review: "As international travelers, we were nervous about transportation in India. Vibe Yatra exceeded all expectations! Clean vehicles, punctual drivers, and excellent communication throughout our Rajasthan trip.",
    tour: "Rajasthan Heritage Tour",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100"
  },
  {
    id: 3,
    name: "Priya Patel",
    location: "Delhi",
    rating: 5,
    review: "Perfect for our family of 8! The Tempo Traveller was spacious and comfortable. Driver was knowledgeable about local attractions and helped make our Himachal trip unforgettable. Highly recommended!",
    tour: "Himachal Family Tour",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: 4,
    name: "David Miller",
    location: "UK",
    rating: 5,
    review: "Booked the Volvo coach for our company retreat. Everything was organized perfectly - from pickup to drop-off. Professional drivers, clean vehicles, and excellent service throughout. Worth every penny!",
    tour: "Corporate Retreat",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  },
  {
    id: 5,
    name: "Anita Gupta",
    location: "Bangalore",
    rating: 5,
    review: "Exceptional experience! Our Kerala backwaters tour was made special by the comfortable SUV and friendly driver. They went above and beyond to ensure our comfort and safety. 5 stars!",
    tour: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100"
  },
  {
    id: 6,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    review: "Used Vibe Yatra for our Ladakh expedition. The vehicle was perfect for high-altitude conditions and the driver was experienced with mountain roads. Excellent service and great value!",
    tour: "Ladakh Adventure",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  }
];

// Service Features
const serviceFeatures = [
  {
    icon: "🚗",
    title: "Premium Fleet",
    description: "Well-maintained, modern vehicles with regular servicing and safety checks"
  },
  {
    icon: "👨‍✈️",
    title: "Professional Drivers",
    description: "Experienced, licensed drivers with local knowledge and excellent driving records"
  },
  {
    icon: "🕒",
    title: "24/7 Support",
    description: "Round-the-clock customer support and emergency assistance throughout your journey"
  },
  {
    icon: "🛡️",
    title: "Fully Insured",
    description: "All vehicles are fully insured with comprehensive coverage for your peace of mind"
  },
  {
    icon: "🗺️",
    title: "Custom Itineraries",
    description: "Flexible routes and schedules tailored to your specific needs and preferences"
  },
  {
    icon: "💳",
    title: "Transparent Pricing",
    description: "No hidden charges, clear pricing structure with detailed breakdowns"
  },
  {
    icon: "🧼",
    title: "Sanitized Vehicles",
    description: "Thoroughly cleaned and sanitized vehicles for your health and safety"
  },
  {
    icon: "📱",
    title: "Easy Booking",
    description: "Simple online booking process with instant confirmation and payment options"
  }
];

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState("Luxury Sedans");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const selectedFleet = fleetData.find(fleet => fleet.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Our Fleet - Premium Vehicle Services | Vibe Yatra</title>
        <meta name="description" content="Premium vibes, premium rides! Explore Vibe Yatra's fleet of luxury cars, SUVs, and coaches. Professional drivers, good vibes guaranteed across India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="pt-24 pb-20 bg-gradient-to-br from-[#F8F7F2] to-white min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Premium Vibes, Premium Rides 🚗✨
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Every journey deserves the perfect vibe! Choose from our premium fleet of vehicles 
            and let the good vibes roll across incredible India! 🇮🇳
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowBookingForm(true)}
              className="px-8 py-4 bg-white text-[#0A4D54] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              📞 Get Your Vibe Check
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors">
              📱 WhatsApp Your Vibe
            </button>
          </div>
          <div className="mt-4 text-sm text-yellow-300">
            #VibeYatra #PremiumVibes
          </div>
        </section>

        {/* Fleet Categories */}
        <section className="px-6 md:px-20 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-12">
            Choose Your Perfect Vehicle 🎯
          </h2>
          
          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {fleetData.map(fleet => (
              <button
                key={fleet.id}
                onClick={() => setSelectedCategory(fleet.category)}
                className={`px-6 py-3 font-semibold rounded-full transition-all ${
                  selectedCategory === fleet.category
                    ? 'bg-[#0A4D54] text-white shadow-lg'
                    : 'bg-white text-[#0A4D54] hover:bg-[#0A4D54]/10 shadow-md'
                }`}
              >
                {fleet.category}
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {selectedFleet?.vehicles.map((vehicle, index) => (
              <VehicleCard 
                key={index} 
                vehicle={vehicle} 
                onBookNow={(vehicle) => {
                  setSelectedVehicle(vehicle);
                  setShowBookingForm(true);
                }}
              />
            ))}
          </div>
        </section>

        {/* Service Features */}
        <section className="px-6 md:px-20 py-16 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-12">
            Why Choose Our Services? 🌟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-[#F8F7F2] to-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#0A4D54] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-[#0A4D54]/5 to-[#F8F7F2]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-4">
            What Our Customers Say 💬
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it! Here's what thousands of happy travelers have to say about our services.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A4D54] mb-2">15,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A4D54] mb-2">50+</div>
              <div className="text-gray-600">Premium Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A4D54] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0A4D54] mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Vibe on the Road? 🛣️</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect ride now and experience the comfort, safety, and good vibes that thousands of travelers trust!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowBookingForm(true)}
              className="px-8 py-4 bg-white text-[#0A4D54] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              🚀 Book Your Vibe - Get Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors">
              📞 Vibe Check: +91-9999-999-999
            </button>
          </div>
          <div className="mt-4 text-sm text-yellow-300">
            #VibeYatra #PremiumVibes #YourVibeYourRide
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

// Vehicle Card Component
function VehicleCard({ vehicle, onBookNow }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <img 
        src={vehicle.image} 
        alt={vehicle.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A4D54] mb-2">{vehicle.name}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <span className="mr-2">👥</span>
            {vehicle.capacity}
          </div>
          <div className="flex items-center text-gray-600">
            <span className="mr-2">🧳</span>
            {vehicle.luggage}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-[#0A4D54] mb-2">✨ Features:</h4>
          <div className="flex flex-wrap gap-2">
            {vehicle.features.map((feature, index) => (
              <span key={index} className="px-3 py-1 bg-[#F8F7F2] text-[#0A4D54] text-xs rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-lg font-bold text-[#0A4D54] mb-1">{vehicle.priceRange}</div>
          <div className="text-sm text-gray-500 mb-2">💡 Ideal for: {vehicle.ideal}</div>
        </div>

        <button
          onClick={() => onBookNow(vehicle)}
          className="w-full py-3 bg-[#0A4D54] text-white font-semibold rounded-xl hover:bg-[#0A4D54]/90 transition-colors"
        >
          🚗 Book This Vehicle
        </button>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-[#0A4D54]">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
        <div className="ml-auto flex text-yellow-400">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
        "{testimonial.review}"
      </p>
      
      <div className="text-xs text-[#0A4D54] font-semibold bg-[#F8F7F2] px-3 py-1 rounded-full inline-block">
        🎯 {testimonial.tour}
      </div>
    </div>
  );
}

// Booking Modal Component
function BookingModal({ vehicle, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupLocation: '',
    destination: '',
    duration: '',
    passengers: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your booking request! We will contact you shortly.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-[#0A4D54]">
              🚗 Book Your Vehicle
            </h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>
          {vehicle && (
            <p className="text-gray-600 mt-2">Selected: {vehicle.name}</p>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name *"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <input
              type="date"
              placeholder="Pickup Date *"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.pickupDate}
              onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Pickup Location *"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.pickupLocation}
              onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Destination"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.destination}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
            />
            <select
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.duration}
              onChange={(e) => setFormData({...formData, duration: e.target.value})}
              required
            >
              <option value="">Select Duration *</option>
              <option value="half-day">Half Day (4-6 hours)</option>
              <option value="full-day">Full Day (8-10 hours)</option>
              <option value="multi-day">Multi-day Tour</option>
              <option value="airport-transfer">Airport Transfer</option>
            </select>
            <input
              type="number"
              placeholder="Number of Passengers"
              className="p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
              value={formData.passengers}
              onChange={(e) => setFormData({...formData, passengers: e.target.value})}
            />
          </div>
          
          <textarea
            placeholder="Special Requirements or Message"
            rows="4"
            className="w-full mt-4 p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
          
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 py-3 bg-[#0A4D54] text-white font-semibold rounded-xl hover:bg-[#0A4D54]/90 transition-colors"
            >
              🚀 Get Instant Quote
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}