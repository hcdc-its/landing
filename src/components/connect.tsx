"use client";

import { Container } from "~/components/ui/containers";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { Button } from "~/components/ui/buttons";
const socialLinks = [
  {
    icon: <FaGithub className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/hcdc-its",
  },
  {
    icon: <FaFacebook className="w-6 h-6" />,
    label: "Facebook",
    href: "https://facebook.com/hcdcits",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/company/hcdc-its",
  },
];

export const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="scroll-mt-40 mt-20 mb-0">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Branding & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h3 className="font-inter-tight font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.8] italic">
                Get in <br />
                <span className="text-neutral-500">Touch</span>
              </h3>
              <p className="font-questrial text-neutral-400 text-lg max-w-md leading-relaxed">
                Whether you have a question about our events, membership, or just want to say hi, our team is ready to connect.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-its-red/30 hover:bg-neutral-900 transition-all group"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-neutral-400 group-hover:text-its-red transition-colors">
                      {social.icon}
                    </span>
                    <span className="font-inter-tight text-sm font-bold text-neutral-300 group-hover:text-white transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-br from-its-red/5 to-transparent blur-3xl opacity-50 pointer-events-none" />

            <div className="relative bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 sm:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-its-red/50 focus:outline-none focus:ring-1 focus:ring-its-red/50 font-inter text-sm transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-its-red/50 focus:outline-none focus:ring-1 focus:ring-its-red/50 font-inter text-sm transition-all"
                      placeholder="juan@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-its-red/50 focus:outline-none focus:ring-1 focus:ring-its-red/50 font-inter text-sm transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-its-red/50 focus:outline-none focus:ring-1 focus:ring-its-red/50 font-inter text-sm transition-all"
                      placeholder="+63 000 000 0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] ml-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-its-red/50 focus:outline-none focus:ring-1 focus:ring-its-red/50 font-inter text-sm transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-16 bg-white text-black font-inter-tight font-black uppercase tracking-[0.2em] text-xs hover:bg-its-red hover:text-white transition-all duration-500 rounded-2xl shadow-xl hover:shadow-its-red/20 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
