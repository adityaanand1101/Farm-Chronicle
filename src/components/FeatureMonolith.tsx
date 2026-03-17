import React from 'react';
import { Link } from 'react-router-dom';
import { localBlogPosts } from '../data/blogPosts';

const FeatureMonolith: React.FC = () => {
  // Duplicate items for infinite marquee effect
  const marqueeItems = [...localBlogPosts, ...localBlogPosts, ...localBlogPosts];

  // Helper function to trim title - split by : or ; and take the first part
  const getCleanTitle = (title: string) => {
    const splitIndex = title.search(/[:;]/);
    if (splitIndex !== -1) {
      return title.substring(0, splitIndex).trim();
    }
    return title;
  };

  return (
    <section className="section-spacing" style={{ background: 'var(--noir-black)', overflow: 'hidden', padding: '120px 0' }}>
      <div className="noir-container" style={{ marginBottom: '80px', position: 'relative' }}>
        
        {/* Top Left Hyperlink - Made more prominent */}
        <Link 
          to="/blog" 
          style={{ 
            position: 'absolute', 
            top: '-60px', 
            left: '0', 
            color: 'var(--harvest-gold)', 
            fontSize: '0.8rem', 
            fontWeight: 900, 
            letterSpacing: '0.3em', 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ width: '30px', height: '1px', background: 'var(--harvest-gold)' }}></span>
          ENTER THE ACADEMIC BLOG ↗
        </Link>

        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>GLOBAL RESEARCH</span>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', fontWeight: 300 }}>Frontier <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Insights.</span></h2>
          
          <div style={{ paddingBottom: '10px' }}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScbj-MZLApFQTGXJqaUnNH5T-nWhJMNjaYZ4pbixPIsH2L2lw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="elite-btn" 
              style={{ padding: '15px 35px', fontSize: '0.7rem' }}
            >
              SUBMIT YOUR RESEARCH
            </a>
          </div>
        </div>
      </div>

      <div className="marquee-container" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div className="marquee-track">
          {marqueeItems.map((post, i) => (
            <div 
              key={i}
              className="feature-card"
              style={{ 
                position: 'relative', 
                width: '400px', // Increased width
                height: '550px', // Increased height
                overflow: 'hidden',
                flexShrink: 0,
                background: '#0a0a0a',
                border: '1px solid var(--noir-border)',
                marginRight: '30px'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.95) 100%)', zIndex: 1 }} />
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="feature-img" />
              
              <div className="card-overlay" style={{ 
                position: 'absolute', inset: 0, zIndex: 2, padding: '40px', // Increased padding
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', 
                background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.9) 100%)' 
              }}>
                
                <div className="hover-content">
                  <h3 style={{ 
                    fontSize: '1.4rem', // Slightly larger
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: '25px', 
                    lineHeight: 1.3,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    wordBreak: 'break-word' // Prevent cropping
                  }}>
                    {getCleanTitle(post.title)}
                  </h3>
                  <Link to={`/blog/${post.id}`} className="elite-btn" style={{ padding: '12px 30px', fontSize: '0.65rem', border: '1px solid var(--harvest-gold)', background: 'none', color: 'var(--harvest-gold)', textDecoration: 'none', display: 'inline-block' }}>READ FULL ARTICLE</Link>
                </div>
                
                <div style={{ width: '40px', height: '1px', background: 'var(--harvest-gold)', marginTop: '20px', transition: '0.4s' }} className="feature-line" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider / Ticker under the blog */}
      <div style={{ marginTop: '80px', borderTop: '1px solid var(--noir-border)', borderBottom: '1px solid var(--noir-border)', padding: '25px 0', background: 'rgba(212, 140, 49, 0.03)' }}>
        <div className="ticker-wrap">
          <div className="ticker">
            {localBlogPosts.map((post, i) => (
              <span key={i} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 800, margin: '0 50px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                • {getCleanTitle(post.title)}
              </span>
            ))}
            {/* Double duplication for seamless infinite effect */}
            {localBlogPosts.map((post, i) => (
              <span key={`dup-${i}`} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 800, margin: '0 50px', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
                • {getCleanTitle(post.title)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 90s linear infinite; /* Even slower for more smoothness */
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-430px * ${localBlogPosts.length})); } /* Adjusted for width+margin */
        }
        
        .ticker-wrap { width: 100%; overflow: hidden; }
        .ticker { display: flex; width: max-content; animation: ticker 50s linear infinite; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .feature-card:hover .hover-content { opacity: 1; transform: translateY(0); }
        .feature-card:hover .feature-img { transform: scale(1.1); filter: brightness(0.35); }
        .feature-card:hover .feature-line { width: 100%; }
        
        .hover-content {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.7s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
        }
        .feature-card:hover .hover-content {
          pointer-events: auto;
        }
        .feature-img { transition: 1.8s cubic-bezier(0.23, 1, 0.32, 1); }
        
        @media (max-width: 768px) { 
          .feature-card { width: 300px; height: 450px; }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-330px * ${localBlogPosts.length})); }
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureMonolith;
