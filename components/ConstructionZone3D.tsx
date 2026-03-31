"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * 3D Construction Zone Scene
 *
 * A CSS 3D perspective scene showing a highway construction zone
 * with traffic cones, barriers, arrow boards, and an animated
 * work zone. Reacts to scroll position. Mobile: simplified static version.
 */

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

export function ConstructionZone3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms driven by scroll
  const roadShift = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const coneFloat = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const signRotate = useTransform(scrollYProgress, [0, 0.5], [0, 3]);
  const skyShift = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {/* Night sky with gradient */}
      <motion.div
        className="absolute inset-0"
        style={{ y: isMobile ? 0 : skyShift }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#040b16] via-[#0d1b2e] to-[#1a3a5c]" />

        {/* Stars */}
        {starData.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: s.size,
              height: s.size,
              left: `${s.x}%`,
              top: `${s.y}%`,
              opacity: s.opacity,
              animation: `star-twinkle ${s.dur}s ease-in-out infinite ${s.delay}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Horizon glow */}
      <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-[800px] h-[200px] bg-[#f26725]/8 rounded-full blur-[120px]" />
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 w-[400px] h-[100px] bg-[#2ea3f2]/12 rounded-full blur-[80px]" />

      {/* === ROAD SURFACE === */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-[280%] h-[68%]"
        style={{
          transform: "translateX(-50%) rotateX(70deg)",
          transformOrigin: "center bottom",
          y: isMobile ? 0 : roadShift,
        }}
      >
        {/* Asphalt */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#252525] to-[#333]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
            backgroundSize: "4px 4px",
          }}
        />

        {/* Shoulder lines */}
        <div className="absolute left-[16%] top-0 bottom-0 w-[3px] bg-white/70" />
        <div className="absolute right-[16%] top-0 bottom-0 w-[3px] bg-white/70" />

        {/* Center double yellow */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-[4px] w-[2px] bg-[#f5d442]/80" />
        <div className="absolute left-1/2 top-0 bottom-0 translate-x-[4px] w-[2px] bg-[#f5d442]/80" />

        {/* Lane dashes */}
        {[33, 67].map((pos) => (
          <div key={pos} className="absolute top-0 bottom-0 w-[2px] overflow-hidden" style={{ left: `${pos}%` }}>
            <div
              className="w-full"
              style={{
                height: "200%",
                backgroundImage: "repeating-linear-gradient(to bottom, white 0px, white 28px, transparent 28px, transparent 68px)",
                animation: "road-dash 2s linear infinite",
              }}
            />
          </div>
        ))}

        {/* Orange construction zone line overlay (left lane closed) */}
        <div className="absolute left-[33%] top-[20%] bottom-0 w-[2px] bg-[#f26725]/60" />

        {/* Construction zone hash marks on closed lane */}
        <div
          className="absolute left-[16%] top-[20%] bottom-0"
          style={{
            width: "17%",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(242,103,37,0.15) 8px, rgba(242,103,37,0.15) 12px)",
          }}
        />

        {/* Road reflectors */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={`refl-${i}`}>
            <div
              className="absolute left-[16%] w-2 h-1 rounded-full bg-[#f26725]/60"
              style={{
                top: `${12 + i * 12}%`,
                animation: `cone-pulse 1.5s ease-in-out infinite ${i * 0.2}s`,
              }}
            />
            <div
              className="absolute right-[16%] w-2 h-1 rounded-full bg-[#f26725]/60"
              style={{
                top: `${12 + i * 12}%`,
                animation: `cone-pulse 1.5s ease-in-out infinite ${i * 0.2 + 0.1}s`,
              }}
            />
          </div>
        ))}
      </motion.div>

      {/* === CONSTRUCTION ZONE ELEMENTS === */}

      {/* Traffic cones in diagonal taper (left side, closing lane) */}
      {conePositions.map((cone, i) => (
        <motion.div
          key={`cone-${i}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
          className="absolute"
          style={{
            bottom: cone.bottom,
            left: cone.left,
            y: isMobile ? 0 : coneFloat,
          }}
        >
          <TrafficCone3D size={cone.size} glow={cone.glow} />
        </motion.div>
      ))}

      {/* Right-side cones (lane boundary) */}
      {rightCones.map((cone, i) => (
        <motion.div
          key={`rcone-${i}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
          className="absolute"
          style={{
            bottom: cone.bottom,
            right: cone.right,
            y: isMobile ? 0 : coneFloat,
          }}
        >
          <TrafficCone3D size={cone.size} glow={false} />
        </motion.div>
      ))}

      {/* Type III Barricade - left foreground */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-[12%] left-[3%] md:left-[8%]"
        style={{ y: isMobile ? 0 : coneFloat }}
      >
        <Barricade3D />
      </motion.div>

      {/* Type III Barricade - right foreground */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-[12%] right-[3%] md:right-[8%]"
        style={{ y: isMobile ? 0 : coneFloat }}
      >
        <Barricade3D flipped />
      </motion.div>

      {/* Arrow Board (LED sign) - above vanishing point */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-[22%] left-1/2 -translate-x-1/2"
        style={{ rotate: isMobile ? 0 : signRotate }}
      >
        <ArrowBoard3D />
      </motion.div>

      {/* Flagger silhouette - mid-road */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-[32%] left-[42%] md:left-[44%]"
      >
        <FlaggerSilhouette />
      </motion.div>

      {/* "ROAD WORK AHEAD" sign post - left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-[42%] left-[12%] md:left-[18%]"
      >
        <WarningSign />
      </motion.div>

      {/* Speed limit sign - right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-[44%] right-[14%] md:right-[20%]"
      >
        <SpeedSign />
      </motion.div>

      {/* Vanishing point glow */}
      <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full blur-[3px]" />

      {/* Bottom ambient light */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#1a3a5c]/30 to-transparent" />
    </div>
  );
}

/* === SUB-COMPONENTS === */

function TrafficCone3D({ size = 24, glow = false }: { size?: number; glow?: boolean }) {
  const h = size;
  const w = Math.round(size * 0.7);
  return (
    <div className="relative" style={{ width: w, height: h }}>
      <svg width={w} height={h} viewBox="0 0 28 40" fill="none">
        {/* Cone shadow */}
        <ellipse cx="14" cy="38" rx="12" ry="2" fill="rgba(0,0,0,0.3)" />
        {/* Base */}
        <rect x="2" y="33" width="24" height="7" rx="1.5" fill="#2a2a2a" />
        <rect x="2" y="33" width="24" height="2" rx="1" fill="#444" />
        {/* Cone body with gradient */}
        <path d="M6 33L12 3H16L22 33H6Z" fill="url(#coneGrad)" />
        {/* Reflective stripes */}
        <path d="M8.5 25L10 17H18L19.5 25H8.5Z" fill="white" opacity="0.92" />
        <path d="M11 13L12 7H16L17 13H11Z" fill="white" opacity="0.92" />
        {/* Cone tip */}
        <circle cx="14" cy="3" r="2.5" fill="#e55a1e" />
        {/* Highlight */}
        <path d="M11 33L13.5 8H14.5L16 33" fill="white" opacity="0.08" />
        <defs>
          <linearGradient id="coneGrad" x1="14" y1="3" x2="14" y2="33">
            <stop offset="0%" stopColor="#f26725" />
            <stop offset="100%" stopColor="#d4541b" />
          </linearGradient>
        </defs>
      </svg>
      {glow && (
        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#f26725]/40 blur-[4px]"
          style={{ animation: "cone-pulse 2s ease-in-out infinite" }}
        />
      )}
    </div>
  );
}

function Barricade3D({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="100"
      height="50"
      viewBox="0 0 100 50"
      fill="none"
      style={{ transform: flipped ? "scaleX(-1)" : undefined }}
    >
      {/* Shadow */}
      <ellipse cx="50" cy="48" rx="42" ry="2" fill="rgba(0,0,0,0.2)" />
      {/* Posts */}
      <rect x="8" y="12" width="5" height="36" rx="1" fill="#4a4a4a" />
      <rect x="87" y="12" width="5" height="36" rx="1" fill="#4a4a4a" />
      {/* Top rail */}
      <rect x="0" y="4" width="100" height="10" rx="2" fill="#f26725" />
      {/* Middle rail */}
      <rect x="0" y="18" width="100" height="10" rx="2" fill="#f26725" />
      {/* White reflective stripes */}
      <rect x="0" y="7" width="100" height="4" fill="white" opacity="0.88" />
      <rect x="0" y="21" width="100" height="4" fill="white" opacity="0.88" />
      {/* Diagonal warning stripes */}
      <g opacity="0.4">
        <path d="M5 4L19 14H15L1 4H5Z" fill="#1a1a1a" />
        <path d="M23 4L37 14H33L19 4H23Z" fill="#1a1a1a" />
        <path d="M41 4L55 14H51L37 4H41Z" fill="#1a1a1a" />
        <path d="M59 4L73 14H69L55 4H59Z" fill="#1a1a1a" />
        <path d="M77 4L91 14H87L73 4H77Z" fill="#1a1a1a" />
      </g>
      {/* Warning lights */}
      <circle cx="25" cy="3" r="3.5" fill="#f5d442" opacity="0.8" style={{ animation: "barricade-flash 1s ease-in-out infinite" }} />
      <circle cx="75" cy="3" r="3.5" fill="#f5d442" opacity="0.8" style={{ animation: "barricade-flash 1s ease-in-out infinite 0.5s" }} />
      {/* Highlight */}
      <rect x="0" y="4" width="100" height="1.5" fill="white" opacity="0.1" />
    </svg>
  );
}

function ArrowBoard3D() {
  return (
    <div className="relative">
      {/* Board support pole */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-1 h-6 bg-[#555]" />
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none">
        {/* Board frame */}
        <rect x="0" y="0" width="80" height="32" rx="4" fill="#111" stroke="#333" strokeWidth="1.5" />
        {/* LED dots forming right arrow */}
        {/* Row 1 - tip */}
        <circle cx="60" cy="16" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.6s" }} />
        {/* Row 2 */}
        <circle cx="52" cy="10" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.45s" }} />
        <circle cx="52" cy="22" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.45s" }} />
        {/* Row 3 */}
        <circle cx="44" cy="8" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.3s" }} />
        <circle cx="44" cy="16" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.3s" }} />
        <circle cx="44" cy="24" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.3s" }} />
        {/* Shaft */}
        <circle cx="36" cy="16" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0.15s" }} />
        <circle cx="28" cy="16" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0s" }} />
        <circle cx="20" cy="16" r="2.5" fill="#f5d442" style={{ animation: "led-seq 1.5s ease-in-out infinite 0s" }} />
      </svg>
    </div>
  );
}

function FlaggerSilhouette() {
  return (
    <svg width="20" height="45" viewBox="0 0 20 45" fill="none">
      {/* Head */}
      <circle cx="10" cy="4" r="4" fill="#333" />
      {/* Hard hat */}
      <path d="M5 4 Q10 -1 15 4" fill="#f26725" stroke="#d4541b" strokeWidth="0.5" />
      {/* Body */}
      <rect x="7" y="8" width="6" height="14" rx="2" fill="#f26725" />
      {/* Reflective vest stripe */}
      <rect x="7" y="14" width="6" height="2" fill="#f5d442" opacity="0.9" />
      <rect x="7" y="10" width="6" height="1.5" fill="#f5d442" opacity="0.9" />
      {/* Legs */}
      <rect x="7.5" y="22" width="2" height="12" rx="1" fill="#333" />
      <rect x="10.5" y="22" width="2" height="12" rx="1" fill="#333" />
      {/* Stop/Slow paddle arm extended */}
      <line x1="13" y1="12" x2="20" y2="6" stroke="#333" strokeWidth="1.5" />
      {/* Paddle */}
      <rect x="17" y="0" width="3" height="8" rx="0.5" fill="#cc0000" />
      <text x="18.5" y="5" textAnchor="middle" fill="white" fontSize="2.5" fontWeight="bold">S</text>
      {/* Boots */}
      <rect x="6.5" y="33" width="3.5" height="3" rx="1" fill="#1a1a1a" />
      <rect x="10" y="33" width="3.5" height="3" rx="1" fill="#1a1a1a" />
    </svg>
  );
}

function WarningSign() {
  return (
    <svg width="28" height="50" viewBox="0 0 28 50" fill="none">
      {/* Post */}
      <rect x="12" y="22" width="4" height="28" fill="#666" />
      {/* Diamond sign */}
      <path d="M14 0 L28 14 L14 28 L0 14 Z" fill="#f5d442" stroke="#d4a80a" strokeWidth="1" />
      {/* Inner border */}
      <path d="M14 3 L25 14 L14 25 L3 14 Z" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
      {/* Worker symbol */}
      <circle cx="11" cy="11" r="2" fill="#1a1a1a" />
      <path d="M9 13 L11 18 L13 13" fill="none" stroke="#1a1a1a" strokeWidth="1.2" />
      <line x1="11" y1="18" x2="11" y2="22" stroke="#1a1a1a" strokeWidth="1.2" />
      <path d="M9 15 L14 12" stroke="#1a1a1a" strokeWidth="1.2" />
    </svg>
  );
}

function SpeedSign() {
  return (
    <svg width="22" height="48" viewBox="0 0 22 48" fill="none">
      {/* Post */}
      <rect x="9" y="22" width="4" height="26" fill="#666" />
      {/* Sign background */}
      <rect x="0" y="0" width="22" height="22" rx="1" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* SPEED LIMIT text */}
      <text x="11" y="7" textAnchor="middle" fill="#1a1a1a" fontSize="3" fontWeight="bold">SPEED</text>
      <text x="11" y="10.5" textAnchor="middle" fill="#1a1a1a" fontSize="3" fontWeight="bold">LIMIT</text>
      {/* Number */}
      <text x="11" y="19" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontWeight="900">25</text>
    </svg>
  );
}

/* === DATA === */

const starData = [
  { x: 5, y: 6, size: "1.5px", opacity: 0.2, dur: 3, delay: 0 },
  { x: 15, y: 3, size: "1px", opacity: 0.15, dur: 4, delay: 1 },
  { x: 22, y: 16, size: "2px", opacity: 0.25, dur: 2.5, delay: 0.5 },
  { x: 30, y: 5, size: "1.5px", opacity: 0.2, dur: 3.5, delay: 1.5 },
  { x: 38, y: 10, size: "1px", opacity: 0.3, dur: 3, delay: 0.3 },
  { x: 45, y: 2, size: "1.5px", opacity: 0.2, dur: 4.5, delay: 2 },
  { x: 52, y: 20, size: "1px", opacity: 0.15, dur: 3, delay: 0.8 },
  { x: 58, y: 6, size: "2px", opacity: 0.25, dur: 2.5, delay: 1.2 },
  { x: 65, y: 13, size: "1.5px", opacity: 0.2, dur: 4, delay: 0.6 },
  { x: 72, y: 4, size: "1px", opacity: 0.3, dur: 3.5, delay: 1.8 },
  { x: 78, y: 18, size: "1.5px", opacity: 0.15, dur: 3, delay: 0.4 },
  { x: 85, y: 8, size: "2px", opacity: 0.25, dur: 2.5, delay: 1.6 },
  { x: 92, y: 4, size: "1px", opacity: 0.2, dur: 4, delay: 0.9 },
  { x: 12, y: 22, size: "1.5px", opacity: 0.15, dur: 3.5, delay: 1.1 },
  { x: 35, y: 25, size: "1px", opacity: 0.2, dur: 3, delay: 0.7 },
  { x: 55, y: 27, size: "1.5px", opacity: 0.15, dur: 4.5, delay: 1.4 },
  { x: 75, y: 23, size: "1px", opacity: 0.25, dur: 2.5, delay: 0.2 },
  { x: 88, y: 14, size: "2px", opacity: 0.2, dur: 3, delay: 1.7 },
];

const conePositions = [
  { bottom: "50%", left: "30%", size: 14, glow: true },
  { bottom: "45%", left: "27%", size: 16, glow: false },
  { bottom: "40%", left: "24%", size: 18, glow: true },
  { bottom: "35%", left: "21%", size: 20, glow: false },
  { bottom: "30%", left: "18%", size: 23, glow: true },
  { bottom: "24%", left: "14%", size: 26, glow: false },
];

const rightCones = [
  { bottom: "50%", right: "30%", size: 14 },
  { bottom: "44%", right: "27%", size: 17 },
  { bottom: "38%", right: "24%", size: 20 },
  { bottom: "30%", right: "20%", size: 24 },
];
