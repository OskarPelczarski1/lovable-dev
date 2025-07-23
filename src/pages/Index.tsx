
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import FinalCTASection from '@/components/FinalCTASection';
import { useTranslation } from '@/contexts/TranslationContext';
import { useEffect } from 'react';

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Force scroll to top and clear any URL hash
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional checks to ensure we stay at top
    const timeouts = [50, 100, 200];
    timeouts.forEach(delay => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      
      <div id="features">
        <FeaturesSection />
      </div>
      
      <div id="demo">
        <DemoSection />
      </div>
      
      <div id="blog">
        <BlogSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <FinalCTASection />
      
      {/* Enhanced Footer */}
      <footer className="bg-gray-950 text-white py-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold">Funnessa AI</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
                {t('footerDescription')}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>500+ {t('activeBusiness')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>99.9% {t('uptime')}</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">{t('product')}</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">{t('features')}</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">{t('demo')}</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">{t('howItWorks')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('contact')}</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">{t('support')}</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#blog" className="hover:text-white transition-colors">{t('blog')}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t('contact')}</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">{t('privacyPolicy')}</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">{t('termsOfService')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footerCopyright')}
            </p>
            <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm text-gray-400">
              <span>{t('availableLanguages')}</span>
              <div className="flex gap-1 flex-wrap">
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">🇵🇱 PL</span>
                <span className="bg-gray-800 px-2 py-1 rounded text-xs">🇺🇸 EN</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
