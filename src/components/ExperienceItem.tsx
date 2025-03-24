"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

type ExperienceItemProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
  initial: string;
};

export const ExperienceItem = ({ company, role, duration, description, initial }: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-4">

          <div className="flex justify-center items-center bg-[#54473F] rounded-full border border-slate-500 h-12 w-12 border-dashed text-white text-lg font-semibold">
            {initial}
          </div>
          <div>
            <p className="font-semibold flex items-center gap-2">
              {company}
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} />
              </motion.div>
            </p>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
        <div className="text-sm text-gray-400">{duration}</div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden mt-2 text-sm text-gray-300 px-16"
      >
        {description}
      </motion.div>
    </div>
  );
};