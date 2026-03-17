import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const Error404: React.FC = () => {
  return (
    <main style={{ background: 'var(--noir-black)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <SEO title="404 - Page Not Found" description="The requested academic resource could not be located." />
      
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--harvest-gold)', letterSpacing: '0.5em', display: 'block', marginBottom: '20px' }}>ERROR 404</span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', marginBottom: '30px', lineHeight: 1 }}>Lost in the <br /><span style={{ fontStyle: 'italic', fontWeight: 200 }}>Fields.</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '50px' }}>
            The page you are looking for has been moved, removed, or never existed in our digital repository.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="elite-btn" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Home size={16} /> RETURN HOME
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="elite-btn" 
              style={{ background: 'none', color: '#fff', border: '1px solid var(--noir-border)', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <ArrowLeft size={16} /> GO BACK
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, var(--harvest-glow) 0%, transparent 70%)', opacity: 0.1, pointerEvents: 'none', zIndex: 0 }} />
    </main>
  );
};

export default Error404;
