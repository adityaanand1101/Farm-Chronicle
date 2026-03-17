import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { localBlogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = localBlogPosts.find(p => p.id === id);

  const shareUrl = window.location.href;

  const shareActions = [
    { 
      icon: <Facebook size={18} />, 
      label: 'FB', 
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank') 
    },
    { 
      icon: <Twitter size={18} />, 
      label: 'TW', 
      action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post?.title || '')}`, '_blank') 
    },
    { 
      icon: <Linkedin size={18} />, 
      label: 'LN', 
      action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank') 
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      // If post not found in local, but it might be a Blogger ID, 
      // we could handle it, but for now redirect back to blog.
      const timer = setTimeout(() => {
        if (!post) navigate('/blog');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [post, navigate]);

  if (!post) {
    return (
      <main style={{ background: 'var(--noir-black)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Post Not Found</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '40px' }}>Redirecting to blog feed...</p>
          <Link to="/blog" className="elite-btn">BACK TO BLOG</Link>
        </div>
      </main>
    );
  }

  return (
    <main style={{ background: 'var(--noir-black)', minHeight: '100vh', paddingBottom: '100px' }}>
      <SEO title={post.title} description={post.excerpt} />
      
      {/* Header / Hero */}
      <header style={{ position: 'relative', height: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, var(--noir-black) 100%)', zIndex: 1 }} />
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="noir-container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--harvest-gold)', textDecoration: 'none', fontWeight: 900, fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '30px' }}>
              <ArrowLeft size={16} /> BACK TO FEED
            </Link>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}><Clock size={14} /> {post.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}><User size={14} /> BY {post.author.toUpperCase()}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 800 }}><Tag size={14} /> {post.category}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#fff', lineHeight: 1.1, maxWidth: '1000px' }}>{post.title}</h1>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <section className="noir-container" style={{ marginTop: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '80px' }}>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: 1.8 }}
          >
            {post.content.map((paragraph, idx) => (
              <p key={idx} style={{ marginBottom: '30px' }}>{paragraph}</p>
            ))}

            {/* In-content image placeholder / Decorative element */}
            <div style={{ margin: '60px 0', padding: '40px', borderLeft: '4px solid var(--harvest-gold)', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ color: '#fff', marginBottom: '20px' }}>Key Takeaway</h3>
              <p style={{ fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--harvest-gold)' }}>
                "The integration of modern technology and sustainable practices is not just a choice, but a necessity for the future of global food security."
              </p>
            </div>

            <p>At Farm Chronicle, we continue to bridge the gap between academic research and practical field application. Stay tuned for more expert insights into the ever-evolving world of agricultural science.</p>
          </motion.div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div style={{ position: 'sticky', top: '120px' }}>
              <div style={{ padding: '40px', background: 'var(--noir-card)', border: '1px solid var(--noir-border)', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--harvest-gold)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '20px' }}>NEWSLETTER</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '30px' }}>Get the latest research delivered to your inbox monthly.</p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-newsletter'))}
                  className="elite-btn" 
                  style={{ width: '100%' }}
                >
                  SUBSCRIBE
                </button>
              </div>

              <div style={{ marginTop: '40px', padding: '40px', border: '1px solid var(--noir-border)' }}>
                <h4 style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '20px' }}>SHARE ARTICLE</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {shareActions.map(s => (
                    <button 
                      key={s.label} 
                      onClick={s.action}
                      title={`Share on ${s.label}`}
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        border: '1px solid var(--noir-border)', 
                        background: 'none', 
                        color: '#fff', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: '0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.borderColor = 'var(--harvest-gold)';
                        e.currentTarget.style.color = 'var(--harvest-gold)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.borderColor = 'var(--noir-border)';
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          section > div { grid-template-columns: 1fr !important; gap: 60px !important; }
          .sidebar { order: -1; }
        }
      `}</style>
    </main>
  );
};

export default BlogPostDetail;
