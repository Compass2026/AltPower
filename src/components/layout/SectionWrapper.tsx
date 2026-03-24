import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: 'default' | 'dark' | 'grid';
}

export default function SectionWrapper({ 
  children, 
  id, 
  className = "", 
  variant = 'default' 
}: SectionWrapperProps) {
  const variants = {
    default: "bg-base-black",
    dark: "bg-black",
    grid: "bg-base-black relative overflow-hidden"
  };

  return (
    <section id={id} className={`py-24 ${variants[variant]} ${className}`}>
      {variant === 'grid' && (
        <div className="absolute inset-0 power-grid opacity-10 pointer-events-none" />
      )}
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
