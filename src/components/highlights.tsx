"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/ui/containers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";

import techtalk1 from "~/assets/highlights/techtalk-1.jpg";
import techtalk2 from "~/assets/highlights/techtalk-2.jpg";
import techtalk3 from "~/assets/highlights/techtalk-3.jpg";
import techtalk4 from "~/assets/highlights/techtalk-4.jpg";
import techtalk5 from "~/assets/highlights/techtalk-5.jpg";
import techtalk6 from "~/assets/highlights/techtalk-6.jpg";
import techtalk7 from "~/assets/highlights/techtalk-7.jpg";
import techtalk8 from "~/assets/highlights/techtalk-8.jpg";
import techtalk9 from "~/assets/highlights/techtalk-9.jpg";
import techtalk10 from "~/assets/highlights/techtalk-10.jpg";
import techtalk11 from "~/assets/highlights/techtalk-11.jpg";

const images = [
  {
    src: techtalk1,
    alt: "Tech Talk 1",
  },

  {
    src: techtalk2,
    alt: "Tech Talk 2",
  },

  {
    src: techtalk3,
    alt: "Tech Talk 3",
  },

  {
    src: techtalk4,
    alt: "Tech Talk 4",
  },

  {
    src: techtalk5,
    alt: "Tech Talk 5",
  },

  {
    src: techtalk6,
    alt: "Tech Talk 6",
  },

  {
    src: techtalk7,
    alt: "Tech Talk 7",
  },

  {
    src: techtalk8,
    alt: "Tech Talk 8",
  },

  {
    src: techtalk9,
    alt: "Tech Talk 9",
  },

  {
    src: techtalk10,
    alt: "Tech Talk 10",
  },

  {
    src: techtalk11,
    alt: "Tech Talk 11",
  },
];

export const Highlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    const imagesToShow = isMobile ? 1 : 3;
    for (let i = 0; i < imagesToShow; i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <section id="highlights" className="scroll-mt-40 my-28">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="text-start mb-12">
          <h3 className="font-questrial font-medium text-4xl">
            Department Highlights
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-4">
            <AnimatePresence initial={false} mode="wait">
              {getVisibleImages().map((image, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative ${
                    isMobile 
                      ? 'w-full aspect-[4/3]' 
                      : 'w-1/3 aspect-[4/3]'
                  }`}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes={isMobile ? "100vw" : "33vw"}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 md:p-3 rounded-full backdrop-blur-sm transition-colors z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-6 h-6 md:w-5 md:h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 md:p-3 rounded-full backdrop-blur-sm transition-colors z-10"
            aria-label="Next image"
          >
            <FaChevronRight className="w-6 h-6 md:w-5 md:h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
