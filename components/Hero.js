"use client";
import dynamic from "next/dynamic";
import { LegalIcons, FloatingIcon } from "./LegalIcons";

const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), { ssr: false });

export default function Hero({ currentContent, isArabic, isMobile }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-light-gold via-warm-white to-light-gold overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      {/* Floating Legal Icons */}
      {!isMobile && (
        <>
          <FloatingIcon 
            icon={LegalIcons.Scale} 
            className="top-32 left-10 text-logo-green animate-float" 
            delay={0}
            size="w-16 h-16"
          />
          <FloatingIcon 
            icon={LegalIcons.Gavel} 
            className="top-44 right-16 text-gold animate-float" 
            delay={1}
            size="w-12 h-12"
          />
          <FloatingIcon 
            icon={LegalIcons.Shield} 
            className="bottom-32 left-20 text-logo-green animate-float" 
            delay={2}
            size="w-14 h-14"
          />
          <FloatingIcon 
            icon={LegalIcons.Building} 
            className="top-1/2 right-8 text-gold animate-float" 
            delay={1.5}
            size="w-10 h-10"
          />
          <FloatingIcon 
            icon={LegalIcons.Contract} 
            className="bottom-44 right-24 text-logo-green animate-float" 
            delay={3}
            size="w-8 h-8"
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-logo-green/10 text-logo-green text-sm font-semibold mb-6 glass-effect animate-fade-in-up ${isArabic ? 'font-arabic' : ''}`}>
          <LegalIcons.Crown className="w-4 h-4 mr-2 animate-icon-bounce" />
          {currentContent.hero.badge}
        </div>

        {/* Main Title */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-logo-green mb-6 animate-fade-in-up-delay-200 ${isArabic ? 'font-arabic' : ''}`}>
          {currentContent.hero.title}
        </h1>

        {/* Elegant Divider */}
        <div className="elegant-divider mb-8 animate-fade-in-up-delay-400" />

        {/* Subtitle */}
        <p className={`text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-600 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
          {currentContent.hero.subtitle}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up-delay-600">
          <a
            href="#contact"
            className={`inline-flex items-center px-8 py-4 bg-gold text-logo-green font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 elegant-shadow hover:shadow-xl hover:scale-105 ${isArabic ? 'font-arabic' : ''}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {currentContent.hero.button}
          </a>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
