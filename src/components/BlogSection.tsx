
import React from 'react';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Lightbulb } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const BlogSection = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      titleKey: "blogPost1Title",
      excerptKey: "blogPost1Excerpt",
      dateKey: "blogPost1Date",
      readTimeKey: "blogPost1ReadTime",
      categoryKey: "trends",
      icon: TrendingUp,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      titleKey: "blogPost2Title", 
      excerptKey: "blogPost2Excerpt",
      dateKey: "blogPost2Date",
      readTimeKey: "blogPost2ReadTime",
      categoryKey: "success",
      icon: Users,
      gradient: "from-green-500 to-teal-600"
    },
    {
      titleKey: "blogPost3Title",
      excerptKey: "blogPost3Excerpt", 
      dateKey: "blogPost3Date",
      readTimeKey: "blogPost3ReadTime",
      categoryKey: "tips",
      icon: Lightbulb,
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-bounce-gentle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-300 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg animate-scale-in hover:scale-110 transition-all duration-500">
            <Lightbulb className="w-4 h-4 animate-pulse" />
            {t('latestInsights')}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up bg-gradient-to-r from-gray-900 to-purple-700 dark:from-white dark:to-purple-300 bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
            {t('blog')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {t('blogDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Post header with gradient */}
              <div className={`h-48 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(post.categoryKey as any)}
                  </span>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <post.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Post content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{t(post.dateKey as any)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{t(post.readTimeKey as any)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500 line-clamp-2">
                  {t(post.titleKey as any)}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {t(post.excerptKey as any)}
                </p>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-4 transition-all duration-300 group-hover:scale-105">
                    <span>{t('readMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-4 animate-bounce-gentle">{t('stayUpdated')}</h3>
            <p className="text-purple-100 mb-8 text-lg">{t('subscribeDescription')}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-6 py-3 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-purple-300 focus:outline-none"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
