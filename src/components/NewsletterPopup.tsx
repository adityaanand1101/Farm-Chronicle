import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail } from 'lucide-react';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleGlobalOpen = () => setIsOpen(true);
    window.addEventListener('open-newsletter', handleGlobalOpen);

    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem('newsletter_seen_session');
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000); 

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-newsletter', handleGlobalOpen);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('newsletter_seen_session', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          onClick={handleClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            background: 'rgba(0,0,0,0.92)',
            cursor: 'pointer',
            touchAction: 'none'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#121812',
              border: '1px solid rgba(212, 140, 49, 0.3)',
              padding: 'clamp(20px, 6vw, 50px)',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              textAlign: 'center',
              cursor: 'default',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            <button 
              onClick={handleClose}
              style={{ 
                position: 'absolute', 
                top: '15px', 
                right: '15px', 
                background: 'none', 
                border: 'none', 
                color: '#fff', 
                cursor: 'pointer',
                padding: '5px',
                zIndex: 10
              }}
            >
              <X size={24} />
            </button>

            <div style={{ color: '#D48C31', marginBottom: '20px' }}>
              <Mail size={40} strokeWidth={1.5} style={{ margin: '0 auto' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', color: '#fff', marginBottom: '15px', lineHeight: 1.2 }}>
              JOIN THE <br /><span style={{ fontStyle: 'italic', fontWeight: 300 }}>ACADEMIC CIRCLE.</span>
            </h2>
            
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '40px', lineHeight: 1.5, fontSize: '0.95rem' }}>
              Subscribe to receive monthly digests of peer-reviewed research, academic calls, and agricultural breakthroughs.
            </p>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScbj-MZLApFQTGXJqaUnNH5T-nWhJMNjaYZ4pbixPIsH2L2lw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="elite-btn"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '20px',
                textDecoration: 'none'
              }}
              onClick={handleClose}
            >
              SUBSCRIBE VIA PORTAL
            </a>

            <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', marginTop: '30px', letterSpacing: '0.1em' }}>
              SECURE ACADEMIC REGISTRATION
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
