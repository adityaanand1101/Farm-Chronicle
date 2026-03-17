import React from 'react';
import Hero from '../components/Hero';
import FeatureMonolith from '../components/FeatureMonolith';
import ArchiveMonolith from '../components/ArchiveMonolith';
import EditorialHighlight from '../components/EditorialHighlight';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <main style={{ background: 'var(--noir-black)' }}>
      <SEO 
        title="Home" 
        description="Farm Chronicle (ISSN: 2583-732X) - International Peer-Reviewed Agriculture Research Journal. Access the latest advancements in agriculture, horticulture, and biosciences."
      />
      <Hero />

      {/* IMPORTANT ANNOUNCEMENT Section */}
      <section className="section-spacing" style={{ background: 'var(--noir-black)', borderBottom: '1px solid var(--noir-border)' }}>
        <div className="noir-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 900, 
              color: 'var(--harvest-gold)', 
              letterSpacing: '0.4em', 
              display: 'block', 
              marginBottom: '40px',
              textTransform: 'uppercase'
            }}>
              Latest Achievement
            </span>
            
            <div style={{ 
              maxWidth: '900px', 
              margin: '0 auto', 
              background: 'var(--noir-card)', 
              border: '1px solid var(--noir-border)',
              padding: '20px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              <img 
                src="/announcement.jpg" 
                alt="Important Announcement - Farm Chronicle Indexed by ROAD and SUDOC" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  filter: 'grayscale(10%) contrast(110%)'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                border: '1px solid rgba(197, 160, 89, 0.2)', 
                pointerEvents: 'none',
                margin: '10px'
              }}></div>
            </div>

            <div style={{ marginTop: '40px', maxWidth: '700px', margin: '40px auto 0' }}>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>Officially Indexed.</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                We are proud to announce that <strong style={{ color: 'var(--harvest-gold)' }}>Farm Chronicle</strong> has been officially indexed by <strong>ROAD</strong> (Directory of Open Access Scholarly Resources) and <strong>SUDOC</strong> (France). This milestone reinforces our commitment to high-quality academic publishing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* High-Impact Manifesto */}
      <section className="section-spacing" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="noir-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.5em', display: 'block', marginBottom: '4rem' }}>RESEARCH MANIFESTO</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#fff', fontWeight: 300, lineHeight: 1.2, maxWidth: '1200px', margin: '0 auto' }}>
              "We will offer essential and beneficial information that should help further research in your <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)', fontWeight: 400 }}>field of interest</span> and be informative."
            </h2>
            <div className="gold-line"></div>
          </motion.div>
        </div>
        
        {/* Subtle Decorative Gradient */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, var(--harvest-glow) 0%, transparent 70%)', opacity: 0.3, pointerEvents: 'none' }} />
      </section>

      <FeatureMonolith />
      
      <div style={{ background: '#000', borderTop: '1px solid var(--noir-border)' }}>
        <ArchiveMonolith />
      </div>

      <EditorialHighlight />

      {/* Elite Submission Section */}
      <section className="section-spacing" style={{ background: '#000' }}>
        <div className="noir-container">
          <div style={{ background: 'var(--noir-card)', border: '1px solid var(--noir-border)', padding: '120px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.4em', color: 'var(--harvest-gold)' }}>CALL FOR MANUSCRIPTS</span>
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginTop: '2rem', marginBottom: '3rem', color: '#fff' }}>JOIN THE <br /><span style={{ fontStyle: 'italic', fontWeight: 200 }}>ELITE</span> DISCOURSE.</h2>
              <p style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                The last date to submit articles for the upcoming issue is <strong style={{ color: '#fff' }}>15th March 2026</strong>. Every submission undergoes a rigorous double-blind peer-review process.
              </p>
              <a href="/submission" className="elite-btn">INITIATE SUBMISSION</a>
            </motion.div>
            
            {/* Background Texture for CTA */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none', background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
