"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Floriculture Development",
    slug: "floriculture",
    image: "/images/floriculture.png",
    description: "Sustainable flower cultivation and export.",
    colorClass:
      "border-floriculture/40 hover:border-floriculture hover:shadow-[0_0_20px_rgba(27,77,62,0.3)] border-2",
    textClass: "text-floriculture drop-shadow-sm",
    buttonClass: "bg-floriculture text-white hover:bg-floriculture/90",
  },
  {
    title: "Import",
    slug: "import",
    image: "/images/import.jpg",
    description: "Global sourcing and logistics solutions.",
    colorClass:
      "border-corporate/30 hover:border-corporate hover:shadow-[0_0_20px_rgba(10,25,49,0.3)] border-2",
    textClass: "text-corporate dark:text-blue-400 drop-shadow-sm",
    buttonClass: "bg-corporate text-white hover:bg-corporate/90",
  },
  {
    title: "Export",
    slug: "export",
    image: "/images/export.jpg",
    description: "Delivering Ethiopian products worldwide.",
    colorClass:
      "border-corporate/30 hover:border-corporate hover:shadow-[0_0_20px_rgba(10,25,49,0.3)] border-2",
    textClass: "text-corporate dark:text-blue-400 drop-shadow-sm",
    buttonClass: "bg-corporate text-white hover:bg-corporate/90",
  },
  {
    title: "Mining",
    slug: "mining",
    image: "/images/mining.jpg",
    description: "Responsible mineral extraction and development.",
    colorClass:
      "border-mining/50 hover:border-mining hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] border-2",
    textClass: "text-mining drop-shadow-sm",
    buttonClass: "bg-mining text-white hover:bg-mining/90",
  },
];

interface SectorsGridProps {
  currentSlug?: string;
  showHeading?: boolean;
}

export default function SectorsGrid({
  currentSlug,
  showHeading = true,
}: SectorsGridProps) {
  const filteredSectors = currentSlug
    ? sectors.filter((sector) => sector.slug !== currentSlug)
    : sectors;

  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-6">
        {showHeading && (
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-floriculture via-mining to-corporate"
            >
              Our Business Sectors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Discover the industries where we deliver excellence
            </motion.p>
            {/* Animated pill badges */}
            <div className="flex justify-center gap-3 pt-4 flex-wrap mb-6">
              {[
                {
                  label: "🌱 Floriculture",
                  color:
                    "bg-floriculture/15 text-floriculture border-floriculture/40",
                },
                {
                  label: "⛏️ Mining",
                  color: "bg-mining/15 text-mining border-mining/40",
                },
                {
                  label: "📥 Import",
                  color:
                    "bg-corporate/15 text-corporate border-corporate/40 dark:text-blue-400",
                },
                {
                  label: "🌍 Export",
                  color:
                    "bg-corporate/15 text-corporate border-corporate/40 dark:text-blue-400",
                },
              ].map((badge, i) => (
                <motion.span
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.08, type: "spring" }}
                  className={`inline-flex items-center gap-1.5 border text-sm font-semibold px-4 py-1.5 rounded-full ${badge.color}`}
                >
                  {badge.label}
                </motion.span>
              ))}
            </div>
            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-floriculture via-mining to-corporate origin-left"
            />
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredSectors.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: false, margin: "-60px" }}
            >
              <Link href={`/sectors/${sector.slug}`} className="block group">
                <div
                  className={`relative h-[340px] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${sector.colorClass}`}
                >
                  {/* Full-bleed image */}
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    priority={i < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />

                  {/* Content floating at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-extrabold tracking-tight mb-1 drop-shadow-md">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-100 translate-y-0 transition-all duration-300 group-hover:translate-y-0">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
