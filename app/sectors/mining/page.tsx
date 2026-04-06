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
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-mining to-floriculture drop-shadow-sm pb-4">
            Mining
          </h1>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-mining/20 to-floriculture/20 text-mining rounded-full text-sm font-extrabold tracking-wide shadow-sm border border-mining/30">
            ⛏️ Earth & Value
          </div>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl font-medium">
            We engage in responsible mineral exploration and extraction,
            focusing on long-term value and sustainable practices.
          </p>
{/* Image Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-foreground mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "/images/gallery/mining-1.png",
                "/images/gallery/mining-2.png",
              ].map((src, i) => (
                <div
                  key={src}
                  className="relative h-72 rounded-2xl overflow-hidden shadow-lg group border-2 border-mining/20"
                >
                  <Image
                    src={src}
                    alt={`Mining gallery ${i + 1}`}
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
            accentColor="mining"
            leftTitle="Our Activities"
            leftContent={
              <ul className="space-y-4">
                {[
                  "Mineral exploration",
                  "Resource extraction",
                  "Site development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-mining/20 border border-mining/40 flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-mining" />
                    </span>
                    <span className="text-base text-foreground/75 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            }
            rightTitle="Commitment"
            rightContent={
              <p className="text-base text-foreground/75 leading-8 font-medium">
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
