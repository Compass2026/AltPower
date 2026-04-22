"use client";

import { motion } from "framer-motion";
import { Zap, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterRefined() {
  return (
    <footer className="bg-base-black py-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 flex items-center justify-center">
                 <svg viewBox="0 0 300 250" className="w-full h-full text-lime-primary fill-current">
                    <path d="M145 20L255 205H168L130 250H40L172 95H118L145 20Z" />
                 </svg>
             </div>
             <span className="font-display font-black text-lg tracking-tighter uppercase">
               APEX<span className="text-lime-primary"> Electric</span>
             </span>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Leading the electrical contracting industry through technical excellence, safety-first procedures, and premium mission-critical infrastructure.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-lime-primary hover:text-black transition-all">
               <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-lime-primary hover:text-black transition-all">
               <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
           <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 mb-6">Expertise</div>
           <ul className="space-y-4">
              {["Commercial", "Industrial", "Automation", "Critical Systems"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm font-bold text-white/50 hover:text-lime-primary transition-colors">{link}</a>
                </li>
              ))}
           </ul>
        </div>

        {/* Legal */}
        <div>
           <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 mb-6">Compliance</div>
           <ul className="space-y-4">
              <li>
                <span className="text-sm font-bold text-white/50">License #98224</span>
              </li>
              <li>
                <a href="#" className="text-sm font-bold text-white/50 hover:text-lime-primary transition-colors">Safety Protocols</a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm font-bold text-white/50 hover:text-lime-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm font-bold text-white/50 hover:text-lime-primary transition-colors">Terms & Conditions</Link>
              </li>
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
         <span className="text-[10px] uppercase font-bold tracking-widest text-white/20">© 2026 APEX Electric. All Continuity Reserved.</span>
         <span className="text-[10px] uppercase font-bold tracking-widest text-white/20">Engineering for Excellence.</span>
      </div>
    </footer>
  );
}
