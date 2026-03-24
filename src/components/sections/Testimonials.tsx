import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

const testimonials = [
  {
    name: "Standard Logistics Group",
    role: "Director of Operations",
    content: "AltPower simplified our complex industrial automation transition. Their precision and engineering expertise are unmatched in the region.",
    rating: 5
  },
  {
    name: "Metro Health Systems",
    role: "Facilities Manager",
    content: "When it comes to critical systems, we trust only AltPower. Their 24/7 maintenance support gives us peace of mind for our server infrastructure.",
    rating: 5
  },
  {
    name: "Skyline Properties",
    role: "Senior Consultant",
    content: "The smart integration they implemented for our LEED Gold building was seamless. They are the benchmark for high-performance engineering.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-black">
      <div className="text-center mb-16">
        <span className="text-lime-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Proven Results</span>
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-tight">
          Client <br />
          <span className="text-white/30 italic">Testimonials.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 glass-card rounded-2xl border border-white/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-lime-primary fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-white/10 mb-6" />
              <p className="text-white/60 text-lg leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
            </div>
            
            <div>
              <div className="font-display font-bold uppercase tracking-wider text-sm">{t.name}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1 font-bold">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
