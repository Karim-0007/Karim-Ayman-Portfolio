"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type ProjectSliderProps = {
  title: string;
  company: string;
  images: { src: string; label?: string }[];
  index: number;
};

export const ProjectSlider = ({ title, company, images, index }: ProjectSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.62)] backdrop-blur-sm overflow-hidden shadow-lg hover:border-purple-500/60 transition-colors duration-300 group"
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-10" />

      {/* image slider */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current].src}
              alt={images[current].label ?? title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* dark gradient bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* prev / next */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-700/70 transition-all duration-200"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-700/70 transition-all duration-200"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-5 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* image counter */}
        <span className="absolute top-2 right-3 z-20 text-[11px] text-white/70 bg-black/40 rounded-full px-2 py-0.5">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* info */}
      <div className="p-4">
        <h3 className="text-[16px] font-bold text-white leading-snug">{title}</h3>
        <p className="text-[12px] text-purple-400 mt-1">{company}</p>
        {images[current].label && (
          <p className="text-[11px] text-gray-500 mt-1 italic">{images[current].label}</p>
        )}
      </div>
    </motion.div>
  );
};
