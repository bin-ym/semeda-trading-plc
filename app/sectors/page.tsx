// app/sectors/page.tsx

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SectorsGrid from "@/components/sections/sectors-grid";

export default function SectorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-12">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 text-center py-20">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-balance">
            Our Business Sectors
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From sustainable floriculture to responsible mining and global
            trade, we deliver excellence across diverse industries with quality,
            integrity, and innovation at the core.
          </p>
        </section>

        {/* Sectors Grid - No duplicate heading */}
        <SectorsGrid showHeading={false} />
      </main>

      <Footer />
    </div>
  );
}
