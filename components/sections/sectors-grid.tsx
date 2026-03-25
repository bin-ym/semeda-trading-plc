"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

interface SectorsGridProps {
  currentSlug?: string;
  showHeading?: boolean; // ← New prop
}

export default function SectorsGrid({
  currentSlug,
  showHeading = true, // default is true for backward compatibility
}: SectorsGridProps) {
  const filteredSectors = currentSlug
    ? sectors.filter((sector) => sector.slug !== currentSlug)
    : sectors;

  return (
    <section className="py-4">
      <div className="mx-auto max-w-7xl px-6">
        {/* Only show heading when prop is true */}
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">
              Our Business Sectors
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the industries where we deliver excellence
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredSectors.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/sectors/${sector.slug}`}
                className="block group h-full"
              >
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border">
                  <div className="relative h-52">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-7 flex flex-col flex-1">
                    <h3 className="font-semibold text-xl mb-3 tracking-tight">
                      {sector.title}
                    </h3>

                    <p className="text-[15px] text-muted-foreground flex-1 leading-relaxed">
                      {sector.description}
                    </p>

                    <Button
                      asChild
                      variant="default"
                      className="mt-8 w-full group-hover:bg-primary/90"
                    >
                      <Link href={`/sectors/${sector.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
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