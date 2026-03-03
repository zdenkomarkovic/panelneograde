import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products3D from "@/components/Products3D";
import Products2D from "@/components/Products2D";
import Gates from "@/components/Gates";
import PvcStrip from "@/components/PvcStrip";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Alek Panelne Ograde",
  description:
    "Prodaja i ugradnja panelnih ograda. 3D i 2D ograde, klizne i pešačke kapije, PVC trake. Prevoz i profesionalna montaža obezbeđeni. Srbija.",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products3D />
      <Products2D />
      <Contact />
      <Gates />
      <PvcStrip />
      <Stats />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
}
