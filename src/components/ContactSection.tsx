
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 dark:border-gray-700/20 animate-fade-in animate-scale-in hover:scale-105 hover:animate-glow transition-all duration-500" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contactName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:scale-105 focus:scale-105 focus:animate-glow"
                />
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contactEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:scale-105 focus:scale-105"
                />
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contactMessage')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 hover:scale-105 focus:scale-105"
              ></textarea>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed flex items-center gap-3 mx-auto animate-bounce-gentle"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-spin" />
                    {t('messageSent')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    {t('sendMessage')}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
