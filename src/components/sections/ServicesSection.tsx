"use client";

import { Factory, Settings, Battery, Cpu } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Commercial Infrastructure",
    description: "Comprehensive electrical systems for modern office complexes, retail centers, and hospitality.",
    icon: Factory,
    capabilities: ["Energy Management", "Low Voltage Systems", "Tenant Build-outs"]
  },
  {
    title: "Industrial Automation",
    description: "Heavy-duty power distribution and control systems for manufacturing and logistics facilities.",
    icon: Settings,
    capabilities: ["Motor Controls", "PLC Integration", "Substation Service"]
  },
  {
    title: "Critical Systems",
    description: "Redundant power solutions and 24/7 maintenance for data centers and healthcare environments.",
    icon: Battery,
    capabilities: ["UPS Systems", "Generator Backup", "Load Testing"]
  },
  {
    title: "Smart Integration",
    description: "Advanced automation and intelligent lighting control for high-performance buildings.",
    icon: Cpu,
    capabilities: ["BMS Integration", "Daylight Harvesting", "Smart Meters"]
  }
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" variant="grid">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-lime-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Capabilities</span>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-tight">
            Engineering <br />
            <span className="text-white/30 italic">Reliability.</span>
          </h2>
        </div>
        <p className="text-white/50 max-w-sm text-sm leading-relaxed">
          From preliminary design to final commissioning, we provide end-to-end electrical solutions engineered for long-term performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} {...service} index={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}
