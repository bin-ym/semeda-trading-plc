"use client";

import { motion } from "framer-motion";

type SectorContentProps = {
  leftTitle: string;
  leftContent: React.ReactNode;
  rightTitle: string;
  rightContent: React.ReactNode;
  accentColor?: "floriculture" | "mining" | "corporate";
};

const accentMap = {
  floriculture: {
    badge: "bg-gradient-to-br from-floriculture to-mining text-white",
    line: "bg-floriculture",
    glow: "group-hover:shadow-[0_0_30px_rgba(27,77,62,0.2)]",
    border: "hover:border-floriculture/50",
    arrow: "text-floriculture",
  },
  mining: {
    badge: "bg-gradient-to-br from-mining to-floriculture text-white",
    line: "bg-mining",
    glow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    border: "hover:border-mining/50",
    arrow: "text-mining",
  },
  corporate: {
    badge: "bg-gradient-to-br from-corporate to-mining text-white",
    line: "bg-corporate",
    glow: "group-hover:shadow-[0_0_30px_rgba(10,25,49,0.2)]",
    border: "hover:border-corporate/50",
    arrow: "text-corporate",
  },
};

export default function SectorContent({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  accentColor = "floriculture",
}: SectorContentProps) {
  const accent = accentMap[accentColor];

  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      {/* Left Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`group relative overflow-hidden p-8 rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-2xl ${accent.glow} ${accent.border}`}
      >
        {/* Top accent bar */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${accent.line} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Number badge */}
        <div
          className={`h-12 w-12 rounded-2xl ${accent.badge} flex items-center justify-center font-black text-base shadow-lg mb-6`}
        >
          01
        </div>

        <h3 className="text-xl font-extrabold tracking-widest uppercase mb-5 text-foreground">
          {leftTitle}
        </h3>

        <div
          className={`text-base leading-8 text-foreground/75 [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0 [&_li]:flex [&_li]:gap-3 [&_li]:items-start [&_li::before]:hidden`}
        >
          {leftContent}
        </div>
      </motion.div>

      {/* Right Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className={`group relative overflow-hidden p-8 rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-2xl ${accent.glow} ${accent.border}`}
      >
        {/* Top accent bar */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 ${accent.line} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Number badge */}
        <div
          className={`h-12 w-12 rounded-2xl ${accent.badge} flex items-center justify-center font-black text-base shadow-lg mb-6`}
        >
          02
        </div>

        <h3 className="text-xl font-extrabold tracking-widest uppercase mb-5 text-foreground">
          {rightTitle}
        </h3>

        <div className="text-base leading-8 text-foreground/75">
          {rightContent}
        </div>
      </motion.div>
    </div>
  );
}
