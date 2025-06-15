import React from 'react';

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Share Section */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2 text-purple-400">📤</span>
          Share Your Art
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          Show the world your amazing AI-generated creations and inspire others!
        </p>
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
            <span>📘</span>
            <span> <a href="https://www.facebook.com">Share to Facebook</a> </span>
          </button>


          <button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
            <span>🐦</span>
            <span><a href="https://x.com/home">Share to Twitter</a></span>
          </button>


          
          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
          <a href="https://www.instagram.com">
            <span>📷  </span>
            <span>Share to Instagram</span>
            </a>
          </button>
          

          
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
            <span>📱</span>
            <span>Copy Link</span>
          </button>
          

          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2">
            <span>🤖</span>
            <span>Share in GemAI</span>
          </button>
          
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2 text-purple-400">💡</span>
          Pro Tips
        </h3>
        <div className="space-y-3 text-sm">
          <div className="bg-white/5 rounded-lg p-3">
            <div className="font-medium text-white mb-1">✨ Be Descriptive</div>
            <p className="text-gray-300">Use detailed descriptions for better results</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <div className="font-medium text-white mb-1">🎨 Try Different Styles</div>
            <p className="text-gray-300">Experiment with various art styles</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3">
            <div className="font-medium text-white mb-1">⚡ Use Keywords</div>
            <p className="text-gray-300">Include mood, lighting, and composition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;