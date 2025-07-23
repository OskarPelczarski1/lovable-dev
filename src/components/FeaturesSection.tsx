
import React from 'react';
import { MessageSquare, TrendingUp, Clock, Zap, Users, BarChart3 } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: MessageSquare,
      titleKey: "smartAiConversations",
      descriptionKey: "smartAiDescription"
    },
    {
      icon: TrendingUp,
      titleKey: "salesIncrease",
      descriptionKey: "salesIncreaseDescription"
    },
    {
      icon: Clock,
      titleKey: "availability",
      descriptionKey: "availabilityDescription"
    },
    {
      icon: Zap,
      titleKey: "quickSetup",
      descriptionKey: "quickSetupDescription"
    },
    {
      icon: Users,
      titleKey: "customerInsights",
      descriptionKey: "customerInsightsDescription"
    },
    {
      icon: BarChart3,
      titleKey: "performanceTracking",
      descriptionKey: "performanceTrackingDescription"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-amber-100 dark:border-gray-600 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <feature.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:text-amber-700 dark:group-hover:text-amber-400">
                {t(feature.titleKey as any)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                {t(feature.descriptionKey as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
