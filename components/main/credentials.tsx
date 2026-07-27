"use client";

import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/lib/motion";

const CREDENTIALS = [
  {
    id: "education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 17.25c0 5.25-4.03 9-9 9s-9-3.75-9-9c0-1.097.19-2.15.534-3.133L12 14z" />
      </svg>
    ),
    label: "Education",
    accent: "from-purple-500 to-violet-500",
    glow: "rgba(139,92,246,0.35)",
    items: [
      {
        title: "B.A. in Geography & GIS",
        subtitle: "Tanta University · 2021",
        note: "Specialization in GIS, Cartography & Surveying — adds spatial analysis precision to site documentation and drawing coordination.",
      },
    ],
  },
  {
    id: "training",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.15.065a3 3 0 012.293 2.915V19.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-1.146a3 3 0 012.293-2.915l.15-.065A2.25 2.25 0 008.25 14.5V8.818M14.25 3.104c.251.023.501.05.75.082M19.5 8.5l-1.5 6" />
      </svg>
    ),
    label: "Training",
    accent: "from-cyan-500 to-blue-500",
    glow: "rgba(6,182,212,0.35)",
    items: [
      {
        title: "AutoCAD Advanced Drafting & Shop Drawing",
        subtitle: "2022",
        note: "",
      },
      {
        title: "Revit Architecture Essential",
        subtitle: "Autodesk Training Center · 2026",
        note: "",
      },
      {
        title: "Revit Quantity Takeoff",
        subtitle: "Autodesk Training Center · 2025",
        note: "",
      },
    ],
  },
  {
    id: "languages",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
    label: "Languages",
    accent: "from-pink-500 to-purple-500",
    glow: "rgba(236,72,153,0.35)",
    items: [
      {
        title: "Arabic",
        subtitle: "Native",
        note: "",
      },
      {
        title: "English",
        subtitle: "Fluent — Professional Working Proficiency",
        note: "",
      },
    ],
  },
];

const cardVariants = [slideInFromLeft(0.1), slideInFromTop, slideInFromRight(0.1)];

export const Credentials = () => {
  return (
    <section
      id="credentials"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      {/* heading */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div
          className="rounded-[32px] shadow-[0_0_18px_4px_rgba(113,47,255,0.35),0_0_40px_8px_rgba(180,155,255,0.15)] mb-6"
          style={{ width: "max-content" }}
        >
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#b49bff] mr-[10px] h-5 w-5 inline-block drop-shadow-[0_0_6px_rgba(180,155,255,0.9)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            <span className="Welcome-text text-[13px] font-semibold">
              Education, Training & Languages
            </span>
          </div>
        </div>

        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Credentials
        </h1>
        <p className="text-gray-400 text-center mt-3 max-w-[560px] text-[15px] leading-7">
          Academic background, professional training, and communication skills that support technical excellence on site.
        </p>
      </motion.div>

      {/* cards grid */}
      <div className="w-full max-w-full px-2 sm:px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {CREDENTIALS.map((cred, i) => (
          <motion.div
            key={cred.id}
            variants={cardVariants[i]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.62)] backdrop-blur-sm overflow-hidden shadow-lg hover:border-purple-500/60 transition-colors duration-300 h-full"
            style={{ boxShadow: `0 0 30px 2px ${cred.glow}22` }}
          >
            {/* top glow line with accent color */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cred.accent}`} />

            {/* header */}
            <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-[#7042f820]">
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${cred.accent} text-white shadow-md flex-shrink-0`}>
                {cred.icon}
              </div>
              <h2 className={`text-[17px] font-bold text-transparent bg-clip-text bg-gradient-to-r ${cred.accent}`}>
                {cred.label}
              </h2>
            </div>

            {/* items */}
            <div className="flex flex-col gap-5 px-6 py-5">
              {cred.items.map((item, j) => (
                <div key={j} className="relative pl-4">
                  {/* left accent bar */}
                  <div className={`absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b ${cred.accent}`} />
                  <p className="text-[14px] font-semibold text-white leading-snug">{item.title}</p>
                  <p className={`text-[12px] font-medium mt-0.5 text-transparent bg-clip-text bg-gradient-to-r ${cred.accent}`}>
                    {item.subtitle}
                  </p>
                  {item.note && (
                    <p className="text-[12px] text-gray-400 mt-1.5 leading-relaxed">{item.note}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[130px] pointer-events-none z-[-1]" />
    </section>
  );
};
