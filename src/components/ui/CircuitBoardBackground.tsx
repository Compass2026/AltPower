"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const CIRCUIT_PATHS = [
  // Trace 1: Top Left to Center
  "M -10 10 H 20 L 30 20 H 45 L 50 35",
  "M 15 -10 V 10 L 25 20 H 40 L 50 35",
  // Trace 2: Top Right to Center
  "M 110 10 H 80 L 70 20 H 55 L 50 35",
  "M 85 -10 V 10 L 75 20 H 60 L 50 35",
  // Trace 3: Bottom Left to Center
  "M -10 90 H 20 L 30 80 H 45 L 50 65",
  "M 15 110 V 90 L 25 80 H 40 L 50 65",
  // Trace 4: Bottom Right to Center
  "M 110 90 H 80 L 70 80 H 55 L 50 65",
  "M 85 110 V 90 L 75 80 H 60 L 50 65",
  // Horizontal Side Traces
  "M -10 50 H 40 L 50 50",
  "M 110 50 H 60 L 50 50",
  // Decorative vertical lines
  "M 50 -10 V 20",
  "M 50 110 V 80",
];

const Spark = ({ delay }: { delay: number }) => {
  const points = useMemo(() => {
    let p = "";
    let x = Math.random() * 80 + 10;
    let y = Math.random() * 80 + 10;
    p += `M ${x} ${y}`;
    for (let i = 0; i < 4; i++) {
      x += (Math.random() - 0.5) * 10;
      y += (Math.random() - 0.5) * 10;
      p += ` L ${x} ${y}`;
    }
    return p;
  }, []);

  return (
    <motion.path
      d={points}
      fill="none"
      stroke="var(--color-lime-primary)"
      strokeWidth="0.3"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0, 0.8, 0],
        pathLength: [0, 1],
      }}
      transition={{ 
        duration: 0.2, 
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 
      }}
      style={{ filter: "drop-shadow(0 0 2px var(--color-lime-primary))" }}
    />
  );
};

const LightningTrace = ({ delay }: { delay: number }) => {
  const points = useMemo(() => {
    let p = "";
    // Random side (0: top, 1: right, 2: bottom, 3: left)
    const side = Math.floor(Math.random() * 4);
    let x = side === 1 ? 100 : side === 3 ? 0 : Math.random() * 100;
    let y = side === 0 ? 0 : side === 2 ? 100 : Math.random() * 100;
    
    p += `M ${x} ${y}`;
    const segments = 8;
    for (let i = 1; i <= segments; i++) {
      const tx = 50;
      const ty = 50;
      x += (tx - x) * (i / segments) + (Math.random() - 0.5) * 20;
      y += (ty - y) * (i / segments) + (Math.random() - 0.5) * 20;
      p += ` L ${x} ${y}`;
    }
    return p;
  }, []);

  return (
    <motion.path
      d={points}
      fill="none"
      stroke="var(--color-lime-primary)"
      strokeWidth="0.4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 1],
        opacity: [0, 0.4, 0, 0.6, 0]
      }}
      transition={{ 
        duration: 0.5, 
        delay: delay, 
        repeat: Infinity, 
        repeatDelay: Math.random() * 15 + 5 
      }}
      style={{ filter: "drop-shadow(0 0 4px var(--color-lime-primary))" }}
    />
  );
};

const PULSE_VARIANTS: any = {
  initial: { pathLength: 0, opacity: 0, pathOffset: 0 },
  animate: (i: number) => ({
    pathLength: [0, 0.1, 0.1, 0],
    pathOffset: [0, 0, 0.9, 1],
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 3,
      delay: i * 0.8,
      repeat: Infinity,
      ease: "linear",
    }
  }),
};

export default function CircuitBoardBackground({ energized }: { energized: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-base-black">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-30"
      >
        <defs>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Global Traces */}
        {CIRCUIT_PATHS.map((d, i) => (
          <g key={i}>
            {/* Background Trace */}
            <path
              d={d}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Energized Light Layer */}
            <motion.path
              d={d}
              fill="none"
              stroke="var(--color-lime-primary)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: energized ? 1 : 0, 
                opacity: energized ? 0.3 : 0 
              }}
              transition={{ duration: 1.5, delay: i * 0.05 }}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Moving Pulses */}
            <motion.path
              d={d}
              fill="none"
              stroke="var(--color-lime-primary)"
              strokeWidth="0.8"
              custom={i}
              initial="initial"
              animate="animate"
              variants={PULSE_VARIANTS}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 5px var(--color-lime-primary))" }}
            />
          </g>
        ))}

        {/* Random Static Sparks */}
        {energized && [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Spark key={`spark-${i}`} delay={Math.random() * 10} />
        ))}

        {/* Ambient Lightning Arcs */}
        {energized && [1, 2, 3, 4].map((i) => (
          <LightningTrace key={`lightning-${i}`} delay={Math.random() * 20} />
        ))}

        {/* Junction Points (Nodes) */}
        {[
          [30, 20], [70, 20], [30, 80], [70, 80],
          [45, 20], [55, 20], [45, 80], [55, 80],
          [50, 35], [50, 65], [50, 50],
          [20, 10], [80, 10], [20, 90], [80, 90],
        ].map(([cx, cy], i) => (
          <motion.rect
            key={`node-${i}`}
            x={cx - 0.5}
            y={cy - 0.5}
            width="1"
            height="1"
            rx="0.5"
            initial={{ scale: 0.6, opacity: 0.2 }}
            animate={energized ? {
              scale: [0.6, 1.2, 0.6],
              opacity: [0.4, 1, 0.4]
            } : {
              scale: 0.6,
              opacity: 0.2
            }}
            fill={energized ? "var(--color-lime-primary)" : "rgba(255,255,255,0.1)"}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </svg>
      
      {/* Vignetee Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-base-black via-transparent to-base-black opacity-80" />
    </div>
  );
}
