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
          {/* Theme Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-6">
            🌱 Sustainable Growth
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Floriculture Development
          </h1>

          <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
            We specialize in sustainable flower cultivation, focusing on
            high-quality production for both local and international markets.
          </p>

          <div className="relative mt-12 h-[420px] rounded-3xl overflow-hidden shadow-xl border border-emerald-200 dark:border-emerald-900">
            <Image
              src="/images/floriculture.jpg"
              alt="Floriculture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="eager"
              priority
              className="object-cover"
            />
          </div>

          <SectorContent
            leftTitle="What We Do"
            leftContent={
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Greenhouse flower production</li>
                <li>Export-quality flower processing</li>
                <li>Sustainable farming techniques</li>
              </ul>
            }
            rightTitle="Our Approach"
            rightContent={
              <p className="text-sm text-muted-foreground leading-relaxed">
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