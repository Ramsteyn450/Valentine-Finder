
import React, { useEffect, useState, useRef } from 'react';

interface VideoSceneProps {
  onEnd: () => void;
}

const VideoScene: React.FC<VideoSceneProps> = ({ onEnd }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl, setVideoUrl] = useState('');

  const videoLinks = [
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/valentines%20day%20video.mp4",
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/YouCut_20260212_224933609.mp4",
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/YouCut_20260212_225700531.mp4",
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/YouCut_20260212_225407114.mp4",
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/YouCut_20260212_224630027.mp4",
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/YouCut_20260212_225036245.mp4",
    "https://raw.githubusercontent.com/Ramsteyn450/videos/main/YouCut_20260212_224630027.mp4",
  ];

  useEffect(() => {
    const randomUrl = videoLinks[Math.floor(Math.random() * videoLinks.length)];
    setVideoUrl(randomUrl);

    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const handleManualPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onEnd();
    }, 1000); // 1 second heart transition
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-in fade-in duration-500 overflow-hidden">
      <div className="relative w-full h-full md:max-w-[900px] md:h-auto md:aspect-video flex items-center justify-center shadow-2xl overflow-hidden md:rounded-2xl">
        
        <video
          ref={videoRef}
          src={videoUrl}
          onEnded={handleEnded}
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        />

        {!isPlaying && !isTransitioning && (
          <div 
            onClick={handleManualPlay}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-slate-900/90 backdrop-blur-md z-10"
          >
            <div className="w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(225,29,72,0.4)] animate-pulse mb-6">
              <svg className="w-12 h-12 fill-white ml-2" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-2xl font-romantic text-rose-200">Tap to Reveal Your Destiny...</p>
          </div>
        )}

        {isTransitioning && (
          <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 animate-in fade-in duration-300">
            <div className="text-8xl animate-bounce">💘</div>
            <p className="mt-4 text-rose-200 font-romantic text-xl animate-pulse">Loading next page...</p>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .md\\:max-w-\\[900px\\] {
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoScene;
