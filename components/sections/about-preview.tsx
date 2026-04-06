"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl text-foreground">
            About Semeda Trading PLC
          </h2>

          <p className="mt-4 text-muted-foreground">
            Semeda Trading PLC is engaged in floriculture development, mining,
            import, and export. Based in Addis Ababa, Bole, the company is
            committed to delivering quality, reliability, and sustainable
            business practices across all sectors.
          </p>

          <Button
            asChild
            className="mt-6 bg-gradient-to-r from-floriculture to-mining hover:opacity-90 transition-opacity duration-300 text-white border-0"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>

        <motion.div
          className="h-72 w-full rounded-2xl relative overflow-hidden ring-2 ring-floriculture/20 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Image */}
          <Image
            src="/images/logo.png"
            alt="About Semeda Trading"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dark gradient overlay (for readability + style) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

          {/* Glow hover effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-mining/40 via-floriculture/30 to-corporate/30 opacity-0 rounded-2xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
