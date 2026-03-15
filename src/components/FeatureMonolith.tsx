import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, Microscope } from 'lucide-react';

const FeatureMonolith: React.FC = () => {
  const features = [
    { title: 'HORTICULTURE', icon: <Sprout size={32} />, img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000' },
    { title: 'BIOSCIENCES', icon: <Microscope size={32} />, img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000' },
    { title: 'DAIRY TECH', icon: <Droplets size={32} />, img: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=1000' }
  ];

  return (
    <section className="section-spacing" style={{ background: 'var(--noir-black)' }}>
      <div className="noir-container">
        <div className="resp-grid-3">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="feature-card"
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #000 100%)', zIndex: 1 }} />
              <img src={f.img} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '1.2s cubic-bezier(0.16, 1, 0.3, 1)' }} className="feature-img" />
              
              <div style={{ position: 'absolute', bottom: '50px', left: '40px', zIndex: 2 }}>
                <div style={{ color: 'var(--harvest-gold)', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.1em' }}>{f.title}</h3>
                <div style={{ width: '0%', height: '1px', background: 'var(--harvest-gold)', transition: '0.5s' }} className="feature-line" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card { height: 700px; }
        @media (max-width: 768px) { .feature-card { height: 400px; } }
        div:hover .feature-img { transform: scale(1.1) rotate(1deg); filter: sepia(30%) brightness(0.8); }
        div:hover .feature-line { width: 100%; }
      `}</style>
    </section>
  );
};

export default FeatureMonolith;
