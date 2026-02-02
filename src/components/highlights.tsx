"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Container } from "~/components/ui/containers";
import Image, { StaticImageData } from "next/image";

import techtalk1 from "~/assets/highlights/techtalk-1.jpg";
import techtalk2 from "~/assets/highlights/techtalk-2.jpg";
import techtalk3 from "~/assets/highlights/techtalk-3.jpg";
import techtalk4 from "~/assets/highlights/techtalk-4.jpg";

const categories = [
  {
    id: "events",
    title: "EVENTS",
    subtitle: "MILESTONES & GATHERINGS",
    items: [
      { id: 1, image: techtalk1, title: "Tech Talk 2024", desc: "Annual technology conference" },
      { id: 2, image: techtalk2, title: "Hackathon", desc: "24-hour coding challenge" },
      { id: 3, image: techtalk3, title: "Workshop", desc: "Hands-on learning session" },
      { id: 4, image: techtalk4, title: "Seminars", desc: "Industry Experts" },
    ],
  },
  {
    id: "achievements",
    title: "ACHIEVEMENTS",
    subtitle: "REPRESENTING HCDC",
    items: [
      { id: 5, image: techtalk1, title: "City Meetup", desc: "Networking with professionals" },
      { id: 6, image: techtalk4, title: "Regional Contest", desc: "Competing against top schools" },
      { id: 7, image: techtalk2, title: "Campus Tour", desc: "External visits" },
      { id: 8, image: techtalk3, title: "Outreach", desc: "Community Service" },
    ],
  },
  {
    id: "merchs",
    title: "MERCHS",
    subtitle: "OFFICIAL MERCHANDISE",
    items: [
      { id: 9, image: "/shirts/BLACK FRONT.png", title: "Midnight Black", desc: "Front Design" },
      { id: 10, image: "/shirts/BLACK BACK.png", title: "Midnight Black", desc: "Back Design" },
      { id: 11, image: "/shirts/RED FRONT.png", title: "Crimson Red", desc: "Front Design" },
      { id: 12, image: "/shirts/RED BACK.png", title: "Crimson Red", desc: "Back Design" },
      { id: 13, image: "/shirts/WHITE FRONT.png", title: "Pure White", desc: "Front Design" },
      { id: 14, image: "/shirts/WHITE BACK.png", title: "Pure White", desc: "Back Design" },
      { id: 15, image: "/pins/pinits.png", title: "ITS Logo Pin", desc: "Official Accessory" },
    ],
  },
];

const Section = ({ category, index }: { category: typeof categories[0], index: number }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(category.items.length - 1) * (category.id === 'merchs' ? 18 : 25)}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-transparent">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none select-none">
          <h2 className="text-[12vw] font-inter-tight font-black text-white leading-none tracking-tighter uppercase">
            {category.title}
          </h2>
        </div>

        {/* Glowing Spine Line (Vertical) */}
        <div className="absolute left-8 md:left-20 top-0 bottom-0 w-px bg-white/10 z-10">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-its-red via-its-red to-transparent origin-top"
          />
        </div>

        {/* Content Container */}
        <motion.div style={{ opacity, scale }} className="relative z-20 w-full">
          <div className="mb-12 pl-8 md:pl-[12vw] pr-8">
            <span className="block text-its-red font-inter font-bold tracking-widest text-sm mb-2">
              0{index + 1} — {category.subtitle}
            </span>
            <h3 className="text-5xl md:text-7xl font-inter-tight font-bold text-white uppercase">
              {category.title}
            </h3>
          </div>

          {/* Horizontal Parallax Strip */}
          <div className="overflow-hidden">
            <motion.div style={{ x }} className={`flex gap-12 w-max ${category.id === 'merchs' ? 'pl-8 md:pl-[30vw]' : 'pl-8 md:pl-[12vw]'} pr-[12vw]`}>
              {category.items.map((item) => (
                <div key={item.id} className={`relative w-[85vw] sm:w-[600px] md:w-[20vw] h-[50vh] md:h-[500px] shrink-0 group overflow-hidden rounded-md transition-all duration-500 ${category.id === 'merchs' ? 'bg-transparent' : 'border border-white/10 bg-neutral-900'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`transition-transform duration-700 group-hover:scale-110 ${category.id === 'merchs' ? 'object-contain pl-16 sm:pl-32 pr-4 sm:pr-8 py-8' : 'object-cover grayscale group-hover:grayscale-0'}`}
                  />
                  {category.id !== 'merchs' && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                  )}

                  {category.id === 'merchs' ? (
                    <div className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 flex rotate-90 origin-center z-30 pointer-events-none whitespace-nowrap">
                      <div className="flex items-center bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full shadow-xl shadow-black/20 overflow-hidden scale-75 sm:scale-100">
                        <div className="px-4 sm:px-6 py-2 sm:py-2.5 border-r border-white/20">
                          <span className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em]">{item.title}</span>
                        </div>
                        <div className="px-4 sm:px-6 py-2 sm:py-2.5 bg-white/5">
                          <span className="text-white/40 font-bold text-[8px] sm:text-[9px] uppercase tracking-[0.3em]">{item.desc}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`absolute bottom-8 left-8 right-8 flex flex-col items-start transition-transform duration-500 group-hover:translate-y-0 translate-y-2 z-30`}>
                      <h4 className="text-3xl font-bold text-white mb-2">{item.title}</h4>
                      <div className="h-1 w-12 bg-its-red mb-4" />
                      <p className="text-neutral-400 font-inter">{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Highlights = () => {
  return (
    <div id="highlights" className="bg-transparent">
      <div className="py-20 px-4 text-center">
        <h3 className="font-questrial font-medium text-4xl text-neutral-500 mb-4">
          Program Portfolio
        </h3>
        <p className="text-white text-xl font-inter">Exploring our journey through time</p>
      </div>

      {categories.map((category, index) => (
        <Section key={category.id} category={category} index={index} />
      ))}

      <div className="h-[20vh] bg-transparent" />
    </div>
  );
};
