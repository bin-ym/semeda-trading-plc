"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <div className="mx-auto max-w-xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            Contact Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 space-y-4"
          >
            <Input placeholder="Your Name" />
            <Input placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Send Message</Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}