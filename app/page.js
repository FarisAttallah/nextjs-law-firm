"use client";
import { useLanguage, useMobile, useMobileMenu } from "../hooks";
import { content } from "../data/content";

// Component imports
import Header from "../components/Header";
import Hero from "../components/Hero";
import Credentials from "../components/Credentials";
import About from "../components/About";
import PracticeAreas from "../components/PracticeAreas";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // Custom hooks for state management
  const { isArabic, toggleLanguage } = useLanguage();
  const { isMobile } = useMobile();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  // Get current content based on language
  const currentContent = isArabic ? content.ar : content.en;

  return (
    <div className={`min-h-screen ${isArabic ? 'font-arabic' : ''}`}>
      {/* Header */}
      <Header 
        currentContent={currentContent}
        isArabic={isArabic}
        toggleLanguage={toggleLanguage}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />

      {/* Hero Section */}
      <Hero 
        currentContent={currentContent}
        isArabic={isArabic}
        isMobile={isMobile}
      />

      {/* Credentials Section */}
      <Credentials 
        currentContent={currentContent}
        isArabic={isArabic}
        isMobile={isMobile}
      />

      {/* About Section */}
      <About 
        currentContent={currentContent}
        isArabic={isArabic}
        isMobile={isMobile}
      />

      {/* Practice Areas Section */}
      <PracticeAreas 
        currentContent={currentContent}
        isArabic={isArabic}
        isMobile={isMobile}
      />

      {/* Testimonials Section */}
      <Testimonials 
        currentContent={currentContent}
        isArabic={isArabic}
      />

      {/* Contact Section */}
      <Contact 
        currentContent={currentContent}
        isArabic={isArabic}
      />

      {/* Footer */}
      <Footer 
        currentContent={currentContent}
        isArabic={isArabic}
      />
    </div>
  );
}
