"use client";

import { useEffect, useState } from 'react';

export default function AnimatedBackground({ variant = 'geometric', className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (variant === 'geometric') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-slow opacity-10 ${
                i % 2 === 0 ? 'bg-gold' : 'bg-logo-green'
              }`}
              style={{
                width: `${20 + i * 15}px`,
                height: `${20 + i * 15}px`,
                left: `${10 + i * 12}%`,
                top: `${15 + i * 10}%`,
                borderRadius: i % 3 === 0 ? '50%' : '10px',
                animationDelay: `${i * 0.5}s`,
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-logo-green/5 to-gold/10" />
      </div>
    );
  }

  if (variant === 'legal') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Legal-themed floating elements */}
        <div className="absolute inset-0">
          {/* Scales of Justice */}
          <div className="absolute top-20 left-10 animate-float text-logo-green/20 hidden sm:block">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          
          {/* Gavel */}
          <div className="absolute top-32 right-20 animate-float-delay-1000 text-gold/30 hidden md:block">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          
          {/* Law Books */}
          <div className="absolute bottom-32 left-16 animate-float-delay-2000 text-logo-green/15 hidden lg:block">
            <svg className="w-28 h-28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
          </div>
          
          {/* Building/Court */}
          <div className="absolute top-1/2 right-8 animate-float-delay-1500 text-gold/20 hidden xl:block">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
        </div>
        
        {/* Interactive light beams */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent"
          style={{
            transform: `translateX(${mousePosition.x * 0.1}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>
    );
  }

  // Circuit/tech pattern
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        {/* Circuit lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M 0 50 L 50 50 L 50 0 M 50 50 L 100 50" stroke="currentColor" strokeWidth="1" className="text-logo-green"/>
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-gold"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
    </div>
  );
}
