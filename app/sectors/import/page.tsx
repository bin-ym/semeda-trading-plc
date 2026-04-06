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
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-corporate to-mining drop-shadow-sm pb-4">
            Import
          </h1>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-corporate/20 to-mining/20 text-corporate rounded-full text-sm font-extrabold tracking-wide shadow-sm border border-corporate/30 dark:text-blue-400">
            📥 Global Sourcing
          </div>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl font-medium">
            We import high-quality products from international markets, ensuring
            reliability and global standards.
          </p>

          {/* Image Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-foreground mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "/images/gallery/import-1.png",
                "/images/gallery/import-2.png",
              ].map((src, i) => (
                <div
                  key={src}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg group border-2 border-corporate/20"
                >
                  <Image
                    src={src}
                    alt={`Import gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          <SectorContent
            accentColor="corporate"
            leftTitle="Import Focus"
            leftContent={
              <ul className="space-y-4">
                {[
                  "Agricultural products",
                  "Minerals and raw materials",
                  "Processed goods",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-corporate/20 border border-corporate/40 flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-corporate dark:bg-blue-400" />
                    </span>
                    <span className="text-base text-foreground/75 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            }
            rightTitle="Global Reach"
            rightContent={
              <p className="text-base text-foreground/75 leading-8 font-medium">
                We ensure compliance with international standards while
                delivering products efficiently across global markets.
              </p>
            }
          />
        </section>

        <section className="mt-16 mx-auto max-w-6xl px-6">
          <SectorsGrid currentSlug="import" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
