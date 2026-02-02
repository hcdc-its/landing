"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "~/components/ui/containers";

const faqs = [
  {
    question: "When was the HCDC Information Technology Society founded?",
    answer: "The HCDC Information Technology Society was founded in 2008. Since its inception, the society has embarked on a journey of growth and success, striving to create a supportive environment for students pursuing Information Technology. Over the years, it has provided numerous opportunities for members to enhance their skills, network with professionals, and contribute to the IT community."
  },
  {
    question: "How much is the membership fee for the HCDC Information Technology Society?",
    answer: "For just 50 pesos, you can become a member of the HCDC Information Technology Society and be part of a vibrant community dedicated to IT enthusiasts!"
  },
  {
    question: "Is there a group chat for BSIT Freshmen Students?",
    answer: "The HCDC Information Technology Society does not provide an official group chat for freshmen students. However, you can reach out to the official page to inquire if an existing group chat has been set up by other members or students."
  },
  {
    question: "How can I join the officers or how to join creatives?",
    answer: "Officer and Creative applications typically open at the start of each academic year. Keep an eye on our official Facebook page for the 'Call for Officers' and 'Recruitment for Creatives' announcements. We provide application forms and detailed requirements for each role there!"
  },
  {
    question: "What events can I look forward to?",
    answer: "Our society organizes a variety of events including Tech Talks, PSITS (interschool event), Workshops, and Seminars featuring industry experts. These are designed to bridge the gap between academic learning and industry requirements."
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <motion.div
      initial={false}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
        ? "border-blue-500/50 dark:border-its-red/50 bg-blue-500/[0.03] dark:bg-its-red/[0.03]"
        : "border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-white/10"
        } backdrop-blur-md`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-bold font-inter-tight transition-colors ${isOpen ? "text-blue-600 dark:text-its-red" : "text-neutral-800 dark:text-white"}`}>
          {question}
        </span>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen ? "bg-blue-600 dark:bg-its-red text-white rotate-180" : "bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400 rotate-0"}`}>
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 font-inter leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent">

      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">

          {/* Mobile Header */}
          <div className="lg:col-span-12 mb-4 lg:hidden">
            <h2 className="text-4xl font-inter-tight font-black tracking-tighter text-white">
              FREQUENTLY <br />
              ASKED QUESTIONS
            </h2>
          </div>

          {/* Desktop Sticky Header */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-6xl xl:text-7xl font-inter-tight font-black tracking-tighter leading-[0.9] text-white">
                FREQUENTLY <br />
                ASKED <br />QUESTIONS
              </h2>
              <div className="mt-8 h-1.5 w-20 bg-its-red" />
            </motion.div>
          </div>

          {/* FAQ Items Section (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Call to Action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl text-white flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <h4 className="text-xl font-bold mb-1 font-inter-tight italic uppercase">Still have questions?</h4>
                <p className="opacity-70 text-sm font-inter">Our team is always ready to help you out.</p>
              </div>
              <button className="px-8 py-3 rounded-full font-black text-xs tracking-widest bg-its-red text-white hover:scale-105 active:scale-95 transition-all uppercase">
                Contact Us
              </button>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
