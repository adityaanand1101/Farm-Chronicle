import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { localBlogPosts } from '../data/blogPosts';

const FeatureMonolith: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for infinite marquee effect
  const marqueeItems = [...localBlogPosts, ...localBlogPosts];

  return (
    <section className="section-spacing" style={{ background: 'var(--noir-black)', overflow: 'hidden', padding: '100px 0' }}>
      <div className="noir-container" style={{ marginBottom: '60px' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '15px' }}>GLOBAL RESEARCH</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 300 }}>Frontier <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Insights.</span></h2>
      </div>

      <div 
        style={{ position: 'relative', width: '100%' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          className="marquee-track"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Much slower and smoother
              ease: "linear"
            }
          }}
          style={{ display: 'flex', gap: '20px', width: 'max-content', padding: '0 10px' }}
        >
          {marqueeItems.map((post, i) => (
            <div 
              key={i}
              className="feature-card"
              style={{ 
                position: 'relative', 
                width: '350px', // More compact size
                height: '500px', 
                overflow: 'hidden',
                flexShrink: 0,
                background: '#0a0a0a',
                border: '1px solid var(--noir-border)'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.95) 100%)', zIndex: 1 }} />
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="feature-img" />
              
              {/* Content Overlay */}
              <div className="card-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2, padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <h3 className="one-word-title" style={{ fontSize: '2rem', fontWeight: 200, color: '#fff', letterSpacing: '0.1em', transition: '0.4s' }}>{post.category}</h3>
                
                <div className="hover-content" style={{ maxHeight: 0, opacity: 0, overflow: 'hidden', transition: '0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.6, margin: '15px 0 25px' }}>
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="elite-btn" style={{ padding: '10px 20px', fontSize: '0.6rem', border: '1px solid var(--harvest-gold)', background: 'none', color: 'var(--harvest-gold)' }}>READ MORE</Link>
                </div>
                
                <div style={{ width: '30px', height: '1px', background: 'var(--harvest-gold)', marginTop: '15px', transition: '0.4s' }} className="feature-line" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .feature-card:hover .hover-content { maxHeight: 300px; opacity: 1; margin-top: 10px; }
        .feature-card:hover .one-word-title { color: var(--harvest-gold); transform: translateY(-5px); }
        .feature-card:hover .feature-img { transform: scale(1.05); filter: brightness(0.4); }
        .feature-card:hover .feature-line { width: 100%; }
        .feature-img { transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        @media (max-width: 768px) { 
          .feature-card { width: 280px; height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default FeatureMonolith;
