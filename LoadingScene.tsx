
import React from 'react';

const LoadingScene: React.FC = () => {
  // Generate points for a heart shape using parametric equations
  const heartPoints = Array.from({ length: 120 }).map((_, i) => {
    const t = (i / 120) * 2 * Math.PI;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return { x, y };
  });

  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-1000 relative">
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] bg-rose-600/10 blur-[100px] rounded-full"></div>

      <div className="relative w-96 h-96 flex items-center justify-center">
        {heartPoints.map((point, i) => (
          <div
            key={i}
            className="absolute text-rose-400 animate-pulse"
            style={{
              transform: `translate(${point.x * 12}px, ${point.y * 12}px)`,
              opacity: 0,
              animation: `fade-in-float 2.5s ease-out forwards ${i * 0.015}s, pulse 3s infinite`,
              fontSize: `${Math.random() * 6 + 6}px`,
            }}
          >
            ❤️
          </div>
        ))}
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-x-[-100px] h-[2px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-scan pointer-events-none z-10"></div>
        
        {/* Central Heart Glow */}
        <div className="absolute w-32 h-32 bg-rose-500/20 blur-[60px] rounded-full animate-ping duration-[3s]"></div>
        <div className="text-6xl animate-bounce drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]">💓</div>
      </div>

      <div className="mt-16 text-center z-20">
        <h2 className="text-4xl font-romantic text-rose-100 mb-4 tracking-wide">Calculating Love Compatibility...</h2>
        <div className="flex justify-center items-center gap-3">
          <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-rose-500 animate-progress origin-left"></div>
          </div>
          <span className="text-xs font-bold text-rose-300 animate-pulse uppercase tracking-widest">Encrypting...</span>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-float {
          0% { opacity: 0; transform: translate(0, 0) scale(0); }
          50% { opacity: 1; }
          100% { opacity: 0.9; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(1); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-progress {
          animation: progress 4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScene;
