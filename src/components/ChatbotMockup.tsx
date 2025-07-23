
import React, { useState, useEffect } from 'react';
import { MessageSquare, Bot, User, Send } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

const ChatbotMockup = () => {
  const { t, currentLanguage } = useTranslation();
  const [messages, setMessages] = useState<Array<{id: number, text: string, isUser: boolean}>>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const demoMessages = currentLanguage === 'pl' ? [
    { id: 1, text: "Cześć! Jestem Funnessa AI. Jak mogę Ci pomóc z meblami?", isUser: false },
    { id: 2, text: "Szukam sofy do salonu", isUser: true },
    { id: 3, text: "Świetnie! Mamy piękne sofy modułowe. Jaki jest Twój budżet?", isUser: false },
    { id: 4, text: "Około 3000 PLN", isUser: true },
    { id: 5, text: "Oto 3 idealne opcje dla Ciebie! 🛋️", isUser: false }
  ] : [
    { id: 1, text: "Hi! I'm Funnessa AI. How can I help you with furniture?", isUser: false },
    { id: 2, text: "I'm looking for a living room sofa", isUser: true },
    { id: 3, text: "Great! We have beautiful sectional sofas. What's your budget?", isUser: false },
    { id: 4, text: "Around $1500", isUser: true },
    { id: 5, text: "Here are 3 perfect options for you! 🛋️", isUser: false }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessageIndex < demoMessages.length) {
        setMessages(prev => [...prev, demoMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        // Reset after showing all messages
        setTimeout(() => {
          setMessages([]);
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentMessageIndex, demoMessages]);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">Funnessa AI</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/70 text-sm">
              {currentLanguage === 'pl' ? 'Online - Demo' : 'Online - Demo'}
            </span>
          </div>
        </div>
      </div>

      <div className="h-64 overflow-y-auto space-y-3 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2 animate-fade-in ${
              message.isUser ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              message.isUser ? 'bg-blue-500' : 'bg-gradient-to-r from-purple-500 to-blue-500'
            }`}>
              {message.isUser ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={`px-4 py-2 rounded-lg max-w-[200px] ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/20 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-3 bg-white/10 rounded-lg">
        <input
          type="text"
          className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none"
          placeholder={currentLanguage === 'pl' ? 'Napisz wiadomość...' : 'Type a message...'}
          disabled
        />
        <Send className="w-4 h-4 text-white/50" />
      </div>
    </div>
  );
};

export default ChatbotMockup;
