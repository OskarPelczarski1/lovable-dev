
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, LanguageCode, TranslationKey } from '@/translations';

interface TranslationContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('pl'); // Start with Polish

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage][key] || translations.pl[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
