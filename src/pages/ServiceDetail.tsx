import { useParams } from "react-router-dom";
import SectionWrapper from "../components/layout/SectionWrapper";
import CTA from "../components/sections/CTA";
import { useSEO } from "../hooks/useSEO";
import Schema from "../components/layout/Schema";

const serviceData: Record<string, any> = {
  "commercial": {
    title: "Commercial Infrastructure",
    description: "High-performance electrical systems for modern office complexes and retail centers.",
    content: "Our commercial infrastructure services are designed for scalability and long-term reliability. We specialize in energy management, low voltage systems, and tenant build-outs that meet the highest industry standards."
  },
  "industrial": {
    title: "Industrial Automation",
    description: "Heavy-duty power distribution and control systems for manufacturing.",
    content: "From motor controls to PLC integration, our industrial automation solutions are engineered for maximum uptime and efficiency in demanding environments."
  },
  "critical": {
    title: "Critical Systems",
    description: "Redundant power solutions for data centers and healthcare.",
    content: "Mission-critical environments require zero-fault continuity. We provide UPS systems, generator backup, and comprehensive load testing to ensure your operations never stop."
  },
  "smart": {
    title: "Smart Integration",
    description: "Advanced automation and intelligent lighting control.",
    content: "Intelligent building management systems (BMS) and smart lighting are the future of high-performance architecture. We integrate these technologies seamlessly into your existing infrastructure."
  }
};

export default function ServiceDetail() {
  const { service } = useParams<{ service: string }>();
  const data = serviceData[service || ""] || serviceData["commercial"];

  useSEO({
    title: data.title,
    description: data.description
  });

  return (
    <>
      <Schema 
        type="Service"
        data={{
          name: data.title,
          description: data.description,
          provider: {
            "@type": "LocalBusiness",
            "name": "APEX Electric"
          }
        }}
      />
      <SectionWrapper variant="grid" className="pt-32">
        <div className="max-w-4xl">
          <span className="text-lime-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Service Excellence</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8">
            {data.title.split(' ')[0]} <br />
            <span className="text-white/30 italic">{data.title.split(' ').slice(1).join(' ')}</span>
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
              APEX Electric brings decades of specialized experience to every {data.title} project. Our approach is rooted in technical precision and a deep understanding of the unique challenges faced by our clients.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-white/5">
             <h3 className="text-lime-primary text-xs font-bold uppercase tracking-[0.3em] mb-6">Key Capabilities</h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["System Design", "Implementation", "Maintenance", "Compliance", "Optimization", "Testing"].map(cap => (
                  <li key={cap} className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                    <div className="w-1 h-1 bg-lime-primary rounded-full" />
                    {cap}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTA 
        title={`Need expert ${data.title}?`}
        subtitle="Our engineering teams are ready to discuss your specific requirements and provide a zero-fault solution."
      />
    </>
  );
}
