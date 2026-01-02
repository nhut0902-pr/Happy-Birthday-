
import React, { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div className="relative cursor-pointer group" onClick={handleClick}>
      <style>{`
        .envelope-container {
          perspective: 1000px;
          width: 300px;
          height: 200px;
        }
        .envelope-body {
          position: relative;
          width: 100%;
          height: 100%;
          background: #ff85a2;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          z-index: 10;
        }
        .envelope-flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 150px solid transparent;
          border-right: 150px solid transparent;
          border-top: 100px solid #ff698c;
          transform-origin: top;
          transition: transform 1s ease-in-out;
          z-index: 20;
        }
        .envelope-flap.open {
          transform: rotateX(180deg);
        }
        .heart-seal {
          position: absolute;
          top: 35px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 25;
          transition: opacity 0.5s;
        }
        .heart-seal.fade-out {
          opacity: 0;
        }
      `}</style>

      <div className="envelope-container animate-in fade-in slide-in-from-bottom-20 duration-1000">
        <div className={`envelope-flap ${isOpening ? 'open' : ''}`}></div>
        <div className={`heart-seal ${isOpening ? 'fade-out' : ''}`}>
           <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff2e63">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
           </svg>
        </div>
        <div className="envelope-body flex items-center justify-center">
          <p className="text-white font-bold text-xl uppercase tracking-widest">Open Me</p>
        </div>
      </div>
    </div>
  );
};

export default Envelope;
