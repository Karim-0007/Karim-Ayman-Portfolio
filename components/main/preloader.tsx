"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // توليد الجزيئات العشوائية فقط في Client
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);

    // منع التمرير أثناء ظهور الـ Preloader
    document.body.style.overflow = "hidden";

    let isMinimumTimePassed = false;
    let isPageLoaded = false;

    // حد أدنى 2 ثانية لعرض الـ Preloader
    const minTimeTimeout = setTimeout(() => {
      isMinimumTimePassed = true;
      if (isPageLoaded) {
        hidePreloader();
      }
    }, 2000);

    // انتظار تحميل كل شيء (HTML, CSS, Images, Scripts)
    const handleLoad = () => {
      isPageLoaded = true;
      if (isMinimumTimePassed) {
        hidePreloader();
      }
    };

    function hidePreloader() {
      setShowPreloader(false);
      document.body.style.overflow = "auto";
    }

    // إذا كانت الصفحة محملة بالفعل (cached)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(minTimeTimeout);
      window.removeEventListener("load", handleLoad);
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
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
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