import React from 'react';
import Hero from '../components/Hero';
import FeatureMonolith from '../components/FeatureMonolith';
import ArchiveMonolith from '../components/ArchiveMonolith';
import EditorialHighlight from '../components/EditorialHighlight';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const leaders = [
    { name: "Arulmanikandan B", role: "Founder & Editor-in-Chief", img: "/team/arulmanikandan B.jpg" },
    { name: "Ms. Karthiga P", role: "Chief Executive Editor", img: "/team/Karthiga P.jpg" },
    { name: "Ms. Anujaa B", role: "Associate Editor", img: "/team/anujaa B.png" }
  ];

  return (
    <main style={{ background: 'var(--noir-black)' }}>
      <SEO 
        title="Home" 
        description="Farm Chronicle (ISSN: 2583-732X) - International Peer-Reviewed Agriculture Research Journal. Access the latest advancements in agriculture, horticulture, and biosciences."
      />
      <Hero />

      {/* 01. IMPORTANT ANNOUNCEMENT Section */}
      <section className="section-spacing" style={{ background: 'var(--noir-black)', borderBottom: '1px solid var(--noir-border)', position: 'relative', zIndex: 1 }}>
        <div className="noir-container">
          <div className="announcement-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                fontSize: '0.7rem', 
                fontWeight: 900, 
                color: 'var(--harvest-gold)', 
                letterSpacing: '0.4em', 
                display: 'block', 
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                Latest Milestone
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', color: '#fff', marginBottom: '30px', lineHeight: 1.1 }}>
                Officially <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Indexed.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '30px' }}>
                We are proud to announce that <strong style={{ color: '#fff' }}>Farm Chronicle</strong> has reached a significant milestone in academic excellence. Our journal is now officially indexed by:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--harvest-gold)', fontWeight: 900 }}>01.</span>
                  <div>
                    <strong style={{ color: '#fff', display: 'block' }}>ROAD</strong>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>Directory of Open Access Scholarly Resources.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ color: 'var(--harvest-gold)', fontWeight: 900 }}>02.</span>
                  <div>
                    <strong style={{ color: '#fff', display: 'block' }}>SUDOC</strong>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>French National Union Catalogue.</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                background: 'var(--noir-card)', 
                border: '1px solid var(--noir-border)',
                padding: '15px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                position: 'relative',
                zIndex: 2
              }}
            >
              <img 
                src="/announcement.jpg" 
                alt="Important Announcement" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  filter: 'contrast(105%)'
                }} 
              />
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(197, 160, 89, 0.1)', pointerEvents: 'none', margin: '8px' }}></div>
            </motion.div>
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) {
            .announcement-split { grid-template-columns: 1fr !important; gap: 60px !important; }
          }
        `}</style>
      </section>
      
      {/* 02. Editorial Leadership Preview */}
      <section className="section-spacing" style={{ background: '#050705', borderBottom: '1px solid var(--noir-border)' }}>
        <div className="noir-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>ESTABLISHED AUTHORITY</span>
            <h2 style={{ fontSize: '3rem', color: '#fff' }}>Editorial <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Leadership.</span></h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ width: '180px', height: '180px', margin: '0 auto 30px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--harvest-gold)', padding: '5px' }}>
                  <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>{leader.name}</h4>
                <p style={{ color: 'var(--harvest-gold)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.1em' }}>{leader.role.toUpperCase()}</p>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 800, borderBottom: '1px solid var(--harvest-gold)', paddingBottom: '5px' }}>MEET THE FULL TEAM →</Link>
          </div>
        </div>
      </section>

      {/* 03. Research Manifesto Section */}
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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, var(--harvest-glow) 0%, transparent 70%)', opacity: 0.3, pointerEvents: 'none' }} />
      </section>

      {/* 04. Latest Publications (Issues) */}
      <div style={{ background: '#000', borderTop: '1px solid var(--noir-border)' }}>
        <ArchiveMonolith />
      </div>

      {/* 05. Academic Blog Carousel */}
      <FeatureMonolith />

      {/* 06. Infographics Preview */}
      <section className="section-spacing" style={{ background: '#050705', borderTop: '1px solid var(--noir-border)' }}>
        <div className="noir-container">
          <div className="resp-grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '20px' }}>VISUAL KNOWLEDGE</span>
              <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '30px' }}>Research <br /><span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)' }}>Infographics.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
                Complex data made simple. Explore our curated gallery of visual research summaries and agricultural breakthroughs.
              </p>
              <Link to="/updates" className="elite-btn">EXPLORE GALLERY</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <img src="/infographics/Infographic_1.jpg" alt="Info 1" style={{ width: '100%', border: '1px solid var(--noir-border)' }} />
              <img src="/infographics/Infographic_2.jpg" alt="Info 2" style={{ width: '100%', border: '1px solid var(--noir-border)', marginTop: '40px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 07. Editorial Highlight */}
      <EditorialHighlight />

      {/* 08. Elite Submission Section */}
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
            <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none', background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
