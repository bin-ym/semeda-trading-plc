"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  const cards = [
    {
      title: "Mission",
      content:
        "To deliver high-quality products and services while building strong global partnerships.",
    },
    {
      title: "Vision",
      content:
        "To become a leading and trusted trading company in Africa and international markets.",
    },
    {
      title: "Values",
      content:
        "Integrity, quality, reliability, and commitment to sustainable business practices.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 text-center md:text-left">
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>

          <motion.p
            className="mt-6 text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Semeda Trading PLC is engaged in floriculture development, mining,
            import, and export. Based in Addis Ababa, Bole, the company is
            committed to delivering quality, reliability, and sustainable growth
            across all sectors.
          </motion.p>

          {/* Mission / Vision / Values Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="p-6 rounded-xl border border-border bg-background shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden">
                  {/* Gradient Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

                  <h3 className="font-semibold text-lg text-primary mb-2 relative z-10">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground relative z-10">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}