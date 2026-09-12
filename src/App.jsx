import React from 'react';
import backGround from './assets/Roses.jpg';

function App() {
  const appStyle = {
    backgroundImage: `url(${backGround})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    overflow: 'hidden',
    padding: '20px',
    position: 'relative'
  };

  const text = "Drahá Marienka naša, kedže dnes neordinuješ, tak my Ti na dnes večer predpisujeme povinnú dobrú náladu, plný pohár vína, obrovský kus torty a úplny zákaz sledovania času! Zo srdca prajeme všetko najlepšie k dnešným meninám, pevné zdravie, veľa lásky a pekných chvíľ v kruhu najbližších";

  const dustParticles = Array.from({ length: 250 }).map((_, i) => {
    const isGold = Math.random() > 0.4;
    return {
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4.8 + 1.8}px`, 
      delay: `${Math.random() * 4}s`,
      duration: `${Math.random() * 5 + 6}s`, 
      color: isGold ? '#ffd700' : '#ffffff',
      glow: isGold ? '0 0 6px #ffd700' : '0 0 6px #ffffff'
    };
  });

  return (
    <div style={appStyle}>
      <div dangerouslySetInnerHTML={{__html: `
        <style>
          @keyframes panelFadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes globalDropAndFocus {
            0% {
              transform: translateY(-100px);
              color: rgba(255, 255, 255, 0.65);
              filter: blur(10px);
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
            }
            40% {
              color: #ffffff;
              filter: blur(3px);
              text-shadow: 0 0 20px #ffd700, 0 0 30px #ffffff;
            }
            100% {
              transform: translateY(0);
              color: #b8860b;
              filter: blur(0px);
              text-shadow: 
                -1px -1px 0 #fff,  
                 1px -1px 0 #fff,
                -1px  1px 0 #fff,
                 1px  1px 0 #fff,
                 2px  2px 4px rgba(0, 0, 0, 0.3);
            }
          }
          
          @keyframes dustFloat {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 0;
            }
            15% { opacity: 0.9; }
            50% { transform: translateY(-50px) translateX(30px) scale(1.2); opacity: 0.5; }
            85% { opacity: 0.9; }
            100% { transform: translateY(-100px) translateX(-15px) scale(1); opacity: 0; }
          }

          @keyframes wowSignatureReveal {
            0% {
              transform: perspective(600px) rotateX(-90deg) scale(0.3);
              opacity: 0;
              filter: brightness(3) blur(5px);
              text-shadow: 0 0 30px #ffd700, 0 0 50px #fff;
            }
            50% {
              opacity: 1;
              filter: brightness(2) blur(0px);
              text-shadow: 0 0 25px #ffd700, 0 0 40px #ff6a00;
            }
            100% {
              transform: perspective(600px) rotateX(0deg) scale(1);
              opacity: 1;
              filter: brightness(1);
              text-shadow: 
                -1px -1px 0 #fff,  
                 1px -1px 0 #fff,
                -1px  1px 0 #fff,
                 1px  1px 0 #fff,
                 2px  2px 4px rgba(0, 0, 0, 0.25);
            }
          }
          
          .clean-transparent-panel {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 50px 40px;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            max-width: 750px;
            width: 100%;
            position: relative;
            z-index: 2;
            opacity: 0;
            animation: panelFadeIn 0.6s ease-out 1s forwards;
            box-sizing: border-box;
          }

          .smooth-drop-text {
            display: block;
            font-weight: 900;
            font-size: 26px;
            line-height: 1.8;
            text-align: center;
            margin: 0;
            transform: translateY(-100px);
            color: rgba(255, 255, 255, 0.65);
            filter: blur(10px);
            animation: globalDropAndFocus 1.8s cubic-bezier(0.25, 1, 0.5, 1) 1s forwards;
            will-change: transform, filter, color, text-shadow;
          }

          .dust-particle {
            position: absolute;
            pointer-events: none;
            z-index: 1;
            border-radius: 50%;
            opacity: 0;
            animation: dustFloat linear infinite;
            will-change: transform, opacity;
          }

          .signature-container {
            display: block;
            width: 100%;
            text-align: center; 
            margin: 30px auto 0 auto;
            border-top: 1px solid rgba(184, 134, 11, 0.2);
            padding-top: 25px;
            box-sizing: border-box;
          }

          .wow-name {
            font-family: 'Georgia', serif; 
            font-size: 26px;
            font-style: italic; 
            font-weight: 900;
            color: #b8860b;
            opacity: 0;
            transform-origin: center top;
            display: inline-block;
            margin: 0 25px; 
            will-change: transform, opacity, filter, text-shadow;
          }

          .name-miki { animation: wowSignatureReveal 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) 12.8s forwards; }
          .name-gabika { animation: wowSignatureReveal 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) 13.3s forwards; }
          .name-jakub { animation: wowSignatureReveal 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) 13.8s forwards; }
        </style>
      `}} />

      {dustParticles.map((particle) => (
        <div
          key={particle.id}
          className="dust-particle"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: particle.glow,
            animationDelay: `calc(2.8s + ${particle.delay})`,
            animationDuration: particle.duration
          }}
        />
      ))}

      <div className="clean-transparent-panel">
        <h2 className="smooth-drop-text">
          {text}
        </h2>
        
        <div className="signature-container">
          <span className="wow-name name-miki">Miki</span>
          <span className="wow-name name-gabika">Gabika</span>
          <span className="wow-name name-jakub">Jakub</span>
        </div>
      </div>
    </div>
  );
}

export default App;