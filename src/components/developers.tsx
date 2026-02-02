"use client";

import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Developers = () => {
    const pathname = usePathname();

    // Hide if on these specific pages
    const hiddenPaths = ["/developers", "/merch", "/officers"];
    if (hiddenPaths.includes(pathname)) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[150] group"
        >
            <Link href="/developers" className="relative block">
                <div className="absolute inset-0 bg-its-red blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                <div className="relative flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 p-3 sm:pl-4 sm:pr-6 sm:py-3 rounded-full hover:border-its-red/50 transition-all duration-500">
                    <div className="w-8 h-8 rounded-full bg-its-red/20 flex items-center justify-center text-its-red">
                        <HiCode className="w-4 h-4" />
                    </div>
                    {/* Hide text on mobile, show only icon */}
                    <span className="hidden sm:inline text-[10px] font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">Developers</span>
                </div>
            </Link>
        </motion.div>
    );
};
