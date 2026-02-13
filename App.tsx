
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AppState, FormData } from './types';
import HomeScene from './components/HomeScene';
import LoadingScene from './components/LoadingScene';
import VideoScene from './components/VideoScene';
import SharePage from './components/SharePage';
import Background from './components/Background';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.HOME);
  const [isMuted, setIsMuted] = useState(false);
  const [isMusicAllowed, setIsMusicAllowed] = useState(false);
  const [showEnableMusic, setShowEnableMusic] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    partnerName: '',
    age: '',
    dob: '',
    favouriteColor: 'Red',
    luckyNumber: '',
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    //const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    const audio = new Audio("/music/love.mp3");
    audio.loop = true;
    audioRef.current = audio;

    const playAttempt = audio.play();
    if (playAttempt !== undefined) {
      playAttempt.then(() => {
        setIsMusicAllowed(true);
      }).catch(() => {
        // Autoplay blocked
        setShowEnableMusic(true);
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Sync music with app state and mute setting
  useEffect(() => {
    if (!audioRef.current) return;

    if (currentStep === AppState.VIDEO || currentStep === AppState.SHARE) {
      audioRef.current.pause();
    } else if (isMusicAllowed && !isMuted) {
      audioRef.current.play().catch(() => {});
    }

    audioRef.current.muted = isMuted;
  }, [currentStep, isMuted, isMusicAllowed]);

  const enableMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsMusicAllowed(true);
      setShowEnableMusic(false);
    }
  };

  const resetApp = useCallback(() => {
    setCurrentStep(AppState.HOME);
    setFormData({
      partnerName: '',
      age: '',
      dob: '',
      favouriteColor: 'Red',
      luckyNumber: '',
    });
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetApp();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resetApp]);

  const handleSubmit = (data: FormData) => {
    setFormData(data);
    enableMusic(); // Use interaction to ensure audio plays if it wasn't already
    
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0055', '#ff8da1', '#ffffff']
    });

    setCurrentStep(AppState.LOADING);
    setTimeout(() => setCurrentStep(AppState.VIDEO), 4000);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden transition-all duration-700">
      <Background />
      
      {/* UI Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        {showEnableMusic && currentStep === AppState.HOME && (
          <button 
            onClick={enableMusic}
            className="px-4 py-2 bg-rose-500 text-white text-xs font-bold rounded-full animate-bounce shadow-lg shadow-rose-500/50"
          >
            Tap to enable music 🎵
          </button>
        )}
        {(currentStep === AppState.HOME || currentStep === AppState.LOADING) && (
          <button 
            onClick={toggleMute}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        )}
      </div>

      <main className="relative z-10 w-full min-h-screen flex items-center justify-center p-4">
        {currentStep === AppState.HOME && <HomeScene onSubmit={handleSubmit} />}
        {currentStep === AppState.LOADING && <LoadingScene />}
        {currentStep === AppState.VIDEO && <VideoScene onEnd={() => setCurrentStep(AppState.SHARE)} />}
        {currentStep === AppState.SHARE && <SharePage reset={resetApp} formData={formData} />}
      </main>
    </div>
  );
};

export default App;
