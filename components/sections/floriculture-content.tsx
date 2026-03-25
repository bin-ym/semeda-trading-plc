"use client";

import { motion } from "framer-motion";

export default function FloricultureContent() {
  return (
    <div className="mt-12 grid md:grid-cols-2 gap-8">
      {/* What We Do */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="font-semibold text-lg text-primary mb-4">What We Do</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Greenhouse flower production</li>
          <li>Export-quality flower processing</li>
          <li>Sustainable farming techniques</li>
        </ul>
      </motion.div>

      {/* Our Approach */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-xl border border-border bg-background shadow-sm hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="font-semibold text-lg text-primary mb-4">
          Our Approach
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We combine modern agricultural practices with sustainability to ensure
          consistent quality and environmental responsibility.
        </p>
      </motion.div>
    </div>
  );
}
