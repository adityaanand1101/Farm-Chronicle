import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Editorial Board', path: '/editorial-board' },
    { name: 'Blog', path: '/blog' }
  ];

  const moreLinks = [
    { name: 'Publications', path: '/publications' },
    { name: 'Updates & Infographics', path: '/updates' },
    { name: 'Archives', path: '/archives' },
    { name: 'Submission', path: '/submission' },
    { name: 'Subscription', path: '/subscription' },
    { name: 'Contact', path: '/contact' },
  ];

  const navLinkStyle: React.CSSProperties = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: 800,
    letterSpacing: '0.1em',
    padding: '10px',
    position: 'relative',
    transition: 'color 0.3s'
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main Navigation" style={{ 
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
        <Link to="/" aria-label="Farm Chronicle Homepage" style={{ height: scrolled ? '50px' : '70px', transition: 'all 0.4s ease' }}>
          <img src="/logo.png" alt="Logo" style={{ height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {links.map(link => (
            <Link key={link.name} to={link.path} style={navLinkStyle} onFocus={(e) => e.currentTarget.style.color = 'var(--harvest-gold)'} onBlur={(e) => e.currentTarget.style.color = '#fff'}>
              {link.name}
            </Link>
          ))}
          <div style={{ position: 'relative' }}>
            <button 
              onMouseEnter={() => setIsMoreOpen(true)} 
              onFocus={() => setIsMoreOpen(true)}
              aria-haspopup="true"
              aria-expanded={isMoreOpen}
              style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              MORE <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isMoreOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setIsMoreOpen(false)}
                  style={{ position: 'absolute', top: '100%', right: 0, background: 'var(--noir-card)', border: '1px solid var(--noir-border)', paddingTop: '10px', paddingBottom: '10px', marginTop: '10px', minWidth: '200px' }}
                >
                  {moreLinks.map(link => (
                    <Link key={link.name} to={link.path} style={{ ...navLinkStyle, textAlign: 'left', display: 'block' }} onClick={() => setIsMoreOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/submission" className="elite-btn" style={{ marginLeft: '20px' }}>SUBMIT</Link>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button onClick={() => setIsMobileOpen(true)} aria-label="Open menu" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      <style>{`
        .desktop-nav { display: none; }
        .mobile-nav { display: block; }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
          .mobile-nav { display: none; }
        }
      `}</style>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(8,12,8,0.98)', zIndex: 3000, backdropFilter: 'blur(10px)', padding: '20px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
              <button onClick={() => setIsMobileOpen(false)} aria-label="Close menu" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={32} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
              {[...links, ...moreLinks].map(link => (
                <Link key={link.name} to={link.path} onClick={() => setIsMobileOpen(false)} style={{ ...navLinkStyle, fontSize: '1.5rem', color: '#fff' }}>{link.name}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
