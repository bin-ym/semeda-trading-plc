"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(() => import("../three/hero-canvas"), {
  ssr: true,
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* Three.js Background */}
      <div className="absolute inset-0 -z-20">
        <HeroCanvas />
      </div>

      {/* Glowing Orbs for Vibrant Design */}
      <div className="absolute inset-0 -z-15 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-floriculture/40 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-mining/40 blur-[120px]"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight md:text-6xl"
        >
          Driving Growth Across{" "}
          <span className="inline-block mt-2 md:mt-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="text-floriculture inline-block drop-shadow-[0_0_20px_rgba(27,77,62,0.8)]"
            >
              Floriculture
            </motion.span>
            <span className="text-foreground">, </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
              className="text-mining inline-block drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]"
            >
              Mining
            </motion.span>
            <span className="text-foreground"> & </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3, type: "spring" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-floriculture to-mining inline-block drop-shadow-[0_0_15px_rgba(27,77,62,0.6)]"
            >
              Global Trade
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-muted-foreground text-lg"
        >
          Semeda Trading PLC operates in floriculture development, mining,
          import, and export. Based in Addis Ababa, Bole.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          {/* Redirect to Sectors Page */}
          <Link href="/sectors" passHref>
            <Button
              size="lg"
              className="bg-gradient-to-r from-floriculture to-mining border-0 hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 text-white font-bold"
              asChild
            >
              <Link href="/sectors">Explore Sectors</Link>
            </Button>
          </Link>

          {/* Redirect to Contact Page */}
          <Link href="/contact" passHref>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-floriculture text-floriculture hover:scale-110 hover:bg-floriculture hover:text-white transition-all duration-300 font-bold"
              asChild
            >
              <span>Contact Us</span>
            </Button>
          </Link>
        </motion.div>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 h-[2px] w-40 mx-auto rounded-full bg-gradient-to-r from-floriculture via-mining to-corporate origin-center"
        />

        {/* Floating Sector Mini-Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 flex justify-center gap-3 flex-wrap"
        >
          {[
            {
              emoji: "🌹",
              name: "Floriculture",
              cls: "border-floriculture/40 text-floriculture",
            },
            {
              emoji: "⛏️",
              name: "Mining",
              cls: "border-mining/40 text-mining",
            },
            {
              emoji: "📦",
              name: "Import & Export",
              cls: "border-corporate/40 text-corporate dark:text-blue-400",
            },
          ].map((s, i) => (
            <motion.span
              key={s.name}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm bg-background/50 text-sm font-semibold shadow-sm ${s.cls}`}
            >
              {s.emoji} {s.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-floriculture/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-floriculture/70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
