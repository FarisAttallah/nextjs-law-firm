"use client";
import dynamic from "next/dynamic";
import { LegalIcons } from "./LegalIcons";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), { ssr: false });

export default function PracticeAreas({ currentContent, isArabic, isMobile }) {
  return (
    <section id="practice" className="py-24 bg-light-gold relative overflow-hidden">
      {/* Circuit background pattern */}
      <div className="absolute inset-0">
        <AnimatedBackground variant="circuit" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 animate-fade-in-up ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-logo-green/10 text-logo-green text-sm font-semibold mb-4 glass-effect">
            <LegalIcons.Contract className="w-4 h-4 mr-2 animate-icon-bounce" />
            {currentContent.practice.badge}
          </div>
          <h3 className="text-4xl font-serif font-bold text-logo-green mb-4">{currentContent.practice.title}</h3>
          <div className="elegant-divider mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {currentContent.practice.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Family Law Card */}
          <div className="group transform-3d">
            <div className="flip-card h-80">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 md:p-8 elegant-shadow rounded-2xl border border-gold/20 glass-effect">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-logo-green rounded-full flex items-center justify-center mb-6 animate-icon-bounce neon-glow-green">
                      <LegalIcons.Shield className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-logo-green mb-4">{currentContent.practice.familyLaw.title}</h4>
                    <p className="text-gray-700 text-sm font-medium">Click to learn more...</p>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-primary-navy to-primary-navy p-6 text-white">
                  <div className="flex flex-col h-full justify-center">
                    <LegalIcons.Shield className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="text-xl font-serif font-bold mb-4 text-center">{currentContent.practice.familyLaw.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-100">
                      {currentContent.practice.familyLaw.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Criminal Defense Card */}
          <div className="group transform-3d">
            <div className="flip-card h-80">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 md:p-8 elegant-shadow rounded-2xl border border-gold/20 glass-effect">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-logo-green rounded-full flex items-center justify-center mb-6 animate-icon-bounce neon-glow-green animate-delay-500">
                      <LegalIcons.Gavel className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-logo-green mb-4">{currentContent.practice.criminalDefense.title}</h4>
                    <p className="text-gray-700 text-sm font-medium">Click to learn more...</p>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-primary-navy to-primary-navy p-6 text-white">
                  <div className="flex flex-col h-full justify-center">
                    <LegalIcons.Gavel className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="text-xl font-serif font-bold mb-4 text-center">{currentContent.practice.criminalDefense.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-100">
                      {currentContent.practice.criminalDefense.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Law Card */}
          <div className="group transform-3d">
            <div className="flip-card h-80">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white p-6 md:p-8 elegant-shadow rounded-2xl border border-gold/20 glass-effect">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 bg-logo-green rounded-full flex items-center justify-center mb-6 animate-icon-bounce neon-glow-green animate-delay-1000">
                      <LegalIcons.Building className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-logo-green mb-4">{currentContent.practice.businessLaw.title}</h4>
                    <p className="text-gray-700 text-sm font-medium">Click to learn more...</p>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-primary-navy to-primary-navy p-6 text-white">
                  <div className="flex flex-col h-full justify-center">
                    <LegalIcons.Building className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h4 className="text-xl font-serif font-bold mb-4 text-center">{currentContent.practice.businessLaw.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-100">
                      {currentContent.practice.businessLaw.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
