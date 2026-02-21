import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white font-display overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animate-gradientShift" style={{
        background: 'linear-gradient(135deg, rgba(10,77,84,0.88) 0%, rgba(10,77,84,0.72) 40%, rgba(15,60,70,0.65) 60%, rgba(228,168,74,0.35) 100%)',
        backgroundSize: '200% 200%',
      }} />

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(228,168,74,0.4) 0%, transparent 70%)',
            top: '-10%', right: '-5%',
            animationDuration: '8s',
          }}
        />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-15 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(56,189,190,0.35) 0%, transparent 70%)',
            bottom: '-8%', left: '-5%',
            animationDuration: '10s',
            animationDelay: '2s',
          }}
        />
        <div className="absolute w-[250px] h-[250px] rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            top: '30%', left: '15%',
            animationDuration: '12s',
            animationDelay: '4s',
          }}
        />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(228,168,74,0.25) 0%, transparent 70%)',
            top: '60%', right: '20%',
            animationDuration: '9s',
            animationDelay: '1s',
          }}
        />

        {/* Tiny floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              animationDuration: `${6 + i * 1.5}s`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-white/[0.12]">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-white/90">{t('hero.badge')}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight">
            {t('hero.title')}
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                {t('hero.titleHighlight')}
              </span>
              {/* Decorative underline */}
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400/0 via-amber-400/60 to-yellow-400/0 rounded-full" />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-white/75 max-w-2xl mx-auto leading-relaxed font-body font-light">
            {t('hero.subtitle')}
          </p>
        </div>

      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F7F2] dark:from-gray-900 to-transparent" />
    </section>
  );
}
