import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import SectorsGrid from "@/components/sections/sectors-grid";
import SectorContent from "@/components/sections/sector-content";

export default function ExportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        <section className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-6">
            🌍 Global Trade
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-indigo-950 dark:text-indigo-50">
            Export
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            We export high-quality Ethiopian products to international markets,
            ensuring reliability and global standards.
          </p>

          <div className="relative mt-12 h-[420px] rounded-3xl overflow-hidden shadow-xl border border-indigo-200 dark:border-indigo-900">
            <Image
              src="/images/export.jpg"
              alt="Export"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <SectorContent
            leftTitle="Export Focus"
            leftContent={
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Agricultural products</li>
                <li>Minerals and raw materials</li>
                <li>Processed goods</li>
              </ul>
            }
            rightTitle="Global Reach"
            rightContent={
              <p className="text-sm text-muted-foreground leading-relaxed">
                We ensure compliance with international standards while
                delivering products efficiently across global markets.
              </p>
            }
          />
        </section>

        <section className="mt-16 mx-auto max-w-6xl px-6">
          <SectorsGrid currentSlug="export" />
        </section>
      </main>

      <Footer />
    </div>
  );
}