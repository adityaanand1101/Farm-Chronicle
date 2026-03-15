import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // PLACEHOLDERS: Replace these with your actual EmailJS IDs
  const SERVICE_ID = "YOUR_SERVICE_ID";
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // If you haven't set up EmailJS yet, this will fail gracefully in the catch block
      if (SERVICE_ID !== "YOUR_SERVICE_ID") {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          { user_email: email },
          PUBLIC_KEY
        );
      } else {
        // Mock successful submission if keys aren't provided yet
        console.log("EmailJS not configured yet. Submitting:", email);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setSubmitted(true);
      setTimeout(() => handleClose(), 2500);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Subscription failed. Please contact us directly.");
    } finally {
      setLoading(false);
    }
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
            
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '30px', lineHeight: 1.5, fontSize: '0.9rem' }}>
              Get monthly digests of peer-reviewed research and agricultural updates.
            </p>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#D48C31', fontWeight: 700, letterSpacing: '0.1em' }}>
                WELCOME TO THE CIRCLE.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input 
                  type="email" 
                  placeholder="Enter academic email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  style={{
                    background: '#000',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '15px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem',
                    borderRadius: '0',
                    textAlign: 'center',
                    opacity: loading ? 0.5 : 1
                  }}
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="elite-btn"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '15px',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : "SUBSCRIBE"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
