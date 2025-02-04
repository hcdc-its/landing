import { About } from "~/components/about";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { Connect } from "~/components/connect";
import { Footer } from "~/components/footer";
import { Highlights } from "~/components/highlights";
import { FAQ } from "~/components/faq";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Highlights />
        <FAQ />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
