
import React, { useState } from 'react';
import { FormData } from '../types';

interface HomeSceneProps {
  onSubmit: (data: FormData) => void;
}

const HomeScene: React.FC<HomeSceneProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    partnerName: '',
    age: '',
    dob: '',
    favouriteColor: 'Red',
    luckyNumber: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.partnerName || !formData.age || !formData.dob || !formData.luckyNumber) {
      setError('Please fill all details to check compatibility... 💘');
      return;
    }
    if (parseInt(formData.age) < 18) {
      setError('Patience! You must be 18 to unlock this fate.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="max-w-xl w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <div className="text-center mb-12 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-4xl animate-bounce">💘</div>
        <h1 className="text-6xl md:text-7xl font-romantic text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200 drop-shadow-[0_0_25px_rgba(255,100,150,0.3)] mb-4 leading-tight">
          Find Your Future Valentine
        </h1>
        <p className="text-rose-100/60 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto">
          Deep love analytics for the truly lonely. <br/>Enter details to reveal your fate.
        </p>
      </div>

      <div className="glass-card w-full p-10 rounded-[2.5rem] relative overflow-hidden group">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-500/10 blur-[80px] group-hover:bg-rose-500/20 transition-all duration-700"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 blur-[80px] group-hover:bg-purple-500/20 transition-all duration-700"></div>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-rose-200/80 ml-1 uppercase tracking-widest">Your Name</label>
            <input
              type="text"
              name="partnerName"
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition-all placeholder:text-white/20 text-lg"
              value={formData.partnerName}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-rose-200/80 ml-1 uppercase tracking-widest">Your Age</label>
              <input
                type="number"
                name="age"
                placeholder="18+"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition-all placeholder:text-white/20 text-lg"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-rose-200/80 ml-1 uppercase tracking-widest">Lucky Number</label>
              <input
                type="number"
                name="luckyNumber"
                placeholder="0-99"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition-all placeholder:text-white/20 text-lg"
                value={formData.luckyNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-rose-200/80 ml-1 uppercase tracking-widest">Fav Color</label>
              <div className="relative">
                <select
                  name="favouriteColor"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition-all appearance-none text-lg cursor-pointer"
                  value={formData.favouriteColor}
                  onChange={handleInputChange}
                >
                  <option value="Red">Red</option>
                  <option value="Pink">Pink</option>
                  <option value="Blue">Blue</option>
                  <option value="Black">Black</option>
                  <option value="Purple">Purple</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-rose-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-rose-200/80 ml-1 uppercase tracking-widest">DOB</label>
              <input
                type="date"
                name="dob"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-rose-500/30 transition-all text-lg"
                style={{ colorScheme: 'dark' }}
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 py-3 px-4 rounded-xl flex items-center gap-3 animate-shake">
              <span className="text-rose-400">⚠️</span>
              <p className="text-rose-300 text-sm font-medium">{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full relative group overflow-hidden bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
            <span className="relative z-10 text-xl tracking-wider uppercase">CALCULATE COMPATIBILITY</span>
            <span className="relative z-10 text-2xl group-hover:scale-125 transition-transform duration-300">💖</span>
          </button>
        </form>
      </div>

      <div className="mt-12 text-slate-500/40 text-[10px] uppercase tracking-[0.2em] font-bold text-center">
        Powered by AI Love-Logic™ • Verified by Cupid 
      </div>
    </div>
  );
};

export default HomeScene;
