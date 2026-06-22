import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { TechStack } from "@/components/TechStack";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Trust />
        <Services />
        <Projects />
        <About />
        <Achievements />
        <TechStack />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
