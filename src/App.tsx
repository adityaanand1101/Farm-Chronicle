import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBanner from './components/AnnouncementBanner';
import NewsletterPopup from './components/NewsletterPopup';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Error404 from './pages/Error404';
import { 
  AboutUs, 
  EditorialBoard, 
  Publications, 
  InfographicsUpdates, 
  Archives, 
  Submission, 
  SubscriptionMembership, 
  ContactUs 
} from './pages/NewPages';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <NewsletterPopup />
        <AnnouncementBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/updates" element={<InfographicsUpdates />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/submission" element={<Submission />} />
          <Route path="/subscription" element={<SubscriptionMembership />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/category/:id" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
