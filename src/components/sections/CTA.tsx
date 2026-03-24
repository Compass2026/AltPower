import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../layout/SectionWrapper";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
}

export default function CTA({ 
  title = "Ready to Engineer Your Next Project?", 
  subtitle = "Contact our specialized teams for a comprehensive consultation on your critical infrastructure needs.",
  buttonText = "Request a Consultation",
  href = "#contact"
}: CTAProps) {
  return (
    <SectionWrapper variant="dark" className="border-y border-white/5">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] mb-6">
            {title}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        <motion.a
          href={href}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 bg-lime-primary text-black font-black uppercase tracking-[0.2em] text-sm flex items-center gap-3 whitespace-nowrap"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </motion.a>
      </div>
    </SectionWrapper>
  );
}
