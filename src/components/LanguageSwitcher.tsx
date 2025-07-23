
import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import { LanguageCode } from '@/translations';

const languages = [
  { code: ('pl' as LanguageCode), name: 'Polish', flag: '🇵🇱', nativeName: 'Polski' },
  { code: ('en' as LanguageCode), name: 'English', flag: '🇺🇸', nativeName: 'English' },
];

const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (langCode: LanguageCode) => {
    console.log(`Switching to language: ${langCode}`);
    setLanguage(langCode);
    setIsOpen(false);
    
    // Simply change language without any navigation
    // The page will re-render with new translations
  };

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleToggleDropdown}
        className="flex items-center gap-2 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/50 dark:hover:to-orange-900/50 group"
      >
        <Globe className="w-5 h-5 group-hover:rotate-180 transition-all duration-500" />
        <span className="text-sm font-medium hidden md:block">
          {currentLang?.flag ?? '🌐'} {currentLang?.nativeName ?? 'Language'}
        </span>
        <ChevronDown className={`w-4 h-4 transition-all duration-500 ${isOpen ? 'rotate-180 scale-110' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden min-w-[200px] animate-fade-in animate-scale-in transform origin-top-right z-50">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang.code);
              }}
              className={`w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/20 dark:hover:to-orange-900/20 transition-all duration-300 flex items-center gap-3 transform hover:scale-105 hover:translate-x-1 border-b border-gray-200/50 dark:border-gray-700/50 last:border-b-0 animate-slide-up ${
                currentLanguage === lang.code ? 'bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-lg transition-all duration-300 hover:scale-125 hover:rotate-12">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium transition-all duration-200 hover:translate-x-1">{lang.nativeName}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 transition-all duration-200 hover:translate-x-1">{lang.name}</span>
              </div>
              {currentLanguage === lang.code && (
                <div className="ml-auto w-2 h-2 bg-amber-500 rounded-full animate-pulse animate-bounce-gentle"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
