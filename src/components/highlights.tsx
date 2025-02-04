"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/ui/containers";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import image1 from "~/assets/images/officers.jpg";
import image2 from "~/assets/images/psits-pub.png";
import image3 from "~/assets/images/front-end-poster.png";
import image4 from "~/assets/images/its-mem.png";

const images = [
  {
    src: image1,
    alt: "ITSO Officers",
  },
  {
    src: image2,
    alt: "PSITS Publication",
  },
  {
    src: image3,
    alt: "AWS Community Day",
  },
];

export const Highlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    for (let i = 0; i < 3; i++) {
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
                  className="relative w-1/3 aspect-[4/3]"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-colors z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-colors z-10"
            aria-label="Next image"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
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
