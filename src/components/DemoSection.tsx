
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, Bot, User, ShoppingCart, Heart, Star, Package } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isTyping?: boolean;
  products?: Product[];
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  category: string;
}

const furnitureProducts: Product[] = [
  {
    id: 1,
    name: "Modern Sofa Sectional",
    price: "$1,299",
    image: "🛋️",
    rating: 4.8,
    category: "Living Room"
  },
  {
    id: 2,
    name: "Oak Dining Table",
    price: "$899",
    image: "🪑",
    rating: 4.9,
    category: "Dining Room"
  },
  {
    id: 3,
    name: "King Size Bed Frame",
    price: "$749",
    image: "🛏️",
    rating: 4.7,
    category: "Bedroom"
  },
  {
    id: 4,
    name: "Office Desk Chair",
    price: "$399",
    image: "💺",
    rating: 4.6,
    category: "Office"
  }
];

const DemoSection = () => {
  const { t, currentLanguage } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [userName, setUserName] = useState('');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial greeting based on language
    const initialMessage = currentLanguage === 'pl' 
      ? "Cześć! Jestem Twoim asystentem AI ds. mebli. Nazywam się Funnessa i pomogę Ci znaleźć idealne meble do Twojego domu. Jak masz na imię?"
      : "Hello! I'm your AI furniture assistant. My name is Funnessa and I'll help you find the perfect furniture for your home. What's your name?";
    
    setMessages([{
      id: 1,
      text: initialMessage,
      isUser: false,
      timestamp: new Date(),
    }]);
  }, [currentLanguage]);

  const getFurnitureResponse = (userMessage: string): { text: string; products?: Product[] } => {
    const lowerMessage = userMessage.toLowerCase();
    const isPolish = currentLanguage === 'pl';
    
    // Name collection
    if (!userName && !lowerMessage.includes('sofa') && !lowerMessage.includes('chair') && !lowerMessage.includes('table')) {
      setUserName(userMessage);
      return {
        text: isPolish 
          ? `Miło Cię poznać, ${userMessage}! Jakie meble Cię dzisiaj interesują? Możemy porozmawiać o sofach, stołach, łóżkach, krzesłach biurowych lub czymkolwiek innym dla Twojego domu.`
          : `Nice to meet you, ${userMessage}! What kind of furniture are you interested in today? We can discuss sofas, tables, beds, office chairs, or anything else for your home.`
      };
    }

    // Product recommendations
    if (lowerMessage.includes('sofa') || lowerMessage.includes('couch') || lowerMessage.includes('sectional')) {
      return {
        text: isPolish 
          ? `Świetny wybór${userName ? `, ${userName}` : ''}! Nasze sofy są bardzo popularne. Oto nasza najlepsza sofa modułowa - idealna do salonu. Ma ocenę 4.8/5 od naszych klientów!`
          : `Great choice${userName ? `, ${userName}` : ''}! Our sofas are very popular. Here's our top-rated sectional sofa - perfect for living rooms. It has a 4.8/5 rating from our customers!`,
        products: [furnitureProducts[0]]
      };
    }

    if (lowerMessage.includes('table') || lowerMessage.includes('dining') || lowerMessage.includes('stół')) {
      return {
        text: isPolish
          ? `Doskonały wybór! Ten dębowy stół jadalny to nasza perełka. Solidny, piękny i idealny do rodzinnych posiłków. Ocena 4.9/5!`
          : `Excellent choice! This oak dining table is our gem. Solid, beautiful, and perfect for family meals. 4.9/5 rating!`,
        products: [furnitureProducts[1]]
      };
    }

    if (lowerMessage.includes('bed') || lowerMessage.includes('bedroom') || lowerMessage.includes('łóżko')) {
      return {
        text: isPolish
          ? `Świetnie! Dobry sen to podstawa. Ta rama łóżka king size jest bardzo wytrzymała i stylowa. Ocena 4.7/5 od zadowolonych klientów.`
          : `Perfect! Good sleep is essential. This king size bed frame is very durable and stylish. 4.7/5 rating from satisfied customers.`,
        products: [furnitureProducts[2]]
      };
    }

    if (lowerMessage.includes('chair') || lowerMessage.includes('office') || lowerMessage.includes('krzesło')) {
      return {
        text: isPolish
          ? `Idealne do home office! To krzesło biurowe zapewnia doskonały komfort podczas długich godzin pracy. Ergonomiczne i stylowe!`
          : `Perfect for home office! This office chair provides excellent comfort during long work hours. Ergonomic and stylish!`,
        products: [furnitureProducts[3]]
      };
    }

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('cena')) {
      return {
        text: isPolish
          ? `Nasze ceny są bardzo konkurencyjne! Oferujemy również finansowanie 0% na 12 miesięcy i bezpłatną dostawę powyżej 500 PLN. Który mebel Cię interesuje?`
          : `Our prices are very competitive! We also offer 0% financing for 12 months and free delivery over $100. Which furniture piece interests you?`
      };
    }

    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping') || lowerMessage.includes('dostawa')) {
      return {
        text: isPolish
          ? `Dostawa jest bezpłatna powyżej 500 PLN! Standardowa dostawa zajmuje 3-5 dni roboczych. Oferujemy również ekspresową dostawę następnego dnia za dodatkową opłatą.`
          : `Delivery is free over $100! Standard delivery takes 3-5 business days. We also offer next-day express delivery for an additional fee.`
      };
    }

    if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee') || lowerMessage.includes('gwarancja')) {
      return {
        text: isPolish
          ? `Wszystkie nasze meble objęte są 5-letnią gwarancją! Jesteśmy pewni jakości naszych produktów. Oferujemy również 30-dniowy okres zwrotu.`
          : `All our furniture comes with a 5-year warranty! We're confident in our product quality. We also offer a 30-day return period.`
      };
    }

    if (lowerMessage.includes('show') || lowerMessage.includes('see') || lowerMessage.includes('pokaż')) {
      return {
        text: isPolish
          ? `Oto nasze najpopularniejsze meble! Każdy z tych produktów ma doskonałe recenzje od naszych klientów. Który Cię najbardziej interesuje?`
          : `Here are our most popular furniture pieces! Each of these products has excellent reviews from our customers. Which one interests you most?`,
        products: furnitureProducts
      };
    }

    // Default responses
    const defaultResponses = isPolish ? [
      `Dziękuję za pytanie${userName ? `, ${userName}` : ''}! Mogę Ci pomóc z sofami, stołami, łóżkami, krzesłami i wieloma innymi meblami. O czym chciałbyś wiedzieć więcej?`,
      `Świetne pytanie! Specjalizujemy się w wysokiej jakości meblach do domu i biura. Jakie konkretnie meble Cię interesują?`,
      `Z przyjemnością pomogę! Nasze meble łączą styl, komfort i przystępne ceny. Powiedz mi więcej o swoich potrzebach.`
    ] : [
      `Thank you for your question${userName ? `, ${userName}` : ''}! I can help you with sofas, tables, beds, chairs, and many other furniture pieces. What would you like to know more about?`,
      `Great question! We specialize in high-quality home and office furniture. What specific furniture are you interested in?`,
      `I'd be happy to help! Our furniture combines style, comfort, and affordable prices. Tell me more about your needs.`
    ];

    return {
      text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    };
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    simulateTyping();

    setTimeout(() => {
      const response = getFurnitureResponse(inputValue);
      const botResponse: Message = {
        id: messages.length + 2,
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        products: response.products
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickQuestions = currentLanguage === 'pl' ? [
    'Pokaż mi sofy',
    'Jakie są ceny?',
    'Jak wygląda dostawa?',
    'Jaka jest gwarancja?'
  ] : [
    'Show me sofas',
    'What are your prices?',
    'How does delivery work?',
    'What about warranty?'
  ];

  return (
    <section id="demo" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <MessageSquare className="w-4 h-4" />
            {t('liveDemo')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {t('seeItInAction')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            {currentLanguage === 'pl' 
              ? 'Przetestuj naszego interaktywnego chatbota meblarskiego. Zadawaj pytania o produkty, ceny lub cokolwiek innego!'
              : 'Try our interactive furniture chatbot demo below. Ask questions about products, pricing, or anything else!'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 animate-glow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce-gentle">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Funnessa AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-blue-100 text-sm">
                      {currentLanguage === 'pl' ? 'Online teraz - Asystent Mebli' : 'Online now - Furniture Assistant'}
                    </p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-gray-900">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-4 animate-fade-in ${
                    message.isUser ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    message.isUser 
                      ? 'bg-blue-500 animate-pulse' 
                      : 'bg-gradient-to-br from-purple-500 to-blue-500 animate-glow'
                  }`}>
                    {message.isUser ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex-1 max-w-xs lg:max-w-md">
                    <div
                      className={`px-6 py-4 rounded-2xl ${
                        message.isUser
                          ? 'bg-blue-500 text-white ml-auto animate-wiggle'
                          : 'bg-gray-700 text-gray-100 animate-float'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    
                    {/* Product Cards */}
                    {message.products && (
                      <div className="mt-4 space-y-3">
                        {message.products.map((product) => (
                          <div key={product.id} className="bg-gray-700 rounded-xl p-4 border border-gray-600 hover:border-blue-500 transition-all duration-300 animate-scale-in hover:animate-glow">
                            <div className="flex items-center gap-4">
                              <div className="text-3xl">{product.image}</div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold text-sm">{product.name}</h4>
                                <p className="text-gray-400 text-xs">{product.category}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-yellow-400 text-xs">{product.rating}</span>
                                  </div>
                                  <span className="text-blue-400 font-bold text-sm">{product.price}</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 animate-pulse">
                                  <ShoppingCart className="w-4 h-4 text-white" />
                                </button>
                                <button className="p-2 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors duration-200">
                                  <Heart className="w-4 h-4 text-white" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-4 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center animate-pulse">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gray-700 text-gray-100 px-6 py-4 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-6 border-t border-gray-700 bg-gray-800">
              <div className="flex gap-3 mb-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentLanguage === 'pl' ? 'Napisz swoją wiadomość...' : 'Type your message...'}
                  className="flex-1 px-6 py-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400 animate-fade-in"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200 flex items-center gap-2 animate-pulse hover:animate-bounce-gentle"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Quick Questions */}
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full text-sm transition-all duration-200 animate-fade-in hover:animate-wiggle"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-800 rounded-xl p-4 animate-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Package className="w-5 h-5 text-blue-400" />
                <span className="text-2xl font-bold text-white">1000+</span>
              </div>
              <p className="text-gray-400 text-sm">
                {currentLanguage === 'pl' ? 'Produktów' : 'Products'}
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 animate-float" style={{animationDelay: '0.7s'}}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl font-bold text-white">4.9</span>
              </div>
              <p className="text-gray-400 text-sm">
                {currentLanguage === 'pl' ? 'Ocena' : 'Rating'}
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 animate-float" style={{animationDelay: '0.9s'}}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-2xl font-bold text-white">50k+</span>
              </div>
              <p className="text-gray-400 text-sm">
                {currentLanguage === 'pl' ? 'Zadowolonych Klientów' : 'Happy Customers'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
