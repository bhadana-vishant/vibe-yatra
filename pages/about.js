import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Company Values
const companyValues = [
  {
    icon: "🌟",
    title: "Excellence in Service",
    description: "We strive to exceed expectations in every journey, ensuring comfort, safety, and memorable experiences for all our travelers."
  },
  {
    icon: "🤝",
    title: "Trust & Reliability",
    description: "Building lasting relationships through transparent communication, punctuality, and dependable service that you can count on."
  },
  {
    icon: "🌍",
    title: "Cultural Connection",
    description: "We believe travel is about stories, not just sights. Our local expertise helps you connect deeply with India's rich heritage."
  },
  {
    icon: "🛡️",
    title: "Safety First",
    description: "Your safety is our top priority. All our vehicles are regularly maintained and our drivers are professionally trained."
  }
];

// Team Members (Expert Drivers)
const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Senior Driver & Guide",
    experience: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    speciality: "Rajasthan & Golden Triangle",
    languages: ["Hindi", "English", "Rajasthani"],
    description: "Showing guests the hidden corners of my home, Rajasthan, is my passion. The best chai is always found on the roadside!",
    achievements: ["500+ Happy Tours", "Mountain Driving Expert", "Cultural Guide"]
  },
  {
    id: 2,
    name: "Sandeep Singh",
    role: "Mountain Specialist Driver",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
    speciality: "Himachal & Ladakh",
    languages: ["Hindi", "English", "Punjabi"],
    description: "I love driving in the mountains. Taking travelers safely through the Himalayas and seeing their joy is the best part of my job.",
    achievements: ["High Altitude Expert", "1000+ Mountain Tours", "Safety Award Winner"]
  },
  {
    id: 3,
    name: "Anil Sharma",
    role: "Luxury Travel Coordinator",
    experience: "15+ Years Experience",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    speciality: "Luxury & Corporate Travel",
    languages: ["Hindi", "English", "German"],
    description: "For me, safety and punctuality are everything. I want my guests to relax and enjoy their journey, knowing they are in good hands.",
    achievements: ["VIP Transport Expert", "Corporate Partner", "Customer Choice Award"]
  },
  {
    id: 4,
    name: "Vikram Patel",
    role: "South India Specialist",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    speciality: "Kerala & Karnataka",
    languages: ["Hindi", "English", "Malayalam", "Tamil"],
    description: "The backwaters of Kerala and the heritage of Karnataka hold special places in my heart. I love sharing these treasures with travelers.",
    achievements: ["Eco-Tourism Expert", "Heritage Tours", "Language Specialist"]
  }
];

// Company Statistics
const companyStats = [
  { number: "15,000+", label: "Happy Travelers", icon: "😊" },
  { number: "50+", label: "Premium Vehicles", icon: "🚗" },
  { number: "28", label: "States Covered", icon: "🗺️" },
  { number: "4.9/5", label: "Average Rating", icon: "⭐" },
  { number: "24/7", label: "Customer Support", icon: "📞" },
  { number: "8+", label: "Years Experience", icon: "🏆" }
];

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What is included in the price?",
    answer: "Our pricing includes a private, air-conditioned vehicle with a professional English-speaking driver, all fuel costs, tolls, state taxes, parking fees, and the driver's food and accommodation. This transparent pricing ensures there are no surprises."
  },
  {
    id: 2,
    question: "Are hotels and entrance fees included?",
    answer: "To give you maximum flexibility, we do not typically include hotels, monument entrance fees, or your meals in our pricing. This allows you to choose accommodation that fits your budget and style. We are happy to provide recommendations!"
  },
  {
    id: 3,
    question: "How do I book my tour?",
    answer: "Simply fill out the 'Plan Your Trip' form with your preferences or your own itinerary. We'll get back to you with a detailed proposal and quote. Once you are happy, we'll confirm your booking with a small advance payment."
  },
  {
    id: 4,
    question: "Is it safe to travel by road in India?",
    answer: "Yes, especially with a private, experienced driver. Our drivers are experts in navigating Indian roads safely and efficiently. They prioritize your well-being and adhere to all safety regulations. Traveling by private car is one of the safest and most comfortable ways to explore the country."
  },
  {
    id: 5,
    question: "What types of vehicles do you offer?",
    answer: "We offer a wide range of vehicles from luxury sedans (Mercedes, BMW, Audi) to SUVs (Fortuner, Scorpio) and larger vehicles like Tempo Travellers and luxury coaches for groups. All vehicles are well-maintained, air-conditioned, and regularly serviced."
  },
  {
    id: 6,
    question: "Do you provide English-speaking drivers?",
    answer: "Yes, all our drivers are proficient in English and Hindi. Many also speak regional languages. They are not just drivers but also serve as local guides who can share insights about the places you visit."
  },
  {
    id: 7,
    question: "Can I customize my itinerary?",
    answer: "Absolutely! We specialize in creating personalized itineraries based on your interests, budget, and time constraints. Whether you want to explore heritage sites, go on adventure tours, or experience local culture, we can tailor the perfect trip for you."
  },
  {
    id: 8,
    question: "What is your cancellation policy?",
    answer: "We understand that plans can change. We offer flexible cancellation policies depending on the timing of cancellation and the specific booking. Please contact us for detailed information about cancellation terms for your specific booking."
  }
];

// Milestones
const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Founded Vibe Yatra with a vision to provide authentic, personalized travel experiences across India."
  },
  {
    year: "2018",
    title: "First 1,000 Travelers",
    description: "Celebrated our first milestone of 1,000 happy travelers exploring India with us."
  },
  {
    year: "2020",
    title: "Safety First Initiative",
    description: "Introduced comprehensive safety protocols and vehicle sanitization during the pandemic."
  },
  {
    year: "2022",
    title: "Premium Fleet Expansion",
    description: "Added luxury vehicles and expanded our fleet to serve diverse travel needs across all budgets."
  },
  {
    year: "2024",
    title: "15,000+ Happy Travelers",
    description: "Reached the incredible milestone of serving over 15,000 satisfied customers from around the world."
  },
  {
    year: "2025",
    title: "Digital Innovation",
    description: "Launched our modern platform making booking and trip planning easier than ever before."
  }
];

export default function AboutPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <>
      <Head>
        <title>About Us - Our Story & Team | Vibe Yatra</title>
        <meta name="description" content="Discover the story behind Vibe Yatra. Meet our expert team of drivers and learn about our mission to provide authentic, safe, and memorable travel experiences across India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="pt-24 pb-20 bg-gradient-to-br from-[#F8F7F2] to-white min-h-screen">
        {/* Hero Section */}
        <section className="px-6 md:px-20 py-16 text-center bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our Vibe, Our Story 📖✨
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            We started Vibe Yatra because we believe the best way to see India is from the ground, 
            with the freedom to follow your curiosity and feel every moment! 🇮🇳
          </p>
          <div className="mt-4 text-lg text-yellow-300">
            #VibeYatra #OurStoryYourJourney
          </div>
        </section>

        {/* Our Story Section */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Story Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" 
                  alt="Founder of Vibe Yatra" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold text-[#0A4D54] mb-1">8+ Years</div>
                  <div className="text-gray-600">Of Excellence</div>
                </div>
              </div>
              
              {/* Story Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] mb-6">
                  Travel is about vibes, not just sights. 🌟
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    We're a small team of travelers, adventurers, and logistics nerds who were 
                    tired of the choice between rigid group tours and the stressful challenge of 
                    navigating India alone. We wanted something different: a way to experience 
                    the authentic, spontaneous magic of a road trip, but with the safety, comfort, 
                    and local expertise that makes a journey seamless.
                  </p>
                  
                  <p className="text-lg">
                    Vibe Yatra was born from that idea. We don't just provide cars and drivers. 
                    We provide a platform for your own personal story to unfold. We find the most 
                    passionate, professional, and personable drivers—true local guides—and pair them 
                    with travelers who crave a deeper connection to the places they visit.
                  </p>
                  
                  <p className="text-lg font-semibold text-[#0A4D54]">
                    Every journey with us brings good vibes and unforgettable memories! 🚗💫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="px-6 md:px-20 py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-12">
              Our Core Values 💎
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-[#F8F7F2] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A4D54] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Statistics */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Journey in Numbers 📊
            </h2>
            <p className="text-xl text-center mb-12 opacity-90">
              These numbers represent real people, real journeys, and real memories created! ✨
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Expert Drivers */}
        <section className="px-6 md:px-20 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-4">
              Meet Our Expert Drivers 👨‍✈️
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              More than just drivers, they're your local guides, cultural ambassadors, and travel companions 
              who make every journey special!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-br from-[#F8F7F2] to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-12">
              Our Journey Timeline 🛣️
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#0A4D54]/20 transform md:-translate-x-1/2"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#0A4D54] rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-[#0A4D54] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-20 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D54] text-center mb-4">
              Frequently Asked Questions ❓
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Got questions? We've got answers! Here are the most common questions from our travelers.
            </p>
            
            <div className="space-y-4">
              {faqData.map((faq) => (
                <FAQItem 
                  key={faq.id} 
                  faq={faq} 
                  isExpanded={expandedFAQ === faq.id}
                  onToggle={() => toggleFAQ(faq.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 py-16 bg-gradient-to-r from-[#0A4D54] to-[#0A4D54]/80 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Vibe? 📚✨</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of travelers who've discovered the real India with Vibe Yatra. 
            Your unforgettable yatra starts with good vibes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#0A4D54] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              🚀 Start Your Vibe Journey
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#0A4D54] transition-colors">
              📞 Vibe Check: +91-9999-999-999
            </button>
          </div>
          <div className="mt-4 text-sm text-yellow-300">
            #VibeYatra #YourVibeYourYatra #FeelTheVibeIndia
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Team Member Card Component
function TeamMemberCard({ member }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-[#0A4D54] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {member.experience}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A4D54] mb-1">{member.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{member.role}</p>
        
        <div className="mb-4">
          <div className="text-sm font-semibold text-gray-700 mb-2">🎯 Speciality:</div>
          <div className="text-sm text-gray-600">{member.speciality}</div>
        </div>
        
        <div className="mb-4">
          <div className="text-sm font-semibold text-gray-700 mb-2">🗣️ Languages:</div>
          <div className="flex flex-wrap gap-2">
            {member.languages.map((lang, index) => (
              <span key={index} className="px-2 py-1 bg-[#F8F7F2] text-[#0A4D54] text-xs rounded-full">
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full py-2 text-[#0A4D54] font-semibold hover:bg-[#F8F7F2] transition-colors rounded-lg"
        >
          {showDetails ? 'Hide Details ▲' : 'View Details ▼'}
        </button>
        
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic mb-4">"{member.description}"</p>
            
            <div>
              <div className="text-sm font-semibold text-gray-700 mb-2">🏆 Achievements:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                {member.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ faq, isExpanded, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#0A4D54] pr-4">{faq.question}</span>
        <span className={`text-[#0A4D54] transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}