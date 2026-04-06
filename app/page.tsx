// app/page.tsx
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import SectorsGrid from "@/components/sections/sectors-grid";
import AboutPreview from "@/components/sections/about-preview";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      <Navbar />
      <main className="flex-grow">
        {" "}
        <Hero />
        <SectorsGrid showHeading={true} />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
}
