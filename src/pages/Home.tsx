import ApexElectricHero from "../components/sections/ApexElectricHero";
import TrustSignals from "../components/sections/TrustSignals";
import ServicesSection from "../components/sections/ServicesSection";
import ContactRefined from "../components/sections/ContactRefined";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import SectionWrapper from "../components/layout/SectionWrapper";
import Schema from "../components/layout/Schema";

export default function Home() {
  return (
    <>
      <Schema 
        type="LocalBusiness"
        data={{
          name: "APEX Electric",
          description: "Specialized electrical engineering and contracting for commercial and industrial infrastructure.",
          url: "https://www.apexelectric.pro",
          telephone: "(660) 342-5886",
          email: "info@apexelectric.pro",
          address: {
            "@type": "PostalAddress",
            "streetAddress": "1104 Sullivans Way",
            "addressLocality": "Lake St. Louis",
            "addressRegion": "MO",
            "postalCode": "63367"
          }
        }}
      />
      <ApexElectricHero />
      <TrustSignals />
      <ServicesSection />
      
      <SectionWrapper id="about" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video glass-card rounded-2xl overflow-hidden group">
             <div className="absolute inset-0 power-grid opacity-20" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20">Experience Since 2001</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-base-black to-transparent" />
          </div>
          
          <div>
            <span className="text-lime-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">The APEX Electric Way</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
              Legacy of <br />
              <span className="text-white/30 italic">Technical Edge.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              For over two decades, APEX Electric has set the benchmark for electrical contracting through a combination of engineering precision and safety-first field protocols.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              We don't just solve problems; we engineer systems that prevent them. Our methodology is built on the belief that mission-critical infrastructure demands zero-fault continuity.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <Testimonials />
      <CTA />
      <ContactRefined />
    </>
  );
}
