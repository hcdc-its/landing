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
    href: "https://github.com/HCDC-ITSO",
  },
  {
    icon: <FaFacebook className="w-6 h-6" />,
    label: "Facebook",
    href: "https://facebook.com/HCDCITSO",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/company/hcdc-itso",
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
    // Handle form submission here
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <section id="contact" className="scroll-mt-40 my-20">
      <Container variant={"fullMobileBreakpointPadded"}>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Social Links Section */}
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="font-questrial font-medium text-4xl mb-5 md:mb-12">
              Connect with Us
            </h3>

            <div className="flex justify-center items-center gap-8 mb-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 rounded-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 group-hover:border-red-800/50 transition-colors">
                    {social.icon}
                  </div>
                  <span className="font-inter text-sm text-neutral-400 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="text-left"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="font-questrial font-medium text-2xl mb-8">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter text-sm text-neutral-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 focus:border-red-800/50 focus:outline-none focus:ring-1 focus:ring-red-800/50 font-inter text-sm transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter text-sm text-neutral-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 focus:border-red-800/50 focus:outline-none focus:ring-1 focus:ring-red-800/50 font-inter text-sm transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block font-inter text-sm text-neutral-400 mb-2"
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 focus:border-red-800/50 focus:outline-none focus:ring-1 focus:ring-red-800/50 font-inter text-sm transition-colors"
                  placeholder="Enter your company or organization"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-inter text-sm text-neutral-400 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 focus:border-red-800/50 focus:outline-none focus:ring-1 focus:ring-red-800/50 font-inter text-sm transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter text-sm text-neutral-400 mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-900/50 border border-neutral-800 focus:border-red-800/50 focus:outline-none focus:ring-1 focus:ring-red-800/50 font-inter text-sm transition-colors resize-none"
                  placeholder="Enter any additional information"
                />
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
