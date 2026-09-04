"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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

  const handleDragEnd = (_e: any, { offset, velocity }: any) => {
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
      className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.92)] shadow-lg hover:border-purple-500/60 transition-colors duration-300 overflow-hidden"
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
                loading="lazy"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
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
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white hover:bg-purple-700/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white hover:bg-purple-700/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>

              {/* pagination dots - enhanced */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center gap-2 bg-black/80 rounded-full px-3 py-2 border border-white/10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    suppressHydrationWarning={true}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-[0.8rem] h-[0.8rem] flex items-center justify-center ${
                      i === current 
                        ? "bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  >
                    <span className={`block rounded-full ${i === current ? "w-2 h-2" : "w-1.5 h-1.5"}`} />
                  </button>
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
            <span className="text-[11px] font-medium text-gray-300 bg-[rgba(113,47,255,0.15)] border border-purple-500/30 rounded-full px-3 py-1">
              {period}
            </span>
            <span className="text-[11px] text-gray-300">{location}</span>
          </div>
        </div>

        {/* preview bullets */}
        <div className="space-y-2 mb-4" suppressHydrationWarning={true}>
          {preview.map((point, i) => (
            <p key={i} className="text-[13px] text-gray-300 leading-relaxed">
              {point}
            </p>
          ))}
        </div>

        {/* expandable details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.35, 
                ease: "easeInOut",
                height: { duration: 0.35 }
              }}
              className="mb-4 overflow-hidden"
            >
              <div className="space-y-2 py-2">
                {details.map((point, i) => (
                  <p key={i} className="text-[13px] text-gray-400 leading-relaxed">
                    • {point}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* toggle button */}
        {details.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-auto self-start px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 hover:bg-purple-900/30 transition-all duration-200 text-sm font-medium flex items-center gap-1.5 hover:border-purple-400/50 hover:text-purple-200"
          >
            {isExpanded ? "Show Less" : "See More Details"}
            {isExpanded
              ? <ChevronUpIcon className="h-3.5 w-3.5" />
              : <ChevronDownIcon className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
    </motion.div>
  );
};
