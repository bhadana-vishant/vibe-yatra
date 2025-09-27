
import React from "react";

export default function Hero() {
  return (
    <section className="relative h-[100vh] sm:h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white font-display overflow-hidden">
      {/* Background Image with Multiple Fallbacks */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Backup Background in case image fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D54] via-[#0A4D54]/80 to-[#2C7A7B]" />
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Your India,{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Your Vibe
          </span>
          <span className="text-yellow-400"> ✨</span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
          Feel the vibe of incredible India with personalized journeys, passionate local drivers, 
          and authentic experiences that create memories for a lifetime! 🇮🇳
        </p>
        
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-lg mx-auto">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-sm sm:text-base rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            🚀 Feel The Vibe Now
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold text-sm sm:text-base rounded-full hover:bg-white hover:text-[#0A4D54] transition-all duration-300 backdrop-blur-sm">
            📞 Start Your Yatra: +91-9999-999-999
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
          <div className="flex items-center">
            <span className="text-yellow-400 mr-2 text-sm">⭐⭐⭐⭐⭐</span>
            <span>4.9/5 Vibe Rating</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>15,000+ Happy Vibers</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-400 mr-2">🛡️</span>
            <span>Good Vibes Guaranteed</span>
          </div>
        </div>
        
        {/* Hashtag Section */}
        <div className="mt-6 sm:mt-8">
          <div className="text-xs sm:text-sm text-yellow-300 font-semibold">
            #VibeYatra #YourVibeYourYatra #FeelTheVibeIndia
          </div>
        </div>
      </div>
      
      {/* Floating Elements for Visual Appeal - Hidden on mobile for cleaner look */}
      <div className="absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse hidden md:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 lg:w-32 lg:h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse hidden md:block" />
      <div className="absolute top-1/2 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 rounded-full blur-lg animate-bounce hidden lg:block" />
      
      {/* Scroll Indicator - Adjusted for mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 opacity-80">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
