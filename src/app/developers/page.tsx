"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiCube, HiTemplate, HiLightningBolt, HiCode, HiCollection } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import jeo from "~/assets/images/contributors/jeo.jpeg";
import niko_default from "~/assets/images/contributors/niko soriano.png";
import niko_hover from "~/assets/images/contributors/niko_soriano.jpg";
import cath_default from "~/assets/images/contributors/cath.png";
import cath_hover from "~/assets/images/contributors/CATHERINE ARNADO.png";

const developers = [
  {
    name: "Jeo Carlo Lubao",
    role: "ITS President (2021 - 2023)",
    description: "Contributor & Developer",
    image: jeo,
    hoverImage: jeo,
    tags: ["System Design", "Back-end", "Strategy"],
  },
  {
    name: "Nicose John Soriano",
    role: "ITS Creatives Head (2023-2025)",
    description: "Founder, Main Developer & Designer",
    image: niko_default,
    hoverImage: niko_hover,
    tags: ["Founder", "Lead Frontend", "Visual Identity"],
  },
  {
    name: "Catherine Arnado",
    role: "ITS Creatives Head (2025-Current)",
    description: "UI/UX Designer & Developer",
    image: cath_default,
    hoverImage: cath_hover,
    tags: ["UI/UX Specialist", "Next.js", "Interaction"],
  }
];

const techStack = [
  { name: "Framework", value: "Next.js 14", icon: HiCube },
  { name: "Styling", value: "Tailwind CSS", icon: HiTemplate },
  { name: "Animation", value: "Framer Motion", icon: HiLightningBolt },
  { name: "Logic", value: "TypeScript", icon: HiCode },
  { name: "UI Components", value: "Radix UI", icon: HiCollection }
];

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-its-red selection:text-white overflow-x-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-its-red/10 blur-[200px] rounded-full -mr-96 -mt-96 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-white/5 blur-[200px] rounded-full -ml-96 -mb-96" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-repeat pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      </div>

      <section className="relative px-6 pt-32 pb-48 sm:pt-48 sm:pb-64">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 sm:mb-20"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all">
                <HiArrowLeft className="w-4 h-4" />
              </div>
              Return_Home
            </Link>
          </motion.div>

          {/* Header Section */}
          <div className="flex flex-col gap-12 mb-32 sm:mb-48">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-its-red/10 border border-its-red/20 shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-its-red animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-its-red">Building the Future</span>
              </div>
              <h1 className="text-[15vw] sm:text-[10vw] font-inter-tight font-black leading-[0.8] tracking-tighter uppercase italic">
                The <br />
                <span className="text-white/20">DEVELOPERS</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="max-w-3xl space-y-12"
            >
              <p className="text-lg sm:text-2xl font-questrial text-neutral-400 uppercase tracking-widest leading-relaxed">
                A collective of artistic and technical minds dedicated to the digital evolution of the Holy Cross of Davao College Information Technology Society.
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="group flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-its-red/30 transition-all duration-500">
                    <tech.icon className="w-5 h-5 text-neutral-500 group-hover:text-its-red transition-colors" />
                    <div>
                      <p className="text-[9px] font-black uppercase text-neutral-600 tracking-[0.2em]">{tech.name}</p>
                      <p className="text-[11px] font-bold uppercase text-white/50">{tech.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Developers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-12 mb-48">
            {developers.map((dev, idx) => (
              <motion.div
                key={dev.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/5 bg-neutral-900/50 backdrop-blur-sm group-hover:border-its-red/30 transition-all duration-700 shadow-2xl isolate">
                  {/* Default Image */}
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    className="object-cover grayscale group-hover:opacity-0 transition-opacity duration-700 z-10"
                  />

                  {/* Hover Image */}
                  <Image
                    src={dev.hoverImage}
                    alt={`${dev.name} Alternate`}
                    fill
                    className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 z-20" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-20" />

                  {/* Badge for Founder */}
                  {dev.tags.includes("Founder") && (
                    <div className="absolute top-8 left-8 py-1.5 px-4 rounded-full bg-its-red/90 text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg z-30">
                      Project Founder
                    </div>
                  )}
                </div>

                <div className="mt-10 space-y-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-its-red shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                    <p className="text-[10px] font-black tracking-[0.4em] text-its-red uppercase">{dev.role}</p>
                  </div>
                  <div>
                    <h3 className="text-4xl sm:text-4xl font-black font-inter-tight tracking-tighter uppercase italic leading-none group-hover:text-its-red transition-colors duration-500">{dev.name}</h3>
                    <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-[0.2em] mt-3">{dev.description}</p>
                  </div>
                </div>

                {/* Background Card Shadow */}
                <div className="absolute -inset-8 bg-its-red/5 opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-1000 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-[4rem] border border-white/5 bg-neutral-900/30 backdrop-blur-xl p-16 sm:p-24 overflow-hidden"
          >
            <div className="relative z-10 max-w-3xl space-y-8">
              <p className="text-[10px] font-black tracking-[0.5em] text-its-red uppercase">Our_Mission</p>
              <h2 className="text-5xl sm:text-7xl font-black font-inter-tight tracking-tighter uppercase italic leading-none">
                Bridging <span className="text-white/20">Design</span> & Technology
              </h2>
              <p className="text-lg sm:text-xl font-questrial text-neutral-400 leading-relaxed uppercase tracking-widest">
                THE Holy Cross of Davao College Information Technology Society (ITS) website is more than just a site; it's a testament to our commitment to innovation and excellence in the digital landscape.
              </p>
              <div className="pt-8">
                <Link href="/merch" className="group inline-flex items-center gap-6 px-10 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-its-red hover:text-white transition-all duration-500">
                  Explore Merch
                  <HiArrowLeft className="rotate-180 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[600px] h-[600px] bg-its-red/5 border border-white/5 blur-3xl rounded-full" />
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mt-40 sm:mt-64 text-center space-y-8"
          >
            <div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
            <div className="space-y-2">
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[1em]">HCDC_ITS_CREATIVES_©2026</p>
              <p className="text-[8px] font-bold text-neutral-600 uppercase tracking-widest italic">Designed with Passion. Built with Precision.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
