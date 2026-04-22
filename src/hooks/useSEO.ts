import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | APEX Electric - Specialized Electrical Engineering`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      (metaDescription as HTMLMetaElement).name = 'description';
      (metaDescription as HTMLMetaElement).content = description;
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);
};
