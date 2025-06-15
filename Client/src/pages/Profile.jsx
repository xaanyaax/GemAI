
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <Navbar />
      
      <div className="relative flex flex-col items-center justify-center h-screen gap-8">
        {/* Main content with slide-up animation */}
        <div className="text-center space-y-6 animate-fade-in-up">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
              No Posts Yet!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Your creative journey starts here. Share your thoughts, ideas, and stories with the world.
          </p>
        </div>

        {/* Enhanced button with multiple effects */}
        <Link to = "/">
        <button className="group relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 active:scale-95 overflow-hidden">
          {/* Button background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-sm"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
          
          {/* Button text with icon */}
         
          <span className="relative flex items-center gap-2 text-lg">
            Let's create
            <span className="inline-block transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              ✨
            </span>
          </span>
          
          
          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-white/10 scale-0 group-active:scale-100 transition-transform duration-150 rounded-full"></div>
          </div>
        </button>
        </Link>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-pink-300 rounded-full animate-float animation-delay-3000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Profile;
