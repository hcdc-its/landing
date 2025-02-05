"use client";

import { Container } from "~/components/ui/containers";
import { IoArrowForward } from "react-icons/io5";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaEye,
  FaBullseye,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/buttons";

export const About = () => {
  const router = useRouter();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const cards = [
    {
      icon: <FaLightbulb className="w-8 h-8 text-red-800" />,
      title: "Innovation",
      description: "Fostering creative solutions and technological advancement",
    },
    {
      icon: <FaUsers className="w-8 h-8 text-red-800" />,
      title: "Community",
      description:
        "Building a strong network of IT enthusiasts and professionals",
    },
    {
      icon: <FaRocket className="w-8 h-8 text-red-800" />,
      title: "Growth",
      description: "Empowering students to reach their full potential in IT",
    },
  ];

  return (
    <section id="about" className=" my-28">
      <Container variant={"fullMobileBreakpointPadded"} className="scroll-mt-40">
        <motion.div
          className="mt-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}

        >
          <motion.div className="mb-14" variants={fadeInUp}>
            <h3 className="font-questrial font-medium text-4xl mb-8">
              About Information Technology Society
            </h3>
            <p className="font-inter text-muted-foreground font-light text-md sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-left">
              The{" "}
              <span className="font-semibold">
                HCDC Information Technology Society
              </span>{" "}
              is a student organization that aims to promote the field of
              Information Technology to the students of Holy Cross of Davao
              College.
            </p>
            <div className="mt-10">
              <Button
                variant="secondary"
               
                onClick={() => router.push("/story")}
              >
                Our Story
                <IoArrowForward className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-20"
            variants={fadeInUp}
          >
            <motion.div
              className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="w-6 h-6 text-red-800" />
                <h4 className="font-questrial text-2xl font-medium">
                  Vision
                </h4>
              </div>
              <p className="font-inter text-muted-foreground">
                To be the leading student organization in developing competent
                and innovative IT professionals who embody Christian values
                and excellence in service.
              </p>
            </motion.div>

            <motion.div
              className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-800"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="w-6 h-6 text-red-800" />
                <h4 className="font-questrial text-2xl font-medium">
                  Mission
                </h4>
              </div>
              <p className="font-inter text-muted-foreground">
                To provide opportunities for students to enhance their IT
                skills, knowledge, and professional development through
                various activities and initiatives while promoting Christian
                values.
              </p>
            </motion.div>
          </motion.div>

          <h3 className="font-questrial font-medium text-4xl mb-8">
            Our Objectives
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={fadeInUp}

          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800 hover:border-red-800/50 transition-colors"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-neutral-800/50 rounded-lg w-fit p-4 mb-4">
                  {card.icon}
                </div>
                <h4 className="font-questrial text-xl font-medium mb-2">
                  {card.title}
                </h4>
                <p className="font-inter text-neutral-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
