"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiUserGroup, HiSparkles, HiClock } from "react-icons/hi";

import { createPortal } from "react-dom";

export const ExpandableFab = ({ className }: { className?: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleNavigation = (path: string) => {
        if (path === "/story") {
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(path);
            }, 1500); // Wait for animation
        } else {
            router.push(path);
        }
    };

    const menuItems = [
        { label: "Since 2008", icon: HiClock, action: () => handleNavigation("/story") },
        { label: "ITS Officers", icon: HiUserGroup, action: () => handleNavigation("/officers") },
        { label: "ITS Creatives", icon: HiSparkles, action: () => handleNavigation("/officers?tab=creatives") },
    ];

    return (
        <>
            {/* Transition Overlay - Portaled to body to ensure full screen coverage */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isTransitioning && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
                        >
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

                            <div className="relative z-20 flex flex-col items-center">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <h1 className="font-inter-tight font-black text-[15vw] md:text-[20vw] leading-[0.8] text-white tracking-tighter uppercase text-center">
                                        OUR
                                    </h1>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <h1 className="font-inter-tight font-black text-[15vw] md:text-[20vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 tracking-tighter uppercase text-center">
                                        STORY
                                    </h1>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}

            <div
                className="relative z-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.button
                    className={`relative z-20 flex items-center justify-between gap-4 pl-8 pr-2 py-5 sm:py-4 bg-gradient-to-r from-its-red to-its-red text-white font-questrial font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-its-red/30 hover:brightness-110 transition-all overflow-hidden w-auto ${className || "rounded-full"}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation("/story")}
                >
                    <span className="whitespace-nowrap">Our Story</span>
                    <span className="bg-white/20 rounded-full p-2 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </motion.button>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 10 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 w-max bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 z-10"
                        >
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        item.action();
                                    }}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-left group transition-colors min-w-[200px]"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-its-red/20 to-transparent flex items-center justify-center text-its-red group-hover:text-red-300 group-hover:bg-its-red/30 transition-colors">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block font-questrial text-white text-sm font-semibold">{item.label}</span>
                                        <span className="block font-inter text-[10px] text-neutral-500 uppercase tracking-wider">Discover</span>
                                    </div>
                                </motion.button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
