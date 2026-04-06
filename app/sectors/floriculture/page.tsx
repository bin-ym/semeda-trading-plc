import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import SectorsGrid from "@/components/sections/sectors-grid";
import SectorContent from "@/components/sections/sector-content";

export default function FloriculturePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-28 pb-10">
        <section className="mx-auto max-w-6xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-floriculture to-mining drop-shadow-sm pb-4">
            Floriculture Development
          </h1>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-floriculture/20 to-mining/20 text-floriculture rounded-full text-sm font-extrabold tracking-wide shadow-sm border border-floriculture/30">
            🌱 Sustainable Growth
          </div>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl font-medium">
            We specialize in sustainable flower cultivation, focusing on
            high-quality production for both local and international markets.
          </p>

{/* Image Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-foreground mb-8">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "/images/gallery/floriculture-1.png",
                "/images/gallery/floriculture-2.png",
                "/images/gallery/floriculture-3.png",
              ].map((src, i) => (
                <div
                  key={src}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg group border-2 border-floriculture/20"
                >
                  <Image
                    src={src}
                    alt={`Floriculture gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

          <SectorContent
            accentColor="floriculture"
            leftTitle="What We Do"
            leftContent={
              <ul className="space-y-4">
                {[
                  "Greenhouse flower production",
                  "Export-quality flower processing",
                  "Sustainable farming techniques",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-floriculture/20 border border-floriculture/40 flex items-center justify-center shrink-0">
                      <span className="h-2 w-2 rounded-full bg-floriculture" />
                    </span>
                    <span className="text-base text-foreground/75 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            }
            rightTitle="Our Approach"
            rightContent={
              <p className="text-base text-foreground/75 leading-8 font-medium">
                We combine modern agricultural practices with sustainability to
                ensure consistent quality and environmental responsibility.
              </p>
            }
          />
        </section>

        <section className="mt-16 mx-auto max-w-6xl px-6">
          <SectorsGrid currentSlug="floriculture" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
