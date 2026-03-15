import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const MagazineGrid: React.FC = () => {
  const latestNews = [
    { cat: 'DAIRY', t: 'Automation in Milking: Efficiency or Art?', date: 'Feb 27', img: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2070' },
    { cat: 'ORGANIC', t: 'Natural Pesticides: Top 5 Formulations for 2026.', date: 'Feb 26', img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=2070' },
    { cat: 'POLICY', t: 'New Subsidy for Solar Powered Cold Storages.', date: 'Feb 25', img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2070' },
    { cat: 'HORTICULTURE', t: 'Hydroponics vs Geoponics: A Yield Analysis.', date: 'Feb 24', img: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070' }
  ];

  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="section-title">
          <h2>LATEST UPDATES</h2>
          <div className="line" />
          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--agri-text-muted)', cursor: 'pointer' }}>VIEW ALL ARTICLES <ArrowRight size={12} /></span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {latestNews.map((news, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              style={{ background: '#fff', border: '1px solid var(--agri-border)', cursor: 'pointer' }}
            >
              <div style={{ height: '180px', overflow: 'hidden' }}>
                <img src={news.img} alt={news.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ color: 'var(--agri-accent)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '1px' }}>{news.cat}</span>
                <h3 style={{ fontSize: '1.1rem', margin: '10px 0', lineHeight: 1.3 }}>{news.t}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', color: 'var(--agri-text-muted)', fontWeight: 600 }}>
                  <Clock size={12} /> {news.date}, 2026
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagazineGrid;
