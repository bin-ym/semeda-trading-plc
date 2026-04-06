"use client";

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
    value: "+251 911 234 567",
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
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Glowing background orbs */}
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
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-floriculture/15 to-mining/15 border border-floriculture/30 text-floriculture text-sm font-bold tracking-widest uppercase rounded-full mb-6 shadow-sm"
            >
              📬 Get In Touch
            </motion.div> */}

            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-floriculture via-mining to-corporate mb-4 pb-1">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;d love to hear from you. Reach out using the form below or
              connect directly.
            </p>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-floriculture via-mining to-corporate origin-left"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative overflow-hidden bg-card p-8 rounded-3xl shadow-lg border"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-floriculture via-mining to-corporate" />

              <h2 className="text-2xl font-extrabold tracking-tight mb-2">
                Send us a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                We&apos;ll respond within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold tracking-wide uppercase text-foreground/70">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      className="focus:border-floriculture focus:ring-floriculture/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold tracking-wide uppercase text-foreground/70">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      className="focus:border-floriculture focus:ring-floriculture/30"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold tracking-wide uppercase text-foreground/70">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="focus:border-mining focus:ring-mining/30"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold tracking-wide uppercase text-foreground/70">
                    Message
                  </label>
                  <Textarea
                    placeholder="How can we help you?"
                    className="min-h-[150px] focus:border-floriculture focus:ring-floriculture/30"
                  />
                </div>
                <Button className="w-full text-base h-12 bg-gradient-to-r from-floriculture to-mining text-white border-0 font-bold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-md">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-floriculture/20 ring-4 ring-floriculture/10 h-[280px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11526844975!2d38.69466380126757!3d8.963495815152864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1703110292723!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`flex items-center gap-5 p-5 rounded-2xl border ${item.bg} transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                  >
                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/60 dark:bg-black/30 shadow-sm`}
                    >
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                        {item.label}
                      </p>
                      <p className={`font-semibold text-base ${item.color}`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
