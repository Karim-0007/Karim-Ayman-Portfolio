"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { PdfCard } from "@/components/sub/pdf-card";
import { CERTIFICATES } from "@/constants";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Show only 2 certificates on mobile, all on desktop
  const isMobileView = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleCertificates = showAll || !isMobileView 
    ? CERTIFICATES 
    : CERTIFICATES.slice(0, 2);

  return (
    <section
      id="certificates"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Section heading */}
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
              className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5 inline-block drop-shadow-[0_0_6px_rgba(180,155,255,0.5)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span className="Welcome-text text-[11px] sm:text-[13px] font-semibold">
              Professional Certifications
            </span>
          </div>
        </div>

        <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          My Certificates
        </h2>
        <p className="text-gray-400 text-center mt-2 sm:mt-3 max-w-[600px] text-[13px] sm:text-[15px] leading-6 sm:leading-7 px-4">
          Verified credentials from accredited training programs, reflecting
          my commitment to professional growth in BIM and design technology.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 md:px-8 max-w-full">
        {visibleCertificates.map((cert, i) => (
          <PdfCard
            key={cert.title}
            title={cert.title}
            issuer={cert.issuer}
            issuerLogo={"issuerLogo" in cert ? cert.issuerLogo : undefined}
            year={"year" in cert ? cert.year : undefined}
            certId={"certId" in cert ? cert.certId : undefined}
            description={cert.description}
            file={cert.file}
            index={i}
          />
        ))}
      </div>

      {/* View More Button - Only on Mobile */}
      {CERTIFICATES.length > 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:hidden"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 rounded-xl text-white font-semibold text-sm hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(113,47,255,0.3)]"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUpIcon className="w-5 h-5" />
              </>
            ) : (
              <>
                View All Certificates ({CERTIFICATES.length})
                <ChevronDownIcon className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.div>
      )}

      {/* Subtle background glow */}
      <div className="w-full h-full absolute top-0 left-0 z-[-10] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>
    </section>
  );
};
