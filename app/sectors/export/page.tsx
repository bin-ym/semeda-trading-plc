import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function ExportPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Export</h1>

          <p className="mt-6 text-muted-foreground text-lg">
            We export high-quality Ethiopian products to international markets,
            ensuring reliability and global standards.
          </p>

          <div className="relative mt-10 h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/export.jpg"
              alt="Export"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg text-primary">
                Export Focus
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Agricultural products</li>
                <li>• Minerals and raw materials</li>
                <li>• Processed goods</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary">
                Global Reach
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                We ensure compliance with international standards while
                delivering products efficiently across global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}