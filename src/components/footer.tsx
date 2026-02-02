import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer>
      {/* Big Bold Glowing HCDC ITS - Half Shown */}
      <div className="pt-20 pb-0 flex justify-center items-end overflow-hidden bg-black relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20vw] sm:text-[18vw] font-inter-tight font-black text-white tracking-tighter uppercase select-none relative active:scale-95 transition-transform leading-none mt-auto"
          style={{
            textShadow: '0 0 50px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.2)'
          }}
        >
          HCDC ITS
        </motion.h2>
        {/* Ambient Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </div>
    </footer>
  );
};
