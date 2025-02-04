"use client";
import { Container } from "~/components/ui/containers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "~/assets/images/logo.png";
import hero from "~/assets/images/its-hero.png";
import { Navbar } from "./navbar";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      <section className="relative w-full min-h-screen border-b border-white/10">
        <div className="w-full h-full relative bg-grid-white/[0.0] px-4">
          <Container variant={"fullMobileBreakpointPadded"}>

            <div className=" h-screen flex items-center">
              <div className="w-full lg:w-1/2 h-full flex flex-col sm:items-start items-start justify-center relative z-[1] animate-moveUp">
                <div className="relative w-full">
                  <div className="absolute left-0 -top-28">
                    <Image src={logo} alt="" width={90} height={90} />
                  </div>
                </div>
                <div className="font-questrial text-transparent text-start font-bold sm:text-7xl text-4xl bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6]">
                  Bridging Faith and Innovation
                </div>
                <div className="font-inter text-white/[0.7] text-start sm:text-xl text-sm">
                  Empowering Holy Crossians through Technology
                </div>
                <div className="font-inter mt-5 w-full flex max-sm:flex-col sm:justify-start gap-4 text-white">
                  <button
                    className="group h-10 sm:h-8 w-full sm:w-36 bg-gradient-to-br from-red-900 to-gray-900 border border-red-900 rounded-lg flex items-center justify-center gap-1.5"
                    onClick={() => router.push("/story")}
                  >
                    <span>Our Story</span>
                    <span className="group-hover:translate-x-0.5 transition-all">
                      &rarr;
                    </span>
                  </button>
                  <button className="h-8 flex items-center justify-center underline">
                    <span>Contact us</span>
                  </button>
                </div>
              </div>
            </div>
          </Container>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-red-800 opacity-20" />
          <div className="absolute top-0 -right-[120vw] sm:-right-[70vw] md:-right-[50vw] lg:right-0  h-full -z-0 animate-appear opacity-0">
            <Image src={hero} alt="" className="h-full w-auto opacity-15" />
          </div>
        </div>
      </section>
    </div>
  );
};
