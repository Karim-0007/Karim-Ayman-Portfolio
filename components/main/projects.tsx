"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { ModelShowcaseCard } from "@/components/sub/model-showcase-card";

const FEATURED_3D_MODELS = [
  {
    id: 1,
    title: "Villa Center - Architecture Model",
    description: "High-detail architectural BIM model of a modern luxury villa, featuring complete MEP systems, structural details, and interior design elements. Exported from Revit with full LOD specifications.",
    modelUrl: "/3D/Project Villa_Center Model - Architecture_karim_karim.glb",
    thumbnailUrl: "/3D/3d pic/Project Villa_Center Model .png",
    scale: 1,
    specs: {
      area: "650 m²",
      floors: "2 Floors + Roof",
      type: "Residential Villa"
    }
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Heading */}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span className="Welcome-text text-[11px] sm:text-[13px] font-semibold">
              Featured 3D Projects
            </span>
          </div>
        </div>
        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Interactive 3D Models
        </h2>
        <p className="text-gray-400 text-center mt-2 sm:mt-3 max-w-[600px] text-[13px] sm:text-[15px] leading-6 sm:leading-7">
          Explore my BIM projects in full 3D — rotate, zoom, and inspect architectural models exported directly from Revit.
        </p>
      </motion.div>

      {/* 3D Models Grid */}
      <div className="w-full max-w-full px-2 sm:px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {FEATURED_3D_MODELS.map((model) => (
            <ModelShowcaseCard
              key={model.id}
              title={model.title}
              description={model.description}
              modelUrl={model.modelUrl}
              thumbnailUrl={model.thumbnailUrl}
              scale={model.scale}
              specs={model.specs}
            />
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 sm:mt-12 text-center px-4"
      >
        <p className="text-gray-500 text-xs sm:text-sm">
          💡 Click any project card to open the interactive 3D viewer
        </p>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full bg-cyan-900/8 blur-[140px] pointer-events-none z-[-1]" />
    </section>
  );
};
