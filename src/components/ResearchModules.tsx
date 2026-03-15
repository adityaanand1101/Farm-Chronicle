import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Activity, Droplets, Zap, Wind, Search } from 'lucide-react';

const ResearchModules: React.FC = () => {
  const modules = [
    { icon: <Microscope size={24} />, title: 'Biotechnology', status: 'ACTIVE', id: 'MD-01' },
    { icon: <Droplets size={24} />, title: 'Irrigation Systems', status: 'OPTIMIZING', id: 'MD-02' },
    { icon: <Activity size={24} />, title: 'Livestock Genetics', status: 'ACTIVE', id: 'MD-03' },
    { icon: <Zap size={24} />, title: 'Precision Farming', status: 'ONLINE', id: 'MD-04' },
    { icon: <Wind size={24} />, title: 'Climate Adaptation', status: 'ACTIVE', id: 'MD-05' },
    { icon: <Search size={24} />, title: 'Soil Analysis', status: 'MONITORING', id: 'MD-06' }
  ];

  return (
    <section style={{ padding: '140px 0', borderTop: '1px solid var(--bio-border)' }}>
      <div className="bio-container">
        <div style={{ marginBottom: '80px' }}>
          <div className="tech-tag">SYSTEM_CORE: RESEARCH_MODULES</div>
          <h2 style={{ fontSize: '3rem', color: '#fff' }}>Vertical <span style={{ color: 'var(--bio-mint)' }}>Integration.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--bio-border)' }}>
          {modules.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ background: 'rgba(0, 255, 148, 0.05)' }}
              style={{ background: 'var(--bio-black)', padding: '60px 40px', transition: '0.3s', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
                <div style={{ color: 'var(--bio-mint)' }}>{m.icon}</div>
                <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>{m.id}</div>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#fff' }}>{m.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--bio-mint)', boxShadow: '0 0 10px var(--bio-mint)' }} />
                <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.65rem', color: 'var(--bio-mint)', letterSpacing: '0.1em' }}>{m.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchModules;
