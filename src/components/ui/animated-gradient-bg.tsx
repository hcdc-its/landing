"use client";

import { motion } from "framer-motion";

export const AnimatedGradientBg = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 30%, #960000 0%, #000000 50%, #000000 100%)",
                        "radial-gradient(circle at 80% 70%, #960000 0%, #000000 50%, #000000 100%)",
                        "radial-gradient(circle at 20% 30%, #960000 0%, #000000 50%, #000000 100%)",
                    ],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="sticky top-0 h-screen w-full opacity-40"
            />
        </div>
    );
};
