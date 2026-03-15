import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = "Farm Chronicle";
    document.title = title ? `${title} | ${baseTitle}` : `${baseTitle} | International Research Journal`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "Farm Chronicle (ISSN: 2583-732X) is a premier international peer-reviewed research journal dedicated to the latest advancements in agricultural sciences.");
    }
  }, [title, description, location]);

  return null;
};

export default SEO;
