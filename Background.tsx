
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#020617]">
      {/* Dynamic Mesh Gradient Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-rose-600/10 blur-[150px] rounded-full animate-pulse duration-[10s]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 blur-[150px] rounded-full animate-pulse duration-[12s] delay-1000"></div>
      <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-pink-500/5 blur-[120px] rounded-full animate-pulse duration-[15s]"></div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
      
      {/* Floating Elements with varying depths */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-gentle pointer-events-none select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 10}px`,
            opacity: Math.random() * 0.15 + 0.05,
            filter: `blur(${Math.random() * 2}px)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
        >
          {['❤️', '💖', '💘', '💕', '✨'][Math.floor(Math.random() * 5)]}
        </div>
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 pointer-events-none"></div>
    </div>
  );
};

export default Background;
