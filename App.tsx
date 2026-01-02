
import React, { useState, useRef, useEffect } from 'react';
import { CelebrationStage } from './types';
import FallingHearts from './components/FallingHearts';
import Countdown from './components/Countdown';
import Envelope from './components/Envelope';
import BirthdayCard from './components/BirthdayCard';
import PhotoCollage from './components/PhotoCollage';

const App: React.FC = () => {
  const [stage, setStage] = useState<CelebrationStage>(CelebrationStage.QUESTION);
  const [answer, setAnswer] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = () => {
    if (answer.trim() === '') {
      alert("Nhập gì đó vào đã nè!");
      return;
    }
    // Start music on first interaction
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Autoplay prevented:", err));
    }
    setStage(CelebrationStage.COUNTDOWN);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const renderStage = () => {
    switch (stage) {
      case CelebrationStage.QUESTION:
        return (
          <div className="flex flex-col items-center justify-center text-center px-4 z-10 animate-in fade-in duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6 drop-shadow-sm font-romantic">
              Hôm nay là ngày gì nhỉ?
            </h1>
            <div className="bg-white/90 p-8 rounded-3xl shadow-xl border-2 border-pink-200 w-full max-w-md">
              <input
                type="text"
                placeholder="Ví dụ: Sinh nhật em..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none text-pink-600 mb-6 text-center text-lg"
              />
              <button
                onClick={handleStart}
                className="w-full bg-pink-500 text-white py-3 rounded-xl font-bold hover:bg-pink-600 transition-all shadow-md transform hover:scale-[1.02] active:scale-95"
              >
                Nhấn vào đây đi! ✨
              </button>
            </div>
          </div>
        );

      case CelebrationStage.COUNTDOWN:
        return (
          <div className="z-10">
            <Countdown onComplete={() => setStage(CelebrationStage.ENVELOPE)} />
          </div>
        );

      case CelebrationStage.ENVELOPE:
        return (
          <div className="z-10 flex flex-col items-center">
            <h2 className="text-3xl text-pink-600 font-bold mb-12 animate-pulse text-center">
              Một bức thư bí mật dành cho em...
            </h2>
            <Envelope onOpen={() => setStage(CelebrationStage.CARD)} />
          </div>
        );

      case CelebrationStage.CARD:
        return (
          <div className="z-10 w-full flex justify-center px-4">
            <BirthdayCard onNext={() => setStage(CelebrationStage.PHOTOS)} />
          </div>
        );

      case CelebrationStage.PHOTOS:
        return (
          <>
            <div className="z-10 animate-in fade-in duration-1000 fixed inset-0 flex items-center justify-center">
               <PhotoCollage />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-pink-50">
      <audio 
        ref={audioRef}
        src="https://res.cloudinary.com/dhqbg0qek/video/upload/v1767354230/media_5_znlx6o.m4a"
        loop
      />
      
      <FallingHearts />
      
      {renderStage()}
      
      {/* Music Toggle */}
      <button 
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/50 backdrop-blur-sm hover:bg-white/80 rounded-full shadow-lg transition-all border border-pink-200"
        title={isMuted ? "Bật nhạc" : "Tắt nhạc"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v4.5a4.5 4.5 0 1 0 3 4.18V9.95L21 6v3"></path></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
        )}
      </button>

      {/* Footer Branding */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-20">
        <div className="text-pink-300 text-sm font-medium animate-pulse space-y-1">
          <p>Made with ❤️ for you</p>
          <p className="text-pink-400 font-bold opacity-80 tracking-wide">Powered By Nhutcoder</p>
        </div>
      </div>
    </div>
  );
};

export default App;
