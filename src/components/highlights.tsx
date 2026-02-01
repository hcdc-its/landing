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
    id: "outside",
    title: "OUTSIDE",
    subtitle: "REPRESENTING HCDC",
    items: [
      { id: 5, image: techtalk1, title: "City Meetup", desc: "Networking with professionals" },
      { id: 6, image: techtalk4, title: "Regional Contest", desc: "Competing against top schools" },
      { id: 7, image: techtalk2, title: "Campus Tour", desc: "External visits" },
      { id: 8, image: techtalk3, title: "Outreach", desc: "Community Service" },
    ],
  },
  {
    id: "news",
    title: "NEWS",
    subtitle: "PROGRAM UPDATES",
    items: [
      { id: 9, image: techtalk2, title: "New Curriculum", desc: "Updated syllabus for 2025" },
      { id: 10, image: techtalk3, title: "Faculty Awards", desc: "Recognizing excellence" },
      { id: 11, image: techtalk4, title: "Partnerships", desc: "New industry alliances" },
      { id: 12, image: techtalk1, title: "Accreditation", desc: "Level III Status" },
    ],
  },
];

const Section = ({ category, index }: { category: typeof categories[0], index: number }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-neutral-950">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none select-none">
          <h2 className="text-[20vw] font-inter-tight font-black text-white leading-none tracking-tighter">
            {category.title}
          </h2>
        </div>

        {/* Glowing Spine Line (Vertical) */}
        <div className="absolute left-8 md:left-20 top-0 bottom-0 w-px bg-white/10 z-10">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-500 via-red-500 to-transparent origin-top"
          />
        </div>

        {/* Content Container */}
        <motion.div style={{ opacity, scale }} className="relative z-20 w-full pl-16 md:pl-32 pr-8">
          <div className="mb-12">
            <span className="block text-red-500 font-inter font-bold tracking-widest text-sm mb-2">
              0{index + 1} — {category.subtitle}
            </span>
            <h3 className="text-5xl md:text-7xl font-inter-tight font-bold text-white uppercase">
              {category.title}
            </h3>
          </div>

          {/* Horizontal Parallax Strip */}
          <div className="overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8 w-max">
              {category.items.map((item) => (
                <div key={item.id} className="relative w-[80vw] md:w-[600px] h-[50vh] md:h-[500px] shrink-0 group overflow-hidden rounded-md border border-white/10 bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                    <h4 className="text-3xl font-bold text-white mb-2">{item.title}</h4>
                    <div className="h-1 w-12 bg-red-500 mb-4" />
                    <p className="text-neutral-400 font-inter">{item.desc}</p>
                  </div>
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
    <div id="highlights" className="bg-neutral-950">
      <div className="py-20 px-4 text-center">
        <h3 className="font-questrial font-medium text-4xl text-neutral-500 mb-4">
          Department Highlights
        </h3>
        <p className="text-white text-xl font-inter">Exploring our journey through time</p>
      </div>

      {categories.map((category, index) => (
        <Section key={category.id} category={category} index={index} />
      ))}

      <div className="h-[20vh] bg-neutral-950" />
    </div>
  );
};
