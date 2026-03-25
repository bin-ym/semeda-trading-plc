import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function FloriculturePage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Hero */}
          <h1 className="text-4xl font-bold">Floriculture Development</h1>

          <p className="mt-6 text-muted-foreground text-lg">
            We specialize in sustainable flower cultivation, focusing on
            high-quality production for both local and international markets.
          </p>

          {/* Image */}
          <div className="relative mt-10 h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/floriculture.jpg"
              alt="Floriculture"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg text-primary">What We Do</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Greenhouse flower production</li>
                <li>• Export-quality flower processing</li>
                <li>• Sustainable farming techniques</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary">
                Our Approach
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                We combine modern agricultural practices with sustainability to
                ensure consistent quality and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
