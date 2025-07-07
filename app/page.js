'use client';

import { useState } from 'react';

export default function Home() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: {
      firmName: "Attallah Law Firm",
      nav: {
        about: "About",
        practice: "Practice Areas",
        contact: "Contact"
      },
      hero: {
        title: "Justice. Integrity. Results.",
        subtitle: "Expert legal counsel for individuals and businesses, built on decades of experience and unwavering commitment to our clients.",
        cta: "Schedule Consultation"
      },
      about: {
        title: "Excellence in Legal Practice",
        text1: "For over 15 years, Attallah Law Firm has been the trusted choice for discerning clients who demand exceptional legal representation. Our practice is built on a foundation of integrity, expertise, and unwavering dedication to achieving the best possible outcomes for our clients.",
        text2: "We understand that legal matters can be complex and stressful. That's why we combine our deep legal knowledge with a personalized approach, ensuring every client receives the attention and advocacy they deserve.",
        commitmentTitle: "Our Commitment",
        commitments: [
          "Personalized attention to every case",
          "Transparent communication throughout",
          "Proven track record of success"
        ]
      },
      practice: {
        title: "Practice Areas",
        subtitle: "Our diverse expertise covers a wide range of legal disciplines, ensuring comprehensive representation for all your legal needs.",
        areas: [
          {
            title: "Family Law",
            description: "Compassionate representation for divorce, custody, child support, and adoption services with a focus on protecting your family's interests."
          },
          {
            title: "Criminal Defense",
            description: "Vigorous defense for misdemeanors, felonies, and all criminal matters with dedicated advocacy to protect your rights and freedom."
          },
          {
            title: "Business Law",
            description: "Strategic counsel for contract disputes, business formation, and commercial litigation to help your business thrive and succeed."
          }
        ]
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.",
        reviews: [
          {
            text: "The team at Attallah Law Firm provided exceptional guidance during my divorce proceedings. Their professionalism and expertise made a difficult time much more manageable.",
            name: "Sarah Mitchell",
            role: "Client"
          },
          {
            text: "Outstanding legal representation for my business formation. They made the complex process simple and guided me through every step with patience and expertise.",
            name: "John Rodriguez",
            role: "Business Owner"
          },
          {
            text: "When I needed criminal defense, Attallah Law Firm fought tirelessly for my rights. Their dedication and expertise resulted in the best possible outcome for my case.",
            name: "Michael Johnson",
            role: "Client"
          }
        ]
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to discuss your legal needs? We're here to provide the expert counsel and personalized attention you deserve.",
        phone: "Phone",
        email: "Email",
        address: "Address",
        formTitle: "Schedule a Consultation",
        form: {
          fullName: "Full Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          submit: "Send Message"
        }
      },
      footer: {
        description: "Excellence in legal representation with a commitment to integrity, professionalism, and client success.",
        quickLinks: "Quick Links",
        officeHours: "Office Hours",
        hours: {
          weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
          saturday: "Saturday: 9:00 AM - 2:00 PM",
          sunday: "Sunday: Closed",
          emergency: "Emergency consultations available"
        },
        links: {
          about: "About",
          practice: "Practice Areas",
          contact: "Contact",
          privacy: "Privacy Policy"
        },
        copyright: "All rights reserved."
      }
    },
    ar: {
      firmName: "مكتب عطا الله للمحاماة",
      nav: {
        about: "من نحن",
        practice: "مجالات الممارسة",
        contact: "تواصل معنا"
      },
      hero: {
        title: "العدالة. النزاهة. النتائج.",
        subtitle: "استشارات قانونية متخصصة للأفراد والشركات، مبنية على عقود من الخبرة والالتزام الثابت تجاه عملائنا.",
        cta: "احجز استشارة"
      },
      about: {
        title: "التميز في الممارسة القانونية",
        text1: "لأكثر من 15 عاماً، كان مكتب عطا الله للمحاماة الخيار الموثوق للعملاء المميزين الذين يطلبون تمثيلاً قانونياً استثنائياً. ممارستنا مبنية على أساس من النزاهة والخبرة والتفاني الثابت في تحقيق أفضل النتائج الممكنة لعملائنا.",
        text2: "نحن نفهم أن المسائل القانونية يمكن أن تكون معقدة ومرهقة. لهذا السبب نجمع بين معرفتنا القانونية العميقة ونهجنا الشخصي، مما يضمن حصول كل عميل على الاهتمام والدعم الذي يستحقه.",
        commitmentTitle: "التزامنا",
        commitments: [
          "اهتمام شخصي بكل قضية",
          "تواصل شفاف طوال الوقت",
          "سجل حافل من النجاح"
        ]
      },
      practice: {
        title: "مجالات الممارسة",
        subtitle: "خبرتنا المتنوعة تغطي مجموعة واسعة من التخصصات القانونية، مما يضمن تمثيلاً شاملاً لجميع احتياجاتك القانونية.",
        areas: [
          {
            title: "قانون الأسرة",
            description: "تمثيل رحيم للطلاق وحضانة الأطفال ونفقة الأطفال وخدمات التبني مع التركيز على حماية مصالح عائلتك."
          },
          {
            title: "الدفاع الجنائي",
            description: "دفاع قوي في الجنح والجنايات وجميع المسائل الجنائية مع دعوة مخصصة لحماية حقوقك وحريتك."
          },
          {
            title: "قانون الأعمال",
            description: "استشارة استراتيجية لنزاعات العقود وتكوين الأعمال والتقاضي التجاري لمساعدة عملك على الازدهار والنجاح."
          }
        ]
      },
      testimonials: {
        title: "آراء عملائنا",
        subtitle: "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن تجربتهم معنا.",
        reviews: [
          {
            text: "قدم فريق مكتب عطا الله للمحاماة إرشادات استثنائية أثناء إجراءات الطلاق. احترافيتهم وخبرتهم جعلت الوقت الصعب أكثر قابلية للإدارة.",
            name: "سارة ميتشل",
            role: "عميل"
          },
          {
            text: "تمثيل قانوني متميز لتكوين شركتي. لقد جعلوا العملية المعقدة بسيطة وأرشدوني خلال كل خطوة بصبر وخبرة.",
            name: "جون رودريغيز",
            role: "صاحب عمل"
          },
          {
            text: "عندما احتجت للدفاع الجنائي، قاتل مكتب عطا الله للمحاماة بلا كلل من أجل حقوقي. تفانيهم وخبرتهم أسفرت عن أفضل نتيجة ممكنة لقضيتي.",
            name: "مايكل جونسون",
            role: "عميل"
          }
        ]
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "مستعد لمناقشة احتياجاتك القانونية؟ نحن هنا لتقديم الاستشارة المتخصصة والاهتمام الشخصي الذي تستحقه.",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        formTitle: "احجز استشارة",
        form: {
          fullName: "الاسم الكامل",
          email: "البريد الإلكتروني",
          phone: "الهاتف",
          message: "الرسالة",
          submit: "إرسال الرسالة"
        }
      },
      footer: {
        description: "التميز في التمثيل القانوني مع الالتزام بالنزاهة والاحترافية ونجاح العملاء.",
        quickLinks: "روابط سريعة",
        officeHours: "ساعات العمل",
        hours: {
          weekdays: "الاثنين - الجمعة: 8:00 صباحاً - 6:00 مساءً",
          saturday: "السبت: 9:00 صباحاً - 2:00 مساءً",
          sunday: "الأحد: مغلق",
          emergency: "استشارات الطوارئ متاحة"
        },
        links: {
          about: "من نحن",
          practice: "مجالات الممارسة",
          contact: "تواصل معنا",
          privacy: "سياسة الخصوصية"
        },
        copyright: "جميع الحقوق محفوظة."
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <div className={`font-sans text-gray-800 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white elegant-shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-gold">{currentContent.firmName}</h1>
          <div className="flex items-center space-x-8">
            <nav className={`space-x-8 text-sm font-medium uppercase tracking-wider ${isRTL ? 'space-x-reverse' : ''}`}>
              <a href="#about" className="hover-gold transition-colors duration-300">{currentContent.nav.about}</a>
              <a href="#practice" className="hover-gold transition-colors duration-300">{currentContent.nav.practice}</a>
              <a href="#contact" className="hover-gold transition-colors duration-300">{currentContent.nav.contact}</a>
            </nav>
            <button
              onClick={toggleLanguage}
              className="bg-gold text-navy px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 text-sm"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy to-secondary-navy text-white py-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-gold leading-tight">
            {currentContent.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentContent.hero.subtitle}
          </p>
          <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
            {currentContent.hero.cta}
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold text-navy mb-6 leading-tight">
                {currentContent.about.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {currentContent.about.text1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.about.text2}
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gold to-yellow-400 rounded-lg p-8 text-navy">
                <h4 className="text-2xl font-serif font-bold mb-4">{currentContent.about.commitmentTitle}</h4>
                <ul className="space-y-3 text-lg">
                  {currentContent.about.commitments.map((commitment, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-navy font-bold mr-2">•</span>
                      {commitment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-navy mb-4">{currentContent.practice.title}</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.practice.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.practice.areas.map((area, index) => (
              <div key={index} className="bg-white p-8 elegant-shadow rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>}
                    {index === 1 && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>}
                    {index === 2 && <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>}
                  </svg>
                </div>
                <h4 className="text-2xl font-serif font-bold text-navy mb-4">{area.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-light-gold">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-navy mb-4">{currentContent.testimonials.title}</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentContent.testimonials.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg elegant-shadow">
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
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-navy font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{review.name}</p>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-6 text-gold">{currentContent.contact.title}</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {currentContent.contact.subtitle}
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{currentContent.contact.phone}</p>
                    <p className="text-lg font-semibold">(302) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{currentContent.contact.email}</p>
                    <p className="text-lg font-semibold">contact@attallahlaw.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{currentContent.contact.address}</p>
                    <p className="text-lg font-semibold">123 Legal Plaza, Suite 400<br/>Downtown, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg elegant-shadow">
              <h4 className="text-2xl font-serif font-bold text-navy mb-6">{currentContent.contact.formTitle}</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.contact.form.fullName}</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.contact.form.email}</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.contact.form.phone}</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{currentContent.contact.form.message}</label>
                  <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"></textarea>
                </div>
                <button type="submit" className="w-full bg-gold text-navy py-3 px-6 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300">
                  {currentContent.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-serif font-bold text-gold mb-4">{currentContent.firmName}</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                {currentContent.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">{currentContent.footer.quickLinks}</h5>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">{currentContent.footer.links.about}</a></li>
                <li><a href="#practice" className="text-gray-400 hover:text-gold transition-colors">{currentContent.footer.links.practice}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">{currentContent.footer.links.contact}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">{currentContent.footer.links.privacy}</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">{currentContent.footer.officeHours}</h5>
              <ul className="space-y-2 text-gray-400">
                <li>{currentContent.footer.hours.weekdays}</li>
                <li>{currentContent.footer.hours.saturday}</li>
                <li>{currentContent.footer.hours.sunday}</li>
                <li className="text-gold">{currentContent.footer.hours.emergency}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {currentContent.firmName}. {currentContent.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
