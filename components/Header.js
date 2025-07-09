"use client";
import { useState } from 'react';

export default function Header({ currentContent, isArabic, toggleLanguage, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="logo-container">
              <img 
                src="/header.png" 
                alt="Hussein Almohmmed Law & Legal Consultations" 
                className="h-16 md:h-18 w-auto object-contain logo-visible"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold text-logo-green">
                {isArabic ? 'حسين المحمد للمحاماة' : 'Hussein Almohmmed Law'}
              </h1>
              <p className="text-sm text-gray-600">
                {isArabic ? 'والاستشارات القانونية' : '& Legal Consultations'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#about" className="text-logo-green hover:text-gold transition-colors font-medium nav-link">
              {currentContent.nav.about}
              <div className="nav-underline"></div>
            </a>
            <a href="#practice" className="text-logo-green hover:text-gold transition-colors font-medium nav-link">
              {currentContent.nav.practice}
              <div className="nav-underline"></div>
            </a>
            <a href="#contact" className="text-logo-green hover:text-gold transition-colors font-medium nav-link">
              {currentContent.nav.contact}
              <div className="nav-underline"></div>
            </a>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg bg-gold text-logo-green font-semibold hover:bg-gold/90 transition-colors text-sm"
            >
              {isArabic ? 'EN' : 'عربي'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-logo-green hover:bg-gold/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gold/20">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className={`text-logo-green hover:text-gold transition-colors font-medium ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {currentContent.nav.about}
              </a>
              <a
                href="#practice"
                onClick={closeMobileMenu}
                className={`text-logo-green hover:text-gold transition-colors font-medium ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {currentContent.nav.practice}
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className={`text-logo-green hover:text-gold transition-colors font-medium ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {currentContent.nav.contact}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
