import { motion } from "framer-motion";
import { Zap, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  index: number;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  capabilities, 
  index 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-base-black p-8 hover:bg-white/[0.02] transition-colors cursor-default"
    >
      {/* Energized Accent */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-lime-primary transition-all duration-500 group-hover:w-full" />
      
      <div className="mb-8 w-12 h-12 rounded bg-white/5 flex items-center justify-center group-hover:bg-lime-primary/10 transition-colors">
        <Icon className="w-6 h-6 text-white/40 group-hover:text-lime-primary transition-colors" />
      </div>

      <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-4">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed mb-8">{description}</p>

      <ul className="space-y-2 border-t border-white/5 pt-6">
        {capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-white/20 group-hover:text-white/70 transition-colors">
            <Zap className="w-2 h-2 text-lime-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            {cap}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
