"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Services",
    dropdown: [
      { name: "Commercial Infrastructure", slug: "commercial" },
      { name: "Industrial Automation", slug: "industrial" },
      { name: "Critical Systems", slug: "critical" },
      { name: "Smart Integration", slug: "smart" },
    ],
  },
  {
    name: "Service Areas",
    dropdown: [
      { name: "Wentzville", slug: "wentzville" },
      { name: "O'Fallon", slug: "ofallon" },
      { name: "St. Peters", slug: "st-peters" },
      { name: "St. Charles", slug: "st-charles" },
    ],
  },
  { name: "About", href: "/#about" },
  { name: "Safety", href: "/#safety" },
];

export default function HeaderRefined() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-base-black/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="AltPower Logo" 
            className="h-12 w-auto logo-glossy"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer py-4">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-lime-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-lime-primary transition-colors flex items-center gap-1">
                    {item.name}
                    <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </span>
                )}
              </div>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-base-black border border-white/5 shadow-2xl p-4 grid gap-2"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.slug}
                        to={item.name === "Services" ? `/services/${sub.slug}` : `/locations/${sub.slug}`}
                        className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-lime-primary hover:bg-white/5 p-2 transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-6">
          <div className="flex flex-col md:flex-row items-end md:items-center gap-1.5 md:gap-6">
            <a
              href="tel:+16364977314"
              className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors shrink-0"
            >
              <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 text-lime-primary" />
              (636) 497 7314
            </a>
            <a
              href="#contact"
              className="group px-4 py-1.5 md:px-6 md:py-2 border border-lime-primary/30 text-lime-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-lime-primary hover:text-black transition-all"
            >
              Get Quote
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/60 hover:text-white transition-colors ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-base-black border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-4">
                  <div className="text-[18px] font-black uppercase tracking-[0.4em] text-lime-primary border-b border-white/10 pb-2">
                    {item.name}
                  </div>
                  {item.dropdown ? (
                    <div className="grid grid-cols-1 gap-3 pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.slug}
                          to={item.name === "Services" ? `/services/${sub.slug}` : `/locations/${sub.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-[15px] font-bold uppercase tracking-widest text-white/60 hover:text-white py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[15px] font-bold uppercase tracking-widest text-white/60 hover:text-white pl-4 py-1"
                    >
                      View Page
                    </a>
                  )}
                </div>
              ))}
              <a
                href="tel:+16364977314"
                className="flex items-center gap-3 text-[16px] font-black uppercase tracking-widest text-white/80 pt-4 border-t border-white/10"
              >
                <Phone className="w-4 h-4 text-lime-primary" />
                (636) 497 7314
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
