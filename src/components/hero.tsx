"use client";
import { Container } from "~/components/ui/containers";
import Image from "next/image";
import logo from "~/assets/images/logo.png";
import hero from "~/assets/images/its-hero.png";
import { ExpandableFab } from "./ui/expandable-fab";
import ShinyText from "./ui/shiny-text";

export const Hero = () => {

  return (
    <div className="overflow-x-hidden">
      <section className="relative w-full min-h-screen border-b border-white/10">
        <div className="w-full h-full relative bg-grid-white/[0.0] px-4">
          <Container variant={"fullMobileBreakpointPadded"}>

            <div className="h-screen flex items-center">
              <div className="w-full lg:w-1/2 h-full flex flex-col items-start justify-center relative z-[1] animate-moveUp">
                <div className="relative w-full">
                  <div className="absolute left-0 -top-16 sm:-top-28">
                    <Image src={logo} alt="" width={70} height={70} className="sm:w-[90px] sm:h-[90px]" />
                  </div>
                </div>
                <h1
                  className="font-inter-tight text-start font-extrabold text-[3.5rem] sm:text-[7rem] md:text-[8rem] leading-[0.9] tracking-tight uppercase pb-1 flex flex-col items-start mt-12 sm:mt-0"
                >
                  <ShinyText text="Bridging" speed={3} color="#b5b5b5" shineColor="#ffffff" spread={120} />
                  <ShinyText text="Faith And" speed={3} color="#b5b5b5" shineColor="#ffffff" spread={120} />
                  <ShinyText text="Innovation" speed={3} color="#b5b5b5" shineColor="#ffffff" spread={120} />
                </h1>
                <div className="font-questrial text-white/80 text-start text-xl mt-1 font-light tracking-wide">
                  Empowering Holy Crossians through Technology
                </div>
                <div className="font-inter mt-8">
                  <ExpandableFab className="rounded-full" />
                </div>
              </div>
            </div>
          </Container>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-its-red opacity-20" />
          <div className="absolute top-0 -right-[120vw] sm:-right-[70vw] md:-right-[50vw] lg:right-0  h-full -z-0 animate-appear opacity-0">
            <Image src={hero} alt="" className="h-full w-auto opacity-15" />
          </div>
        </div>
      </section>
    </div>
  );
};
