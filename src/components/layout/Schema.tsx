import { useEffect } from "react";

interface SchemaProps {
  type: "LocalBusiness" | "Service";
  data: any;
}

export default function Schema({ type, data }: SchemaProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
}
