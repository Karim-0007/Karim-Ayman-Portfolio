"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const experience = [
  { period: "Feb 2023 – Present", company: "Hassan Allam Construction · Dabaa, Egypt", role: "Technical Office Draftsman & BIM Modeler", project: "Dabaa Nuclear Power Plant — Units 3 & 4", detail: "Produced 400+ waterproofing and structural shop drawings, rebar details, BBS, and as-built records to GOST/Rosatom and NPPA requirements. Supports BIM tendering with LOD 200/300 models and quantity takeoffs." },
  { period: "Nov 2022 – Feb 2023", company: "MEGA Construction · Dabaa, Egypt", role: "Technical Office Draftsman", project: "Dabaa Nuclear Power Plant — Unit 1", detail: "Created envelope, joint, penetration, waterproofing method-statement, and high-precision QTO drawings for a focused scope delivery." },
  { period: "2021 – 2022", company: "Orascom Construction PLC · Giza, Egypt", role: "Technical Office Draftsman", project: "Abu Rewash Wastewater Treatment Plant", detail: "Prepared P&IDs, reinforced-concrete, equipment-layout, piping-route, and as-built drawings for water-treatment works." },
];

export const Encryption = () => (
  <section id="experience" className="relative flex flex-col items-center justify-center min-h-screen w-full py-24 px-6 overflow-hidden scroll-mt-24">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#7042f8_0,_transparent_55%)]" />
    <motion.div variants={slideInFromTop} className="relative z-10 text-[40px] font-medium text-center text-gray-200 mb-12">Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">& Credentials</span></motion.div>
    <div className="relative z-10 grid w-full max-w-6xl gap-5 md:grid-cols-3">{experience.map((item) => <article key={item.company} className="rounded-2xl border border-[#7042f88b] bg-[rgba(3,0,20,0.62)] p-6 backdrop-blur-sm"><p className="text-sm text-cyan-300">{item.period}</p><h2 className="mt-2 text-xl font-semibold text-white">{item.role}</h2><p className="mt-2 text-sm text-purple-200">{item.company}</p><p className="mt-3 font-medium text-gray-200">{item.project}</p><p className="mt-3 text-sm leading-6 text-gray-300">{item.detail}</p></article>)}</div>
    <div className="relative z-10 mt-8 grid w-full max-w-6xl gap-5 md:grid-cols-3 text-gray-200"><div className="rounded-2xl border border-[#7042f84d] bg-[#03001499] p-5"><h2 className="font-semibold text-white">Education</h2><p className="mt-2 text-sm leading-6">B.A. in Geography & GIS<br />GIS, Cartography & Surveying<br />Tanta University · 2021</p></div><div className="rounded-2xl border border-[#7042f84d] bg-[#03001499] p-5"><h2 className="font-semibold text-white">Training</h2><p className="mt-2 text-sm leading-6">AutoCAD Advanced Drafting & Shop Drawing (2022)<br />Autodesk Revit & Revit Quantity Takeoff (2025)</p></div><div className="rounded-2xl border border-[#7042f84d] bg-[#03001499] p-5"><h2 className="font-semibold text-white">Languages</h2><p className="mt-2 text-sm leading-6">Arabic — Native<br />English — Fluent professional working proficiency</p></div></div>
  </section>
);
