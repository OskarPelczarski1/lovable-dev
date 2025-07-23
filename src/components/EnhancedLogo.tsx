
import React from 'react';

const EnhancedLogo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl', 
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:scale-110`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 animate-pulse opacity-75"></div>
        
        {/* Sparkle effects */}
        <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white/80 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        
        {/* Main F letter */}
        <span className={`${textSizeClasses[size]} font-bold text-white relative z-10 drop-shadow-lg transform hover:scale-110 transition-transform duration-300`}>
          F
        </span>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
      </div>
      
      <div className="flex flex-col">
        <span className={`${textSizeClasses[size]} font-bold bg-gradient-to-r from-gray-900 to-amber-600 dark:from-white dark:to-amber-400 bg-clip-text text-transparent hover:from-amber-600 hover:to-orange-600 transition-all duration-500`}>
          Funnessa
        </span>
        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium tracking-wider animate-pulse">
          AI POWERED
        </span>
      </div>
    </div>
  );
};

export default EnhancedLogo;
