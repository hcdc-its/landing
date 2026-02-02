"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "~/components/loading-screen";
import { About } from "~/components/about-us";
import { Hero } from "~/components/hero";
import { Marquee } from "~/components/marquee";
import { Navbar } from "~/components/navbar";
import { Connect } from "~/components/connect";
import { Footer } from "~/components/footer";
import { Highlights } from "~/components/highlights";
import { FAQ } from "~/components/faq";
import { AnimatedGradientBg } from "~/components/ui/animated-gradient-bg";

export default function HomeClient() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <LoadingScreen onComplete={() => setIsLoading(false)} />
                )}
            </AnimatePresence>

            <main
                className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                    }`}
            >
                <Navbar />
                <Hero />
                <Marquee />

                <div className="relative bg-black">
                    <AnimatedGradientBg />
                    <About />
                    <Highlights />
                    <FAQ />
                    <Connect />
                </div>

                <Footer />

                {/* Big Bold Glowing HCDC ITS - Half Shown */}
                <div className="pt-40 pb-0 flex justify-center items-end overflow-hidden bg-black relative">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: "50%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[18vw] font-inter-tight font-black text-white tracking-tighter uppercase select-none relative active:scale-95 transition-transform leading-[0.8]"
                        style={{
                            textShadow: '0 0 50px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.2)'
                        }}
                    >
                        HCDC ITS
                    </motion.h2>
                    {/* Ambient Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
                </div>
            </main>
        </>
    );
}
