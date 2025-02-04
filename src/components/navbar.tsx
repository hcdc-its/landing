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
    { label: "about", to: "about" },
    { label: "highlights", to: "highlights" },
    { label: "contact", to: "contact" },
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
        ease: [0.22, 1, 0.36, 1],
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
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md border-b border-white/10">
        <Container variant={"fullMobileBreakpointPadded"}>
          <nav className="flex justify-between items-center h-16 px-4 md:px-0">
            {/* Logo/Brand */}
            <h4
              className="font-questrial font-medium text-2xl cursor-pointer"
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
                      className="font-inter text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button variant="default" size="sm">
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
                      className="w-full"
                    >
                      <Button 
                        variant="default" 
                        size="lg"
                        onClick={() => setIsOpen(false)}
                        className="bg-white text-black hover:bg-neutral-200 w-full"
                      >
                        Browse Merch
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </div>
    </div>
  );
};

