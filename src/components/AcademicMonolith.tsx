import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const AcademicMonolith: React.FC = () => {
  const fields = [
    { name: 'HORTICULTURE', desc: 'Strategic advancements in high-value crop production.', img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000' },
    { name: 'DAIRY TECH', desc: 'Technological shifts in processing & management.', img: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=1000' },
    { name: 'AGRONOMY', desc: 'Soil health monitoring & field crop analysis.', img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1000' }
  ];

  return (
    <section className="section-spacing">
      <div className="brutal-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '100px' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--high-viz)', letterSpacing: '0.4em' }}>RESEARCH DOMAINS</span>
            <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9 }}>CORE <br /><span style={{ fontStyle: 'italic', fontWeight: 200, color: 'var(--leaf)' }}>VERTICALS.</span></h2>
          </div>
          <p style={{ maxWidth: '400px', fontSize: '1.1rem', fontWeight: 500, color: 'var(--moss)', opacity: 0.7 }}>
            Our editorial board preserves scientific integrity across 12 distinct agricultural disciplines.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {fields.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              style={{ background: '#fff', border: '1px solid var(--moss)', overflow: 'hidden', position: 'relative' }}
            >
              <div style={{ height: '500px', overflow: 'hidden' }}>
                <img src={f.img} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)', transition: '0.8s' }} className="mono-img" />
              </div>
              <div style={{ padding: '40px', background: 'var(--moss)', color: '#fff' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{f.name}</h3>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', marginBottom: '30px' }}>{f.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--high-viz)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em' }}>
                  VIEW PAPERS <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .mono-img:hover {
          filter: grayscale(0%) contrast(1) !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default AcademicMonolith;
