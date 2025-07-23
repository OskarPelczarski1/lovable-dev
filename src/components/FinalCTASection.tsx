
import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/contexts/TranslationContext';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required.",
        variant: "destructive"
      });
      return;
    }
    
    // Integration with email service would go here
    console.log('Final CTA submission:', { name, email });
    
    toast({
      title: "You're in! 🎉",
      description: "We'll be in touch soon with early access to Funnessa AI.",
    });
    
    setEmail('');
    setName('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 animate-fade-in transform hover:scale-105 transition-all duration-500 hover:bg-white/15 hover:animate-glow animate-float">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white animate-fade-in animate-bounce-gentle transform hover:scale-105 transition-transform duration-300">
                {t('finalCtaTitle')}
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {t('finalCtaSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: CheckCircle, textKey: "freeSetupAssistance" },
                { icon: CheckCircle, textKey: "freeTrial" },
                { icon: CheckCircle, textKey: "prioritySupport" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90 animate-fade-in group animate-slide-up hover:scale-105 transition-all duration-300" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <item.icon className="w-6 h-6 text-green-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-wiggle transition-all duration-300 animate-pulse-slow" />
                  <span className="group-hover:text-white transition-colors duration-200 group-hover:translate-x-1 group-hover:animate-bounce">{t(item.textKey as any)}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 animate-fade-in animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <Input
                type="text"
                placeholder={t('yourName')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/20 backdrop-blur-sm border-white/30 placeholder:text-white/70 text-white focus:bg-white/25 focus:border-white/50 transition-all duration-300 focus:scale-105 hover:scale-102"
                required
              />
              <Input
                type="email"
                placeholder={t('businessEmail')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 backdrop-blur-sm border-white/30 placeholder:text-white/70 text-white focus:bg-white/25 focus:border-white/50 transition-all duration-300 focus:scale-105 hover:scale-102"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-white text-amber-600 hover:bg-gray-50 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg group hover:scale-105 hover:shadow-xl animate-bounce-gentle"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                {t('getEarlyAccess')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </form>

            <p className="text-white/70 text-sm animate-fade-in animate-slide-up" style={{ animationDelay: '0.8s' }}>
              {t('noSpam')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
