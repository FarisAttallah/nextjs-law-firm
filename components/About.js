"use client";
import dynamic from "next/dynamic";
import { LegalIcons } from "./LegalIcons";

const AnimatedBackground = dynamic(() => import("./AnimatedBackground"), { ssr: false });

export default function About({ currentContent, isArabic, isMobile }) {
  return (
    <section id="about" className="py-24 bg-warm-white relative overflow-hidden">
      {/* Legal themed background */}
      <div className="absolute inset-0">
        <AnimatedBackground variant="legal" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`animate-fade-in-up ${isArabic ? 'font-arabic text-direction-rtl lg:order-2' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-logo-green/10 text-logo-green text-sm font-semibold mb-6 glass-effect">
              <LegalIcons.Star className="w-4 h-4 mr-2 animate-icon-bounce" />
              {currentContent.about.badge}
            </div>
            <h3 className="text-4xl font-serif font-bold text-logo-green mb-6">
              {currentContent.about.title}
            </h3>
            <div className="elegant-divider mb-6" />
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {currentContent.about.text1}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {currentContent.about.text2}
            </p>
            
            {/* Commitment Section */}
            <div className="bg-white p-8 rounded-2xl elegant-shadow border border-gold/20 glass-effect">
              <h4 className="text-xl font-serif font-bold text-logo-green mb-4 flex items-center">
                <LegalIcons.Shield className="w-6 h-6 mr-3 text-gold animate-icon-bounce" />
                {currentContent.about.commitment}
              </h4>
              <ul className="space-y-3">
                {currentContent.about.commitmentItems.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative animate-fade-in-up-delay-200 ${isArabic ? 'lg:order-1' : ''}`}>
            <div className="relative bg-gradient-to-br from-logo-green to-secondary-navy p-12 rounded-3xl text-white elegant-shadow-lg overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center animate-pulse-slow">
                    <LegalIcons.Scale className="w-12 h-12 text-logo-green" />
                  </div>
                </div>
                
                <h4 className="text-2xl font-serif font-bold text-center mb-4 text-gold">
                  {isArabic ? '15+ سنة من التميز' : '15+ Years of Excellence'}
                </h4>
                
                <p className="text-center text-white/90 leading-relaxed">
                  {isArabic 
                    ? 'خبرة مثبتة في تقديم أفضل الخدمات القانونية مع التزام ثابت بالنزاهة والتميز المهني'
                    : 'Proven expertise in delivering exceptional legal services with unwavering commitment to integrity and professional excellence'
                  }
                </p>
                
                {/* Floating elements */}
                {!isMobile && (
                  <>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold/30 rounded-full animate-float" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold/20 rounded-full animate-float-delay-1000" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
