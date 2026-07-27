"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SpecularButton from "@/components/ui/SpecularButton";

type SliderImage = { src: string; label?: string };

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  location: string;
  preview: string[];
  details: string[];
  images?: SliderImage[];
  index: number;
};

export const ExperienceCard = ({
  company,
  role,
  period,
  location,
  preview,
  details,
  images = [],
  index,
}: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 260 : -260, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -260 : 260, opacity: 0 }),
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    
    if (swipe < -500) {
      go(1); // swipe left = next
    } else if (swipe > 500) {
      go(-1); // swipe right = previous
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.62)] backdrop-blur-sm shadow-lg hover:border-purple-500/60 transition-colors duration-300 overflow-hidden"
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-10" />

      {/* ── IMAGE SLIDER ── */}
      {images.length > 0 && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40 flex-shrink-0">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              <Image
                src={images[current].src}
                alt={images[current].label ?? company}
                fill
                className="object-cover object-center pointer-events-none"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              {/* label */}
              {images[current].label && (
                <span className="absolute bottom-3 left-4 z-20 text-[11px] text-white/80 italic pointer-events-none">
                  {images[current].label}
                </span>
              )}
            </motion.div>
          </AnimatePresence>

          {/* prev / next */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-700/70 transition-all duration-200"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-700/70 transition-all duration-200"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>

              {/* pagination dots - enhanced */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current 
                        ? "h-2 w-6 bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" 
                        : "h-2 w-2 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* counter */}
          <span className="absolute top-2 right-3 z-20 text-[11px] text-white/70 bg-black/40 rounded-full px-2 py-0.5">
            {current + 1} / {images.length}
          </span>
        </div>
      )}

      {/* ── CARD BODY ── */}
      <div className="p-6 flex flex-col flex-1">
        {/* header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-[17px] font-bold text-white leading-snug">{company}</h3>
            <p className="text-[13px] font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mt-0.5">
              {role}
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <span className="text-[11px] font-medium text-gray-400 bg-[rgba(113,47,255,0.15)] border border-purple-500/30 rounded-full px-3 py-1">
              {period}
            </span>
            <span className="text-[11px] text-gray-500">{location}</span>
          </div>
        </div>

        {/* preview bullets */}
        <ul className="space-y-2 mb-4">
          {preview.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-gray-300 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        {/* expandable details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-2 mb-4 overflow-hidden"
            >
              {details.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-gray-400 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500/60 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* toggle button */}
        {details.length > 0 && (
          <SpecularButton
            size="sm"
            radius={99}
            tint="#7c3aed"
            tintOpacity={0.06}
            lineColor="#a78bfa"
            baseColor="#4c1d95"
            intensity={1}
            shineSize={14}
            shineFade={50}
            thickness={1}
            followMouse
            proximity={180}
            textColor="#c4b5fd"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto self-start border border-purple-500/30 bg-purple-950/20"
          >
            <span className="flex items-center gap-1.5">
              {isExpanded ? "Show Less" : "See More Details"}
              {isExpanded
                ? <ChevronUpIcon className="h-3.5 w-3.5" />
                : <ChevronDownIcon className="h-3.5 w-3.5" />}
            </span>
          </SpecularButton>
        )}
      </div>
    </motion.div>
  );
};
