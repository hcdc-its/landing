"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Container } from "~/components/ui/containers";
import { motion } from "framer-motion";

export function FAQ() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <>
      <Container variant={"fullMobileBreakpointPadded"}>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="mt-20 mb-5">
            <p className="font-questrial text-4xl">
              Frequently Asked Questions
            </p>
          </div>

          <motion.div
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <Accordion type="single" collapsible className="text-start w-full pt-8 pb-14">
              <motion.div variants={fadeInUp}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    When was the HCDC Information Technology Society founded?
                  </AccordionTrigger>
                  <AccordionContent>
                    The HCDC Information Technology Society was founded in 2008.
                    Since its inception, the society has embarked on a journey
                    of growth and success, striving to create a supportive
                    environment for students pursuing Information Technology.
                    Over the years, it has provided numerous opportunities for
                    members to enhance their skills, network with professionals,
                    and contribute to the IT community.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How much is the membership fee for the HCDC Information
                    Technology Society?
                  </AccordionTrigger>
                  <AccordionContent>
                    For just 50 pesos, you can become a member of the HCDC
                    Information Technology Society and be part of a vibrant
                    community dedicated to IT enthusiasts!
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Is there a group chat for BSIT Freshmen Students?
                  </AccordionTrigger>
                  <AccordionContent>
                    The HCDC Information Technology Society does not provide an
                    official group chat for freshmen students. However, you can
                    reach out to the official page to inquire if an existing
                    group chat has been set up by other members or students.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

            </Accordion>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}
