"use client";

export default function Footer({ currentContent, isArabic }) {
  return (
    <footer className="bg-secondary-navy text-white py-14 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className={isArabic ? 'font-arabic text-direction-rtl' : ''}>
            <h5 className="text-lg font-semibold mb-4 text-gold">
              {isArabic ? 'حسين المحمد للمحاماة' : 'Hussein Almohmmed Law'}
            </h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              {isArabic 
                ? 'مكتب قانوني متخصص يقدم خدمات قانونية متميزة للأفراد والشركات منذ عام 2009.'
                : 'Professional legal practice providing exceptional legal services to individuals and businesses since 2009.'
              }
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Legal Services</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Family Law</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Criminal Defense</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Business Law</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Legal Consultation</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#practice" className="hover:text-gold transition-colors">Practice Areas</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Office Hours</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="text-gold">Emergency consultations available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Hussein Almohmmed Law & Legal Consultations. All rights reserved.</p>
              <p className="text-gray-500 text-sm mt-1">Licensed Attorney #36128 • Registered with Law Association • Established 2009</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold transition-colors">Legal Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
