"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // منع التمرير أثناء ظهور الـ Preloader
    document.body.style.overflow = "hidden";

    // إخفاء الـ Preloader بعد 2.5 ثانية
    const hideTimeout = setTimeout(() => {
      setShowPreloader(false);
      // إعادة تفعيل التمرير
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(hideTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* خلفية الإضاءة الخفيفة فوق الأسود */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-600/10 blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* جزيئات متطايرة خفيفة */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* نص Portfolio... فقط */}
          <div className="relative flex items-center justify-center">
            <div className="flex">
              {"Portfolio...".split("").map((char, i) => (
                <motion.span
                  key={`portfolio-${i}`}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  style={{
                    fontFamily:
                      "'Orbitron', 'Rajdhani', 'Inter', sans-serif",
                    letterSpacing: "0.05em",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};