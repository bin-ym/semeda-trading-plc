import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import SectorsGrid from "@/components/sections/sectors-grid";
import SectorContent from "@/components/sections/sector-content";

export default function MiningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 pb-10">
        <section className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium mb-6">
            ⛏️ Earth & Value
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-amber-950 dark:text-amber-50">
            Mining
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            We engage in responsible mineral exploration and extraction,
            focusing on long-term value and sustainable practices.
          </p>

          <div className="relative mt-12 h-[420px] rounded-3xl overflow-hidden shadow-xl border border-amber-200 dark:border-amber-900">
            <Image
              src="/images/mining.jpg"
              alt="Mining"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <SectorContent
            leftTitle="Our Activities"
            leftContent={
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Mineral exploration</li>
                <li>Resource extraction</li>
                <li>Site development</li>
              </ul>
            }
            rightTitle="Commitment"
            rightContent={
              <p className="text-sm text-muted-foreground leading-relaxed">
                We prioritize safety, environmental protection, and efficient
                resource utilization in all mining operations.
              </p>
            }
          />
        </section>

        <section className="mt-16 mx-auto max-w-6xl px-6">
          <SectorsGrid currentSlug="mining" />
        </section>
      </main>

      <Footer />
    </div>
  );
}