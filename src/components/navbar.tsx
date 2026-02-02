"use client";

import { useState } from "react";
import { Button } from "~/components/ui/buttons";
import { Link } from "react-scroll/modules";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "~/assets/images/logo.png";

export const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", to: "about" },
    { label: "Highlights", to: "highlights" },
    { label: "Contact", to: "contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 30, scale: 0.9 },
    open: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-6 transition-all duration-500 hover:border-white/20 shadow-2xl">
        <nav className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo/Brand */}
          <h4
            className="font-inter-tight font-black italic text-xl sm:text-2xl cursor-pointer tracking-tighter uppercase text-white hover:text-its-red transition-all duration-500"
            onClick={() => router.push("/")}
          >
            HCDC ITS
          </h4>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="font-inter text-xs font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => router.push("/officers")}
                  className="font-inter text-xs font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Officers
                </button>
              </li>
            </ul>
            <div className="w-[1px] h-6 bg-white/10 mx-2" />
            <Button
              variant="default"
              className="rounded-full bg-white text-black hover:bg-its-red hover:text-white transition-all duration-500 font-inter-tight font-black uppercase tracking-[0.2em] text-[10px] px-8"
              onClick={() => router.push("/merch")}
            >
              Browse Merch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white relative z-[210]"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <HiX className="w-5 h-5" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-5 h-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Cinematic Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-[200] bg-black selection:bg-its-red"
            >
              {/* Cinematic Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
                  <Image src={logo} alt="ITS Logo" fill className="object-contain scale-150 grayscale rotate-12" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                <div className="absolute bottom-0 left-0 w-full p-8 opacity-10">
                  <h2 className="text-[20vw] font-black font-inter-tight leading-none tracking-tighter uppercase italic -ml-10 select-none">ITS_DIGITAL</h2>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 pt-20">
                <div className="w-full max-w-lg space-y-12">
                  <div className="space-y-6">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.to}
                        custom={index}
                        variants={itemVariants}
                        className="w-full text-center group"
                      >
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={500}
                          spy={true}
                          offset={-70}
                          className="font-inter-tight text-6xl sm:text-7xl font-black text-white/20 hover:text-white transition-all duration-500 cursor-pointer block w-full uppercase italic tracking-tighter group-hover:scale-110"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      variants={itemVariants}
                      custom={menuItems.length}
                      className="w-full text-center group"
                    >
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          router.push("/officers");
                        }}
                        className="font-inter-tight text-6xl sm:text-7xl font-black text-white/20 hover:text-white transition-all duration-500 cursor-pointer block w-full uppercase italic tracking-tighter group-hover:scale-110"
                      >
                        Officers
                      </button>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    custom={menuItems.length + 1}
                    className="w-full pt-12 border-t border-white/5"
                  >
                    <div className="flex flex-col gap-6">
                      <Button
                        variant="default"
                        size="lg"
                        onClick={() => {
                          setIsOpen(false);
                          router.push("/merch");
                        }}
                        className="bg-white text-black hover:bg-its-red hover:text-white w-full h-16 rounded-full font-inter-tight font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 shadow-xl"
                      >
                        Browse Merch
                      </Button>
                      <p className="text-[10px] font-black text-center text-white/10 uppercase tracking-[0.5em]">HCDC_ITS_CREATIVES_©2026</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
