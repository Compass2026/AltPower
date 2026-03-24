"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircuitBoardBackground from "../ui/CircuitBoardBackground";

export default function AltPowerHero() {
  const [isEnergized, setIsEnergized] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isSurging, setIsSurging] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setHasPlayed(false);
    setShowIntro(true);
    // Sequence: Wait -> Flip -> Surge -> Energized (with flicker)
    const t1 = setTimeout(() => setIsFlipping(true), 1500);
    const t2 = setTimeout(() => {
      setIsSurging(true);
    }, 2200);
    const t3 = setTimeout(() => {
      setIsEnergized(true);
      setIsSurging(false);
    }, 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-base-black text-white flex flex-col items-center justify-start pt-32 md:pt-48">
      {/* Circuit Board Background */}
      <CircuitBoardBackground energized={isEnergized} />
      
      {/* Radial Glow - Persistent but intensified when energized */}
      <motion.div
        animate={{
          opacity: isEnergized ? 0.25 : 0.05,
          scale: isEnergized ? 1.2 : 0.9,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-lime-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center gap-12">
        
        <AnimatePresence>
          {!isEnergized && !hasPlayed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              className="flex flex-col items-center gap-12"
            >
              {/* Industrial Breaker Panel */}
              <div className="relative w-64 h-96 bg-zinc-900 border-4 border-zinc-800 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between items-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                
                {/* Labels */}
                <div className="flex justify-between w-full text-[10px] font-black uppercase tracking-widest">
                  <span className={isSurging || isEnergized ? "text-white/20" : "text-white/60"}>Power Off</span>
                  <span className={isSurging || isEnergized ? "text-lime-primary glow-subtle" : "text-white/20"}>Energized</span>
                </div>

                {/* The Lever */}
                <div className="relative h-64 w-20 bg-zinc-950 rounded-lg border-2 border-zinc-900 shadow-inner flex flex-col items-center justify-center p-2">
                  <motion.div
                    animate={{ 
                      y: isFlipping || isEnergized ? 80 : -80,
                      rotateX: isFlipping || isEnergized ? 0 : -30 
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="w-16 h-32 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-md border-b-4 border-black shadow-2xl flex flex-col items-center gap-4 cursor-pointer"
                  >
                    <div className="w-12 h-20 bg-zinc-800 rounded-sm mt-4 shadow-inner flex items-center justify-center">
                       <div className="w-1 h-12 bg-zinc-700 rounded-full" />
                    </div>
                  </motion.div>
                </div>

                <div className="pt-4 w-full" />
              </div>
              
              <motion.span 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold"
              >
                {isFlipping ? "Engaging Continuity..." : "Ready for Sequence"}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        {isEnergized || !hasPlayed ? (
          <motion.div
            initial={hasPlayed ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center text-center -mt-12"
          >
            {/* The Hero Logo - Specifically Powered by Breaker */}
            <div className="relative mb-12 flex justify-center">
              <motion.div
                style={{ scale: 1 }}
                initial={hasPlayed ? { opacity: 1, filter: "brightness(1) blur(0px)" } : { opacity: 0, filter: "brightness(0) blur(20px)" }}
                animate={{ 
                  filter: isEnergized 
                    ? [
                        "grayscale(1) brightness(0) blur(20px)",
                        "grayscale(0) brightness(4) blur(0px) drop-shadow(0 0 50px var(--color-lime-glow))",
                        "grayscale(0) brightness(0) blur(5px)", // "Go out" stage
                        "grayscale(0) brightness(1.2) blur(0px) drop-shadow(0 0 40px var(--color-lime-glow))"
                      ]
                    : hasPlayed ? "grayscale(0) brightness(1.2) blur(0px)" : "grayscale(1) brightness(0) blur(20px)",
                  opacity: isEnergized 
                    ? [0, 1, 0, 1] // Flash and go out and then stay on
                    : hasPlayed ? 1 : 0
                }}
                transition={{ 
                  duration: isEnergized ? 1.2 : 0.5,
                  times: isEnergized ? [0, 0.2, 0.5, 1] : undefined,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img 
                  src="/logo.png" 
                  alt="AltPower Logo" 
                  className="h-48 md:h-64 w-auto brightness-125"
                />
                
                {/* Flash Flare */}
                <AnimatePresence>
                  {isEnergized && !hasPlayed && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, times: [0, 0.2, 1], ease: "easeOut" }}
                      className="absolute inset-0 bg-white rounded-full blur-[80px] -z-10"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Headline and Narrative - Independent of Logo Power-Up */}
            <motion.div
              initial={hasPlayed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={(isEnergized || isSurging || hasPlayed) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mt-8"
            >
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.9]">
                Precision <br />
                <span className="text-lime-primary glow-subtle text-opacity-80">Powered.</span>
              </h1>
              <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-white/60 font-medium">
                High-performance electrical engineering for commercial <br className="hidden md:block" /> 
                infrastructure and mission-critical systems.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="#contact"
                  className="group relative px-10 py-4 bg-lime-primary text-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-white translate-y-full transition-transform group-hover:translate-y-0" />
                </a>
                <a
                  href="#services"
                  className="px-10 py-4 border border-white/20 hover:bg-white/5 transition-all text-sm uppercase font-bold tracking-widest"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}

        {/* Energy Surge Beam */}
        <AnimatePresence>
          {isSurging && (
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
               <motion.div
                 initial={{ height: 0, opacity: 0, y: 200 }}
                 animate={{ height: 400, opacity: [0, 1, 1, 0], y: -50 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.8, ease: "easeInOut" }}
                 className="w-1 bg-gradient-to-t from-lime-primary via-white to-transparent blur-[2px] shadow-[0_0_20px_var(--color-lime-primary)]"
               />
               <motion.div
                 initial={{ scale: 0, opacity: 0, y: 200 }}
                 animate={{ scale: [1, 2, 1], opacity: [0, 1, 0], y: -250 }}
                 transition={{ duration: 0.8, ease: "easeInOut" }}
                 className="absolute w-8 h-8 bg-white rounded-full blur-xl"
               />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      {isEnergized && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Continuity Established</span>
          <motion.div 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[2px] h-16 bg-gradient-to-b from-white via-lime-primary to-transparent shadow-[0_0_15px_var(--color-lime-primary)]" 
          />
        </motion.div>
      )}
    </section>
  );
}
