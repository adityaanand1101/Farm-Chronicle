import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const EditorialGrid: React.FC = () => {
  const categories = [
    { title: 'HORTICULTURE', desc: 'The architecture of plant life and sustainable breeding.', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000' },
    { title: 'FOOD SCIENCE', desc: 'Decoding the molecular future of global nutrition.', img: 'https://images.unsplash.com/photo-1530836361253-efad5cb2f620?q=80&w=1000' },
    { title: 'BIOSCIENCES', desc: 'Microscopic discoveries with macro-world impact.', img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000' }
  ];

  return (
    <section className="section-spacing" style={{ background: '#fff' }}>
      <div className="editorial-container">
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.4em', color: 'var(--agri-gold)', textTransform: 'uppercase' }}>RESEARCH DOMAINS</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1.5rem' }}>Disciplines of <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--agri-sage)' }}>Distinction.</span></h2>
          <div style={{ width: '1px', height: '60px', background: 'var(--agri-border)', margin: '30px auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px' }}>
          {categories.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ height: '550px', overflow: 'hidden', position: 'relative', marginBottom: '30px' }}>
                <img 
                  src={c.img} 
                  alt={c.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1.2s ease' }} 
                  className="editorial-img"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(27,48,34,0.1)', transition: '0.5s' }} className="img-overlay" />
              </div>
              <h3 style={{ fontSize: '1.4rem', letterSpacing: '0.05em', marginBottom: '10px' }}>{c.title}</h3>
              <p style={{ color: 'var(--agri-text-light)', fontSize: '0.95rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '20px' }}>{c.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.65rem', fontWeight: 600, color: 'var(--agri-gold)', letterSpacing: '0.2em' }}>
                VIEW DOMAIN <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .editorial-img:hover {
          transform: scale(1.05);
        }
        .img-overlay:hover {
          background: rgba(27,48,34,0);
        }
      `}</style>
    </section>
  );
};

export default EditorialGrid;
