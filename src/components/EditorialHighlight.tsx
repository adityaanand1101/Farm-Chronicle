import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const EditorialHighlight: React.FC = () => {
  const editors = [
    { name: 'Arulmanikandan B', role: 'FOUNDER & CHIEF EDITOR', img: '/team/arulmanikandan B.jpg' },
    { name: 'Karthiga P', role: 'CHIEF EXECUTIVE EDITOR', img: '/team/Karthiga P.jpg' }
  ];

  return (
    <section style={{ background: '#000', color: '#fff', padding: '120px 0', overflow: 'hidden', position: 'relative', borderTop: '1px solid var(--noir-border)' }}>
      <div className="noir-container">
        <div className="resp-grid-2" style={{ alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.4em' }}>THE BOARD</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', color: '#fff', marginTop: '1.5rem', marginBottom: '2.5rem' }}>Founding <br /><span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--harvest-gold)' }}>Visionaries.</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3.5rem' }}>
              Our editorial leadership comprises distinguished scholars dedicated to maintaining the highest standards of scientific integrity and practical relevance in agricultural discourse.
            </p>
            
            <div style={{ display: 'grid', gap: '30px' }}>
              {[
                { icon: <Award />, t: 'Peer-Reviewed Standards', d: 'Rigorous evaluation process for every submission.' },
                { icon: <ShieldCheck />, t: 'Ethics Compliance', d: 'Committed to global research integrity protocols.' }
              ].map((v, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--harvest-gold)' }}>{v.icon}</div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '5px' }}>{v.t}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{v.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="editors-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            {editors.map((ed, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ 
                  aspectRatio: '1/1',
                  maxWidth: '300px', 
                  width: '100%',
                  margin: '0 auto 30px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '2px solid var(--harvest-gold)',
                  padding: '8px',
                  background: 'rgba(197, 160, 89, 0.05)'
                }}>
                  <img src={ed.img} alt={ed.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '1.2rem', letterSpacing: '0.05em' }}>{ed.name}</h4>
                  <p style={{ color: 'var(--harvest-gold)', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.2em', marginTop: '5px' }}>{ed.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .editors-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EditorialHighlight;
