"use client";

import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/motion";
import Image from "next/image";
import SpecularButton from "@/components/ui/SpecularButton";

type PdfCardProps = {
  title: string;
  issuer: string;
  issuerLogo?: string;
  year?: string;
  certId?: string;
  description: string;
  file: string;
  index: number;
};

export const PdfCard = ({
  title,
  issuer,
  issuerLogo,
  year,
  certId,
  description,
  file,
  index,
}: PdfCardProps) => {
  return (
    <motion.div
      variants={slideInFromLeft(0.15 * index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex flex-col overflow-hidden rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.92)] shadow-lg hover:border-purple-500/70 transition-colors duration-300 group"
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-cyan-400 to-transparent z-10" />

      {/* hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-purple-900/15 to-cyan-900/10" />

      <div className="relative z-10 flex flex-col flex-1 p-5">

        {/* header: logo + title + year */}
        <div className="flex items-start gap-3 mb-3">
          {/* issuer logo */}
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[rgba(113,47,255,0.12)] border border-purple-500/25 flex items-center justify-center overflow-hidden">
            {issuerLogo ? (
              <Image
                src={issuerLogo}
                alt={issuer}
                width={28}
                height={28}
                className="object-contain"
                style={{ width: 28, height: "auto" }}
              />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v13a2 2 0 01-2 2z" />
              </svg>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-bold text-white leading-snug">{title}</h3>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              <p className="text-[12px] text-purple-400">{issuer}</p>
              {year && (
                <span className="text-[10px] font-medium text-gray-400 bg-[rgba(113,47,255,0.15)] border border-purple-500/30 rounded-full px-2 py-0.5">
                  {year}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* cert ID + verify link */}
        {certId && (
          <div className="flex items-center gap-2 mb-3 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[#7042f820]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[10px] text-gray-500 font-mono truncate flex-1">
              ID: {certId}
            </span>
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-150 flex-shrink-0"
              aria-label="Verify certificate"
            >
              Verify ↗
            </a>
          </div>
        )}

        {/* description */}
        <p className="text-[12px] text-gray-400 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* action buttons */}
        <div className="flex gap-2 mt-auto">
          <SpecularButton
            size="sm"
            radius={10}
            tint="#7c3aed"
            tintOpacity={0.18}
            lineColor="#c4b5fd"
            baseColor="#7c3aed"
            intensity={1.2}
            shineSize={12}
            shineFade={45}
            thickness={1.5}
            followMouse
            proximity={180}
            textColor="#ffffff"
            onClick={() => window.open(file, "_blank", "noopener,noreferrer")}
            className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-500"
          >
            View PDF
          </SpecularButton>
          <SpecularButton
            size="sm"
            radius={10}
            tint="#7c3aed"
            tintOpacity={0.05}
            lineColor="#a78bfa"
            baseColor="#4c1d95"
            intensity={1}
            shineSize={12}
            shineFade={45}
            thickness={1.5}
            followMouse
            proximity={180}
            textColor="#ffffff"
            onClick={() => {
              const a = document.createElement("a");
              a.href = file;
              a.download = "";
              a.click();
            }}
            className="flex-1 border border-[#7042f88b]"
          >
            Download
          </SpecularButton>
        </div>
      </div>
    </motion.div>
  );
};
