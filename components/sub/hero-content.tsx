"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 mt-20 md:mt-30 w-full z-[20] gap-12 lg:gap-20 pb-10"
    >
      {/* Content Section */}
      <div className="h-auto w-full lg:w-[60%] flex flex-col gap-5 justify-center text-start rounded-[32px] border border-[#7042f833] bg-[rgba(3,0,20,0.62)] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 backdrop-blur-sm">
        <motion.div
          variants={slideInFromTop}
          className="rounded-[32px] shadow-[0_0_18px_4px_rgba(113,47,255,0.35),0_0_40px_8px_rgba(180,155,255,0.15)]"
          style={{ width: "max-content" }}
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b]">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 drop-shadow-[0_0_6px_rgba(180,155,255,0.9)]" />
            <h1 className="Welcome-text text-[10px] sm:text-[13px] font-semibold">
              Ready for a new chapter
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-white max-w-[700px] w-auto h-auto"
        >
          <span className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight text-white">
            <span className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              K
            </span>
            arim Ayman 
          </span>
          <span className="text-[20px] sm:text-[24px] md:text-[30px] leading-tight text-white">
            BIM Modeler & Technical Office Draftsman {" "}
            <span className="inline-block font-bold bg-gradient-to-r from-purple-700 to-cyan-500 bg-clip-text text-transparent">
               Structural & Architectural
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[13px] sm:text-[15px] text-gray-200 my-6 sm:my-10 max-w-[800px] leading-6 sm:leading-7"
        >
          I bring precision to complex structures — on paper and in BIM.
          Over the past 5+ years , I've delivered shop drawings, reinforcement details, 
          and BIM documentation on Egypt's most technically demanding infrastructure, 
          including the El Dabaa Nuclear Power Plant, 
          under strict international compliance standards.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2"
        >
          {/* Button 1 — View My Work */}
          <a
            href="#projects"
            className="group relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white font-semibold text-[14px] sm:text-[15px] text-center cursor-pointer select-none overflow-hidden
              bg-gradient-to-br from-purple-600 to-cyan-500
              shadow-[0_6px_0_0_#3b0764,0_8px_16px_rgba(113,47,255,0.45)]
              hover:shadow-[0_6px_0_0_#3b0764,0_12px_24px_rgba(113,47,255,0.6)]
              active:shadow-[0_2px_0_0_#3b0764,0_4px_8px_rgba(113,47,255,0.5)]
              active:translate-y-1
              transition-all duration-150 ease-out"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </a>

          {/* Button 2 — Download CV */}
          <a
            href="/PDF/Karim_Ayman_BIM Modeler & Technical_Office_Draftsman_CV.pdf"
            download
            className="group relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white font-semibold text-[14px] sm:text-[15px] text-center cursor-pointer select-none overflow-hidden
              bg-[rgba(113,47,255,0.12)] border border-[#7042f88b]
              shadow-[0_6px_0_0_#1a0545,0_8px_16px_rgba(113,47,255,0.25)]
              hover:bg-[rgba(113,47,255,0.22)]
              hover:shadow-[0_6px_0_0_#1a0545,0_12px_24px_rgba(113,47,255,0.4)]
              active:shadow-[0_2px_0_0_#1a0545,0_4px_8px_rgba(113,47,255,0.3)]
              active:translate-y-1
              transition-all duration-150 ease-out"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download CV
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </motion.svg>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Image Section - Hidden on mobile */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="hidden lg:flex w-full lg:w-auto h-full justify-center items-center lg:self-center"
      >
        <Image
          src="/myphoto.png"
          alt="Karim Ayman - BIM Modeler & Technical Office Draftsman"
          height={650}
          width={650}
          draggable={false}
          priority
          className="box select-none w-[300px] h-auto cursor-pointer object-bottom border-4 border-[#7042f88b] rounded-full opacity-[0.7] transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 hover:border-purple-500/50"
        />
      </motion.div>
    </motion.div>
  );
};
