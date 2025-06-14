import React from 'react';

const Navbar = () => {
  return (
    <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
              <span className="text-white text-xl">✨</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              GemAI
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
              <span className="text-white">⚙️</span>
            </button>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full">
              <span className="text-white">⭐</span>
              <span className="text-white font-medium">Pro</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;