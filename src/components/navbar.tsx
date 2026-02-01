"use client";

import { useState } from "react";
import { Button } from "~/components/ui/buttons";
import { Container } from "~/components/ui/containers";
import { Link } from "react-scroll/modules";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6">
        <nav className="flex justify-between items-center h-14">
          {/* Logo/Brand */}
          <h4
            className="font-questrial font-bold italic text-xl cursor-pointer"
            onClick={() => router.push("/")}
          >
            HCDC ITS
          </h4>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    className="font-inter text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => router.push("/officers")}
                  className="font-inter text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Officers
                </button>
              </li>
            </ul>
            <Button
              variant="default"
              size="sm"
              className="rounded-full"
              onClick={() => router.push("/merch")}
            >
              Browse Merch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-300 hover:text-white transition-colors relative z-50"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiOutlineMenuAlt3 className="w-6 h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg"
            >
              <motion.div
                className="flex flex-col items-center justify-center min-h-screen px-6"
              >
                <div className="w-full max-w-md space-y-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      custom={index}
                      variants={itemVariants}
                      className="w-full text-center"
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-70}
                        className="font-questrial text-2xl text-neutral-300 hover:text-white transition-colors cursor-pointer block w-full py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={itemVariants}
                    custom={menuItems.length}
                    className="w-full text-center"
                  >
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        router.push("/officers");
                      }}
                      className="font-questrial text-2xl text-neutral-300 hover:text-white transition-colors cursor-pointer block w-full py-2"
                    >
                      Officers
                    </button>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    custom={menuItems.length + 1}
                    className="w-full"
                  >
                    <Button
                      variant="default"
                      size="lg"
                      onClick={() => {
                        setIsOpen(false);
                        router.push("/merch");
                      }}
                      className="bg-white text-black hover:bg-neutral-200 w-full rounded-full"
                    >
                      Browse Merch
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
