import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const AnnouncementBanner: React.FC = () => {
  const subscribeLink = "https://docs.google.com/forms/d/e/1FAIpQLSdiTtYIOXgZ6pm0PrnoQA6XsfOFWU47x-KBsNd8kSZflPfJFg/viewform";

  return (
    <div style={{ 
      background: '#000', 
      color: '#fff', 
      padding: '12px 0', 
      overflow: 'hidden', 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: '45px',
      borderBottom: '1px solid rgba(0,0,0,0.1)'
    }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '15px', marginRight: '50px' }}>
              <Sparkles size={14} />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                LATEST ISSUE (VOL 04, ISSUE 10) PUBLISHED — STAY UPDATED WITH THE LATEST IN AGRI-SCIENCE — 
                <a 
                  href={subscribeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'underline', 
                    marginLeft: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  TO SUBSCRIBE TO OUR NEWSLETTER CLICK HERE <ExternalLink size={12} />
                </a>
              </span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-container {
          white-space: nowrap;
          width: 100%;
        }
        .marquee-content {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;
