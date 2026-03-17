import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { localBlogPosts } from '../data/blogPosts';

const FeatureMonolith: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Use blog posts for the carousel
  const carouselPosts = localBlogPosts.map(post => ({
    id: post.id,
    title: post.category, // One word title
    fullTitle: post.title,
    excerpt: post.excerpt,
    img: post.image
  }));

  // Duplicate items for infinite marquee effect
  const marqueeItems = [...carouselPosts, ...carouselPosts];

  return (
    <section className="section-spacing" style={{ background: 'var(--noir-black)', overflow: 'hidden' }}>
      <div className="noir-container" style={{ marginBottom: '60px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>LATEST INSIGHTS</span>
        <h2 style={{ fontSize: '3rem', color: '#fff', fontWeight: 300 }}>Research <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Frontiers.</span></h2>
      </div>

      <div 
        style={{ position: 'relative', width: '100%', cursor: 'pointer' }}
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
              duration: 40, // Slow moving
              ease: "linear"
            }
          }}
          style={{ display: 'flex', gap: '30px', width: 'max-content', padding: '0 15px' }}
        >
          {marqueeItems.map((post, i) => (
            <div 
              key={i}
              className="feature-card"
              style={{ 
                position: 'relative', 
                width: '450px', 
                height: '650px', 
                overflow: 'hidden',
                flexShrink: 0,
                background: '#111'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.9) 100%)', zIndex: 1 }} />
              <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="feature-img" />
              
              {/* Content Overlay */}
              <div className="card-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2, padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <h3 className="one-word-title" style={{ fontSize: '3rem', fontWeight: 200, color: '#fff', letterSpacing: '0.1em', transition: '0.5s' }}>{post.title}</h3>
                
                <div className="hover-content" style={{ maxHeight: 0, opacity: 0, overflow: 'hidden', transition: '0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6, margin: '20px 0 30px' }}>
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="elite-btn" style={{ padding: '12px 25px', fontSize: '0.65rem' }}>READ ARTICLE</Link>
                </div>
                
                <div style={{ width: '40px', height: '1px', background: 'var(--harvest-gold)', marginTop: '20px', transition: '0.5s' }} className="feature-line" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .feature-card:hover .hover-content { maxHeight: 300px; opacity: 1; margin-top: 10px; }
        .feature-card:hover .one-word-title { color: var(--harvest-gold); transform: translateY(-10px); }
        .feature-card:hover .feature-img { transform: scale(1.1); filter: brightness(0.6); }
        .feature-card:hover .feature-line { width: 100%; }
        .feature-img { transition: 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
        @media (max-width: 768px) { 
          .feature-card { width: 320px; height: 500px; }
        }
      `}</style>
    </section>
  );
};

export default FeatureMonolith;
