"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { ExperienceCard } from "@/components/sub/experience-card";

const EXPERIENCE_DATA = [
  {
    company: "Hassan Allam Construction — El Dabaa NPP (Units 3 & 4)",
    role: "BIM Modeler & Technical Office Draftsman",
    period: "Feb 2023 – Present",
    location: "El Dabaa, Egypt",
    preview: [
      "Developed 500+ approved shop drawings for structural and waterproofing systems under strict Rosatom/NPPA nuclear compliance.",
      "Built 3D BIM models (LOD 350) for clash detection, resolving site execution issues early.",
      "Prepared accurate As-Built documentation (LOD 500) and supported formal NPPA quality audits.",
    ],
    details: [
      "Prepared detailed reinforcement shop drawings and Bar Bending Schedules (BBS) directly from DDD packages.",
      "Translated Work Execution Plans (WEP) into accurate bay boundaries and sequential waterproofing details.",
      "Resolved technical site RFIs with Egyptian & Russian engineering teams while preserving design intent.",
      "Applied BIM workflows (LOD 200–300) for conceptual modeling and automated quantity takeoff (QTO).",
    ],
    images: [
      { src: "/projects/El Dabaa Nuclear Power Plant(3,4)/MAIN REACTOR UNIT 3.png", label: "Main Reactor Unit 3 — Overview" },
      { src: "/projects/El Dabaa Nuclear Power Plant(3,4)/3D Model .jpg", label: "3D BIM Model (LOD 350)" },
      { src: "/projects/El Dabaa Nuclear Power Plant(3,4)/DETAILS OF RAINFORCEMENT WALL.png", label: "Reinforcement Wall Details" },
      { src: "/projects/El Dabaa Nuclear Power Plant(3,4)/GENERAL NUCLEAR POWER PLANT VIEW IN THE FUTURE.png", label: "Future Plant General View" },
      { src: "/projects/El Dabaa Nuclear Power Plant(3,4)/Reactor Core 2.png", label: "Reactor Core" },
      { src: "/projects/El Dabaa Nuclear Power Plant(3,4)/REACTOR CORE.png", label: "Reactor Core Section" },
    ],
  },
  {
    company: "MEGA Construction — El Dabaa NPP (Unit 1)",
    role: "Technical Office Draftsman",
    period: "Mar 2022 – Feb 2023",
    location: "El Dabaa, Egypt",
    preview: [
      "Extracted 150+ high-precision structural shop drawings & complex rebar configurations from DDDs.",
      "Drafted specialized execution drawings for 40+ concrete bays following Work Execution Plans (WEP).",
      "Delivered final As-Built drawings with verified field measurements, achieving an impressive 5% rejection rate.",
    ],
    details: [
      "Revised rebar shop drawings under tight deadlines, solving 80+ complex reinforcement clashes to eliminate material waste.",
      "Managed 200+ Red-Line Markups and site RFIs using AutoCAD while maintaining strict CAD standards & version control.",
    ],
    images: [
      { src: "/projects/El Dabaa Nuclear Power Plant(1)/MAIN REACTOR UNIT 1.png", label: "Main Reactor Unit 1 — Overview" },
      { src: "/projects/El Dabaa Nuclear Power Plant(1)/NUCLEAR POWER PLANT REATOR (1).png", label: "Nuclear Power Plant Reactor" },
      { src: "/projects/El Dabaa Nuclear Power Plant(1)/REACTOR UNIT (1).png", label: "Reactor Unit Detail" },
      { src: "/projects/El Dabaa Nuclear Power Plant(1)/REACTOR UNIT 1.png", label: "Reactor Unit 1" },
    ],
  },
  {
    company: "Orascom Construction — Abu Rewash WWTP",
    role: "Technical Office Draftsman",
    period: "May 2021 – Mar 2022",
    location: "Giza, Egypt",
    preview: [
      "Drafted P&ID diagrams for water treatment processes in coordination with mechanical teams.",
      "Produced detailed reinforced concrete structural drawings for water tanks and plant facilities.",
      "Documented final As-Built conditions, helping reduce RFI submissions by 25% during closeout.",
    ],
    details: [
      "Developed mechanical equipment layouts and piping route drawings with interdisciplinary coordination.",
    ],
    images: [
      { src: "/projects/Abu Rewash Wastewater Treatment Plant/MAIN Abu Rewash Wastewater Treatment Plant.png", label: "Plant Overview" },
      { src: "/projects/Abu Rewash Wastewater Treatment Plant/Abu Rewash Wastewater Treatment Plant 2.png", label: "Treatment Facilities" },
      { src: "/projects/Abu Rewash Wastewater Treatment Plant/Abu Rewash Wastewater Treatment Plant 3.png", label: "Structural Documentation" },
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* heading */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16 px-4"
      >
        <div
          className="rounded-[32px] shadow-[0_0_18px_4px_rgba(113,47,255,0.35),0_0_40px_8px_rgba(180,155,255,0.15)] mb-4 sm:mb-6"
          style={{ width: "max-content" }}
        >
          <div className="Welcome-box py-[6px] px-[6px] sm:py-[8px] sm:px-[7px] border border-[#7042f88b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5 inline-block drop-shadow-[0_0_6px_rgba(180,155,255,0.9)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V6a2.25 2.25 0 012.25-2.25h4.5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 2.25h6v6m-6 0l6-6" />
            </svg>
            <span className="Welcome-text text-[11px] sm:text-[13px] font-semibold">
              Professional Experience
            </span>
          </div>
        </div>

        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Experience & Credentials
        </h2>
        <p className="text-gray-400 text-center mt-2 sm:mt-3 max-w-[600px] text-[13px] sm:text-[15px] leading-6 sm:leading-7">
          5+ years delivering precision engineering documentation on Egypt's most technically demanding infrastructure projects.
        </p>
      </motion.div>

      {/* timeline line + cards */}
      <div className="relative w-full max-w-4xl px-4 sm:px-6">
        {/* vertical timeline line */}
        <div className="absolute left-[1.15rem] sm:left-[2.15rem] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent hidden md:block" />

        <div className="flex flex-col gap-8">
          {EXPERIENCE_DATA.map((exp, i) => (
            <div key={i} className="relative flex gap-6">
              {/* timeline dot */}
              <div className="hidden md:flex flex-col items-center pt-6">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(113,47,255,0.7)] flex-shrink-0 z-10" />
              </div>
              <div className="flex-1">
                <ExperienceCard
                  company={exp.company}
                  role={exp.role}
                  period={exp.period}
                  location={exp.location}
                  preview={exp.preview}
                  details={exp.details}
                  images={exp.images}
                  index={i}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-900/8 blur-[140px] pointer-events-none z-[-1]" />
    </section>
  );
};
