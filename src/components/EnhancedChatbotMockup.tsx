
import React, { useState, useEffect } from 'react';
import { Camera, Upload, Bot, User, Send, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const EnhancedChatbotMockup = () => {
  const { t, currentLanguage } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const demoFlow = currentLanguage === 'pl' ? [
    { type: 'bot', text: "Cześć! Jestem Funnessa AI. Pomogę Ci znaleźć idealne meble!" },
    { type: 'user', text: "Szukam sofy do salonu" },
    { type: 'bot', text: "Świetnie! Pokaż mi zdjęcie swojego salonu, a zaproponuję najlepsze opcje." },
    { 
      type: 'user', 
      isPhoto: true,
      text: "Oto mój salon",
      photoUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
    },
    { 
      type: 'bot', 
      text: "Analizuję Twoje zdjęcie...",
      isAnalyzing: true
    },
    { 
      type: 'bot', 
      text: "Znalazłem 3 idealne sofy dla Twojego stylu!",
      suggestions: [
        { name: "Sofa Modułowa Scandi", price: "2,899 PLN", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80" },
        { name: "Sofa Minimalistyczna", price: "3,299 PLN", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=200&q=80" },
        { name: "Sofa Vintage", price: "2,599 PLN", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80" }
      ]
    }
  ] : [
    { type: 'bot', text: "Hi! I'm Funnessa AI. I'll help you find the perfect furniture!" },
    { type: 'user', text: "I'm looking for a living room sofa" },
    { type: 'bot', text: "Great! Show me a photo of your living room and I'll suggest the best options." },
    { 
      type: 'user', 
      isPhoto: true,
      text: "Here's my living room",
      photoUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80"
    },
    { 
      type: 'bot', 
      text: "Analyzing your photo...",
      isAnalyzing: true
    },
    { 
      type: 'bot', 
      text: "Found 3 perfect sofas for your style!",
      suggestions: [
        { name: "Scandinavian Sectional", price: "$1,299", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80" },
        { name: "Minimalist Sofa", price: "$1,499", image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=200&q=80" },
        { name: "Vintage Couch", price: "$1,199", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < demoFlow.length) {
        if (demoFlow[currentStep].isAnalyzing) {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setCurrentStep(prev => prev + 1);
          }, 2000);
        } else {
          setCurrentStep(prev => prev + 1);
        }
      } else {
        // Reset after showing all messages
        setTimeout(() => {
          setCurrentStep(0);
        }, 5000);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentStep, demoFlow]);

  const displayedMessages = demoFlow.slice(0, currentStep);

  return (
    <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 w-full max-w-md animate-fade-in hover:scale-105 transition-all duration-500">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10 dark:border-gray-700/20">
        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <Bot className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">Funnessa AI</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/70 text-sm font-medium">
              {currentLanguage === 'pl' ? 'Aktywny - Demo' : 'Active - Demo'}
            </span>
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto space-y-4 mb-6 scrollbar-thin scrollbar-thumb-amber-500/20">
        {displayedMessages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 animate-fade-in ${
              message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
              message.type === 'user' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                : 'bg-gradient-to-r from-amber-500 to-orange-500'
            }`}>
              {message.type === 'user' ? (
                <User className="w-5 h-5 text-white" />
              ) : (
                <Bot className="w-5 h-5 text-white" />
              )}
            </div>
            
            <div className={`max-w-[250px] ${message.type === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
              {message.isPhoto ? (
                <div className="bg-white/20 dark:bg-gray-800/20 rounded-xl p-3 backdrop-blur-sm">
                  <img 
                    src={message.photoUrl} 
                    alt="Living room" 
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="text-white text-sm">{message.text}</p>
                  <div className="flex items-center gap-2 mt-2 text-white/70 text-xs">
                    <Camera className="w-3 h-3" />
                    <span>Photo uploaded</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`px-4 py-3 rounded-xl backdrop-blur-sm ${
                    message.type === 'user'
                      ? 'bg-blue-500/80 text-white'
                      : 'bg-white/20 dark:bg-gray-800/20 text-white'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  
                  {message.isAnalyzing && (
                    <div className="flex items-center gap-2 mt-2 text-amber-300">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs">AI analyzing...</span>
                    </div>
                  )}
                </div>
              )}
              
              {message.suggestions && (
                <div className="grid gap-2 mt-2 w-full">
                  {message.suggestions.map((item, idx) => (
                    <div key={idx} className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-3 flex items-center gap-3 hover:scale-105 transition-all duration-300 cursor-pointer group">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-900 dark:text-white font-medium text-sm truncate">{item.name}</h4>
                        <p className="text-amber-600 dark:text-amber-400 font-bold text-sm">{item.price}</p>
                      </div>
                      <div className="flex gap-1">
                        <button className="p-1 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-500 hover:scale-110 transition-transform">
                          <Heart className="w-3 h-3" />
                        </button>
                        <button className="p-1 rounded-lg bg-amber-100 dark:bg-amber-900/20 text-amber-600 hover:scale-110 transition-transform">
                          <ShoppingBag className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-start gap-3 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white/20 dark:bg-gray-800/20 rounded-xl px-4 py-3 backdrop-blur-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 p-4 bg-white/10 dark:bg-gray-800/10 rounded-xl border border-white/10 dark:border-gray-700/20">
        <Upload className="w-5 h-5 text-white/50 hover:text-amber-400 transition-colors cursor-pointer" />
        <input
          type="text"
          className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none"
          placeholder={currentLanguage === 'pl' ? 'Opisz swoje potrzeby...' : 'Describe your needs...'}
          disabled
        />
        <Send className="w-5 h-5 text-white/50 hover:text-amber-400 transition-colors cursor-pointer" />
      </div>
    </div>
  );
};

export default EnhancedChatbotMockup;
