"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Users } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "25+", icon: Clock },
  { label: "Completed Projects", value: "1.2k", icon: Award },
  { label: "Licensed Experts", value: "85", icon: Users },
  { label: "Safety Rating", value: "100%", icon: ShieldCheck },
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-base-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <stat.icon className="w-8 h-8 text-white/20 mb-6 group-hover:text-lime-primary transition-colors" />
              <div className="text-4xl md:text-5xl font-display font-black mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Placeholder Brand Marquee Space */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center">
          <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/20 mb-12">Trusted Partners & Certifications</span>
          <div className="w-full flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
             <div className="font-display font-black text-2xl uppercase tracking-tighter italic">NECA</div>
             <div className="font-display font-black text-2xl uppercase tracking-tighter italic">IBEW</div>
             <div className="font-display font-black text-2xl uppercase tracking-tighter italic">OSHA</div>
             <div className="font-display font-black text-2xl uppercase tracking-tighter italic">NFPA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
