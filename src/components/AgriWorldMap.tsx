import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AgriMarker from './AgriMarker';

const AgriWorldMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const locations = [
    { city: 'New Delhi', top: '48%', left: '70%', research: 'Precision Agronomy', stats: 'Regional hub for field crop productivity analysis.' },
    { city: 'London', top: '32%', left: '48%', research: 'Sustainable Biotech', stats: 'Leading research in microbial applications.' },
    { city: 'Singapore', top: '55%', left: '78%', research: 'Vertical Farming', stats: 'Hub for smart urban agriculture systems.' },
    { city: 'Los Angeles', top: '38%', left: '20%', research: 'Drought Resilience', stats: 'Focus on water-efficient farming protocols.' },
    { city: 'Sydney', top: '75%', left: '88%', research: 'Livestock Genetics', stats: 'Advances in cattle health & management.' },
    { city: 'Rio de Janeiro', top: '65%', left: '35%', research: 'Tropical Ecosystems', stats: 'Soil health monitoring in tropical zones.' },
    { city: 'Tokyo', top: '38%', left: '85%', research: 'Post-Harvest Tech', stats: 'Innovations in food processing & storage.' }
  ];

  return (
    <section ref={containerRef} className="section-padding" style={{ background: 'var(--agri-surface)', borderTop: '1px solid var(--agri-border)', borderBottom: '1px solid var(--agri-border)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 5 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--agri-gold)', letterSpacing: '0.4em' }}>GLOBAL NETWORK</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '1.5rem', color: 'var(--agri-green-dark)' }}>Impact <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Without Borders.</span></h2>
          <p style={{ maxWidth: '600px', margin: '2rem auto 0', color: 'var(--agri-text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
            Farm Chronicle unites researchers from 24+ countries, disseminating critical scientific information across the global agricultural community.
          </p>
        </div>

        {/* Map Container */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', maxWidth: '1200px', margin: '0 auto', zIndex: 2 }}>
          {/* Topographical Stylized Map */}
          <motion.div 
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg") no-repeat center center', 
              backgroundSize: 'contain', 
              filter: 'sepia(40%) hue-rotate(80deg) brightness(0.9) contrast(1.1)', 
              opacity: 0.15,
              y
            }} 
          />

          {/* Location Nodes */}
          {locations.map((loc, i) => (
            <AgriMarker key={i} loc={loc} index={i} />
          ))}
        </div>
      </div>

      {/* Earthy Decorative Elements */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(27, 94, 32, 0.05) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(239, 108, 0, 0.03) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
    </section>
  );
};

export default AgriWorldMap;
