"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(() => import("../three/hero-canvas"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32">
      {/* Three.js Background */}
      <div className="absolute inset-0 -z-20">
        <HeroCanvas />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight md:text-6xl"
        >
          Driving Growth Across{" "}
          <span className="text-accent">
            Floriculture, Mining & Global Trade
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
            <Button size="lg" asChild>
              <span>Explore Sectors</span>
            </Button>
          </Link>

          {/* Redirect to Contact Page */}
          <Link href="/contact" passHref>
            <Button variant="outline" size="lg" asChild>
              <span>Contact Us</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}