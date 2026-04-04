import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../ui/ContactForm";

export default function ContactRefined() {
  return (
    <section id="contact" className="py-24 bg-base-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-primary/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12">
          
          <div>
            <span className="text-lime-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Connection</span>
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
              Start Your <br />
              <span className="text-white/30 italic">Next Project.</span>
            </h2>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed mb-12">
              Ready to power your vision? Contact our engineering team for a consultation or detailed project quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-lime-primary transition-colors">
                  <Phone className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Direct Line</div>
                  <div className="text-lg font-bold">(636) 497-7314</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-lime-primary transition-colors">
                  <Mail className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Email Inquiries</div>
                  <div className="text-lg font-bold">thomas@compassmarketing.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-lime-primary transition-colors">
                  <MapPin className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Headquarters</div>
                  <div className="text-lg font-bold">128 Energy Way, IL 60601</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl relative">
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-white/10" />
            
            <ContactForm submitButtonText="Dispatch Proposal" />
          </div>

        </div>
      </div>
    </section>
  );
}

