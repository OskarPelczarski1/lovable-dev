
import React from 'react';
import { Code2, Database, MessageCircle, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const HowItWorksSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Code2,
      titleKey: "quickSetup",
      descriptionKey: "quickSetupStepDescription",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      features: ["oneLineInstallation", "worksWithAnyWebsite", "mobileResponsive"]
    },
    {
      icon: Database,
      titleKey: "smartTraining",
      descriptionKey: "smartTrainingStepDescription",
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      features: ["autoSyncInventory", "smartCategorization", "priceOptimization"]
    },
    {
      icon: MessageCircle,
      titleKey: "salesAssistant",
      descriptionKey: "salesAssistantStepDescription",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      features: ["leadQualification", "instantResponses", "salesTracking"]
    }
  ];

  const stats = [
    { numberKey: "averageSalesIncrease", labelKey: "averageSalesIncreaseLabel" },
    { numberKey: "alwaysAvailable", labelKey: "alwaysAvailableLabel" },
    { numberKey: "responseTime", labelKey: "responseTimeLabel" },
    { numberKey: "happyBusinessCount", labelKey: "happyBusinessCountLabel" }
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-amber-50/50 dark:from-gray-800/50 dark:to-amber-900/30"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 text-amber-800 dark:text-amber-300 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg animate-scale-in hover:scale-110 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
            <Zap className="w-4 h-4 animate-pulse" />
            {t('simpleThreeStepProcess')}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transform hover:scale-105 transition-transform duration-500 animate-slide-up bg-gradient-to-r from-gray-900 to-amber-700 dark:from-white dark:to-amber-300 bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
            {t('howItWorks')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {t('howItWorksDescription')}
          </p>
        </div>

        {/* Enhanced stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text mb-2 group-hover:scale-125 transition-transform duration-300">
                {t(stat.numberKey as any)}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                {t(stat.labelKey as any)}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${1.4 + index * 0.2}s` }}>
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 h-full transition-all duration-700 hover:shadow-2xl hover:-translate-y-8 border border-gray-100/50 dark:border-gray-700/50 group-hover:border-amber-200/50 dark:group-hover:border-amber-500/50 relative overflow-hidden group-hover:bg-white dark:group-hover:bg-gray-800">
                {/* Enhanced background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-orange-50/0 dark:from-amber-900/0 dark:to-orange-900/0 group-hover:from-amber-50/70 dark:group-hover:from-amber-900/30 group-hover:to-orange-50/70 dark:group-hover:to-orange-900/30 transition-all duration-700 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl group-hover:shadow-3xl`}>
                    <step.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text animate-pulse group-hover:scale-125 transition-transform duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-500">
                        {t(step.titleKey as any)}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-500">
                      {t(step.descriptionKey as any)}
                    </p>
                    
                    {/* Enhanced feature list */}
                    <div className="space-y-4">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transform hover:translate-x-2 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${1.8 + index * 0.2 + featureIndex * 0.1}s` }}>
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-125 group-hover:text-green-400 transition-all duration-300" />
                          <span className="font-medium">{t(feature as any)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced connecting arrows */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-amber-300 to-amber-400 transform -translate-y-1/2 z-20 animate-pulse">
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-6 h-6 text-amber-400 animate-bounce hover:scale-125 transition-transform duration-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '2.4s' }}>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-3xl p-10 max-w-3xl mx-auto shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
            <h3 className="text-3xl font-bold mb-4 animate-bounce-gentle">{t('readyToBoostSales')}</h3>
            <p className="text-amber-100 mb-8 text-lg">{t('joinHundredsOfBusinesses')}</p>
            <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                <CheckCircle className="w-4 h-4 animate-pulse" />
                <span>{t('freeTrialDays')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                <CheckCircle className="w-4 h-4 animate-pulse" />
                <span>{t('noSetupFees')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                <CheckCircle className="w-4 h-4 animate-pulse" />
                <span>{t('cancelAnytime')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
