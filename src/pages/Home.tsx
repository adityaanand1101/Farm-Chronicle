import React from 'react';
import Hero from '../components/Hero';
import FeatureMonolith from '../components/FeatureMonolith';
import ArchiveMonolith from '../components/ArchiveMonolith';
import EditorialHighlight from '../components/EditorialHighlight';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Globe, BookOpen, Users } from 'lucide-react';

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
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.4em', display: 'block', marginBottom: '20px', textTransform: 'uppercase' }}>
                Important Announcement
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#fff', fontWeight: 300, lineHeight: 1.2, marginBottom: '30px' }}>
                We are proud to announce that <span style={{ fontStyle: 'italic', color: 'var(--harvest-gold)', fontWeight: 400 }}>Farm Chronicle</span> has been officially indexed by two prestigious national and international organizations.
              </h2>
            </motion.div>

            <div className="gold-line"></div>

            <div style={{ display: 'grid', gap: '20px', marginTop: '40px', textAlign: 'left' }}>
              <div style={{ padding: '30px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
                <img src="/ROAD.png" alt="ROAD Logo" style={{ height: '60px', width: 'auto', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>ROAD <span style={{ color: 'var(--harvest-gold)', fontWeight: 400, fontSize: '0.85rem' }}>(<a href="https://publishers.issn.org/resource/ISSN/2583-732X" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Directory of Open Access Scholarly Resources</a>)</span></strong>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                    A global index supported by the ISSN International Centre, recognizing high-quality, open-access academic publications.
                  </p>
                </div>
              </div>
              <div style={{ padding: '30px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
                <img src="/sudoc.png" alt="SUDOC Logo" style={{ height: '60px', width: 'auto', flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#fff', display: 'block', marginBottom: '5px' }}>SUDOC <span style={{ color: 'var(--harvest-gold)', fontWeight: 400, fontSize: '0.85rem' }}>(<a href="https://www.sudoc.fr/273782568" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>Système Universitaire de Documentation — France</a>)</span></strong>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                    A distinguished union catalogue of French university libraries and research documentation centres.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginTop: '50px' }}
            >
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '10px' }}>
                This recognition marks a significant milestone in our journey! Thank you to our contributors, readers, and supporters for helping us grow.
              </p>
              <p style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.2em', marginTop: '30px' }}>
                STAY CONNECTED. STAY INFORMED. STAY ROOTED.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 01. Impact Stats Section */}

      <section className="section-spacing" style={{ background: '#050705', borderBottom: '1px solid var(--noir-border)' }}>
        <div className="noir-container">
          <div className="resp-grid-4">
            {[
              { icon: <Globe size={32} />, val: "Global", label: "REACH" },
              { icon: <BookOpen size={32} />, val: "40+", label: "ISSUES PUBLISHED" },
              { icon: <Users size={32} />, val: "1000+", label: "CONTRIBUTORS" },
              { icon: <Award size={32} />, val: "ISSN", label: "2583-732X" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', padding: '40px', border: '1px solid var(--noir-border)', background: 'var(--noir-card)' }}
              >
                <div style={{ color: 'var(--harvest-gold)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>{stat.val}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 900, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em' }}>{stat.label}</div>
              </motion.div>
            ))}
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

      {/* 05. Digital Repository Invitation */}
      <section className="section-spacing" style={{ background: '#050705', borderTop: '1px solid var(--noir-border)' }}>
        <div className="noir-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: '30px' }}>The Digital <span style={{ color: 'var(--harvest-gold)', fontStyle: 'italic' }}>Repository.</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
                Our archives serve as a comprehensive chronicle of agricultural evolution. Every volume, every issue, and every breakthrough published since 2022 is preserved here for the global research community.
              </p>
              <Link to="/archives" className="elite-btn">EXPLORE LATEST PUBLICATIONS</Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}
            >
              <div style={{ padding: '40px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', color: 'var(--harvest-gold)', marginBottom: '10px' }}>4+</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>VOLUMES</div>
              </div>
              <div style={{ padding: '40px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)', textAlign: 'center', marginTop: '40px' }}>
                <div style={{ fontSize: '3rem', color: '#fff', marginBottom: '10px' }}>40+</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>ISSUES</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 06. Academic Blog Carousel */}
      <FeatureMonolith />

      {/* 07. Infographics Preview */}
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

      {/* 08. Editorial Highlight */}
      <EditorialHighlight />

      {/* 09. Elite Submission Section */}
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
                Every submission undergoes a rigorous double-blind peer-review process.
              </p>
              <Link to="/submission" className="elite-btn">INITIATE SUBMISSION</Link>
            </motion.div>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none', background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
