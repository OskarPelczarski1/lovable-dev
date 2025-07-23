
import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import EnhancedLogo from '@/components/EnhancedLogo';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', href: '#hero', icon: Home },
    { key: 'features', href: '#features' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'demo', href: '#demo' },
    { key: 'blog', href: '#blog' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 z-50 transition-colors duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with more spacing */}
          <div className="group cursor-pointer mr-8">
            <EnhancedLogo size="md" />
          </div>

          {/* Desktop Navigation with better spacing */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 font-medium relative group animate-fade-in flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {t(item.key as any)}
                <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-[calc(100%-2rem)] transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          {/* Language Switcher with spacing */}
          <div className="hidden md:block ml-8">
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:scale-110 transition-transform duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/20 dark:hover:to-orange-900/20 transition-all duration-300 rounded-xl mx-2 animate-slide-up flex items-center gap-3 font-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {t(item.key as any)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
