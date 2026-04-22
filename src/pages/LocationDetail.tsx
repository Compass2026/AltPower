import { useParams } from "react-router-dom";
import SectionWrapper from "../components/layout/SectionWrapper";
import CTA from "../components/sections/CTA";
import { useSEO } from "../hooks/useSEO";

const locationData: Record<string, any> = {
  "wentzville": {
    city: "Wentzville",
    state: "MO",
    description: "Providing mission-critical electrical engineering and advanced commercial infrastructure solutions tailored for Wentzville.",
    content: "We serve the rapidly expanding Wentzville area with specialized electrical services for industrial automation, data centers, and commercial developments."
  },
  "ofallon": {
    city: "O'Fallon",
    state: "MO",
    description: "High-performance electrical systems and strategic infrastructure support for O'Fallon businesses and commercial real estate.",
    content: "Our O'Fallon team specializes in smart integration and high-capacity electrical engineering, ensuring optimal power reliability for local enterprises and critical facilities."
  },
  "st-peters": {
    city: "St. Peters",
    state: "MO",
    description: "End-to-end commercial electrical services and robust infrastructure planning for the St. Peters community.",
    content: "APEX Electric delivers comprehensive industrial automation and modern commercial electrical solutions to drive the success of businesses across St. Peters."
  },
  "st-charles": {
    city: "St. Charles",
    state: "MO",
    description: "Comprehensive electrical infrastructure support for the growing industrial and commercial corridors of St. Charles County.",
    content: "APEX Electric provides end-to-end industrial automation and commercial infrastructure services to businesses throughout the St. Charles area."
  }
};

export default function LocationDetail() {
  const { city } = useParams<{ city: string }>();
  const data = locationData[city || ""] || locationData["wentzville"];

  useSEO({
    title: `Electrical Contractors in ${data.city}, ${data.state}`,
    description: data.description
  });

  return (
    <>
      <SectionWrapper variant="grid" className="pt-32">
        <div className="max-w-4xl">
          <span className="text-lime-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Regional Expertise</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
            {data.city} <br />
            <span className="text-white/30 italic">{data.state} Operations.</span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl leading-relaxed mb-12">
            {data.description}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-white/50 text-lg leading-relaxed space-y-6">
            <p>{data.content}</p>
            <p>
              As a leading electrical contractor in {data.city}, APEX Electric is dedicated to engineering excellence. We understand the local code requirements and specific environmental challenges of the {data.city} area.
            </p>
          </div>
          <div className="p-8 border border-white/5 rounded-2xl bg-white/[0.02]">
             <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Service Area Capabilities</h3>
             <ul className="space-y-4">
                {["24/7 Priority Support", "Local Code Compliance", "Rapid Response Teams", "On-site Consultations"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <div className="w-2 h-px bg-lime-primary" />
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTA 
        title={`Growing in ${data.city}?`}
        subtitle="Let APEX Electric engineer your next phase of growth with high-performance electrical infrastructure."
      />
    </>
  );
}
