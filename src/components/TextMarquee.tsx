import React from 'react';

const TextMarquee: React.FC = () => {
  return (
    <div style={{ background: 'var(--moss)', padding: '40px 0', overflow: 'hidden', borderTop: '1px solid var(--leaf)', borderBottom: '1px solid var(--leaf)' }}>
      <div className="text-marquee">
        <div className="marquee-inner">
          {[1, 2].map(i => (
            <span key={i} style={{ 
              fontSize: '8rem', 
              fontWeight: 900, 
              color: 'transparent', 
              WebkitTextStroke: '1px var(--leaf)',
              whiteSpace: 'nowrap',
              paddingRight: '100px',
              fontFamily: 'var(--font-display)'
            }}>
              FIELD VERIFIED • PEER REVIEWED • OPEN ACCESS • GLOBAL IMPACT • 
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .text-marquee {
          display: flex;
          width: 100%;
        }
        .marquee-inner {
          display: flex;
          animation: marquee-text 20s linear infinite;
        }
        @keyframes marquee-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TextMarquee;
