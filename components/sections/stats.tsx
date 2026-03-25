"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Global Partners" },
  { value: "5+", label: "Countries Reached" },
  { value: "15+", label: "Projects Completed" },
];

export default function Stats() {
  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl border bg-background shadow-sm"
        >
          <p className="text-3xl font-bold text-primary">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
