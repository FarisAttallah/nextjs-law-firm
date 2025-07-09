"use client";

export default function Testimonials({ currentContent, isArabic }) {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Client",
      initials: "SM",
      text: "The team at Hussein Almohmmed Law & Legal Consultations provided exceptional guidance during my divorce proceedings. Their professionalism and expertise made a difficult time much more manageable."
    },
    {
      name: "John Rodriguez",
      role: "Business Owner",
      initials: "JR",
      text: "Outstanding legal representation for my business formation. They made the complex process simple and guided me through every step with patience and expertise."
    },
    {
      name: "Michael Johnson",
      role: "Client",
      initials: "MJ",
      text: "When I needed criminal defense, Hussein Almohmmed Law & Legal Consultations fought tirelessly for my rights. Their dedication and expertise resulted in the best possible outcome for my case."
    }
  ];

  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 ${isArabic ? 'font-arabic text-direction-rtl' : ''}`}>
          <h3 className="text-4xl font-serif font-bold text-logo-green mb-4">
            {isArabic ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
          </h3>
          <div className="elegant-divider mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? 'لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن تجربتهم معنا.'
              : "Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl elegant-shadow border border-gold/20">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-logo-green">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
