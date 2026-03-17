import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { localBlogPosts } from '../data/blogPosts';

// Replace 'farmchronicle' with your actual Blogspot name
const BLOG_NAME = "farmchroniclemagazine"; 
const FEED_URL = `https://${BLOG_NAME}.blogspot.com/feeds/posts/default?alt=json`;

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  date: string;
  link?: string;
  category?: string;
  image?: string;
  isLocal?: boolean;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogger = async () => {
      try {
        // Start with local posts
        const formattedLocalPosts: Post[] = localBlogPosts.map(lp => ({
          id: lp.id,
          title: lp.title,
          content: lp.content.join(' '),
          excerpt: lp.excerpt,
          author: lp.author,
          date: lp.date,
          category: lp.category,
          image: lp.image,
          isLocal: true
        }));

        let allPosts = [...formattedLocalPosts];

        try {
          const response = await fetch(FEED_URL);
          if (response.ok) {
            const data = await response.json();
            if (data.feed.entry) {
              const bloggerPosts = data.feed.entry.map((entry: any) => {
                // Try to extract an image from the content
                const content = entry.content.$t;
                const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
                const firstImg = imgMatch ? imgMatch[1] : null;

                return {
                  id: entry.id.$t,
                  title: entry.title.$t,
                  content: content,
                  excerpt: entry.summary?.$t || content.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...',
                  author: entry.author[0].name.$t,
                  date: new Date(entry.published.$t).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
                  link: entry.link.find((l: any) => l.rel === 'alternate').href,
                  image: firstImg,
                  isLocal: false
                };
              });
              allPosts = [...allPosts, ...bloggerPosts];
            }
          }
        } catch (e) {
          console.warn("Blogger feed failed to load, showing local posts only.");
        }

        setPosts(allPosts);
      } catch (e) {
        console.error("Blog initialization error:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogger();
  }, []);

  return (
    <main style={{ background: 'var(--noir-black)', minHeight: '100vh', paddingTop: 'clamp(160px, 20vw, 200px)', paddingBottom: '100px' }}>
      <div className="noir-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', marginBottom: '60px' }}>
            ACADEMIC <span style={{ color: 'var(--harvest-gold)', fontStyle: 'italic' }}>BLOG.</span>
          </h1>

          {loading && <p style={{ color: 'rgba(255,255,255,0.4)' }}>Connecting to academic feed...</p>}
          
          {error && posts.length === 0 && (
            <div style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid var(--noir-border)', padding: '40px' }}>
              <p>Feed not found. Please ensure your Blogspot site is public and contains posts.</p>
              <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Target: {BLOG_NAME}.blogspot.com</p>
            </div>
          )}

          {!loading && posts.length === 0 && (
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>No posts available yet. Check back soon for expert insights.</p>
          )}

          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '60px' }}>
            {posts.map((post) => (
              <article key={post.id} className="blog-card" style={{ background: 'var(--noir-card)', border: '1px solid var(--noir-border)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '250px', overflow: 'hidden', background: '#111' }}>
                  {post.image ? (
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.1)', fontSize: '0.8rem' }}>NO PREVIEW AVAILABLE</div>
                  )}
                </div>
                
                <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--harvest-gold)', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '15px' }}>
                    {post.date} | BY {post.author.toUpperCase()}
                  </div>
                  
                  <h2 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '20px', lineHeight: 1.3, height: '3.9em', overflow: 'hidden' }}>{post.title}</h2>
                  
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '30px', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  
                  {post.isLocal ? (
                    <Link 
                      to={`/blog/${post.id}`}
                      className="elite-btn"
                      style={{ textAlign: 'center' }}
                    >
                      READ FULL ARTICLE →
                    </Link>
                  ) : (
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="elite-btn"
                      style={{ textAlign: 'center', border: '1px solid var(--noir-border)', background: 'none', color: '#fff' }}
                    >
                      READ ON BLOGGER →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .blog-card { transition: transform 0.3s, border-color 0.3s; }
        .blog-card:hover { transform: translateY(-10px); border-color: var(--harvest-gold); }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
};

export default Blog;
