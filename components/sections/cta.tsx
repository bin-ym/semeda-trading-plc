"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 rounded-2xl bg-primary text-primary-foreground p-10 text-center"
    >
      <h2 className="text-2xl font-semibold">Ready to work with us?</h2>

      <p className="mt-3 text-sm opacity-90">
        Let’s build strong partnerships and deliver value together.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link href="/contact">
          <Button variant="secondary">Contact Us</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Request Quote</Button>
        </Link>
      </div>
    </motion.div>
  );
}