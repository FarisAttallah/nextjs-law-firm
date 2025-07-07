"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const ParticlesBackground = dynamic(() => import("../components/ParticlesBackground"), { ssr: false });
const AnimatedBackground = dynamic(() => import("../components/AnimatedBackground"), { ssr: false });
import { LegalIcons, FloatingIcon, IconGridBackground } from "../components/LegalIcons";

export default function Home() {
  const [isArabic, setIsArabic] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const content = {
    en: {
      nav: {
        about: "About",
        practice: "Practice Areas",
        contact: "Contact"
      },
      hero: {
        badge: "Licensed Legal Excellence • License #36128 • Registered with Law Association",
        title: "Justice. Integrity. Results.",
        subtitle: "Expert legal counsel for individuals and businesses, built on decades of experience and unwavering commitment to our clients.",
        button: "Schedule Consultation"
      },
      credentials: {
        title: "Professional Credentials",
        subtitle: "Recognized expertise and official registration ensuring the highest standards of legal practice",
        license: "Licensed Attorney",
        licenseNum: "License #36128",
        licenseDesc: "Active Legal License",
        association: "Law Association",
        associationDesc: "Registered Member",
        associationStanding: "Professional Standing",
        established: "Established",
        establishedYear: "Since 2009",
        establishedDesc: "15+ Years Experience",
        certified: "Certified",
        certifiedDesc: "Professional Practice",
        certifiedVerified: "Verified Credentials"
      },
      about: {
        badge: "15+ Years of Excellence",
        title: "Excellence in Legal Practice",
        text1: "For over 15 years, Hussein Almohmmed Law & Legal Consultations has been the trusted choice for discerning clients who demand exceptional legal representation. Our practice is built on a foundation of integrity, expertise, and unwavering dedication to achieving the best possible outcomes for our clients.",
        text2: "We understand that legal matters can be complex and stressful. That's why we combine our deep legal knowledge with a personalized approach, ensuring every client receives the attention and advocacy they deserve.",
        commitment: "Our Commitment",
        commitmentItems: [
          "Personalized attention to every case",
          "Transparent communication throughout",
          "Proven track record of success"
        ]
      },
      practice: {
        badge: "Comprehensive Legal Services",
        title: "Practice Areas",
        subtitle: "Our diverse expertise covers a wide range of legal disciplines, ensuring comprehensive representation for all your legal needs.",
        familyLaw: {
          title: "Family Law",
          desc: "Compassionate representation for divorce, custody, child support, and adoption services with a focus on protecting your family's interests."
        },
        criminalDefense: {
          title: "Criminal Defense",
          desc: "Vigorous defense for misdemeanors, felonies, and all criminal matters with dedicated advocacy to protect your rights and freedom."
        },
        businessLaw: {
          title: "Business Law",
          desc: "Strategic counsel for contract disputes, business formation, and commercial litigation to help your business thrive and succeed."
        }
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to discuss your legal needs? We're here to provide the expert counsel and personalized attention you deserve.",
        phone: "Phone",
        email: "Email",
        address: "Address",
        formTitle: "Schedule a Consultation",
        formName: "Full Name",
        formEmail: "Email",
        formPhone: "Phone",
        formMessage: "Message",
        formSubmit: "Send Message"
      }
    },
    ar: {
      nav: {
        about: "من نحن",
        practice: "مجالات الممارسة",
        contact: "اتصل بنا"
      },
      hero: {
        badge: "التميز القانوني المرخص • رخصة رقم 36128 • مسجل في نقابة المحامين",
        title: "العدالة. النزاهة. النتائج.",
        subtitle: "استشارات قانونية متخصصة للأفراد والشركات، مبنية على عقود من الخبرة والالتزام الثابت بعملائنا.",
        button: "حجز استشارة"
      },
      credentials: {
        title: "الشهادات المهنية",
        subtitle: "خبرة معترف بها وتسجيل رسمي يضمن أعلى معايير الممارسة القانونية",
        license: "محامي مرخص",
        licenseNum: "رخصة رقم 36128",
        licenseDesc: "رخصة قانونية نشطة",
        association: "نقابة المحامين",
        associationDesc: "عضو مسجل",
        associationStanding: "وضع مهني",
        established: "تأسس",
        establishedYear: "منذ 2009",
        establishedDesc: "خبرة 15+ سنة",
        certified: "معتمد",
        certifiedDesc: "ممارسة مهنية",
        certifiedVerified: "شهادات موثقة"
      },
      about: {
        badge: "15+ سنة من التميز",
        title: "التميز في الممارسة القانونية",
        text1: "لأكثر من 15 عامًا، كان مكتب حسين المحمد للمحاماة والاستشارات القانونية الخيار الموثوق للعملاء المميزين الذين يطالبون بتمثيل قانوني استثنائي. تُبنى ممارستنا على أساس من النزاهة والخبرة والتفاني الثابت لتحقيق أفضل النتائج الممكنة لعملائنا.",
        text2: "نحن نفهم أن المسائل القانونية يمكن أن تكون معقدة ومرهقة. لهذا السبب نجمع بين معرفتنا القانونية العميقة والنهج الشخصي، مما يضمن حصول كل عميل على الاهتمام والدعم الذي يستحقه.",
        commitment: "التزامنا",
        commitmentItems: [
          "اهتمام شخصي بكل قضية",
          "تواصل شفاف طوال الوقت",
          "سجل حافل من النجاح"
        ]
      },
      practice: {
        badge: "خدمات قانونية شاملة",
        title: "مجالات الممارسة",
        subtitle: "خبرتنا المتنوعة تغطي مجموعة واسعة من التخصصات القانونية، مما يضمن تمثيلاً شاملاً لجميع احتياجاتك القانونية.",
        familyLaw: {
          title: "قانون الأسرة",
          desc: "تمثيل رحيم للطلاق وحضانة الأطفال ونفقة الأطفال وخدمات التبني مع التركيز على حماية مصالح عائلتك."
        },
        criminalDefense: {
          title: "الدفاع الجنائي",
          desc: "دفاع قوي عن الجنح والجنايات وجميع المسائل الجنائية مع دعوة مخصصة لحماية حقوقك وحريتك."
        },
        businessLaw: {
          title: "قانون الأعمال",
          desc: "استشارة استراتيجية لنزاعات العقود وتكوين الأعمال والتقاضي التجاري لمساعدة عملك على الازدهار والنجاح."
        }
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "جاهز لمناقشة احتياجاتك القانونية؟ نحن هنا لتقديم الاستشارة المتخصصة والاهتمام الشخصي الذي تستحقه.",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        formTitle: "حجز استشارة",
        formName: "الاسم الكامل",
        formEmail: "البريد الإلكتروني",
        formPhone: "الهاتف",
        formMessage: "الرسالة",
        formSubmit: "إرسال الرسالة"
      }
    }
  };

  const currentContent = isArabic ? content.ar : content.en;

  return (
    <div className={`font-sans text-gray-800 bg-warm-white ${isArabic ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white elegant-shadow sticky top-0 z-50 h-20 md:h-24 border-b border-elegant-gray/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex justify-between items-center">
          <div className="flex items-center py-2 md:py-3">
              <img 
                src="/header.png" 
                alt="Hussein Almohmmed Law & Legal Consultations Logo" 
                className="h-20 md:h-24 w-auto drop-shadow-md filter"
              />
            <div className={`ml-3 md:ml-4 hidden sm:block ${isArabic ? 'mr-3 md:mr-4 ml-0' : ''}`}>
              <h1 className="text-base md:text-lg font-serif font-bold text-logo-green leading-tight">
                {isArabic ? 'حسين المحمد للمحاماة' : 'Hussein Almohmmed Law'}
              </h1>
              <p className="text-xs md:text-sm text-muted-gold font-medium">
                {isArabic ? 'والاستشارات القانونية' : 'Legal Consultations'}
              </p>
            </div>
          </div>
          <nav className={`hidden lg:flex text-sm xl:text-base font-semibold uppercase tracking-wider ${isArabic ? 'space-x-8 xl:space-x-12' : 'space-x-6 xl:space-x-8'}`}>
            <a href="#about" className={`hover-gold transition-all duration-300 hover:scale-105 relative group py-2 ${isArabic ? 'px-4 mx-2' : ''}`}>
              {currentContent.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#practice" className={`hover-gold transition-all duration-300 hover:scale-105 relative group py-2 ${isArabic ? 'px-4 mx-2' : ''}`}>
              {currentContent.nav.practice}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a href="#contact" className={`hover-gold transition-all duration-300 hover:scale-105 relative group py-2 ${isArabic ? 'px-4 mx-2' : ''}`}>
              {currentContent.nav.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          </nav>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center bg-logo-green text-white px-4 py-2 rounded-full font-semibold text-sm shadow-md hover:bg-muted-gold hover:text-navy transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
            </svg>
            {isArabic ? 'English' : 'العربية'}
          </button>
          
          {/* Mobile/Tablet menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-light-gold transition-colors duration-300 group"
          >
            <svg className="w-6 h-6 text-logo-green group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-b border-elegant-gray/20 elegant-shadow transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <nav className={`flex flex-col space-y-4 text-base font-semibold uppercase tracking-wider ${isArabic ? 'text-right' : 'text-left'}`}>
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className={`hover-gold transition-all duration-300 py-3 border-b border-elegant-gray/10 relative group ${isArabic ? 'px-4' : ''}`}
            >
              {currentContent.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a 
              href="#practice" 
              onClick={closeMobileMenu}
              className={`hover-gold transition-all duration-300 py-3 border-b border-elegant-gray/10 relative group ${isArabic ? 'px-4' : ''}`}
            >
              {currentContent.nav.practice}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className={`hover-gold transition-all duration-300 py-3 border-b border-elegant-gray/10 relative group ${isArabic ? 'px-4' : ''}`}
            >
              {currentContent.nav.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          </nav>
          
          {/* Mobile Language Toggle */}
          <div className="mt-6 pt-4 border-t border-elegant-gray/10">
            <button 
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center bg-logo-green text-white px-4 py-3 rounded-lg font-semibold text-sm shadow-md hover:bg-muted-gold hover:text-navy transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
              </svg>
              {isArabic ? 'English' : 'العربية'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-light-gold text-white py-36 overflow-hidden min-h-screen">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          <AnimatedBackground variant="legal" />
          <IconGridBackground />
        </div>
        
        {/* Enhanced Floating Law Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingIcon 
            icon={LegalIcons.Scale} 
            className="top-20 left-10 text-logo-green/30 hidden sm:block" 
            size="w-16 h-16"
            delay={0} 
          />
          <FloatingIcon 
            icon={LegalIcons.Shield} 
            className="top-32 right-16 text-gold/40 hidden md:block" 
            size="w-20 h-20"
            delay={1} 
          />
          <FloatingIcon 
            icon={LegalIcons.Building} 
            className="bottom-32 left-20 text-logo-green/25 hidden sm:block" 
            size="w-18 h-18"
            delay={2} 
          />
          <FloatingIcon 
            icon={LegalIcons.Crown} 
            className="top-1/2 right-8 text-gold/30 hidden md:block" 
            size="w-14 h-14"
            delay={0.5} 
          />
          <FloatingIcon 
            icon={LegalIcons.Contract} 
            className="bottom-20 right-32 text-logo-green/20 hidden lg:block" 
            size="w-12 h-12"
            delay={1.5} 
          />
        </div>
        
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-logo-green/10 via-transparent to-logo-green/20">
          <ParticlesBackground />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center glass-effect rounded-3xl shadow-2xl py-12 md:py-20 mb-8 border-l-4 md:border-l-8 border-logo-green animate-scale-in">
          {/* Animated Badge with Icons */}
          <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-logo-green/10 text-logo-green text-xs md:text-sm font-semibold mb-6 animate-shimmer">
            <LegalIcons.Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 animate-icon-bounce" />
            {currentContent.hero.badge}
          </div>
          
          <h2 className="text-3xl md:text-5xl xl:text-7xl font-serif font-bold mb-4 md:mb-6 text-logo-green leading-tight animate-fade-in-up">
            {currentContent.hero.title}
          </h2>
          <div className="elegant-divider mb-6 md:mb-8 animate-fade-in-up-delay-200" />
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up-delay-400">
            {currentContent.hero.subtitle}
          </p>
          <button className="inline-flex items-center bg-logo-green text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:bg-muted-gold hover:text-navy transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 hover-lift animate-fade-in-up-delay-600">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            {currentContent.hero.button}
            <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 transition-transform duration-300 hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 7l5 5-5 5M6 12h12"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-logo-green text-white py-8 border-t-4 border-gold relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 animate-gradient-shift opacity-20"></div>
        <div className="absolute inset-0 floating-particles"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center group transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 animate-icon-bounce group-hover:neon-glow">
                <LegalIcons.Crown className="w-6 h-6 text-logo-green" />
              </div>
              <div className="text-left">
                <p className="text-gold text-sm font-semibold">Licensed Attorney</p>
                <p className="text-lg font-bold">License #36128</p>
              </div>
            </div>
            <div className="flex items-center justify-center group transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 animate-icon-bounce group-hover:neon-glow animate-delay-500">
                <LegalIcons.Building className="w-6 h-6 text-logo-green" />
              </div>
              <div className="text-left">
                <p className="text-gold text-sm font-semibold">Registered with</p>
                <p className="text-lg font-bold">Law Association</p>
              </div>
            </div>
            <div className="flex items-center justify-center group transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4 animate-icon-bounce group-hover:neon-glow animate-delay-1000">
                <LegalIcons.Star className="w-6 h-6 text-logo-green" />
              </div>
              <div className="text-left">
                <p className="text-gold text-sm font-semibold">Established</p>
                <p className="text-lg font-bold">2009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-logo-green/10 text-logo-green text-sm font-semibold mb-4">
                <svg className="w-4 h-4 mr-2 animate-pulse-slow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                {currentContent.about.badge}
              </div>
              <h3 className="text-4xl font-serif font-bold text-logo-green mb-6 leading-tight">
                {currentContent.about.title}
              </h3>
              <div className="elegant-divider mb-6" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {currentContent.about.text1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.about.text2}
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              {/* Floating Achievement Icons */}
              <div className={`absolute -top-4 -left-4 w-8 h-8 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center shadow-lg hidden sm:flex ${isMobile ? '' : 'animate-float-mobile-disabled'}`}>
                <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className={`absolute -top-2 -right-6 w-6 h-6 md:w-10 md:h-10 bg-logo-green rounded-full flex items-center justify-center shadow-lg hidden sm:flex ${isMobile ? '' : 'animate-float-mobile-disabled-delay-1000'}`}>
                <svg className="w-3 h-3 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              <div className="bg-gradient-to-br from-gold to-light-gold rounded-2xl p-6 md:p-10 text-navy shadow-lg border border-gold/30 hover-lift">
                <div className="flex items-center mb-4">
                  <div className={`w-8 h-8 md:w-12 md:h-12 bg-logo-green rounded-full flex items-center justify-center mr-3 md:mr-4 ${isMobile ? '' : 'animate-pulse-mobile-disabled'}`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <h4 className="text-2xl font-serif font-bold">{currentContent.about.commitment}</h4>
                </div>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start hover-grow">
                    <div className="w-6 h-6 bg-logo-green rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {currentContent.about.commitmentItems[0]}
                  </li>
                  <li className="flex items-start hover-grow">
                    <div className="w-6 h-6 bg-logo-green rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {currentContent.about.commitmentItems[1]}
                  </li>
                  <li className="flex items-start hover-grow">
                    <div className="w-6 h-6 bg-logo-green rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {currentContent.about.commitmentItems[2]}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-gradient-to-br from-logo-green to-secondary-navy text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-gold mb-4">{currentContent.credentials.title}</h3>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {currentContent.credentials.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.license}</h4>
              <p className="text-gray-300">{currentContent.credentials.licenseNum}</p>
              <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.licenseDesc}</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.association}</h4>
              <p className="text-gray-300">{currentContent.credentials.associationDesc}</p>
              <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.associationStanding}</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.established}</h4>
              <p className="text-gray-300">{currentContent.credentials.establishedYear}</p>
              <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.establishedDesc}</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-logo-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gold mb-2">{currentContent.credentials.certified}</h4>
              <p className="text-gray-300">{currentContent.credentials.certifiedDesc}</p>
              <p className="text-sm text-gray-400 mt-1">{currentContent.credentials.certifiedVerified}</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gold/20 rounded-full border border-gold/30">
              <svg className="w-5 h-5 text-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z"/>
              </svg>
              <span className="text-gold font-semibold">حسين المحمد للمحاماة والاستشارات القانونية</span>
              <span className="text-gray-300 mx-2">•</span>
              <span className="text-white">Hussein Almohmmed Law & Legal Consultations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice" className="py-24 bg-light-gold relative overflow-hidden">
        {/* Circuit background pattern */}
        <div className="absolute inset-0">
          <AnimatedBackground variant="circuit" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
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
                      <p className="text-gray-600 text-sm">Click to learn more...</p>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-secondary-navy via-logo-green to-primary-navy p-6 text-white shadow-2xl">
                    <div className="flex flex-col h-full justify-center backdrop-blur-sm bg-black/20 rounded-xl p-4">
                      <LegalIcons.Shield className="w-12 h-12 text-gold mx-auto mb-4" />
                      <h4 className="text-xl font-serif font-bold mb-4 text-center text-white">{currentContent.practice.familyLaw.title}</h4>
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
                      <p className="text-gray-600 text-sm">Click to learn more...</p>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-secondary-navy via-logo-green to-primary-navy p-6 text-white shadow-2xl">
                    <div className="flex flex-col h-full justify-center backdrop-blur-sm bg-black/20 rounded-xl p-4">
                      <LegalIcons.Gavel className="w-12 h-12 text-gold mx-auto mb-4" />
                      <h4 className="text-xl font-serif font-bold mb-4 text-center text-white">{currentContent.practice.criminalDefense.title}</h4>
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
                      <p className="text-gray-600 text-sm">Click to learn more...</p>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-secondary-navy via-logo-green to-primary-navy p-6 text-white shadow-2xl">
                    <div className="flex flex-col h-full justify-center backdrop-blur-sm bg-black/20 rounded-xl p-4">
                      <LegalIcons.Building className="w-12 h-12 text-gold mx-auto mb-4" />
                      <h4 className="text-xl font-serif font-bold mb-4 text-center text-white">{currentContent.practice.businessLaw.title}</h4>
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

      {/* Testimonials */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold text-logo-green mb-4">What Our Clients Say</h3>
            <div className="elegant-divider mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl elegant-shadow border border-gold/20">
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
                "The team at Hussein Almohmmed Law & Legal Consultations provided exceptional guidance during my divorce proceedings. Their professionalism and expertise made a difficult time much more manageable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div>
                  <p className="font-semibold text-logo-green">Sarah Mitchell</p>
                  <p className="text-gray-600 text-sm">Client</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl elegant-shadow border border-gold/20">
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
                "Outstanding legal representation for my business formation. They made the complex process simple and guided me through every step with patience and expertise."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JR</span>
                </div>
                <div>
                  <p className="font-semibold text-logo-green">John Rodriguez</p>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl elegant-shadow border border-gold/20">
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
                "When I needed criminal defense, Hussein Almohmmed Law & Legal Consultations fought tirelessly for my rights. Their dedication and expertise resulted in the best possible outcome for my case."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-logo-green">Michael Johnson</p>
                  <p className="text-gray-600 text-sm">Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-logo-green text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
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
              <h4 className="text-2xl font-serif font-bold text-logo-green mb-6">{currentContent.contact.formTitle}</h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-logo-green mb-2">{currentContent.contact.formName}</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-logo-green mb-2">{currentContent.contact.formEmail}</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-logo-green mb-2">{currentContent.contact.formPhone}</label>
                  <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-logo-green mb-2">{currentContent.contact.formMessage}</label>
                  <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold"></textarea>
                </div>
                <button type="submit" className="w-full bg-logo-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors duration-300">
                  {currentContent.contact.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-navy text-white py-14 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h4 className="text-2xl font-serif font-bold text-gold mb-2">Hussein Almohmmed Law & Legal Consultations</h4>
              <p className="text-xl text-gold/80 mb-4 font-arabic">حسين المحمد للمحاماة والاستشارات القانونية</p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Excellence in legal representation with a commitment to integrity, professionalism, and client success.
              </p>
              <div className="bg-logo-green/20 border border-gold/30 rounded-lg p-4 mb-4">
                <p className="text-gold text-sm font-semibold mb-2">Official Registration</p>
                <div className="space-y-1 text-sm text-gray-300">
                  <p>• Licensed Attorney #36128</p>
                  <p>• Registered with Law Association</p>
                  <p>• Established 2009</p>
                </div>
              </div>
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
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">About</a></li>
                <li><a href="#practice" className="text-gray-400 hover:text-gold transition-colors">Practice Areas</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a></li>
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
    </div>
  );
}
