"use client";

export default function Contact({ currentContent, isArabic }) {
  return (
    <section id="contact" className="py-24 bg-logo-green text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={isArabic ? 'font-arabic text-direction-rtl' : ''}>
            <h3 className="text-4xl font-serif font-bold mb-6 text-gold">{currentContent.contact.title}</h3>
            <div className="elegant-divider mb-6" />
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {currentContent.contact.subtitle}
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gold text-sm">{currentContent.contact.phone}</p>
                  <p className="text-lg font-semibold">(302) 555-1234</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gold text-sm">{currentContent.contact.email}</p>
                  <p className="text-lg font-semibold">contact@husseinlaw.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gold text-sm">{currentContent.contact.address}</p>
                  <p className="text-lg font-semibold">123 Legal Plaza, Suite 400<br/>Downtown, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-2xl elegant-shadow">
            <h4 className={`text-2xl font-serif font-bold text-logo-green mb-6 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
              {currentContent.contact.formTitle}
            </h4>
            <form className="space-y-4">
              <div>
                <label className={`block text-sm font-medium text-logo-green mb-2 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
                  {currentContent.contact.formName}
                </label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label className={`block text-sm font-medium text-logo-green mb-2 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
                  {currentContent.contact.formEmail}
                </label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label className={`block text-sm font-medium text-logo-green mb-2 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
                  {currentContent.contact.formPhone}
                </label>
                <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label className={`block text-sm font-medium text-logo-green mb-2 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
                  {currentContent.contact.formMessage}
                </label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-gold text-logo-green py-3 px-6 rounded-lg font-semibold hover:bg-gold/90 transition-colors ${isArabic ? 'font-arabic' : ''}`}
              >
                {currentContent.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
