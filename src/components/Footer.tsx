import React from 'react';
import { Facebook, Instagram, Youtube, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const sections = [
    {
      title: 'CORE',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Editorial Board', path: '/editorial-board' },
        { name: 'Publications', path: '/publications' },
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Infographics & Updates', path: '/updates' },
        { name: 'Archives', path: '/archives' },
        { name: 'Blog', path: '/blog' },
      ]
    },
    {
      title: 'PARTICIPATE',
      links: [
        { name: 'Submission', path: '/submission' },
        { name: 'Subscription & Membership', path: '/subscription' },
        { name: 'Contact Us', path: '/contact' },
      ]
    }
  ];

  return (
    <footer style={{ background: '#050505', color: '#fff', padding: '100px 0 50px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="noir-container">
        
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '60px', marginBottom: '80px' }}>
          
          <div className="footer-brand" style={{ paddingRight: '40px' }}>
            <img src="/logo.png" alt="Farm Chronicle" style={{ height: '50px', marginBottom: '25px' }} />
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: '1.8', marginBottom: '30px' }}>
              International Peer-Reviewed Research Journal.<br />
              ISSN: 2583-732X | Global Open Access.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {[
                { I: Facebook, l: "https://www.facebook.com/farmchronicle/", label: "Facebook" },
                { I: Instagram, l: "https://www.instagram.com/farmchronicle/", label: "Instagram" },
                { I: Youtube, l: "https://www.youtube.com/@farmchronicle", label: "Youtube" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.l} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Farm Chronicle on ${social.label}`}
                  style={{ color: 'rgba(255,255,255,0.3)', transition: '0.3s' }} 
                  onMouseOver={e => e.currentTarget.style.color = 'var(--harvest-gold)'} 
                  onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                >
                  <social.I size={18} />
                </a>
              ))}
            </div>
          </div>

          {sections.map(section => (
            <div key={section.title}>
              <h4 style={{ fontSize: '0.7rem', fontWeight: 900, letterSpacing: '0.2em', color: 'var(--harvest-gold)', marginBottom: '30px' }}>{section.title}</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyle: 'none', padding: 0 }}>
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }} onFocus={e => e.currentTarget.style.color = 'var(--harvest-gold)'} onBlur={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', fontWeight: 700, letterSpacing: '0.1em' }}>
            © {new Date().getFullYear()} FARM CHRONICLE RESEARCH GROUP.
          </div>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 800 }}>
              <ShieldCheck size={14} color="var(--harvest-gold)" /> ISSN VERIFIED
            </div>
            <Link to="/submission" style={{ fontSize: '0.65rem', color: 'var(--harvest-gold)', fontWeight: 900, textDecoration: 'none', letterSpacing: '0.1em' }}>
              INITIATE SUBMISSION <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .footer-brand {
            padding-right: 0 !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 30px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
