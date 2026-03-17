import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { localBlogPosts } from '../data/blogPosts';

// Replace 'farmchronicle' with your actual Blogspot name
const BLOG_NAME = "farmchroniclemagazine"; 
const FEED_URL = `https://${BLOG_NAME}.blogspot.com/feeds/posts/default?alt=json`;

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  link?: string;
  category?: string;
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
          content: lp.content,
          author: lp.author,
          date: lp.date,
          category: lp.category,
          isLocal: true
        }));

        let allPosts = [...formattedLocalPosts];

        try {
          const response = await fetch(FEED_URL);
          if (response.ok) {
            const data = await response.json();
            if (data.feed.entry) {
              const bloggerPosts = data.feed.entry.map((entry: any) => ({
                id: entry.id.$t,
                title: entry.title.$t,
                content: entry.content.$t,
                author: entry.author[0].name.$t,
                date: new Date(entry.published.$t).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase(),
                link: entry.link.find((l: any) => l.rel === 'alternate').href,
                isLocal: false
              }));
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

          <div style={{ display: 'grid', gap: '60px' }}>
            {posts.map((post) => (
              <article key={post.id} style={{ borderBottom: '1px solid var(--noir-border)', paddingBottom: '60px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ color: 'var(--harvest-gold)', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.2em' }}>
                    {post.date} | BY {post.author.toUpperCase()}
                  </div>
                  {post.category && (
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '20px' }}>
                      {post.category}
                    </span>
                  )}
                </div>
                
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#fff', marginBottom: '30px', lineHeight: 1.2 }}>{post.title}</h2>
                
                <div 
                  className="blogger-content"
                  style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '1.1rem' }}
                  dangerouslySetInnerHTML={{ __html: post.isLocal ? post.content : post.content.substring(0, 600) + '...' }}
                />
                
                {post.link && (
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'var(--harvest-gold)', textDecoration: 'none', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.1em', display: 'inline-block', marginTop: '30px' }}
                  >
                    READ FULL ARTICLE ON BLOGGER →
                  </a>
                )}
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Blog;
