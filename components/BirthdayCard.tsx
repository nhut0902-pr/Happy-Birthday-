
import React, { useState, useEffect } from 'react';

interface BirthdayCardProps {
  onNext: () => void;
}

const TypewriterText: React.FC<{ text: string; delay?: number; onComplete?: () => void }> = ({ text, delay = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, delay, onComplete]);

  return <span>{displayedText}</span>;
};

const BirthdayCard: React.FC<BirthdayCardProps> = ({ onNext }) => {
  const [step, setStep] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const lines = [
    "Chúc em tuổi mới thật rạng rỡ, luôn xinh đẹp và hạnh phúc nhất nhé.",
    "Mong mọi điều tốt đẹp nhất sẽ đến với em: sức khỏe, nụ cười rạng rỡ và những ước mơ đều thành hiện thực.",
    "Cảm ơn em đã đến và làm cuộc đời này trở nên ngọt ngào hơn."
  ];

  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-pink-500 animate-in zoom-in slide-in-from-top-10 duration-1000">
      <div className="text-center">
        <div className="mb-6 inline-block p-4 bg-pink-100 rounded-full animate-bounce">
          🎂
        </div>
        <h1 className="text-4xl font-bold text-pink-600 mb-4 font-romantic">
          Happy Birthday Em!
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg min-h-[200px] flex flex-col justify-start">
          <p className="transition-all duration-500">
            {step >= 0 && (
              <TypewriterText 
                text={lines[0]} 
                onComplete={() => setStep(1)} 
              />
            )}
          </p>
          <p className="transition-all duration-500">
            {step >= 1 && (
              <TypewriterText 
                text={lines[1]} 
                onComplete={() => setStep(2)} 
              />
            )}
          </p>
          <p className="font-semibold text-pink-500 transition-all duration-500">
            {step >= 2 && (
              <TypewriterText 
                text={lines[2]} 
                onComplete={() => setShowButton(true)} 
              />
            )}
          </p>
        </div>
        
        <div className={`mt-8 transition-all duration-1000 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button 
            onClick={onNext}
            className="px-8 py-3 bg-pink-500 text-white rounded-full font-bold shadow-lg hover:bg-pink-600 transition-all transform hover:scale-105 active:scale-95"
          >
            Xem kỷ niệm của mình 💖
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
