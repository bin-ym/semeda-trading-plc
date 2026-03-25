import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function MiningPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Mining</h1>

          <p className="mt-6 text-muted-foreground text-lg">
            We engage in responsible mineral exploration and extraction,
            focusing on long-term value and sustainable practices.
          </p>

          <div className="relative mt-10 h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/mining.jpg"
              alt="Mining"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg text-primary">
                Our Activities
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Mineral exploration</li>
                <li>• Resource extraction</li>
                <li>• Site development</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary">Commitment</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                We prioritize safety, environmental protection, and efficient
                resource utilization in all mining operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}