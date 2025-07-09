"use client";
import { LegalIcons } from "./LegalIcons";

export default function Credentials({ currentContent, isArabic, isMobile }) {
  return (
    <section className="py-24 bg-logo-green text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 animate-fade-in-up ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
          <h3 className="text-4xl font-serif font-bold text-gold mb-4">
            {currentContent.credentials.title}
          </h3>
          <div className="elegant-divider mb-6" />
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {currentContent.credentials.subtitle}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* License */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.license}</h4>
            <p className="text-gray-300">{currentContent.credentials.licenseNum}</p>
            <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.licenseDesc}</p>
          </div>

          {/* Association */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.association}</h4>
            <p className="text-gray-300">{currentContent.credentials.associationDesc}</p>
            <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.associationStanding}</p>
          </div>

          {/* Established */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.established}</h4>
            <p className="text-gray-300">{currentContent.credentials.establishedYear}</p>
            <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.establishedDesc}</p>
          </div>
        </div>

        {/* Professional Badges */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center group transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 animate-icon-bounce group-hover:neon-glow animate-delay-500">
              <LegalIcons.Building className="w-6 h-6 text-logo-green" />
            </div>
            <div className="text-left">
              <p className="text-gold text-sm font-semibold">Registered with</p>
              <p className="text-lg font-bold">Law Association</p>
            </div>
          </div>
          <div className="flex items-center justify-center group transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 animate-icon-bounce group-hover:neon-glow animate-delay-1000">
              <LegalIcons.Star className="w-6 h-6 text-logo-green" />
            </div>
            <div className="text-left">
              <p className="text-gold text-sm font-semibold">Established</p>
              <p className="text-lg font-bold">2009</p>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gold/20 rounded-full border border-gold/30">
            <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z"/>
            </svg>
            <span className="text-gold font-semibold">حسين المحمد للمحاماة والاستشارات القانونية</span>
            <span className="text-gray-300 mx-2">•</span>
            <span className="text-white">Hussein Almohmmed Law & Legal Consultations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
