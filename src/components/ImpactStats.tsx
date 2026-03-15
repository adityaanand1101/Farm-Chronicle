import React from 'react';
import { motion } from 'framer-motion';

const ImpactStats: React.FC = () => {
  const stats = [
    { label: 'ACTIVE COUNTRIES', val: '24+' },
    { label: 'RESEARCH PAPERS', val: '1,200+' },
    { label: 'GLOBAL AUTHORS', val: '5,000+' },
    { label: 'INSTITUTIONS', val: '80+' }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--agri-surface)', borderTop: '1px solid var(--agri-border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '4.5rem', fontWeight: 700, color: 'var(--agri-green-dark)', fontFamily: 'var(--font-serif)', lineHeight: 1, marginBottom: '15px' }}>
                {s.val}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--agri-gold)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
