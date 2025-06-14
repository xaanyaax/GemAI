import React, { useState } from 'react';

const Create = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('photorealistic');
  const [generatedImages, setGeneratedImages] = useState([]);

  const styles = [
    { id: 'photorealistic', name: 'Photorealistic', icon: '📸' },
    { id: 'artistic', name: 'Artistic', icon: '🎨' },
    { id: 'anime', name: 'Anime', icon: '✨' },
    { id: 'digital', name: 'Digital Art', icon: '💻' },
    { id: 'vintage', name: 'Vintage', icon: '📷' },
    { id: 'abstract', name: 'Abstract', icon: '🌀' }
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const newImage = {
        id: Date.now(),
        url: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000)}?w=512&h=512&fit=crop`,
        prompt: prompt,
        likes: Math.floor(Math.random() * 100)
      };
      setGeneratedImages([newImage, ...generatedImages]);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Prompt Input */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-purple-400">🪄</span>
          <h2 className="text-lg font-semibold text-white">Create Your Vision</h2>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your dream image... Be creative and detailed!"
              className="w-full h-32 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />
            <div className="absolute bottom-3 right-3 text-sm text-gray-400">
              {prompt.length}/500
            </div>
          </div>

          {/* Style Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">Art Style</label>
            <div className="grid grid-cols-3 gap-2">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => {
                    setSelectedStyle(style.id);
                    if (!prompt.trim()) {
                      setPrompt(style.name);
                    }
                  }}
                  className={`p-3 rounded-lg border transition-all hover:scale-105 ${
                    selectedStyle === style.id
                      ? 'bg-purple-500/30 border-purple-400 text-white'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <div className="text-lg mb-1">{style.icon}</div>
                  <div className="text-xs font-medium">{style.name}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                <span>Generating Magic...</span>
              </>
            ) : (
              <>
                <span>⚡</span>
                <span>Generate Image</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Images */}
      {generatedImages.length > 0 && (
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="mr-2 text-purple-400">🖼️</span>
            Your Creations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {generatedImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/20">
                <img
                  src={image.url}
                  alt={image.prompt}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm mb-3 line-clamp-2">{image.prompt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-white">
                        <span>❤️</span>
                        <span className="text-sm">{image.likes}</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                          <span className="text-white">⬇️</span>
                        </button>
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                          <span className="text-white">📤</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
