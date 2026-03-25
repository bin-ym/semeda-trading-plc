"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            About Semeda Trading PLC
          </h2>

          <p className="mt-4 text-muted-foreground">
            Semeda Trading PLC is engaged in floriculture development, mining,
            import, and export. Based in Addis Ababa, Bole, the company is
            committed to delivering quality, reliability, and sustainable
            business practices across all sectors.
          </p>

          <Button asChild className="mt-6">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>

        {/* Visual Placeholder */}
        <motion.div
          className="h-72 w-full rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-yellow-500/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-primary/30 to-yellow-400/30 opacity-0 rounded-2xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}