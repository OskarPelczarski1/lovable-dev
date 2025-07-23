
import React, { useState } from 'react';
import { ArrowRight, Play, Star, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';
import VideoBackground from '@/components/VideoBackground';
import EnhancedChatbotMockup from '@/components/EnhancedChatbotMockup';
import { GetStartedForm } from '@/components/GetStartedForm';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden transition-colors duration-300">
      {/* Video Background */}
      <VideoBackground opacity={0.3} />
      
      {/* Modern animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-full blur-2xl animate-spin-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="flex justify-center lg:justify-start mb-8 animate-fade-in">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-semibold shadow-xl border border-white/20 hover:scale-110 transition-all duration-500">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <span className="ml-2">Trusted by 500+ furniture stores</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <span className="block bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                  {t('heroTitle').split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                  {t('heroTitle').split(' ').slice(2, 4).join(' ')}
                </span>
                <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl text-white/80 font-normal">
                  {t('heroTitle').split(' ').slice(4).join(' ')}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {t('heroSubtitle')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-500 hover:from-amber-400 hover:to-orange-400 flex items-center gap-3 min-w-[220px] justify-center"
              >
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>{t('getStarted')}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/20 hover:border-amber-400/50 flex items-center gap-3 min-w-[220px] justify-center">
                <Play className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                <span>{t('watchDemo')}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {[
                { icon: TrendingUp, number: t('averageSalesIncrease'), label: t('averageSalesIncreaseLabel'), color: 'text-green-400' },
                { icon: Clock, number: t('responseTime'), label: t('responseTimeLabel'), color: 'text-blue-400' },
                { icon: Users, number: t('happyBusinessCount'), label: t('happyBusinessCountLabel'), color: 'text-purple-400' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-500 group"
                >
                  <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color} group-hover:scale-125 transition-transform duration-300`} />
                  <div className="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Enhanced Chatbot Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <EnhancedChatbotMockup />
          </div>
        </div>
      </div>

      {/* Get Started Form */}
      <GetStartedForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle" style={{ animationDelay: '1.5s' }}>
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center opacity-80">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
