"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function AboutPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { innerWidth, innerHeight } = window;
    mouseX.set((e.clientX / innerWidth - 0.5) * 2);
    mouseY.set((e.clientY / innerHeight - 0.5) * 2);
  }

  // ✅ MOVE HOOKS HERE (outside map)
  const rotateX = useTransform(mouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [-1, 1], [-10, 10]);

  const cards = [
    {
      title: "Our Mission",
      content:
        "To deliver high-quality products and services while building strong, long-term global partnerships.",
    },
    {
      title: "Our Vision",
      content:
        "To become a leading and trusted trading company across Africa and international markets.",
    },
    {
      title: "Our Values",
      content:
        "Integrity, quality, reliability, innovation, and sustainability in everything we do.",
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <Navbar />

      {/* 🌈 Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-accent/10 to-yellow-400/10 blur-3xl" />

      <main className="flex-grow pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* HERO */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About Semeda Trading
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              We operate across floriculture, mining, import, and export —
              blending Ethiopian strength with global opportunity.
            </motion.p>
          </div>

          {/* 🧠 CARDS */}
          <div className="grid md:grid-cols-3 gap-10">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                style={{ rotateX, rotateY }} // ✅ reuse same transforms
                className="perspective-1000"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.div
                  className="group relative h-full p-8 rounded-3xl border bg-card/80 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/20 via-primary/20 to-yellow-400/20" />

                  {/* Number */}
                  <div className="absolute -top-4 -right-4 h-10 w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 relative z-10">
                    {card.title}
                  </h3>

                  <p className="text-muted-foreground relative z-10">
                    {card.content}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}