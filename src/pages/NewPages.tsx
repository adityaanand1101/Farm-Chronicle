import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { archiveData } from '../data/archiveData';

const PageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <main style={{ background: 'var(--noir-black)', minHeight: '100vh', paddingTop: 'clamp(160px, 20vw, 200px)', paddingBottom: '100px' }}>
    <div className="noir-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: '#fff', marginBottom: '40px', wordBreak: 'break-word', lineHeight: 1.1 }}>
          {title}<span style={{ color: 'var(--harvest-gold)', fontStyle: 'italic' }}>.</span>
        </h1>
        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8 }}>
          {children}
        </div>
      </motion.div>
    </div>
  </main>
);

const ManagementTeam = () => {
  const leaders = [
    { name: "Arulmanikandan B", role: "Founder & Editor-in-Chief", qualification: "Ph.D. Research Scholar, CCS HAU, Hisar", img: "/team/arulmanikandan B.jpg" },
    { name: "Ms. Karthiga P", role: "Chief Executive Editor", qualification: "Vegetable Science, CUTN", img: "/team/Karthiga P.jpg" },
    { name: "Ms. Anujaa B", role: "Associate Editor", qualification: "Entomology, Annamalai University", img: "/team/anujaa B.png" },
    { name: "Ms. Janani K S", role: "Associate Editor", qualification: "Molecular Biology, KOC, Turkey", img: "/team/janani k s.png" },
    { name: "Mr. Johns Tiyndel G", role: "Associate Editor", qualification: "Agricultural Economics, CCS HAU, Hisar", img: "/team/johns tiyndel g.jpg" },
    { name: "Ms. Tanisha Gangrade", role: "Content Developer", qualification: "Microbiology, CCS HAU, Hisar", img: "/team/tanisha gangrade.png" },
    { name: "Mr. Nithiyanantham S", role: "Assistant Editor", qualification: "Fruit Science, TNHMI, Tamil Nadu", img: "/team/Nithiyanantham S.png" }
  ];

  return (
    <div style={{ marginTop: 'clamp(60px, 10vw, 100px)' }}>
      <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '60px' }}>Our Leadership <span style={{ color: 'var(--harvest-gold)', fontStyle: 'italic' }}>Team.</span></h2>
      <div className="team-grid">
        {leaders.map((leader, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div className="team-img-wrapper">
              <img src={leader.img} alt={leader.name} />
            </div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '5px' }}>{leader.name}</h4>
            <div style={{ color: 'var(--harvest-gold)', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.1em', marginBottom: '10px' }}>{leader.role.toUpperCase()}</div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.4 }}>{leader.qualification}</p>
          </motion.div>
        ))}
      </div>
      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 60px 40px;
        }
        .team-img-wrapper {
          width: clamp(150px, 20vw, 180px);
          height: clamp(150px, 20vw, 180px);
          margin: 0 auto 25px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--harvest-gold);
          padding: 5px;
          background: rgba(197, 160, 89, 0.1);
        }
        .team-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr; gap: 50px; }
        }
      `}</style>
    </div>
  );
};

export const AboutUs = () => {
  const details = [
    { label: "TITLE", value: "Farm Chronicle" },
    { label: "ISSN", value: "2583-732X" },
    { label: "FREQUENCY", value: "Monthly" },
    { label: "CHIEF EDITOR", value: "Arulmanikandan B" },
    { label: "STARTING YEAR", value: "2022" },
    { label: "SUBJECT", value: "Agriculture" },
    { label: "LANGUAGE", value: "English" },
    { label: "FORMAT", value: "Online" },
    { label: "COPYRIGHT", value: "Farm Chronicle" }
  ];

  return (
    <PageLayout title="ABOUT US">
      <div className="about-top-grid">
        <div className="about-text-content">
          <blockquote style={{ 
            fontSize: 'clamp(1.4rem, 4vw, 2rem)', 
            color: 'var(--harvest-gold)', 
            fontStyle: 'italic', 
            borderLeft: '4px solid var(--harvest-gold)', 
            paddingLeft: '30px',
            marginBottom: '40px',
            lineHeight: 1.4
          }}>
            "The future belongs to the few of us still willing to get our hands dirty."
            <footer style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '15px', fontStyle: 'normal' }}>— ROLAND TIANGCO</footer>
          </blockquote>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', lineHeight: 1.8 }}>
            Farm Chronicle is a premier international peer-reviewed research journal dedicated to the advancement of agricultural sciences. 
            Since our inception in 2022, we have served as a vital platform for researchers, students, and intellectuals to exchange 
            transformative agricultural insights.
          </p>
          
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '30px' }}>CONTACT REGISTRY</h3>
            <div style={{ display: 'grid', gap: '30px' }}>
              <div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 900, marginBottom: '5px' }}>OFFICIAL ADDRESS</div>
                <div style={{ color: '#fff', fontSize: '0.95rem' }}>365, Pavadi street, Mukasi Anumanpalli, Erode, Tamil Nadu - 638 101.</div>
              </div>
              <div className="contact-sub-grid">
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 900, marginBottom: '5px' }}>EMAIL IDENTIFIER</div>
                  <div style={{ color: '#fff', fontSize: '0.95rem', wordBreak: 'break-all' }}>editor.farmchronicle@gmail.com</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 900, marginBottom: '5px' }}>COMMUNICATION</div>
                  <div style={{ color: '#fff', fontSize: '0.95rem' }}>+91 90807 46292 / 94899 88548</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="identity-card" style={{ background: 'var(--noir-card)', border: '1px solid var(--noir-border)', padding: '0' }}>
          <div style={{ padding: '30px', borderBottom: '1px solid var(--noir-border)', background: 'rgba(255,255,255,0.02)' }}>
            <h3 style={{ color: 'var(--harvest-gold)', fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em', margin: 0 }}>JOURNAL IDENTITY MATRIX</h3>
          </div>
          <div style={{ padding: '30px' }}>
            <div style={{ display: 'grid', gap: '25px' }}>
              {details.map(d => (
                <div key={d.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 900, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>{d.label}</span>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500, textAlign: 'right' }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about-values-grid">
        {[
          { t: "OUR GOAL", d: "To offer a reliable, independent platform for publishing articles about the latest advancements in agriculture worldwide." },
          { t: "OUR VISION", d: "To provide a forum for scientists to connect throughout India and the world, serving as a path of knowledge for motivated students." },
          { t: "OUR PURPOSE", d: "To share timely findings regarding farming systems, novel cultivation alternatives, and technical improvements." }
        ].map((item, i) => (
          <div key={i} className="value-card" style={{ padding: '40px', border: '1px solid var(--noir-border)', background: 'rgba(255,255,255,0.01)' }}>
            <h3 style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '20px' }}>{item.t}</h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.d}</p>
          </div>
        ))}
      </div>

      <ManagementTeam />
      <style>{`
        .about-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          margin-bottom: 100px;
          align-items: start;
        }
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .contact-sub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .about-top-grid { grid-template-columns: 1fr; gap: 60px; }
          .about-values-grid { grid-template-columns: 1fr; gap: 30px; }
          .contact-sub-grid { grid-template-columns: 1fr; }
          .identity-card { order: -1; }
        }
      `}</style>
    </PageLayout>
  );
};

export const EditorialBoard = () => {
  const members = [
    { name: "Dr. P. S. Shehrawat", role: "Principal Scientist", institution: "CCS HAU, Hisar" },
    { name: "Dr. J. Sheela", role: "Professor", institution: "AC&RI (TNAU), Killikulam" },
    { name: "Dr. Kumaraperumal", role: "Associate Professor", institution: "AC&RI (TNAU), Coimbatore" },
    { name: "Dr. Joginder Singh Malik", role: "Professor", institution: "CCS HAU, Hisar" },
    { name: "Dr. Anindita Saha", role: "Associate Professor", institution: "PSB, Visva-Bharati, West Bengal" },
    { name: "Dr. Kavita", role: "Assistant Scientist", institution: "CCS HAU, Hisar" },
    { name: "Dr. Janailin S. Papang", role: "Assistant Professor", institution: "CCS HAU, Hisar" },
    { name: "Dr. Jitender K. Bhatia", role: "Assistant Director", institution: "CCS HAU, Hisar" },
    { name: "Dr. S. Srivignesh", role: "Assistant Professor", institution: "CUTN, Thiruvarur" },
    { name: "Dr. Bishnu Prasad Dash", role: "Assistant Professor", institution: "Centurion University, Odisha" },
    { name: "Dr. N. Muthukumaran", role: "Assistant Professor", institution: "Annamalai University, Tamil Nadu" },
    { name: "Dr. Subhasish Sahu", role: "Assistant Professor", institution: "OUAT, Bhubaneswar" }
  ];

  return (
    <PageLayout title="EDITORIAL BOARD">
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ color: 'var(--harvest-gold)', fontSize: '2rem', marginBottom: '40px' }}>Board Members</h2>
        <div className="board-grid">
          {members.map((m, i) => (
            <div key={i} className="board-card" style={{ padding: '30px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)' }}>
              <h4 style={{ color: '#fff', marginBottom: '10px', fontSize: '1rem' }}>{m.name}</h4>
              <p style={{ color: 'var(--harvest-gold)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '5px' }}>{m.role}</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{m.institution}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .board-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }
        @media (max-width: 768px) {
          .board-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageLayout>
  );
};

export const Publications = () => {
  const [searchParams] = useSearchParams();
  const volParam = searchParams.get('vol') || "VOLUME 04";
  const issueParam = searchParams.get('issue') || "10";

  const currentVol = archiveData.find(v => v.vol.toUpperCase() === volParam.toUpperCase());
  const currentIssue = currentVol?.issues.find(i => i.id.toUpperCase() === issueParam.toUpperCase());

  if (!currentIssue) {
    return (
      <PageLayout title="PUBLICATIONS">
        <p>Requested edition not found.</p>
        <a href="/archives" className="elite-btn" style={{ marginTop: '40px' }}>VIEW ARCHIVES</a>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="PUBLICATIONS">
      <div style={{ marginBottom: '40px' }}>
        <span style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.2em' }}>{volParam.toUpperCase()} | ISSUE {issueParam}</span>
        <h2 style={{ color: '#fff', marginTop: '10px', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{currentIssue.month} Edition</h2>
      </div>

      <div className="articles-list" style={{ display: 'grid', gap: '20px' }}>
        {currentIssue.articles.map((art, i) => (
          <div key={i} className="article-row">
            <div className="article-info">
              <h3 style={{ color: '#fff', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', marginBottom: '10px', lineHeight: 1.3 }}>{art.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{art.authors}</p>
            </div>
            <a href={art.link} target="_blank" rel="noopener noreferrer" className="elite-btn download-btn">DOWNLOAD PDF</a>
          </div>
        ))}
      </div>
      <style>{`
        .article-row {
          padding: clamp(25px, 5vw, 40px);
          background: var(--noir-card);
          border: 1px solid var(--noir-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }
        .article-info { flex: 1; }
        .download-btn { white-space: nowrap; padding: 15px 30px; min-width: 200px; }
        @media (max-width: 768px) {
          .article-row { flex-direction: column; align-items: flex-start; gap: 25px; }
          .download-btn { width: 100%; }
        }
      `}</style>
    </PageLayout>
  );
};

export const InfographicsUpdates = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21].map(i => `/infographics/Infographic_${i}.jpg`);

  return (
    <PageLayout title="INFOGRAPHICS">
      <p style={{ marginBottom: '60px' }}>Visual insights from global agricultural research.</p>
      
      <div className="info-grid">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setSelectedImg(src)}
            className="info-card"
          >
            <Maximize2 className="zoom-icon" size={24} />
            <img src={src} alt="Infographic" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImg(null)} className="lightbox">
            <button onClick={() => setSelectedImg(null)} className="close-btn"><X size={32} /></button>
            <motion.img src={selectedImg} initial={{ scale: 0.9 }} animate={{ scale: 1 }} />
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        .info-card {
          position: relative;
          cursor: zoom-in;
          border: 1px solid var(--noir-border);
          overflow: hidden;
        }
        .info-card img { width: 100%; height: auto; display: block; transition: 0.5s; }
        .info-card:hover img { transform: scale(1.05); }
        .zoom-icon { position: absolute; top: 20px; right: 20px; color: #fff; opacity: 0; transition: 0.3s; z-index: 2; }
        .info-card:hover .zoom-icon { opacity: 1; }
        
        .lightbox {
          position: fixed; inset: 0; z-index: 3000; background: rgba(0,0,0,0.95); backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center; padding: 20px;
        }
        .lightbox img { max-width: 100%; max-height: 90vh; object-fit: contain; }
        .close-btn { position: absolute; top: 30px; right: 30px; background: none; border: none; color: #fff; cursor: pointer; }
        
        @media (max-width: 768px) {
          .info-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageLayout>
  );
};

export const Archives = () => {
  const [searchParams] = useSearchParams();
  const [selectedVol, setSelectedVol] = useState<string>("VOLUME 04");
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  useEffect(() => {
    const volParam = searchParams.get('vol');
    const issueParam = searchParams.get('issue');
    if (volParam) setSelectedVol(volParam.toUpperCase());
    if (issueParam) setSelectedIssue(issueParam.toUpperCase());
  }, [searchParams]);

  const currentVol = archiveData.find(v => v.vol.toUpperCase() === selectedVol.toUpperCase());
  const currentIssue = currentVol?.issues.find(i => i.id.toUpperCase() === selectedIssue?.toUpperCase());

  return (
    <PageLayout title="ARCHIVES">
      {!selectedIssue ? (
        <>
          <div className="vol-selector">
            {archiveData.map(v => (
              <button key={v.vol} onClick={() => setSelectedVol(v.vol)} className={selectedVol === v.vol ? 'active' : ''}>
                {v.vol}
              </button>
            ))}
          </div>

          <div className="archive-grid">
            {currentVol?.issues.map(issue => (
              <div key={issue.id} onClick={() => setSelectedIssue(issue.id)} className="issue-card">
                <div style={{ color: 'var(--harvest-gold)', fontSize: '0.7rem', fontWeight: 900 }}>{selectedVol} | ISSUE {issue.id}</div>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: '10px 0' }}>{issue.month}</h3>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>{issue.articles.length} ARTICLES</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setSelectedIssue(null)} className="back-btn">← BACK TO ISSUES</button>
          <div style={{ marginBottom: '40px' }}>
            <span style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 900 }}>{selectedVol} | ISSUE {selectedIssue}</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{currentIssue?.month}</h2>
          </div>
          <div style={{ display: 'grid', gap: '15px' }}>
            {currentIssue?.articles.map((art, index) => (
              <div key={index} className="article-row-small">
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '5px' }}>{art.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{art.authors}</p>
                </div>
                <a href={art.link} target="_blank" rel="noopener noreferrer" className="download-icon-btn">PDF</a>
              </div>
            ))}
          </div>
        </div>
      )}
      <style>{`
        .vol-selector { display: flex; gap: 10px; margin-bottom: 50px; overflow-x: auto; padding-bottom: 15px; }
        .vol-selector button { padding: 12px 30px; background: none; border: 1px solid var(--noir-border); color: #fff; cursor: pointer; white-space: nowrap; font-weight: 800; font-size: 0.75rem; transition: 0.3s; }
        .vol-selector button.active { background: var(--harvest-gold); color: #000; border-color: var(--harvest-gold); }
        
        .archive-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 25px; }
        .issue-card { padding: 30px; background: var(--noir-card); border: 1px solid var(--noir-border); cursor: pointer; transition: 0.3s; }
        .issue-card:hover { border-color: var(--harvest-gold); }
        
        .article-row-small { display: flex; align-items: center; gap: 20px; padding: 20px; background: rgba(255,255,255,0.02); border: 1px solid var(--noir-border); }
        .download-icon-btn { padding: 8px 15px; border: 1px solid var(--harvest-gold); color: var(--harvest-gold); text-decoration: none; font-size: 0.7rem; font-weight: 900; }
        .back-btn { background: none; border: 1px solid var(--noir-border); color: #fff; padding: 10px 20px; cursor: pointer; margin-bottom: 30px; }
        
        @media (max-width: 768px) {
          .archive-grid { grid-template-columns: 1fr; }
          .article-row-small { flex-direction: column; align-items: flex-start; }
          .download-icon-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </PageLayout>
  );
};

export const Submission = () => {
  const themes = ["Agriculture & Horticulture", "Food Science & Technology", "Dairy Technology", "Biosciences & Biotechnology", "Biochemistry", "Plant Breeding", "Environmental Science", "Fisheries & Animal Science"];
  return (
    <PageLayout title="SUBMISSION">
      <div className="sub-grid">
        <div className="guidelines">
          <h2 style={{ color: 'var(--harvest-gold)', fontSize: '1.5rem', marginBottom: '30px' }}>GUIDELINES</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {[{t:"METHOD", d:"Email attachment to editor.farmchronicle@gmail.com."}, {t:"REVIEW", d:"Peer-reviewed by subject experts."}, {t:"FORMAT", d:"MS-Word, Times New Roman, 1.5 spacing."}].map((item, i) => (
              <div key={i}><span style={{ color: '#fff', fontWeight: 900, fontSize: '0.7rem', letterSpacing: '0.2em' }}>{item.t}</span><p style={{ fontSize: '1rem', marginTop: '5px' }}>{item.d}</p></div>
            ))}
          </div>
        </div>
        <div className="format-card" style={{ background: 'var(--noir-card)', border: '1px solid var(--noir-border)', padding: '40px' }}>
          <h3 style={{ color: 'var(--harvest-gold)', marginBottom: '20px' }}>GUIDELINES & FORMAT</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '30px' }}>Please ensure your manuscript adheres to our official standards before submission.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a href="/Authors_Guidelines.pdf" target="_blank" className="elite-btn" style={{ textAlign: 'center' }}>AUTHOR GUIDELINES</a>
            <a href="/References_format.pdf" target="_blank" className="elite-btn" style={{ textAlign: 'center', background: 'none', border: '1px solid var(--noir-border)', color: '#fff' }}>REFERENCE FORMAT</a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <h3 style={{ color: '#fff', marginBottom: '30px' }}>THEMES</h3>
        <div className="themes-grid">{themes.map(t => <div key={t} className="theme-tag">{t}</div>)}</div>
      </div>
      <style>{`
        .sub-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; }
        .themes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
        .theme-tag { padding: 15px; border: 1px solid var(--noir-border); background: rgba(255,255,255,0.02); font-size: 0.85rem; }
        @media (max-width: 1024px) {
          .sub-grid { grid-template-columns: 1fr; gap: 40px; }
          .themes-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageLayout>
  );
};

export const SubscriptionMembership = () => {
  const benefits = [
    { t: "PRIORITY PUBLICATION", d: "Members receive expedited peer-review and priority placement in upcoming issues." },
    { t: "ANNUAL ARCHIVE ACCESS", d: "Full digital access to all previous volumes and special thematic editions." },
    { t: "CERTIFICATE OF CONTRIBUTION", d: "Official digital certificates for every article published during the membership period." },
    { t: "EDITORIAL SUPPORT", d: "Direct consultation with our editorial board for formatting and submission guidelines." },
    { t: "RESEARCH NETWORK", d: "Invitation to exclusive webinars and networking events with global agricultural experts." },
    { t: "PRINT OPPORTUNITIES", d: "Discounted rates for physical copies of the annual compiled edition." }
  ];

  const faqs = [
    { q: "How long does the annual membership last?", a: "The membership is valid for 12 months from the date of enrollment." },
    { q: "Can I publish more than 10 articles?", a: "Members can publish beyond 10 articles at a discounted rate of ₹150 per article." },
    { q: "Is the processing charge refundable?", a: "Article processing charges are non-refundable once the peer-review process begins." },
    { q: "Do you offer institutional memberships?", a: "Yes, please contact us at editor.farmchronicle@gmail.com for institutional rates." }
  ];

  return (
    <PageLayout title="SUBSCRIPTION">
      <div style={{ marginBottom: '80px' }}>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '40px', maxWidth: '800px' }}>
          Join a global community of agricultural researchers. Our subscription plans are designed to support continuous scholarly contribution and provide maximum visibility for your research.
        </p>
        
        <div className="subs-grid">
          <div className="subs-card premium" style={{ border: '1px solid var(--harvest-gold)', padding: '50px', background: 'var(--noir-card)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '20px', right: '-35px', background: 'var(--harvest-gold)', color: '#000', padding: '5px 40px', transform: 'rotate(45deg)', fontSize: '0.6rem', fontWeight: 900 }}>BEST VALUE</div>
            <span style={{ color: 'var(--harvest-gold)', fontWeight: 900, fontSize: '0.7rem', letterSpacing: '0.2em' }}>ANNUAL MEMBERSHIP</span>
            <div style={{ fontSize: '4rem', margin: '20px 0', color: '#fff' }}>₹2,000<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>/YEAR</span></div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontSize: '1rem' }}>Unlimited knowledge, priority publishing, and a dedicated platform for your growth.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '15px' }}>
              {["10 Free Publications", "Priority Peer-Review", "Digital Certificates", "Archive Access"].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#fff' }}>
                  <span style={{ color: 'var(--harvest-gold)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="mailto:editor.farmchronicle@gmail.com?subject=Annual Membership Enrollment" className="elite-btn" style={{ width: '100%', textAlign: 'center' }}>ENROLL NOW</a>
          </div>

          <div className="subs-card" style={{ border: '1px solid var(--noir-border)', padding: '50px', background: 'var(--noir-card)' }}>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 900, fontSize: '0.7rem', letterSpacing: '0.2em' }}>SINGLE SUBMISSION</span>
            <div style={{ fontSize: '4rem', margin: '20px 0', color: '#fff' }}>₹250<span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)' }}>/ARTICLE</span></div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '30px', fontSize: '1rem' }}>Standard processing for individual research papers and technical notes.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'grid', gap: '15px' }}>
              {["Standard Peer-Review", "Digital Publication", "Online DOI Support", "Basic Formatting"].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="mailto:editor.farmchronicle@gmail.com?subject=Article Submission Inquiry" className="elite-btn" style={{ width: '100%', textAlign: 'center', background: 'none', color: '#fff', border: '1px solid var(--noir-border)' }}>INQUIRE</a>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '100px' }}>
        <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '60px' }}>Why Subscribe to <span style={{ color: 'var(--harvest-gold)' }}>Farm Chronicle?</span></h2>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} style={{ padding: '30px', border: '1px solid var(--noir-border)', background: 'rgba(255,255,255,0.02)' }}>
              <h4 style={{ color: 'var(--harvest-gold)', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '15px' }}>{b.t}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '100px', padding: '60px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '40px' }}>Frequently Asked <span style={{ color: 'var(--harvest-gold)' }}>Questions.</span></h2>
        <div style={{ display: 'grid', gap: '40px' }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '10px' }}>{faq.q}</h4>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .subs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 1024px) {
          .benefits-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .subs-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageLayout>
  );
};

export const ContactUs = () => {
  return (
    <PageLayout title="CONTACT">
      <div className="contact-grid">
        <div className="contact-info">
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '20px' }}>FOUNDER & EDITOR-IN-CHIEF</h2>
            <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 300 }}>Arulmanikandan B</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginTop: '10px' }}>Primary point of contact for the e-newsletter and academic inquiries.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            <div>
              <h4 style={{ fontSize: '0.7rem', color: 'var(--harvest-gold)', letterSpacing: '0.2em', marginBottom: '15px' }}>OFFICE ADDRESS</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.6 }}>
                365, Pavadi Street, Mukasi Anumanpalli,<br />
                Erode, Tamil Nadu - 638 101, India.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.7rem', color: 'var(--harvest-gold)', letterSpacing: '0.2em', marginBottom: '15px' }}>OPERATING HOURS</h4>
              <p style={{ color: '#fff', fontSize: '1rem' }}>09:00 AM – 06:00 PM</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '5px' }}>Monday through Saturday</p>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '40px', marginBottom: '60px' }}>
            <div>
              <h4 style={{ fontSize: '0.7rem', color: 'var(--harvest-gold)', letterSpacing: '0.2em', marginBottom: '15px' }}>EMAIL REGISTRY</h4>
              <div style={{ display: 'grid', gap: '10px' }}>
                <p style={{ color: '#fff' }}>contact.farmchronicle@gmail.com</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>amk.arul@hau.ac.in</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>manikandanarul02@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.7rem', color: 'var(--harvest-gold)', letterSpacing: '0.2em', marginBottom: '15px' }}>COMMUNICATION LINES</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <p style={{ color: '#fff' }}>+91 90807 46292</p>
                <p style={{ color: '#fff' }}>+91 94899 88548</p>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>+91 94860 32137</p>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>+91 63822 55795</p>
                <p style={{ color: 'rgba(255,255,255,0.5)' }}>+91 93608 66354</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-action">
          <div style={{ background: 'var(--noir-card)', border: '1px solid var(--noir-border)', padding: '50px', position: 'sticky', top: '120px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '20px' }}>Digital Inquiry.</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '40px' }}>
              Have specific questions or research proposals? Reach out to us directly through our official inquiry portal.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScbj-MZLApFQTGXJqaUnNH5T-nWhJMNjaYZ4pbixPIsH2L2lw/viewform" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="elite-btn"
              style={{ width: '100%', textAlign: 'center', display: 'block' }}
            >
              OPEN CONTACT FORM
            </a>

            <div style={{ marginTop: '60px', borderTop: '1px solid var(--noir-border)', paddingTop: '40px' }}>
              <h4 style={{ fontSize: '0.7rem', color: 'var(--harvest-gold)', letterSpacing: '0.2em', marginBottom: '20px' }}>SOCIAL CONNECT</h4>
              <div className="social-links-grid" style={{ display: 'grid', gap: '15px' }}>
                <a href="https://www.facebook.com/farmchronicle/" target="_blank" className="social-link-item">FACEBOOK <span>→</span></a>
                <a href="https://www.instagram.com/farmchronicle/" target="_blank" className="social-link-item">INSTAGRAM <span>→</span></a>
                <a href="https://www.linkedin.com/company/farm-chronicle-an-agriculture-newsletter/" target="_blank" className="social-link-item">LINKEDIN <span>→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 80px; }
        .social-link-item { 
          display: flex; justify-content: space-between; color: rgba(255,255,255,0.5); 
          text-decoration: none; font-size: 0.8rem; font-weight: 800; transition: 0.3s;
          padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .social-link-item:hover { color: var(--harvest-gold); border-color: var(--harvest-gold); }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .contact-action { order: -1; }
        }
      `}</style>
    </PageLayout>
  );
};
