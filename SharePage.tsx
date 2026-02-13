
import React, { useState } from 'react';
import { FormData } from '../types';

interface SharePageProps {
  reset: () => void;
  formData: FormData;
}

const SharePage: React.FC<SharePageProps> = ({ reset, formData }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const partnerName = formData.partnerName.trim() || "Macha";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Dei idha open pannu… un destiny unlock aagum 😭💘 ${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-xl w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-1000 p-4">
      <div className="glass-card w-full rounded-[3rem] p-10 md:p-14 text-center relative overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(251,191,36,0.15)]">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-rose-600/5 pointer-events-none"></div>
        
        {/* Top Icon: Glowing Bulb */}
        <div className="mb-8 relative z-10 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-400/40 blur-[40px] rounded-full scale-150 animate-pulse"></div>
            <div className="relative z-10 text-7xl md:text-8xl animate-bounce-slow drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] cursor-help">
              💡
            </div>
          </div>
        </div>

        {/* Main Title Section */}
        <div className="mb-6 relative z-10 space-y-4">
          <h1 className="text-5xl md:text-7xl font-romantic leading-tight pb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(251,191,36,0.4)]">
            Pombala Sokku Kekutha {partnerName}?
          </h1>
          <p className="text-pink-100/80 text-lg md:text-xl italic font-medium animate-in slide-in-from-top-4 duration-1000 delay-300">
            Padichu Munnerra Valiya Paruda.. 😌💡
          </p>
        </div>

        {/* Share Instruction */}
        <div className="mb-10 px-4 relative z-10">
          <p className="text-white font-semibold text-lg tracking-wide leading-relaxed">
            3 friends-ku share pannunga… <br/>
            <span className="text-amber-300">appo thaan un future partner reveal aagum!</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-5 mb-6 relative z-10">
          <button
            onClick={handleWhatsApp}
            className="group w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:shadow-[#25D366]/40 transform hover:-translate-y-1 active:scale-95"
          >
            <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.417 0 6.556-5.333 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.899 3.3 1.374 5.129 1.375 5.563 0 10.088-4.526 10.088-10.091 0-2.699-1.052-5.235-2.961-7.146-1.908-1.91-4.445-2.964-7.142-2.964-5.565 0-10.092 4.528-10.092 10.091 0 1.832.497 3.621 1.44 5.16l-1.077 3.931 4.02-1.056z"/>
            </svg>
            <span className="tracking-tight text-lg">WhatsApp-la 3 Per-ku Anuppu 😈💚</span>
          </button>

          <button
            onClick={handleCopy}
            className={`w-full ${copied ? 'bg-amber-600' : 'bg-white/10 hover:bg-white/20'} text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 border border-white/10 shadow-lg active:scale-95 relative overflow-hidden`}
          >
            {copied && <div className="absolute inset-0 animate-shimmer"></div>}
            <span className="text-lg uppercase tracking-widest">{copied ? 'Link Copied! ✅' : 'LINK COPY PANNI SCENE PODU 😎📎'}</span>
          </button>

          <button
            onClick={reset}
            className="w-full bg-transparent hover:bg-white/5 text-rose-200/50 hover:text-rose-200 font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-2 border border-white/5 active:scale-95"
          >
            <span className="text-xl">😌</span>
            <span className="uppercase tracking-widest text-[10px] font-black">Home-ku Thirumbi Po 🏠</span>
          </button>
        </div>

        {/* Decorative Light effect */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-400/5 blur-[80px] pointer-events-none"></div>
      </div>

      <p className="mt-8 text-slate-700/50 text-[10px] font-bold uppercase tracking-[0.3em] text-center px-10 leading-relaxed">
        Destiny status: Currently looking for a job instead of a relationship.
      </p>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 1.5s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SharePage;
