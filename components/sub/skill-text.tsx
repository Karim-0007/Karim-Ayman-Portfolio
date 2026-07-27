"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const SkillText = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    className="w-full h-auto flex flex-col items-center justify-center px-4"
  >
    {/* wrapper carries the outer glow — outside the overflow:hidden of Welcome-box */}
    <motion.div
      variants={slideInFromTop}
      className="mb-0 rounded-[32px] shadow-[0_0_18px_4px_rgba(113,47,255,0.1),0_0_40px_8px_rgba(180,155,255,0.15)]"
      style={{ width: "max-content" }}
    >
      <div className="Welcome-box py-[6px] px-[6px] sm:py-[8px] sm:px-[7px] border border-[#7042f88b]">
        <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5 drop-shadow-[0_0_6px_rgba(180,155,255,0.9)]" />
        <h1 className="Welcome-text text-[11px] sm:text-[13px]">BIM, CAD & technical office expertise</h1>
      </div>
    </motion.div>
    <motion.div 
      variants={slideInFromLeft(0.5)} 
      className="text-[20px] sm:text-[26px] md:text-[30px] text-white font-medium mt-[10px] text-center mb-[10px] sm:mb-[15px] max-w-[800px]"
    >
      Tools for precise, buildable engineering documentation.
    </motion.div>
    <motion.div 
      variants={slideInFromRight(0.5)} 
      className="cursive text-[16px] sm:text-[18px] md:text-[20px] text-gray-200 mb-6 sm:mb-10 mt-[10px] text-center max-w-[700px]"
    >
      Shop drawings, BIM modeling, quantities, and coordinated as-built records.
    </motion.div>
  </motion.div>
);
