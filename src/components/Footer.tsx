"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, X } from "lucide-react";

export function Footer() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/90 px-6 py-3 rounded-full border border-white/20 shadow-lg"
    >
      <FooterIcon icon={<FileText size={20} />} link="https://drive.google.com/file/d/15YWayAcecCS_6u-Unf-_4QdCaiiGsUu6/view?usp=drive_link" label="Resume" />
      <Divider />
      <FooterIcon icon={<Github size={20} />} link="https://github.com/sandeep0009" label="GitHub" />
      <FooterIcon icon={<X size={20} />} link="https://x.com/02___sandeep" label="X" />
      <FooterIcon icon={<Linkedin size={20} />} link="https://www.linkedin.com/in/sandeep-kumar-shah-915a34255/" label="LinkedIn" />
    </motion.div>
  );
}

function FooterIcon({ icon, link, label }: { icon: React.ReactNode; link: string; label: string }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-2 rounded-full transition-colors hover:bg-white/20 flex flex-col items-center"
    >
      {icon}

      <motion.span
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: -5 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-8 px-2 py-1 bg-gray-900 text-white text-xs rounded-md"
      >
        {label}
      </motion.span>
    </motion.a>
  );
}

function Divider() {
  return <div className="h-6 w-[1px] bg-white/30" />;
}
