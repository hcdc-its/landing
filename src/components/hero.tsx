"use client";
import { Container } from "~/components/ui/containers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "~/assets/images/logo.png";
import hero from "~/assets/images/its-hero.png";
import { Navbar } from "./navbar";
import { ExpandableFab } from "./ui/expandable-fab";
import ShinyText from "./ui/shiny-text";

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
                <h1
                  className="font-inter-tight text-start font-extrabold sm:text-[7rem] md:text-[8rem] text-5xl leading-[0.9] tracking-tight uppercase pb-1 flex flex-col items-start"
                >
                  <ShinyText text="Bridging" speed={3} color="#b5b5b5" shineColor="#ffffff" spread={120} />
                  <ShinyText text="Faith And" speed={3} color="#b5b5b5" shineColor="#ffffff" spread={120} />
                  <ShinyText text="Innovation" speed={3} color="#b5b5b5" shineColor="#ffffff" spread={120} />
                </h1>
                <div className="font-questrial text-white/80 text-start text-xl mt-1 font-light tracking-wide">
                  Empowering Holy Crossians through Technology
                </div>
                <div className="font-inter mt-8 w-full flex items-center max-sm:flex-col sm:justify-start text-white isolate">
                  <div className="w-full sm:w-auto z-20 relative">
                    <ExpandableFab />
                  </div>
                  <button className="relative z-10 flex items-center justify-center font-questrial font-bold uppercase tracking-widest text-sm border border-white/30 border-l-0 rounded-r-full rounded-l-none py-4 pl-8 pr-8 -ml-5 hover:bg-white/5 hover:border-white/60 transition-all group">
                    <span className="group-hover:text-red-400 transition-colors">Contact us</span>
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
