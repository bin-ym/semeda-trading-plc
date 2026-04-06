"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SectorsGrid from "@/components/sections/sectors-grid";
import { motion } from "framer-motion";

export default function SectorsPage() {
  const stats = [
    { label: "Years of Operation", value: "10+", color: "text-floriculture" },
    { label: "Export Markets", value: "20+", color: "text-mining" },
    {
      label: "Business Sectors",
      value: "4",
      color: "text-corporate dark:text-blue-400",
    },
    { label: "Dedicated Team", value: "100+", color: "text-floriculture" },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[15%] -left-[10%] w-[45%] h-[45%] rounded-full bg-floriculture/20 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] rounded-full bg-mining/20 blur-[130px]"
        />
      </div>

      <main className="flex-grow pt-2">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 text-center py-24">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-floriculture via-mining to-corporate pb-2"
          >
            Our Business Sectors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 mb-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            From sustainable floriculture to responsible mining and global
            trade, we deliver excellence across diverse industries with quality,
            integrity, and innovation at the core.
          </motion.p>

          {/* Sectors Grid */}
          <SectorsGrid showHeading={false} />
        </section>

        {/* Stats Row */}
        <section className="mx-auto max-w-5xl px-6 mb-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <p className={`text-4xl font-extrabold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10 h-1 w-40 mx-auto rounded-full bg-gradient-to-r from-floriculture via-mining to-corporate origin-left"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
