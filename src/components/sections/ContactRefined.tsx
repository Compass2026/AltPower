"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactRefined() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    serviceType: "Commercial Infrastructure",
    message: "",
    smsConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Proposal request dispatched successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary focust:ring-0 transition-colors outline-none text-white text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none text-white text-sm" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none text-white text-sm" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Service Type</label>
                  <div className="relative">
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none appearance-none text-white text-sm pr-10"
                    >
                      <option className="bg-base-black">Commercial Infrastructure</option>
                      <option className="bg-base-black">Industrial Automation</option>
                      <option className="bg-base-black">Critical Power Systems</option>
                      <option className="bg-base-black">Energy Management</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">Message Scope</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 p-4 focus:border-lime-primary transition-colors outline-none resize-none text-white text-sm" 
                />
              </div>

              <div className="space-y-2 pb-2">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-start pt-1">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      required
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="w-5 h-5 bg-white/5 border border-white/20 rounded-none cursor-pointer accent-lime-primary"
                    />
                  </div>
                  <span className="text-[11px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                    I consent to receive automated marketing text messages from AltPower Co. at the phone number I provided. Message frequency may vary. Message and data rates may apply. Text HELP to (636) 497-7314 for help, or STOP to opt out. Consent is not a condition of purchase. View our <Link to="/privacy-policy" className="text-lime-primary hover:underline">Privacy Policy</Link> and <Link to="/terms-and-conditions" className="text-lime-primary hover:underline">Terms & Conditions</Link>.
                  </span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-lime-primary text-black font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-lime-bright transition-colors"
              >
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
