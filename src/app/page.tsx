"use client";
import { motion } from "framer-motion";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Project";
import { Contact } from "@/components/Contact";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-20">
      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Navbar />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Experience />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Education />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Skills />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Projects />
      </motion.div>

      <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Contact />
      </motion.div>

        <Footer />
    </div>
  );
}
