import { useParams } from "react-router-dom";
import SectionWrapper from "../components/layout/SectionWrapper";
import CTA from "../components/sections/CTA";
import { useSEO } from "../hooks/useSEO";

const locationData: Record<string, any> = {
  "st-louis": {
    city: "St. Louis",
    state: "MO",
    description: "AltPower's headquarters and primary service hub for mission-critical electrical engineering in St. Louis City and County.",
    content: "We've been serving the St. Louis metropolitan area for over two decades, providing specialized electrical services to the healthcare, data center, and commercial real estate sectors."
  },
  "lake-ozarks": {
    city: "Lake of the Ozarks",
    state: "MO",
    description: "Specialized electrical solutions for high-end residential and commercial developments around the Lake of the Ozarks.",
    content: "Our Lake of the Ozarks team specializes in smart integration and high-capacity electrical systems for premium lakefront properties and commercial hospitality projects."
  },
  "st-charles": {
    city: "St. Charles",
    state: "MO",
    description: "Comprehensive electrical infrastructure support for the growing industrial and commercial corridors of St. Charles County.",
    content: "AltPower provides end-to-end industrial automation and commercial infrastructure services to businesses throughout the St. Charles and O'Fallon areas."
  },
  "belleville": {
    city: "Belleville",
    state: "IL",
    description: "Strategic electrical engineering and infrastructure support for our clients in Southern Illinois and the Metro East.",
    content: "Our Metro East operations provide critical system support and high-performance electrical solutions and 24/7 maintenance to our partners in Belleville and surrounding areas."
  }
};

export default function LocationDetail() {
  const { city } = useParams<{ city: string }>();
  const data = locationData[city || ""] || locationData["st-louis"];

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
              As a leading electrical contractor in {data.city}, AltPower is dedicated to engineering excellence. We understand the local code requirements and specific environmental challenges of the {data.city} area.
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
        subtitle="Let AltPower engineer your next phase of growth with high-performance electrical infrastructure."
      />
    </>
  );
}
