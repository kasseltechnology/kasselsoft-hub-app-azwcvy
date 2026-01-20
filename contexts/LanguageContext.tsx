
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { I18n } from 'i18n-js';
import { getLocales } from 'expo-localization';

// Translation strings
const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    blogs: 'Blogs',
    contact: 'Contact',
    
    // Home screen
    welcome: 'Welcome to KasselSoft',
    tagline: 'AI • Software • Digital Growth',
    
    // Who We Are
    whoWeAre: 'Who We Are?',
    whoWeAreText: 'Kassel is a forward-thinking IT and training company established in 2023. We specialize in web and mobile app development, digital marketing, and data-driven solutions, helping organizations adapt and grow in the digital era.',
    innovativeTech: 'Innovative Technology',
    aiDevelopment: 'AI Development',
    mobileApps: 'Mobile Apps',
    
    // Why Partner
    whyPartner: 'Why Partner with Kassel?',
    innovativeSolutions: 'Innovative IT and training solutions',
    expertiseAI: 'Expertise in AI, Web, Mobile, and SEO',
    educationalInitiatives: 'Educational initiatives like Kassel Academy',
    flexibleModels: 'Flexible partnership models',
    
    aboutTitle: 'About KasselSoft',
    aboutText: 'Leading Information Technology & AI Development Company established in 2023, serving Jordan and UAE with innovative solutions.',
    featuredServices: 'Featured Services',
    latestBlogs: 'Latest Insights',
    upcomingEvents: 'Upcoming Events',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive IT & AI Solutions',
    webAppDev: 'Web & Mobile Development',
    webAppDevDesc: 'Custom applications built with cutting-edge technology',
    aiSolutions: 'AI & Computer Vision',
    aiSolutionsDesc: 'Intelligent solutions powered by advanced AI',
    digitalMarketing: 'Digital Marketing & SEO',
    digitalMarketingDesc: 'Grow your digital presence effectively',
    dataAnalysis: 'Data Analysis & Automation',
    dataAnalysisDesc: 'Transform data into actionable insights',
    training: 'Training & Partnerships',
    trainingDesc: 'Professional development and collaboration',
    requestService: 'Request Service',
    requestJordan: 'Jordan',
    requestUAE: 'UAE',
    
    // Projects
    projectsTitle: 'Our Projects',
    projectsSubtitle: 'Case Studies & Success Stories',
    viewProject: 'View Details',
    viewFullPortfolio: 'View Full Portfolio',
    visitWebsite: 'Visit Website',
    
    // Blogs
    blogsTitle: 'Blog & Insights',
    blogsSubtitle: 'Latest updates and knowledge',
    readMore: 'Read More',
    
    // Contact
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Let\'s discuss your project',
    jordan: 'Jordan Office',
    uae: 'UAE Office',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    email: 'Email',
    sendMessage: 'Send Message',
    
    // Mr. Kassel
    mrKassel: 'Mr. Kassel',
    mrKasselSubtitle: 'AI IELTS Trainer',
    mrKasselDesc: 'Your personal AI-powered IELTS preparation assistant with real-time feedback and progress tracking.',
    startTraining: 'Start Training',
    comingSoon: 'Coming Soon',
    visitKasselAcademy: 'Visit Kassel Academy',
    
    // Common
    learnMore: 'Learn More',
    viewAll: 'View All',
    loading: 'Loading...',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    projects: 'المشاريع',
    blogs: 'المدونة',
    contact: 'اتصل بنا',
    
    // Home screen
    welcome: 'مرحباً بك في كاسل سوفت',
    tagline: 'الذكاء الاصطناعي • البرمجيات • النمو الرقمي',
    
    // Who We Are
    whoWeAre: 'من نحن؟',
    whoWeAreText: 'كاسل هي شركة تكنولوجيا معلومات وتدريب تفكر في المستقبل تأسست عام 2023. نحن متخصصون في تطوير تطبيقات الويب والهاتف المحمول، والتسويق الرقمي، والحلول القائمة على البيانات، مما يساعد المؤسسات على التكيف والنمو في العصر الرقمي.',
    innovativeTech: 'تكنولوجيا مبتكرة',
    aiDevelopment: 'تطوير الذكاء الاصطناعي',
    mobileApps: 'تطبيقات الهاتف المحمول',
    
    // Why Partner
    whyPartner: 'لماذا الشراكة مع كاسل؟',
    innovativeSolutions: 'حلول مبتكرة لتكنولوجيا المعلومات والتدريب',
    expertiseAI: 'خبرة في الذكاء الاصطناعي والويب والهاتف المحمول وتحسين محركات البحث',
    educationalInitiatives: 'مبادرات تعليمية مثل أكاديمية كاسل',
    flexibleModels: 'نماذج شراكة مرنة',
    
    aboutTitle: 'عن كاسل سوفت',
    aboutText: 'شركة رائدة في تكنولوجيا المعلومات وتطوير الذكاء الاصطناعي تأسست عام 2023، نخدم الأردن والإمارات بحلول مبتكرة.',
    featuredServices: 'الخدمات المميزة',
    latestBlogs: 'أحدث المقالات',
    upcomingEvents: 'الفعاليات القادمة',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول شاملة لتكنولوجيا المعلومات والذكاء الاصطناعي',
    webAppDev: 'تطوير الويب والتطبيقات',
    webAppDevDesc: 'تطبيقات مخصصة بأحدث التقنيات',
    aiSolutions: 'الذكاء الاصطناعي والرؤية الحاسوبية',
    aiSolutionsDesc: 'حلول ذكية مدعومة بالذكاء الاصطناعي المتقدم',
    digitalMarketing: 'التسويق الرقمي وتحسين محركات البحث',
    digitalMarketingDesc: 'نمِّ حضورك الرقمي بفعالية',
    dataAnalysis: 'تحليل البيانات والأتمتة',
    dataAnalysisDesc: 'حوّل البيانات إلى رؤى قابلة للتنفيذ',
    training: 'التدريب والشراكات',
    trainingDesc: 'التطوير المهني والتعاون',
    requestService: 'اطلب الخدمة',
    requestJordan: 'الأردن',
    requestUAE: 'الإمارات',
    
    // Projects
    projectsTitle: 'مشاريعنا',
    projectsSubtitle: 'دراسات الحالة وقصص النجاح',
    viewProject: 'عرض التفاصيل',
    viewFullPortfolio: 'عرض المحفظة الكاملة',
    visitWebsite: 'زيارة الموقع',
    
    // Blogs
    blogsTitle: 'المدونة والرؤى',
    blogsSubtitle: 'آخر التحديثات والمعرفة',
    readMore: 'اقرأ المزيد',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'لنناقش مشروعك',
    jordan: 'مكتب الأردن',
    uae: 'مكتب الإمارات',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    sendMessage: 'إرسال رسالة',
    
    // Mr. Kassel
    mrKassel: 'السيد كاسل',
    mrKasselSubtitle: 'مدرب IELTS بالذكاء الاصطناعي',
    mrKasselDesc: 'مساعدك الشخصي المدعوم بالذكاء الاصطناعي للتحضير لاختبار IELTS مع ملاحظات فورية وتتبع التقدم.',
    startTraining: 'ابدأ التدريب',
    comingSoon: 'قريباً',
    visitKasselAcademy: 'زيارة أكاديمية كاسل',
    
    // Common
    learnMore: 'اعرف المزيد',
    viewAll: 'عرض الكل',
    loading: 'جاري التحميل...',
  },
};

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [i18n] = useState(() => {
    const i18nInstance = new I18n(translations);
    i18nInstance.enableFallback = true;
    i18nInstance.defaultLocale = 'en';
    return i18nInstance;
  });

  useEffect(() => {
    console.log('LanguageProvider: Initializing language detection');
    // Detect device language
    const locales = getLocales();
    const deviceLanguage = locales[0]?.languageCode;
    console.log('LanguageProvider: Device language detected:', deviceLanguage);
    
    if (deviceLanguage === 'ar') {
      setLanguageState('ar');
      i18n.locale = 'ar';
    } else {
      setLanguageState('en');
      i18n.locale = 'en';
    }
  }, [i18n]);

  const setLanguage = (lang: Language) => {
    console.log('LanguageProvider: Changing language to:', lang);
    setLanguageState(lang);
    i18n.locale = lang;
  };

  const t = (key: string): string => {
    return i18n.t(key);
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
