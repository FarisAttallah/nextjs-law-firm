"use client";

// Beautiful SVG Icons Collection
export const LegalIcons = {
  Scale: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      <path d="M7 14l2-2 2 2-2 2-2-2zM15 10l2-2 2 2-2 2-2-2z"/>
    </svg>
  ),
  
  Gavel: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19.95 4.05L15.95 0.05L13.54 2.46L17.54 6.46L19.95 4.05ZM8.54 11.46L4.95 15.05L0.95 11.05L8.54 3.46L12.54 7.46L8.54 11.46ZM20 18H4C2.9 18 2 18.9 2 20S2.9 22 4 22H20C21.1 22 22 21.1 22 20S21.1 18 20 18Z"/>
    </svg>
  ),
  
  Shield: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
    </svg>
  ),
  
  Contract: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
      <path d="M9,10V12H11V10M9,14V16H11V14M9,18V20H11V18M13,14V16H15V14M13,18V20H15V18"/>
    </svg>
  ),
  
  Building: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M3 21H21V19H19V5C19 3.9 18.1 3 17 3H15C13.9 3 13 3.9 13 5V7H11V5C11 3.9 10.1 3 9 3H7C5.9 3 5 3.9 5 5V19H3V21M7 5H9V19H7V5M15 5H17V19H15V5M13 9V19H11V9H13Z"/>
      <circle cx="8" cy="8" r="0.5"/>
      <circle cx="16" cy="8" r="0.5"/>
      <circle cx="8" cy="12" r="0.5"/>
      <circle cx="16" cy="12" r="0.5"/>
    </svg>
  ),
  
  Crown: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M5 16L3 5L7.5 10L12 4L16.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/>
    </svg>
  ),
  
  Star: ({ className = "w-6 h-6", ...props }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
    </svg>
  )
};

// Floating Icon Component
export function FloatingIcon({ icon: Icon, className = "", delay = 0, size = "w-12 h-12", ...props }) {
  return (
    <div 
      className={`absolute animate-float opacity-20 ${className}`}
      style={{ animationDelay: `${delay}s` }}
      {...props}
    >
      <Icon className={`${size} text-current`} />
    </div>
  );
}

// Icon Grid Background
export function IconGridBackground({ className = "" }) {
  const icons = [LegalIcons.Scale, LegalIcons.Shield, LegalIcons.Contract, LegalIcons.Building];
  
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-8 p-8 opacity-5">
        {[...Array(24)].map((_, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={i} className="flex items-center justify-center">
              <Icon className="w-8 h-8 text-logo-green animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
