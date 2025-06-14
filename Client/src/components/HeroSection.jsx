
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Unleash Your Imagination with GemAI";
  
  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const coolImages = [
    { id: 1, url: 'https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=2400/34244460/files/Blogs_2022/CyberPunk/droquis_KB3D_Cyberpunk_Cover_Final_2K.jpg', title: 'Neon Cyberpunk City', style: 'Futuristic' },
    { id: 2, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', title: 'Mystical Forest Portal', style: 'Fantasy' },
    { id: 3, url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop', title: 'Cosmic Nebula Dreams', style: 'Space Art' },
    { id: 4, url: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=600&h=400&fit=crop', title: 'Digital Abstract Waves', style: 'Abstract' },
    { id: 5, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', title: 'Ethereal Portrait Magic', style: 'Portrait' },
    { id: 6, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', title: 'Glowing Crystal Formation', style: 'Surreal' }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
          {typedText}
          {isTyping && <span className="animate-pulse text-purple-400">|</span>}
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Transform your wildest ideas into stunning visual masterpieces with the power of AI
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {coolImages.map((image, index) => (
          <div 
            key={image.id} 
            className={`group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
              index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
            }`}
            style={{
              animationDelay: `${index * 200}ms`,
              animation: 'fadeInUp 0.8s ease-out forwards'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay z-10"></div>
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 text-sm font-medium">{image.style}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs">AI Generated</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-30">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
                <span className="text-white text-sm">✨</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;