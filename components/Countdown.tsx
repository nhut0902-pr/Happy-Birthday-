
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ onComplete }) => {
  // For demo purposes, we start at 5 seconds. In a real app, this would be a target date.
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-700">
      <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-8 drop-shadow-md">
        Happy Birthday To You
      </h2>
      <div className="bg-white/80 backdrop-blur-md px-10 py-6 rounded-3xl shadow-2xl border-4 border-pink-300">
        <span className="text-6xl md:text-8xl font-mono font-bold text-pink-500 tabular-nums">
          {formatTime(timeLeft)}
        </span>
      </div>
      <p className="mt-6 text-pink-400 font-medium italic">Preparing your surprise...</p>
    </div>
  );
};

export default Countdown;
