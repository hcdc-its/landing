"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiCode, HiX } from "react-icons/hi";
import Image from "next/image";
import jeo from "~/assets/images/contributors/jeo.jpeg";
import niko from "~/assets/images/contributors/niko_soriano.jpg";

const developers = [
    {
        name: "Jeo Carlo Lubao",
        role: "ITS President (2021 - 2023)",
        description: "Contributor & Developer",
        image: jeo,
        color: "#dc2626"
    },
    {
        name: "Nicose John Soriano",
        role: "ITS Creatives Head (2023-2025)",
        description: "Main Developer & Designer",
        image: niko,
        color: "#dc2626"
    },
    {
        name: "Catherine Casanova Arnado",
        role: "ITS Creatives Head (2025-Current)",
        description: "UI/UX Designer & Developer",
        image: niko, // Placeholder
        color: "#dc2626"
    }
];

export const Developers = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* PERSISTENT FLOATING BUTTON */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-8 right-8 z-[100] group"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-its-red blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                    <div className="relative flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 pl-4 pr-6 py-3 rounded-full hover:border-its-red/50 transition-all duration-500">
                        <div className="w-8 h-8 rounded-full bg-its-red/20 flex items-center justify-center text-its-red">
                            <HiCode className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Developers</span>
                    </div>
                </div>
            </motion.button>

            {/* DEVELOPERS SECTION OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />

                        {/* Content Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 40, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-7xl h-auto max-h-[90vh] overflow-y-auto bg-neutral-950/50 border border-white/10 rounded-[2.5rem] p-8 sm:p-16 hide-scrollbar"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all z-50 bg-black/50 backdrop-blur-md"
                            >
                                <HiX className="w-5 h-5" />
                            </button>

                            {/* Header */}
                            <div className="relative z-10 mb-16 sm:mb-24">
                                <div className="space-y-4 mb-2">
                                    <p className="text-[10px] font-black tracking-[0.5em] text-its-red uppercase">Core_Innovation</p>
                                    <h2 className="text-5xl sm:text-8xl font-black font-inter-tight tracking-tighter uppercase italic leading-[0.8] mb-8">
                                        The <br />
                                        <span className="text-white/20">DEVELOPERS</span>
                                    </h2>
                                </div>
                                <p className="text-sm font-questrial text-neutral-500 max-w-md uppercase tracking-widest leading-relaxed">
                                    The architects behind the digital experience of Holy Cross of Davao College Information Technology Society.
                                </p>
                            </div>

                            {/* Developers Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                {developers.map((dev, idx) => (
                                    <motion.div
                                        key={dev.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 group-hover:border-its-red/30 transition-all duration-700">
                                            {/* Image */}
                                            <Image
                                                src={dev.image}
                                                alt={dev.name}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80" />

                                            {/* Card Content */}
                                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                <div className="space-y-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                                                    <p className="text-[9px] font-black tracking-[0.3em] text-its-red uppercase">{dev.role}</p>
                                                    <h3 className="text-3xl font-black font-inter-tight tracking-tighter uppercase italic leading-none">{dev.name}</h3>
                                                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest pt-2">{dev.description}</p>
                                                </div>

                                                {/* Hover Glow */}
                                                <div className="absolute -inset-1 bg-gradient-to-r from-its-red to-transparent opacity-0 group-hover:opacity-10 blur-2xl transition-opacity rounded-full" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-its-red/5 blur-[150px] rounded-full -mr-64 -mt-64" />
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full -ml-64 -mb-64" />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
