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