import React from 'react';
import { Link } from 'react-router-dom';
import { localBlogPosts } from '../data/blogPosts';

const FeatureMonolith: React.FC = () => {
  // Duplicate items for infinite marquee effect
  const marqueeItems = [...localBlogPosts, ...localBlogPosts, ...localBlogPosts];

  return (
    <section className="section-spacing" style={{ background: 'var(--noir-black)', overflow: 'hidden', padding: '100px 0' }}>
      <div className="noir-container" style={{ marginBottom: '60px' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '15px' }}>GLOBAL RESEARCH</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 300 }}>Frontier <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Insights.</span></h2>
      </div>

      <div className="marquee-container" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <div className="marquee-track">
          {marqueeItems.map((post, i) => (
            <div 
              key={i}
              className="feature-card"
              style={{ 
                position: 'relative', 
                width: '350px',
                height: '500px', 
                overflow: 'hidden',
                flexShrink: 0,
                background: '#0a0a0a',
                border: '1px solid var(--noir-border)',
                marginRight: '20px'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.95) 100%)', zIndex: 1 }} />
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="feature-img" />
              
              <div className="card-overlay" style={{ 
                position: 'absolute', inset: 0, zIndex: 2, padding: '30px', 
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', 
                background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.85) 100%)' 
              }}>
                
                <div className="hover-content">
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    color: '#fff', 
                    marginBottom: '20px', 
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em'
                  }}>
                    {post.title}
                  </h3>
                  <Link to={`/blog/${post.id}`} className="elite-btn" style={{ padding: '10px 25px', fontSize: '0.6rem', border: '1px solid var(--harvest-gold)', background: 'none', color: 'var(--harvest-gold)', textDecoration: 'none', display: 'inline-block' }}>READ ARTICLE</Link>
                </div>
                
                <div style={{ width: '30px', height: '1px', background: 'var(--harvest-gold)', marginTop: '15px', transition: '0.4s' }} className="feature-line" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 80s linear infinite; /* Even slower for more smoothness */
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-370px * ${localBlogPosts.length})); }
        }
        .feature-card:hover .hover-content { opacity: 1; transform: translateY(0); }
        .feature-card:hover .feature-img { transform: scale(1.1); filter: brightness(0.3); }
        .feature-card:hover .feature-line { width: 100%; }
        
        .hover-content {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          pointer-events: none;
        }
        .feature-card:hover .hover-content {
          pointer-events: auto;
        }
        .feature-img { transition: 1.5s cubic-bezier(0.23, 1, 0.32, 1); }
        
        @media (max-width: 768px) { 
          .feature-card { width: 280px; height: 450px; }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-300px * ${localBlogPosts.length})); }
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureMonolith;
