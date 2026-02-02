"use client";

import { motion } from "framer-motion";

export const Marquee = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white/5 border-y border-white/10 py-3">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex items-center gap-8 text-neutral-400 font-inter text-sm tracking-widest uppercase"
                >
                    {Array.from({ length: 4 }).map((_, i) => (
                        <span key={i} className="flex items-center gap-8">
                            <span>Bachelor of Science in Information Technology</span>
                            <span className="text-its-red">+</span>
                            <span>Information Technology Society</span>
                            <span className="text-its-red">+</span>
                            <span className="text-white">Bridging Faith and Innovation</span>
                            <span className="text-its-red">+</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
