"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

const CV_PATH =
  "/PDF/Karim_Ayman_BIM Modeler & Technical_Office_Draftsman_CV.pdf";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* ── track scroll for navbar bg opacity ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── highlight active nav link via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.link.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#030014]/95 shadow-lg shadow-[#2A0E61]/50"
          : "bg-[#030014]/80"
      }`}
    >
      <div className="mx-auto flex h-[65px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* ── Logo ── */}
        <motion.div
          onHoverStart={() => setIsLogoHovered(true)}
          onHoverEnd={() => setIsLogoHovered(false)}
        >
        <Link
          href="#about-me"
          className="flex items-center gap-2 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            className="relative flex items-center justify-center"
            style={{ width: "2.4rem", height: "2.4rem" }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* ── orbit ring 1 (horizontal) ── */}
            <motion.span
              className="absolute rounded-full border border-purple-400/60 pointer-events-none"
              style={{ width: "140%", height: "45%", borderRadius: "50%" }}
              animate={isLogoHovered
                ? { rotateZ: 360, opacity: 1 }
                : { rotateZ: 0, opacity: 0 }}
              transition={
                isLogoHovered
                  ? { rotateZ: { duration: 1.4, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.25 } }
                  : { duration: 0.25 }
              }
            />
            {/* ── orbit ring 2 (tilted 60°) ── */}
            <motion.span
              className="absolute rounded-full border border-cyan-400/50 pointer-events-none"
              style={{ width: "140%", height: "45%", borderRadius: "50%", rotateX: "60deg" }}
              animate={isLogoHovered
                ? { rotateZ: -360, opacity: 1 }
                : { rotateZ: 0, opacity: 0 }}
              transition={
                isLogoHovered
                  ? { rotateZ: { duration: 1.8, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.25 } }
                  : { duration: 0.25 }
              }
            />
            {/* ── orbit ring 3 (tilted 120°) ── */}
            <motion.span
              className="absolute rounded-full border border-purple-300/40 pointer-events-none"
              style={{ width: "140%", height: "45%", borderRadius: "50%", rotateX: "120deg" }}
              animate={isLogoHovered
                ? { rotateZ: 360, opacity: 1 }
                : { rotateZ: 0, opacity: 0 }}
              transition={
                isLogoHovered
                  ? { rotateZ: { duration: 2.2, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.25 } }
                  : { duration: 0.25 }
              }
            />
            {/* ── glow bloom ── */}
            <motion.span
              className="absolute inset-0 rounded-full blur-md bg-gradient-to-br from-purple-500 to-cyan-400 pointer-events-none"
              animate={{ opacity: isLogoHovered ? 0.55 : 0, scale: isLogoHovered ? 1.3 : 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* ── logo image ── */}
            <Image
              src="/logo2.png"
              alt="Karim Ayman logo"
              width={100}
              height={100}
              className="relative z-10 cursor-pointer bg-transparent object-contain"
              style={{ width: "1.6rem", height: "auto" }}
              priority
            />
          </motion.div>
          <span className="hidden font-bold text-gray-300 sm:block group-hover:text-white transition-colors duration-200">
            Karim Ayman
          </span>
        </Link>
        </motion.div>

        {/* ── Desktop nav links (centered pill) ── */}
        <div className="absolute left-1/2 hidden h-full -translate-x-1/2 items-center xl:flex">
          <div className="flex items-center gap-1 rounded-full border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.85)] px-3 py-2">
            {NAV_LINKS.map((link) => {
              const id = link.link.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.title}
                  href={link.link}
                  className={`relative px-4 py-1.5 text-[14px] font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {/* active pill bg */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-[rgba(112,66,248,0.25)] border border-[rgba(112,66,248,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.title}</span>
                </Link>
              );
            })}

            {/* separator */}
            <span className="mx-2 h-4 w-px bg-[rgba(112,66,248,0.4)]" />

            {/* Download CV pill button */}
            <motion.a
              href={CV_PATH}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-1.5 text-[14px] font-semibold text-white
                bg-gradient-to-r from-purple-600 to-cyan-500
                shadow-[0_0_12px_rgba(113,47,255,0.4)]
                hover:shadow-[0_0_20px_rgba(113,47,255,0.65)]
                transition-shadow duration-300"
            >
              {/* shimmer sweep */}
              <motion.span
                className="pointer-events-none absolute inset-0 -skew-x-12 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <span className="relative z-10 flex items-center gap-1.5">
                Download CV
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden="true"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </motion.svg>
              </span>
            </motion.a>
          </div>
        </div>

        {/* ── Social icons (right) ── */}
        <div className="ml-5 hidden gap-3 xl:flex">
          {SOCIALS.map(({ link, name, icon: Icon }) => {
            const shadowColor: Record<string, string> = {
              LinkedIn:  "hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.9)]  hover:text-[#0a66c2]",
              Instagram: "hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.9)]  hover:text-[#e1306c]",
              WhatsApp:  "hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.9)]  hover:text-[#25d366]",
              GitHub:    "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:text-white",
            };
            return (
              <motion.div key={name} whileHover={{ y: -2, scale: 1.15 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className={`text-gray-400 transition-all duration-200 ${shadowColor[name] ?? "hover:text-[#b49bff]"}`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* ── Mobile hamburger ── */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          className="rounded-lg p-2 text-white transition hover:bg-[#7042f833] focus:outline-none focus:ring-2 focus:ring-[#7042f8] xl:hidden"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </motion.button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute left-0 top-[65px] w-full border-t border-[#7042f84d] bg-[#030014]/98 px-6 py-6 xl:hidden"
          >
            <div className="flex flex-col items-center gap-3">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.link}
                    className="block text-center text-[16px] font-semibold text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-[#7042f820]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Download CV */}
              <motion.a
                href={CV_PATH}
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.07 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 flex items-center gap-2 rounded-full px-6 py-2.5 text-[15px] font-semibold text-white
                  bg-gradient-to-r from-purple-600 to-cyan-500
                  shadow-[0_0_14px_rgba(113,47,255,0.4)]"
              >
                Download CV
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden="true"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
                </motion.svg>
              </motion.a>
            </div>

            {/* Social icons in mobile */}
            <div className="mt-6 flex justify-center gap-6 border-t border-[#7042f830] pt-5">
              {SOCIALS.map(({ link, name, icon: Icon }) => {
                const shadowColor: Record<string, string> = {
                  LinkedIn:  "hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.9)]  hover:text-[#0a66c2]",
                  Instagram: "hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.9)]  hover:text-[#e1306c]",
                  WhatsApp:  "hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.9)]  hover:text-[#25d366]",
                  GitHub:    "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:text-white",
                };
                return (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  aria-label={name}
                  className={`text-gray-400 transition-all duration-200 ${shadowColor[name] ?? "hover:text-[#b49bff]"}`}
                >
                  <Icon className="h-6 w-6" />
                </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
