"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { CubeIcon, XMarkIcon } from "@heroicons/react/24/solid";

// Lazy load the 3D viewer only when modal opens
const RevitModelViewer = dynamic(
  () => import("./revit-model-viewer").then((mod) => ({ default: mod.RevitModelViewer })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }
);

type ModelShowcaseCardProps = {
  title: string;
  description: string;
  modelUrl: string;
  thumbnailUrl?: string;
  scale?: number;
  specs?: {
    area?: string;
    floors?: string;
    type?: string;
  };
};

export const ModelShowcaseCard = ({
  title,
  description,
  modelUrl,
  thumbnailUrl,
  scale = 1,
  specs
}: ModelShowcaseCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleOpenModel = () => {
    // Check if user is on mobile or slow connection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const isSlow = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g');
    
    if (isMobile || isSlow) {
      setShowWarning(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const confirmOpen = () => {
    setShowWarning(false);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative flex flex-col rounded-2xl border border-[#2A0E61] bg-[rgba(3,0,20,0.62)] backdrop-blur-sm shadow-lg hover:border-purple-500/60 transition-all duration-300 overflow-hidden"
      >
        {/* Thumbnail */}
        <div 
          className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-purple-900/20 to-cyan-900/20 cursor-pointer"
          onClick={handleOpenModel}
        >
          {thumbnailUrl ? (
            <img 
              src={thumbnailUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <CubeIcon className="w-20 h-20 text-purple-500/50 animate-pulse" />
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <CubeIcon className="w-12 h-12 text-white animate-bounce" />
              <span className="text-white font-semibold text-sm">View 3D Model</span>
            </div>
          </div>

          {/* 3D Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white text-xs font-bold shadow-lg">
            3D
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

          {/* Specs */}
          {specs && (
            <div className="flex flex-wrap gap-2 mb-4">
              {specs.area && (
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-xs">
                  📐 {specs.area}
                </span>
              )}
              {specs.floors && (
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs">
                  🏢 {specs.floors}
                </span>
              )}
              {specs.type && (
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-xs">
                  🏗️ {specs.type}
                </span>
              )}
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handleOpenModel}
            className="mt-auto px-6 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-semibold text-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <CubeIcon className="w-4 h-4" />
            Explore in 3D
          </button>
        </div>
      </motion.div>

      {/* Warning Modal for slow connections */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setShowWarning(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full bg-[rgba(3,0,20,0.95)] rounded-2xl border border-yellow-500/50 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Large 3D Model</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    This model is approximately <strong className="text-yellow-400">85 MB</strong>. 
                    Loading may take <strong className="text-yellow-400">20-40 seconds</strong> on your connection.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <button
                    onClick={() => setShowWarning(false)}
                    className="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmOpen}
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg font-medium text-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
                  >
                    Load Anyway
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] bg-[rgba(3,0,20,0.95)] rounded-2xl border border-purple-500/30 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-red-500/80 hover:bg-red-500 rounded-full text-white transition-colors duration-200"
                aria-label="Close"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* 3D Viewer */}
              <div className="w-full h-full">
                <RevitModelViewer 
                  modelUrl={modelUrl} 
                  title={title}
                  scale={scale}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
