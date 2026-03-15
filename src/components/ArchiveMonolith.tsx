import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ArchiveMonolith: React.FC = () => {
  const navigate = useNavigate();
  const volumes = [
    { vol: 'VOLUME 04', issue: '10', date: 'OCT 2025', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000' },
    { vol: 'VOLUME 04', issue: '08', date: 'AUG 2025', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000' },
    { vol: 'VOLUME 04', issue: '07', date: 'JUL 2025', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000' },
    { vol: 'VOLUME 04', issue: '06', date: 'JUN 2025', img: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2000' }
  ];

  return (
    <section style={{ background: '#000', color: '#fff', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="noir-container" style={{ position: 'relative', zIndex: 5 }}>
        <div className="resp-grid-1-3" style={{ alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.4em' }}>CURRENT DISCOURSE</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginTop: '1.5rem', marginBottom: '2.5rem', lineHeight: 1 }}>Recent <br /><span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--harvest-gold)' }}>Publications.</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3.5rem', maxWidth: '400px' }}>
              Access the most recent scientific breakthroughs and discussions from our peer-reviewed journals.
            </p>
            <button 
              onClick={() => navigate('/archives')} 
              style={{ 
                background: 'var(--harvest-gold)', 
                color: '#000', 
                border: 'none',
                padding: '20px 40px',
                fontSize: '0.75rem',
                fontWeight: 900,
                letterSpacing: '0.2em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '15px',
                transition: '0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.1)'}
              onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
            >
              EXPLORE FULL ARCHIVES <ChevronRight size={16} />
            </button>
          </motion.div>

          <div className="resp-grid-4">
            {volumes.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -20, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => navigate(`/publications?vol=${v.vol}&issue=${v.issue}`)}
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', position: 'relative' }}
              >
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={v.img} alt={`Vol ${v.vol}`} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                </div>
                <div style={{ padding: '25px' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.2em', marginBottom: '10px' }}>{v.vol} | ISSUE {v.issue}</div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '20px' }}>{v.date}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.3)' }}>
                    <div style={{ fontSize: '0.6rem', fontWeight: 900 }}>READ PUBLICATIONS</div>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
    </section>
  );
};

export default ArchiveMonolith;
