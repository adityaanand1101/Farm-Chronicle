import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center', padding: '180px 0 100px' }}>
      {/* Cinematic Background */}
      <motion.div style={{ position: 'absolute', inset: 0, y, zIndex: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,12,8,0.4) 0%, #080C08 100%)', zIndex: 1 }} />
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600" 
          alt="Cineamtic Farmland Landscape" 
          style={{ width: '100%', height: '120%', objectFit: 'cover', filter: 'grayscale(40%) brightness(0.7)' }}
        />
      </motion.div>

      <div className="noir-container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div style={{ opacity }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.5em' }}>ESTABLISHED 2022</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--noir-border)', maxWidth: '200px' }} />
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', lineHeight: 0.85, marginBottom: 'clamp(2rem, 5vw, 4rem)', maxWidth: '1200px' }}>
            FARM<br />
            <span className="hero-italic" style={{ fontStyle: 'italic', fontWeight: 200, color: 'var(--harvest-gold)', marginLeft: '10%' }}>CHRONICLE.</span>
          </h1>

          <div className="resp-grid-2" style={{ alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.4, maxWidth: '600px', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
                Disseminating high-fidelity agri-science research across 24 global nodes. ISSN: 2583-732X. Field verified.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <Link to="/archives" className="elite-btn">EXPLORE REPOSITORY <ArrowUpRight size={18} /></Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em' }}>
                  <Award color="var(--harvest-gold)" size={20} /> PEER REVIEWED
                </div>
              </div>
            </div>
            
            <div className="hero-countdown" style={{ textAlign: 'right', borderLeft: '1px solid var(--noir-border)', paddingLeft: '40px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.3em', marginBottom: '10px' }}>NEXT SUBMISSION</div>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 300, color: '#fff' }}>MAR 15</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-italic { margin-left: 0 !important; }
          .hero-countdown { 
            text-align: left !important; 
            border-left: none !important; 
            padding-left: 0 !important;
            border-top: 1px solid var(--noir-border);
            padding-top: 30px;
            margin-top: 30px;
          }
        }
      `}</style>

      {/* Floating Gold Grain Overlay */}
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--harvest-glow) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
    </section>
  );
};

export default Hero;
