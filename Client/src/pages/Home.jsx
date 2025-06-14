


// import React, { useState } from 'react';

// export default function AIImageGenerator() {
//   const [prompt, setPrompt] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [selectedStyle, setSelectedStyle] = useState('photorealistic');
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [typedText, setTypedText] = useState('');
//   const [isTyping, setIsTyping] = useState(true);

//   const fullText = "Unleash Your Imagination";
  
//   // Typing effect
//   React.useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i < fullText.length) {
//         setTypedText(fullText.slice(0, i + 1));
//         i++;
//       } else {
//         setIsTyping(false);
//         clearInterval(typingInterval);
//       }
//     }, 100);

//     return () => clearInterval(typingInterval);
//   }, []);

//   const styles = [
//     { id: 'photorealistic', name: 'Photorealistic', icon: '📸' },
//     { id: 'artistic', name: 'Artistic', icon: '🎨' },
//     { id: 'anime', name: 'Anime', icon: '✨' },
//     { id: 'digital', name: 'Digital Art', icon: '💻' },
//     { id: 'vintage', name: 'Vintage', icon: '📷' },
//     { id: 'abstract', name: 'Abstract', icon: '🌀' }
//   ];

//   const sampleImages = [
//     { id: 1, url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop', prompt: 'Futuristic city at sunset', likes: 142 },
//     { id: 2, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', prompt: 'Mystical forest with glowing trees', likes: 89 },
//     { id: 3, url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop', prompt: 'Abstract geometric patterns', likes: 67 },
//     { id: 4, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', prompt: 'Ethereal portrait with cosmic background', likes: 203 }
//   ];

//   const coolImages = [
//     { id: 1, url: 'https://dropinblog.net/cdn-cgi/image/fit=scale-down,width=2400/34244460/files/Blogs_2022/CyberPunk/droquis_KB3D_Cyberpunk_Cover_Final_2K.jpg', title: 'Neon Cyberpunk City', style: 'Futuristic' },
//     { id: 2, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', title: 'Mystical Forest Portal', style: 'Fantasy' },
//     { id: 3, url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop', title: 'Cosmic Nebula Dreams', style: 'Space Art' },
//     { id: 4, url: 'https://images.unsplash.com/photo-1551913902-c92207136625?w=600&h=400&fit=crop', title: 'Digital Abstract Waves', style: 'Abstract' },
//     { id: 5, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop', title: 'Ethereal Portrait Magic', style: 'Portrait' },
//     { id: 6, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', title: 'Glowing Crystal Formation', style: 'Surreal' }
//   ];

//   const handleGenerate = () => {
//     if (!prompt.trim()) return;
    
//     setIsGenerating(true);
//     // Simulate API call
//     setTimeout(() => {
//       const newImage = {
//         id: Date.now(),
//         url: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=512&h=512&fit=crop`,
//         prompt: prompt,
//         likes: Math.floor(Math.random() * 100)
//       };
//       setGeneratedImages([newImage, ...generatedImages]);
//       setIsGenerating(false);
//     }, 3000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       {/* Animated background elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* Custom styles for animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>

//       <div className="relative z-10">
//         {/* Header */}
//         <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
//                   <span className="text-white text-xl">✨</span>
//                 </div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
//                   GemAI
//                 </h1>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
//                   <span className="text-white">⚙️</span>
//                 </button>
//                 <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
//                   <span className="text-white">⭐</span>
//                   <span className="text-white font-medium">Pro</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           {/* Hero Gallery Section */}
//           <div className="mb-12">
//             <div className="text-center mb-8">
//               <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
//                 {typedText}
//                 {isTyping && <span className="animate-pulse text-purple-400">|</span>}
//               </h2>
//               <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//                 Transform your wildest ideas into stunning visual masterpieces with the power of AI
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//               {coolImages.map((image, index) => (
//                 <div 
//                   key={image.id} 
//                   className={`group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
//                     index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
//                   }`}
//                   style={{
//                     animationDelay: `${index * 200}ms`,
//                     animation: 'fadeInUp 0.8s ease-out forwards'
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 mix-blend-overlay z-10"></div>
//                   <img
//                     src={image.url}
//                     alt={image.title}
//                     className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-20"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                     <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
//                       <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
//                       <div className="flex items-center justify-between">
//                         <span className="text-purple-300 text-sm font-medium">{image.style}</span>
//                         <div className="flex items-center space-x-2">
//                           <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                           <span className="text-white text-xs">AI Generated</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="absolute top-4 right-4 z-30">
//                     <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-0 group-hover:scale-100">
//                       <span className="text-white text-sm">✨</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
            

//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Generation Panel */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Prompt Input */}
//               <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
//                 <div className="flex items-center space-x-2 mb-4">
//                   <span className="text-purple-400">🪄</span>
//                   <h2 className="text-lg font-semibold text-white">Create Your Vision</h2>
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="relative">
//                     <textarea
//                       value={prompt}
//                       onChange={(e) => setPrompt(e.target.value)}
//                       placeholder="Describe your dream image... Be creative and detailed!"
//                       className="w-full h-32 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
//                     />
//                     <div className="absolute bottom-3 right-3 text-sm text-gray-400">
//                       {prompt.length}/500
//                     </div>
//                   </div>

//                   {/* Style Selection */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-3">Art Style</label>
//                     <div className="grid grid-cols-3 gap-2">
//                       {styles.map((style) => (
//                         <button
//                           key={style.id}
//                           onClick={() => setSelectedStyle(style.id)}
//                           className={`p-3 rounded-lg border transition-all hover:scale-105 ${
//                             selectedStyle === style.id
//                               ? 'bg-purple-500/30 border-purple-400 text-white'
//                               : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
//                           }`}
//                         >
//                           <div className="text-lg mb-1">{style.icon}</div>
//                           <div className="text-xs font-medium">{style.name}</div>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <button
//                     onClick={handleGenerate}
//                     disabled={!prompt.trim() || isGenerating}
//                     className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
//                   >
//                     {isGenerating ? (
//                       <>
//                         <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
//                         <span>Generating Magic...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>⚡</span>
//                         <span>Generate Image</span>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Generated Images */}
//               {generatedImages.length > 0 && (
//                 <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
//                   <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                     <span className="mr-2 text-purple-400">🖼️</span>
//                     Your Creations
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {generatedImages.map((image) => (
//                       <div key={image.id} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/20">
//                         <img
//                           src={image.url}
//                           alt={image.prompt}
//                           className="w-full h-64 object-cover transition-transform group-hover:scale-110"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//                           <div className="absolute bottom-0 left-0 right-0 p-4">
//                             <p className="text-white text-sm mb-3 line-clamp-2">{image.prompt}</p>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center space-x-1 text-white">
//                                 <span>❤️</span>
//                                 <span className="text-sm">{image.likes}</span>
//                               </div>
//                               <div className="flex space-x-2">
//                                 <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                                   <span className="text-white">⬇️</span>
//                                 </button>
//                                 <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
//                                   <span className="text-white">📤</span>
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar */}
//             <div className="space-y-6">
//               {/* Share Section */}
//               <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                   <span className="mr-2 text-purple-400">📤</span>
//                   Share Your Art
//                 </h3>
//                 <p className="text-gray-300 text-sm mb-4">
//                   Show the world your amazing AI-generated creations and inspire others!
//                 </p>
//                 <div className="space-y-3">
//                   <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
//                     <span>📘</span>
//                     <span>Share to Facebook</span>
//                   </button>
//                   <button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
//                     <span>🐦</span>
//                     <span>Share to Twitter</span>
//                   </button>
//                   <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
//                     <span>📷</span>
//                     <span>Share to Instagram</span>
//                   </button>
//                   <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
//                     <span>📱</span>
//                     <span>Copy Link</span>
//                   </button>
//                 </div>
//               </div>

//               {/* Pro Tips */}
//               <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
//                 <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
//                   <span className="mr-2 text-purple-400">💡</span>
//                   Pro Tips
//                 </h3>
//                 <div className="space-y-3 text-sm">
//                   <div className="bg-white/5 rounded-lg p-3">
//                     <div className="font-medium text-white mb-1">✨ Be Descriptive</div>
//                     <p className="text-gray-300">Use detailed descriptions for better results</p>
//                   </div>
//                   <div className="bg-white/5 rounded-lg p-3">
//                     <div className="font-medium text-white mb-1">🎨 Try Different Styles</div>
//                     <p className="text-gray-300">Experiment with various art styles</p>
//                   </div>
//                   <div className="bg-white/5 rounded-lg p-3">
//                     <div className="font-medium text-white mb-1">⚡ Use Keywords</div>
//                     <p className="text-gray-300">Include mood, lighting, and composition</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import HeroSection from '../components/HeroSection';
import Create from '../components/Create';
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Background />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <HeroSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Create />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;