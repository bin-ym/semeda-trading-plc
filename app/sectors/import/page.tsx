import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";

export default function ImportPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">Import</h1>

          <p className="mt-6 text-muted-foreground text-lg">
            We provide efficient import solutions, connecting businesses with
            global suppliers and ensuring smooth logistics.
          </p>

          <div className="relative mt-10 h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/import.jpg"
              alt="Import"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg text-primary">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Product sourcing</li>
                <li>• International procurement</li>
                <li>• Logistics coordination</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-primary">Strength</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Our global network enables us to deliver reliable and timely
                import services tailored to client needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}