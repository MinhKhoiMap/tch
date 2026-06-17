import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LabDirectory } from "@/components/LabDirectory";
import { NewsSection } from "@/components/NewsSection";
import { OrbitMap } from "@/components/OrbitMap";
import { SystemPathway } from "@/components/SystemPathway";
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OrbitMap />
        <LabDirectory />
        <NewsSection />
        <SystemPathway />
      </main>
      <Footer />
    </>
  );
}
