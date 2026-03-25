"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const sectors = [
  {
    title: "Floriculture Development",
    slug: "floriculture",
    image: "/images/floriculture.jpg",
    description: "Sustainable flower cultivation and export.",
  },
  {
    title: "Mining",
    slug: "mining",
    image: "/images/mining.jpg",
    description: "Responsible mineral extraction and development.",
  },
  {
    title: "Import",
    slug: "import",
    image: "/images/import.jpg",
    description: "Global sourcing and logistics solutions.",
  },
  {
    title: "Export",
    slug: "export",
    image: "/images/export.jpg",
    description: "Delivering Ethiopian products worldwide.",
  },
];

export default function SectorsGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Our Business Sectors</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <Link href={`/sectors/${sector.slug}`}>
                <Card className="group overflow-hidden cursor-pointer transition hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-40">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-4 text-left">
                    <h3 className="font-semibold">{sector.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {sector.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}