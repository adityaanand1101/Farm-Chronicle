import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Sprout, Droplets, FlaskConical, Fish, Wheat, ArrowUpRight } from 'lucide-react';

const AcademicGrid: React.FC = () => {
  const disciplines = [
    { icon: <Microscope size={32} />, t: 'BIOSCIENCES', d: 'Innovations in biotechnological research and microbial applications.' },
    { icon: <Sprout size={32} />, t: 'HORTICULTURE', d: 'Strategic advancements in high-value crop production and breeding.' },
    { icon: <Droplets size={32} />, t: 'DAIRY TECH', d: 'Technological shifts in dairy processing and cattle management.' },
    { icon: <FlaskConical size={32} />, t: 'FOOD SCIENCE', d: 'The chemistry of nutrition and global food security systems.' },
    { icon: <Fish size={32} />, t: 'FISHERIES', d: 'Sustainable aquatic resource management and cage culture.' },
    { icon: <Wheat size={32} />, t: 'AGRONOMY', d: 'Soil health monitoring and field crop productivity analysis.' }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--agri-gold)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>CORE DISCIPLINES</span>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Academic <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Focus Areas.</span></h2>
          <div className="monogram" style={{ margin: '30px auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {disciplines.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                padding: '50px 40px', 
                background: 'var(--agri-surface)', 
                border: '1px solid var(--agri-border)',
                transition: 'var(--transition)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="card-hover"
            >
              <div style={{ color: 'var(--agri-green)', marginBottom: '25px' }}>{d.icon}</div>
              <h3 style={{ fontSize: '1.25rem', letterSpacing: '0.1em', fontWeight: 800, marginBottom: '1rem' }}>{d.t}</h3>
              <p style={{ color: 'var(--agri-text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>{d.d}</p>
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', fontWeight: 900, color: 'var(--agri-gold)', letterSpacing: '0.1em' }}>
                EXPLORE RESEARCH <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicGrid;
