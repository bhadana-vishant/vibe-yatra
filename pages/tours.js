import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Comprehensive tour data
const toursData = [
  {
    id: 1,
    title: "Zanskar Valley Expedition",
    location: "Ladakh, India",
    duration: "10 Days",
    difficulty: "Challenging",
    price: "₹89,999",
    image: "/zanskar.jpg",
    rating: 4.9,
    reviews: 245,
    bestTime: "June - September",
    groupSize: "6-12 people",
    category: "Adventure",
    description: "Experience the pristine beauty of Zanskar Valley, one of India's last frontiers. This expedition takes you through ancient monasteries, frozen rivers, and dramatic landscapes.",
    highlights: [
      "Trek on the famous Chadar Trek route",
      "Visit ancient Zanskar Monastery",
      "Experience traditional Ladakhi culture",
      "Witness stunning Himalayan peaks",
      "Cross high-altitude mountain passes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Arrive at Leh Airport. Rest and acclimatize to high altitude.",
        activities: ["Airport pickup", "Hotel check-in", "Light city walk", "Welcome dinner"],
        meals: "Dinner",
        accommodation: "3-star hotel in Leh"
      },
      {
        day: 2,
        title: "Leh Sightseeing",
        description: "Explore Leh Palace, Shanti Stupa, and local markets.",
        activities: ["Leh Palace visit", "Shanti Stupa", "Local market exploration", "Monasteries tour"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "3-star hotel in Leh"
      },
      {
        day: 3,
        title: "Leh to Padum",
        description: "Drive through scenic valleys to reach Padum, the capital of Zanskar.",
        activities: ["Early morning departure", "Cross Pensi La Pass", "Valley photography", "Local interaction"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Padum"
      },
      {
        day: 4,
        title: "Padum Exploration",
        description: "Explore the ancient town and nearby monasteries.",
        activities: ["Karsha Monastery visit", "Traditional village walk", "Cultural evening", "Star gazing"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Guesthouse in Padum"
      },
      {
        day: 5,
        title: "Zangla Valley Trek",
        description: "Trek through remote valleys and ancient trade routes.",
        activities: ["Morning trek start", "Royal palace ruins", "River crossing", "Camping setup"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Camping"
      }
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "All meals during the trek",
      "Professional mountain guide",
      "All permits and entry fees",
      "Transport in Leh-Ladakh region",
      "Basic first aid and safety equipment"
    ],
    exclusions: [
      "Flight tickets to/from Leh",
      "Personal trekking equipment",
      "Travel insurance",
      "Tips for guide and driver",
      "Personal expenses"
    ],
    whatToBring: [
      "Warm clothing and thermals",
      "Good trekking boots",
      "Sunglasses and sunscreen",
      "Personal medication",
      "Camera and extra batteries"
    ]
  },
  {
    id: 2,
    title: "Meghalaya Living Roots",
    location: "Meghalaya, India",
    duration: "7 Days",
    difficulty: "Moderate",
    price: "₹45,999",
    image: "/meghalaya.jpg",
    rating: 4.8,
    reviews: 189,
    bestTime: "October - March",
    groupSize: "4-10 people",
    category: "Nature & Culture",
    description: "Discover the wettest place on Earth and its unique living root bridges. Experience the rich Khasi culture and breathtaking waterfalls.",
    highlights: [
      "Walk on famous living root bridges",
      "Visit Cherrapunji and Mawsynram",
      "Explore crystal clear pools",
      "Experience Khasi tribal culture",
      "Witness Asia's tallest waterfalls"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shillong",
        description: "Arrive in Shillong, the Scotland of the East.",
        activities: ["Airport/station pickup", "City orientation", "Evening at Police Bazaar", "Welcome dinner"],
        meals: "Dinner",
        accommodation: "Hotel in Shillong"
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji",
        description: "Journey to the wettest place on Earth.",
        activities: ["Elephant Falls visit", "Nohkalikai Falls", "Mawsmai Caves", "Seven Sisters Falls"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Resort in Cherrapunji"
      },
      {
        day: 3,
        title: "Living Root Bridges Trek",
        description: "Trek to the famous Double Decker Living Root Bridge.",
        activities: ["Early morning trek", "Swimming in natural pools", "Village interaction", "Photography session"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Village homestay"
      },
      {
        day: 4,
        title: "Mawlynnong Village",
        description: "Visit Asia's cleanest village.",
        activities: ["Cleanest village tour", "Sky view point", "Balancing rock", "Traditional lunch"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Eco-lodge"
      }
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "All meals during the tour",
      "Professional local guide",
      "All entry fees",
      "Transport throughout the tour",
      "Cultural activities"
    ],
    exclusions: [
      "Flight/train tickets",
      "Travel insurance",
      "Personal expenses",
      "Tips for guide and driver",
      "Any adventure activities not mentioned"
    ],
    whatToBring: [
      "Rain jacket and umbrella",
      "Comfortable trekking shoes",
      "Quick-dry clothing",
      "Insect repellent",
      "Waterproof bag for electronics"
    ]
  },
  {
    id: 3,
    title: "Thar Desert Safari",
    location: "Rajasthan, India",
    duration: "6 Days",
    difficulty: "Easy",
    price: "₹38,999",
    image: "/thar.jpg",
    rating: 4.7,
    reviews: 312,
    bestTime: "November - February",
    groupSize: "6-15 people",
    category: "Desert Adventure",
    description: "Experience the golden sands of Thar Desert with camel safaris, desert camping, and royal Rajasthani culture.",
    highlights: [
      "Camel safari in golden dunes",
      "Desert camping under stars",
      "Folk music and dance performances",
      "Visit to traditional villages",
      "Sunrise and sunset in desert"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaisalmer",
        description: "Arrive in the Golden City of Jaisalmer.",
        activities: ["Fort exploration", "Haveli visits", "Evening at Gadisar Lake", "Traditional dinner"],
        meals: "Lunch, Dinner",
        accommodation: "Heritage hotel"
      },
      {
        day: 2,
        title: "Desert Safari Begins",
        description: "Head to Sam Sand Dunes for camel safari.",
        activities: ["Camel safari", "Sunset viewing", "Cultural program", "Desert camping"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Desert camp"
      },
      {
        day: 3,
        title: "Deep Desert Experience",
        description: "Explore remote desert areas and villages.",
        activities: ["Village visit", "Traditional crafts", "Desert games", "Star gazing"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Desert camp"
      }
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "All meals",
      "Camel safari",
      "Cultural performances",
      "All transfers",
      "Professional guide"
    ],
    exclusions: [
      "Flight/train tickets",
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Extra activities"
    ],
    whatToBring: [
      "Light cotton clothes",
      "Hat and sunglasses",
      "Strong sunscreen",
      "Comfortable walking shoes",
      "Camera"
    ]
  },
  {
    id: 4,
    title: "Kerala Backwaters Bliss",
    location: "Kerala, India",
    duration: "8 Days",
    difficulty: "Easy",
    price: "₹52,999",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500",
    rating: 4.8,
    reviews: 201,
    bestTime: "October - March",
    groupSize: "4-12 people",
    category: "Relaxation & Culture",
    description: "Cruise through Kerala's serene backwaters, experience Ayurvedic treatments, and explore spice plantations in God's Own Country.",
    highlights: [
      "Houseboat cruise in backwaters",
      "Authentic Ayurvedic spa treatments",
      "Spice plantation tours",
      "Traditional Kerala cuisine",
      "Kathakali dance performances"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description: "Explore the historic port city of Cochin.",
        activities: ["Chinese fishing nets", "Mattancherry Palace", "Jewish Synagogue", "Spice market"],
        meals: "Dinner",
        accommodation: "Heritage hotel in Cochin"
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        description: "Drive to the hill station famous for tea plantations.",
        activities: ["Tea plantation tour", "Tea museum visit", "Scenic drive", "Evening at leisure"],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Resort in Munnar"
      }
    ],
    inclusions: [
      "Houseboat accommodation",
      "All meals",
      "Ayurvedic treatments",
      "Professional guide",
      "All transfers",
      "Cultural shows"
    ],
    exclusions: [
      "Flight tickets",
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Extra spa treatments"
    ],
    whatToBring: [
      "Light cotton clothing",
      "Comfortable footwear",
      "Sunscreen",
      "Mosquito repellent",
      "Swimming clothes"
    ]
  },
  {
    id: 5,
    title: "Himalayan Base Camp Trek",
    location: "Himachal Pradesh, India",
    duration: "12 Days",
    difficulty: "Challenging",
    price: "₹75,999",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    rating: 4.9,
    reviews: 156,
    bestTime: "May - September",
    groupSize: "6-10 people",
    category: "Adventure Trekking",
    description: "Embark on an epic journey to reach the base camp of majestic Himalayan peaks with breathtaking views and challenging terrains.",
    highlights: [
      "Trek to 4,500m altitude",
      "Spectacular mountain views",
      "Alpine lakes and meadows",
      "Traditional mountain villages",
      "Professional mountaineering guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description: "Acclimatization day in Manali.",
        activities: ["Rest and acclimatization", "Equipment check", "Local sightseeing", "Trek briefing"],
        meals: "Dinner",
        accommodation: "Hotel in Manali"
      }
    ],
    inclusions: [
      "Camping accommodation",
      "All meals during trek",
      "Professional trek guide",
      "Safety equipment",
      "Permits and fees",
      "Transport to trek start"
    ],
    exclusions: [
      "Personal trekking gear",
      "Travel insurance",
      "Tips",
      "Personal expenses",
      "Emergency evacuation"
    ],
    whatToBring: [
      "Trekking boots",
      "Warm clothing layers",
      "Sleeping bag",
      "Trekking poles",
      "Personal medication"
    ]
  },
  {
    id: 6,
    title: "Golden Triangle Circuit",
    location: "Delhi-Agra-Jaipur, India",
    duration: "9 Days",
    difficulty: "Easy",
    price: "₹42,999",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500",
    rating: 4.6,
    reviews: 298,
    bestTime: "October - March",
    groupSize: "8-16 people",
    category: "Heritage & Culture",
    description: "Discover India's most iconic destinations - Delhi, Agra, and Jaipur - showcasing the country's rich history and architectural marvels.",
    highlights: [
      "Visit the magnificent Taj Mahal",
      "Explore Red Fort and India Gate",
      "Experience Amber Fort grandeur",
      "Shop at traditional bazaars",
      "Mughal and Rajput architecture"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "Explore India's vibrant capital city.",
        activities: ["Red Fort", "Jama Masjid", "Chandni Chowk", "India Gate"],
        meals: "Lunch, Dinner",
        accommodation: "4-star hotel in Delhi"
      }
    ],
    inclusions: [
      "4-star accommodations",
      "All meals",
      "Professional guide",
      "Monument entry fees",
      "AC transportation",
      "Cultural shows"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Shopping expenses"
    ],
    whatToBring: [
      "Comfortable walking shoes",
      "Light clothing",
      "Sunhat and sunglasses",
      "Camera",
      "Personal medications"
    ]
  },
  {
    id: 7,
    title: "Goa Beach Paradise",
    location: "Goa, India",
    duration: "5 Days",
    difficulty: "Easy",
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500",
    rating: 4.5,
    reviews: 187,
    bestTime: "November - February",
    groupSize: "6-14 people",
    category: "Beach & Relaxation",
    description: "Relax on pristine beaches, explore Portuguese heritage, and enjoy Goa's vibrant nightlife and delicious seafood.",
    highlights: [
      "Pristine beaches and water sports",
      "Portuguese colonial architecture",
      "Vibrant nightlife and beach parties",
      "Fresh seafood and Goan cuisine",
      "Spice plantation tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Arrive and settle into beach resort.",
        activities: ["Airport pickup", "Beach resort check-in", "Welcome drink", "Beach walk"],
        meals: "Dinner",
        accommodation: "Beach resort"
      }
    ],
    inclusions: [
      "Beach resort accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Sightseeing tours",
      "Water sports activities",
      "Sunset cruise"
    ],
    exclusions: [
      "Lunch and dinner (except welcome dinner)",
      "Alcoholic beverages",
      "Personal expenses",
      "Tips",
      "Travel insurance"
    ],
    whatToBring: [
      "Swimwear",
      "Sunscreen",
      "Beach towel",
      "Flip flops",
      "Light summer clothes"
    ]
  },
  {
    id: 8,
    title: "Northeast Tribal Discovery",
    location: "Assam-Arunachal Pradesh, India",
    duration: "11 Days",
    difficulty: "Moderate",
    price: "₹68,999",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    rating: 4.7,
    reviews: 94,
    bestTime: "October - April",
    groupSize: "6-12 people",
    category: "Culture & Adventure",
    description: "Explore India's unexplored Northeast, meet unique tribal communities, and witness diverse cultures in the Seven Sister States.",
    highlights: [
      "Meet diverse tribal communities",
      "Kaziranga National Park safari",
      "Brahmaputra river cruise",
      "Traditional festivals participation",
      "Unexplored landscapes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Guwahati",
        description: "Gateway to Northeast India.",
        activities: ["Kamakhya Temple", "Brahmaputra cruise", "Local markets", "Cultural orientation"],
        meals: "Lunch, Dinner",
        accommodation: "Hotel in Guwahati"
      }
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "All meals",
      "Professional cultural guide",
      "All permits and fees",
      "Safari and activities",
      "Cultural interactions"
    ],
    exclusions: [
      "Flight tickets",
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Extra activities"
    ],
    whatToBring: [
      "Warm clothing",
      "Comfortable trekking shoes",
      "Rain jacket",
      "Insect repellent",
      "Respectful clothing for tribal visits"
    ]
  },
  {
    id: 9,
    title: "Andaman Islands Adventure",
    location: "Andaman & Nicobar Islands, India",
    duration: "7 Days",
    difficulty: "Easy",
    price: "₹55,999",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
    rating: 4.8,
    reviews: 165,
    bestTime: "November - April",
    groupSize: "4-12 people",
    category: "Island Adventure",
    description: "Discover pristine islands, crystal-clear waters, coral reefs, and rich marine life in India's tropical paradise.",
    highlights: [
      "Scuba diving and snorkeling",
      "Pristine beaches and coral reefs",
      "Cellular Jail historical tour",
      "Island hopping adventures",
      "Rich marine biodiversity"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        description: "Arrive at the capital of Andaman Islands.",
        activities: ["Airport pickup", "Cellular Jail visit", "Light & Sound show", "City orientation"],
        meals: "Lunch, Dinner",
        accommodation: "Beach resort"
      }
    ],
    inclusions: [
      "Island accommodation",
      "All meals",
      "Island transfers",
      "Snorkeling equipment",
      "All entry fees",
      "Professional dive guide"
    ],
    exclusions: [
      "Flight tickets",
      "Scuba diving certification",
      "Personal expenses",
      "Tips",
      "Travel insurance"
    ],
    whatToBring: [
      "Swimwear",
      "Underwater camera",
      "Reef-safe sunscreen",
      "Light cotton clothes",
      "Flip flops"
    ]
  }
];

export default function ToursPage() {
  const [filteredTours, setFilteredTours] = useState(toursData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [expandedTour, setExpandedTour] = useState(null);

  const categories = ['All', 'Adventure', 'Nature & Culture', 'Desert Adventure', 'Relaxation & Culture', 'Adventure Trekking', 'Heritage & Culture', 'Beach & Relaxation', 'Culture & Adventure', 'Island Adventure'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];
  const priceRanges = ['All', 'Under ₹40,000', '₹40,000 - ₹60,000', 'Above ₹60,000'];

  const filterTours = () => {
    let filtered = toursData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(tour => 
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tour => tour.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(tour => tour.difficulty === selectedDifficulty);
    }

    // Price filter
    if (priceRange !== 'All') {
      filtered = filtered.filter(tour => {
        const price = parseInt(tour.price.replace('₹', '').replace(',', ''));
        if (priceRange === 'Under ₹40,000') return price < 40000;
        if (priceRange === '₹40,000 - ₹60,000') return price >= 40000 && price <= 60000;
        if (priceRange === 'Above ₹60,000') return price > 60000;
        return true;
      });
    }

    setFilteredTours(filtered);
  };

  React.useEffect(() => {
    filterTours();
  }, [searchTerm, selectedCategory, selectedDifficulty, priceRange]);

  const toggleExpanded = (tourId) => {
    setExpandedTour(expandedTour === tourId ? null : tourId);
  };

  return (
    <>
      <Head>
        <title>All Tours - Vibe Yatra | Best Adventure Tours in India</title>
        <meta name="description" content="Feel the vibe of incredible India with Vibe Yatra! Explore our amazing collection of adventure tours with detailed itineraries. Good vibes, great journeys await!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="pt-24 pb-20 bg-gradient-to-br from-[#F8F7F2] to-white min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Good Vibes, Great Journeys ✨
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Every destination has its own vibe - let us help you find yours! 
            From mountain vibes to beach vibes, your perfect yatra awaits! 🚀
          </p>
          <div className="mt-6 text-lg text-yellow-300">
            #VibeYatra #FeelTheVibeIndia
          </div>
        </section>

        {/* Filters Section */}
        <section className="px-6 md:px-20 py-12 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A4D54] mb-6 text-center">Find Your Perfect Adventure</h2>
            
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search tours, destinations, or activities..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-[#0A4D54] focus:outline-none transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                <select
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-[#0A4D54] focus:outline-none"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-lg font-semibold text-[#0A4D54] bg-[#F8F7F2] p-3 rounded-lg w-full text-center">
                  {filteredTours.length} Tours Found 🎯
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="px-6 md:px-20 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <TourCard 
                  key={tour.id} 
                  tour={tour} 
                  isExpanded={expandedTour === tour.id}
                  onToggleExpanded={() => toggleExpanded(tour.id)}
                />
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">😅</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">No Tours Found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Feel the Vibe? 🌟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy vibers who've discovered incredible experiences with Vibe Yatra!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#0A4D54] font-bold rounded-full hover:bg-gray-100 transition-colors">
              📞 Call Us Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors">
              💬 Get Your Vibe Check
            </button>
          </div>
          <div className="mt-6 text-sm text-yellow-300">
            #VibeYatra #YourVibeYourYatra #FeelTheVibeIndia
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Tour Card Component
function TourCard({ tour, isExpanded, onToggleExpanded }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-[#0A4D54]">
          {tour.difficulty}
        </div>
        <div className="absolute bottom-4 left-4 bg-[#0A4D54] text-white px-3 py-1 rounded-full text-sm font-bold">
          {tour.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-[#0A4D54] mb-1">{tour.title}</h3>
            <p className="text-gray-600 text-sm flex items-center">
              <span className="mr-1">📍</span> {tour.location}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#0A4D54]">{tour.price}</div>
            <div className="text-xs text-gray-500">per person</div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {tour.rating} ({tour.reviews} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {tour.description}
        </p>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <span className="mr-2">🗓️</span>
            <span className="text-gray-600">{tour.bestTime}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">👥</span>
            <span className="text-gray-600">{tour.groupSize}</span>
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={onToggleExpanded}
          className="w-full py-3 bg-[#0A4D54] text-white font-semibold rounded-xl hover:bg-[#0A4D54]/90 transition-colors mb-4"
        >
          {isExpanded ? '🔼 Hide Details' : '🔽 View Full Details'}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t pt-6 space-y-6">
            {/* Highlights */}
            <div>
              <h4 className="font-bold text-[#0A4D54] mb-3">✨ Tour Highlights</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-green-500">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Itinerary */}
            <div>
              <h4 className="font-bold text-[#0A4D54] mb-3">📋 Sample Itinerary</h4>
              <div className="space-y-3">
                {tour.itinerary.slice(0, 3).map((day, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-semibold text-[#0A4D54] mb-1">
                      Day {day.day}: {day.title}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{day.description}</div>
                    <div className="text-xs text-gray-500">
                      📍 Activities: {day.activities.slice(0, 2).join(', ')}
                      {day.activities.length > 2 && '...'}
                    </div>
                  </div>
                ))}
                {tour.itinerary.length > 3 && (
                  <div className="text-center text-sm text-gray-500 italic">
                    + {tour.itinerary.length - 3} more days...
                  </div>
                )}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-600 mb-3">✅ What's Included</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {tour.inclusions.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>
                      {item}
                    </li>
                  ))}
                  {tour.inclusions.length > 4 && (
                    <li className="text-xs text-gray-400 italic">+ more...</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-600 mb-3">❌ Not Included</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {tour.exclusions.slice(0, 4).map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-red-500">✗</span>
                      {item}
                    </li>
                  ))}
                  {tour.exclusions.length > 4 && (
                    <li className="text-xs text-gray-400 italic">+ more...</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="flex-1 py-3 bg-[#0A4D54] text-white font-semibold rounded-xl hover:bg-[#0A4D54]/90 transition-colors">
                🚀 Book Now
              </button>
              <button className="flex-1 py-3 border-2 border-[#0A4D54] text-[#0A4D54] font-semibold rounded-xl hover:bg-[#0A4D54] hover:text-white transition-colors">
                📞 Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}