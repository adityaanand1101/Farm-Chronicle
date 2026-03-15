import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Users, BookOpen } from 'lucide-react';

interface Location {
  city: string;
  top: string;
  left: string;
  stats: string;
  research: string;
}

interface AgriMarkerProps {
  loc: Location;
  index: number;
}

const AgriMarker: React.FC<AgriMarkerProps> = ({ loc, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{ position: 'absolute', top: loc.top, left: loc.left, cursor: 'pointer', zIndex: isHovered ? 100 : 10 }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Core Pulsing Node */}
        <span style={{ position: 'absolute', width: '10px', height: '10px', background: 'var(--agri-green)', borderRadius: '50%', boxShadow: '0 0 15px var(--agri-green)' }}></span>
        <motion.span 
          animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', width: '10px', height: '10px', background: 'var(--agri-gold)', borderRadius: '50%' }}
        ></motion.span>
        
        {/* Tooltip Card */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={isHovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            bottom: '25px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--agri-gold)',
            padding: '20px',
            borderRadius: '2px',
            minWidth: '240px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            pointerEvents: 'none',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid var(--agri-border)', paddingBottom: '8px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--agri-green)', letterSpacing: '0.1em' }}>HUB: {loc.city.toUpperCase()}</span>
            <Microscope size={14} color="var(--agri-gold)" />
          </div>
          <h4 style={{ fontSize: '1rem', color: 'var(--agri-green-dark)', marginBottom: '8px' }}>{loc.research}</h4>
          <p style={{ fontSize: '0.75rem', color: 'var(--agri-text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>{loc.stats}</p>
          <div style={{ display: 'flex', gap: '15px', fontSize: '0.65rem', fontWeight: 800, color: 'var(--agri-gold)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Users size={10} /> 120+ AUTHORS</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><BookOpen size={10} /> 45 PAPERS</span>
          </div>
          
          {/* Tooltip Arrow */}
          <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '12px', height: '12px', background: '#fff', borderRight: '1px solid var(--agri-gold)', borderBottom: '1px solid var(--agri-gold)' }}></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AgriMarker;
