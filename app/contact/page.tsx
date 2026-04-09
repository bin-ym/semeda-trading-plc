"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: "Bole, Addis Ababa, Ethiopia",
    color: "text-floriculture",
    bg: "bg-floriculture/15 border-floriculture/30",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 911 678 896",
    value2: "+251 912 094 883",
    color: "text-mining",
    bg: "bg-mining/15 border-mining/30",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@semedatrading.com",
    color: "text-floriculture",
    bg: "bg-floriculture/15 border-floriculture/30",
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: connect to backend / API
    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);
    alert("Message sent successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-floriculture/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] -left-[10%] w-[35%] h-[35%] rounded-full bg-mining/20 blur-[120px]"
        />
      </div>

      <main className="flex-grow pt-22 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-floriculture via-mining to-corporate mb-4 pb-1">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We’d love to hear from you. Reach out using the form below or connect directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card p-8 rounded-3xl shadow-lg border"
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>

                <Input type="email" placeholder="Email Address" required />

                <Textarea
                  placeholder="Your message..."
                  className="min-h-[150px]"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-gradient-to-r from-floriculture to-mining text-white font-bold"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden h-[280px] border">
                <iframe
                  src="https://www.google.com/maps?q=Addis+Ababa&output=embed"
                  className="w-full h-full"
                />
              </div>

              {/* Contact Cards */}
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-2xl border flex gap-4 items-center ${item.bg}`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />

                  <div>
                    <p className="text-xs uppercase text-muted-foreground">
                      {item.label}
                    </p>

                    {/* Clickable logic */}
                    {item.label === "Phone" ? (
                      <div className="flex flex-col">
                        <a href="tel:+251911678896" className="font-semibold">
                          {item.value}
                        </a>
                        <a href="tel:+251912094883" className="font-semibold">
                          {item.value2}
                        </a>
                      </div>
                    ) : item.label === "Email" ? (
                      <a
                        href={`mailto:${item.value}`}
                        className="font-semibold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}