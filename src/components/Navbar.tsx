import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setHasScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'EDITORIAL BOARD', path: '/editorial-board' },
    { name: 'PUBLICATIONS', path: '/publications' },
  ];

  const moreLinks = [
    { name: 'INFOGRAPHICS & UPDATES', path: '/updates' },
    { name: 'ARCHIVES', path: '/archives' },
    { name: 'SUBMISSION', path: '/submission' },
    { name: 'SUBSCRIPTION', path: '/subscription' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'BLOG', path: '/blog' },
  ];

  return (
    <nav style={{ 
      position: 'fixed', 
      top: scrolled ? '0' : '45px', 
      left: 0, right: 0, 
      zIndex: 2000, 
      padding: scrolled ? '15px 0' : '30px 0',
      background: scrolled ? 'rgba(8, 12, 8, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--noir-border)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
    }}>
      <div className="noir-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ height: scrolled ? '50px' : '80px', transition: 'all 0.4s ease' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '100%', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {mainLinks.map(link => (
            <Link key={link.name} to={link.path} style={navLinkStyle}>{link.name}</Link>
          ))}
          
          <div 
            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <button style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
              MORE <ChevronDown size={14} style={{ transform: isMoreOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>
            
            {/* Transparent bridge to prevent menu from closing when moving mouse */}
            {isMoreOpen && <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '20px' }} />}

            {isMoreOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 15px)',
                right: 0,
                background: 'var(--noir-card)',
                border: '1px solid var(--noir-border)',
                padding: '20px',
                minWidth: '220px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                {moreLinks.map(link => (
                  <Link key={link.name} to={link.path} style={{ ...navLinkStyle, textAlign: 'left', display: 'block' }} onClick={() => setIsMoreOpen(false)}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div style={{ width: '1px', height: '20px', background: 'var(--noir-border)', margin: '0 10px' }} />
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-newsletter'))}
            className="elite-btn" 
            style={{ padding: '10px 25px', fontSize: '0.6rem', border: 'none', cursor: 'pointer' }}
          >
            SUBSCRIBE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle"
          style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--noir-black)',
              zIndex: 1900,
              padding: '160px 40px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              overflowY: 'auto'
            }}
          >
            {[...mainLinks, ...moreLinks].map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  fontSize: '1.5rem', 
                  color: '#fff', 
                  textDecoration: 'none',
                  fontFamily: 'var(--font-serif)',
                  borderBottom: '1px solid var(--noir-border)',
                  paddingBottom: '15px'
                }}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-newsletter'));
              }}
              className="elite-btn"
              style={{ marginTop: '20px' }}
            >
              SUBSCRIBE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

const navLinkStyle = {
  fontSize: '0.7rem', 
  fontWeight: 800, 
  letterSpacing: '0.25em', 
  color: '#fff',
  textDecoration: 'none',
  transition: '0.3s',
  opacity: 0.8,
  '&:hover': { opacity: 1, color: 'var(--harvest-gold)' }
};

export default Navbar;
