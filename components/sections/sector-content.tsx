"use client";

import { motion } from "framer-motion";

type SectorContentProps = {
  leftTitle: string;
  leftContent: React.ReactNode;
  rightTitle: string;
  rightContent: React.ReactNode;
};

export default function SectorContent({
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
}: SectorContentProps) {
  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      {/* Left Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute -top-4 -right-4 h-9 w-9 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shadow-md">
          01
        </div>

        <h3 className="text-2xl font-semibold tracking-tight mb-6 text-foreground">
          {leftTitle}
        </h3>

        <div className="text-[15px] leading-relaxed text-muted-foreground">
          {leftContent}
        </div>
      </motion.div>

      {/* Right Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="group relative p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute -top-4 -right-4 h-9 w-9 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shadow-md">
          02
        </div>

        <h3 className="text-2xl font-semibold tracking-tight mb-6 text-foreground">
          {rightTitle}
        </h3>

        <div className="text-[15px] leading-relaxed text-muted-foreground">
          {rightContent}
        </div>
      </motion.div>
    </div>
  );
}