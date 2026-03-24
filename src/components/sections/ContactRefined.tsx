"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
                  <div className="text-lg font-bold">800.ALT.POWER</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:bg-lime-primary transition-colors">
                  <Mail className="w-5 h-5 text-white/40 group-hover:text-black transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-white/20">Email Inquiries</div>
                  <div className="text-lg font-bold">projects@altpower.co</div>
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
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Company Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary focust:ring-0 transition-colors outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Service Type</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none appearance-none">
                  <option className="bg-base-black">Commercial Infrastructure</option>
                  <option className="bg-base-black">Industrial Automation</option>
                  <option className="bg-base-black">Critical Power Systems</option>
                  <option className="bg-base-black">Energy Management</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Message Scope</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none resize-none" />
              </div>

              <button className="w-full py-5 bg-lime-primary text-black font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-lime-bright transition-colors">
                <Send className="w-4 h-4" />
                Dispatch Proposal
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
