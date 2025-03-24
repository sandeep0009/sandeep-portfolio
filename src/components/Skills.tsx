"use client"
import { skills } from "@/lib/skills";
import { Button } from "./ui/button";
import {motion } from "framer-motion";

export function Skills() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button className="px-4 bg-white text-black py-2">
              {item}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}