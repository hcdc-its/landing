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
            </main>
        </>
    );
}
