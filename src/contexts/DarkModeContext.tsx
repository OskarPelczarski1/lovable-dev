import React, { createContext, useContext, useEffect, useState } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Always dark mode

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    // Do nothing - always keep dark mode
  };

  return (
    <DarkModeContext.Provider value={{ darkMode: true, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
