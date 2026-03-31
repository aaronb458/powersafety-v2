"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const starPositions = [
  { x: 5, y: 8, size: 1.5, opacity: 0.2, dur: 3, delay: 0 },
  { x: 15, y: 3, size: 1, opacity: 0.15, dur: 4, delay: 1 },
  { x: 22, y: 18, size: 2, opacity: 0.25, dur: 2.5, delay: 0.5 },
  { x: 30, y: 6, size: 1.5, opacity: 0.2, dur: 3.5, delay: 1.5 },
  { x: 38, y: 12, size: 1, opacity: 0.3, dur: 3, delay: 0.3 },
  { x: 45, y: 2, size: 1.5, opacity: 0.2, dur: 4.5, delay: 2 },
  { x: 52, y: 22, size: 1, opacity: 0.15, dur: 3, delay: 0.8 },
  { x: 58, y: 7, size: 2, opacity: 0.25, dur: 2.5, delay: 1.2 },
  { x: 65, y: 15, size: 1.5, opacity: 0.2, dur: 4, delay: 0.6 },
  { x: 72, y: 4, size: 1, opacity: 0.3, dur: 3.5, delay: 1.8 },
  { x: 78, y: 20, size: 1.5, opacity: 0.15, dur: 3, delay: 0.4 },
  { x: 85, y: 10, size: 2, opacity: 0.25, dur: 2.5, delay: 1.6 },
  { x: 92, y: 5, size: 1, opacity: 0.2, dur: 4, delay: 0.9 },
  { x: 12, y: 25, size: 1.5, opacity: 0.15, dur: 3.5, delay: 1.1 },
  { x: 35, y: 28, size: 1, opacity: 0.2, dur: 3, delay: 0.7 },
  { x: 55, y: 30, size: 1.5, opacity: 0.15, dur: 4.5, delay: 1.4 },
  { x: 75, y: 26, size: 1, opacity: 0.25, dur: 2.5, delay: 0.2 },
  { x: 88, y: 16, size: 2, opacity: 0.2, dur: 3, delay: 1.7 },
  { x: 42, y: 9, size: 1.5, opacity: 0.3, dur: 3.5, delay: 0.1 },
  { x: 68, y: 32, size: 1, opacity: 0.15, dur: 4, delay: 1.3 },
];

// Cone positions with depth (z) for parallax effect
const coneLayout = [
  // Left side: back to front
  { x: 32, y: 48, z: 0.3, size: "sm" as const, side: "left" },
  { x: 27, y: 38, z: 0.5, size: "md" as const, side: "left" },
  { x: 21, y: 26, z: 0.8, size: "lg" as const, side: "left" },
  // Right side: back to front
  { x: 68, y: 48, z: 0.3, size: "sm" as const, side: "right" },
  { x: 73, y: 38, z: 0.5, size: "md" as const, side: "right" },
  { x: 79, y: 26, z: 0.8, size: "lg" as const, side: "right" },
];

export function Road3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    // Normalize to -1 to 1
    targetRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", onMouseMove, { passive: true });

    // Smooth lerp animation loop
    function animate() {
      const lerp = 0.08;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * lerp;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * lerp;
      setMouse({ x: currentRef.current.x, y: currentRef.current.y });
      frameRef.current = requestAnimationFrame(animate);
    }
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [onMouseMove]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" style={{ perspective: "900px" }}>
      {/* Night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-[#0d1b2e] to-[#1b3a5c]" />

      {/* Subtle stars */}
      <div className="absolute inset-0">
        {starPositions.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animation: `cone-pulse ${star.dur}s ease-in-out infinite ${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Horizon ambient glow */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 w-[600px] h-[200px] bg-[#2ea3f2]/15 rounded-full blur-[100px]" />
      <div className="absolute left-1/2 top-[32%] -translate-x-1/2 w-[300px] h-[80px] bg-[#f26725]/10 rounded-full blur-[60px]" />

      {/* Road surface with 3D perspective */}
      <div
        className="absolute bottom-0 left-1/2 w-[250%] h-[70%]"
        style={{
          transform: `translateX(-50%) rotateX(68deg)`,
          transformOrigin: "center bottom",
        }}
      >
        {/* Asphalt base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#2a2a2a] to-[#383838]" />

        {/* Asphalt texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #000 0.5px, transparent 0.5px)",
            backgroundSize: "4px 4px",
          }}
        />

        {/* Shoulder left */}
        <div className="absolute left-0 top-0 bottom-0 w-[18%] bg-gradient-to-r from-[#4a4a3a]/30 to-transparent" />
        {/* Shoulder right */}
        <div className="absolute right-0 top-0 bottom-0 w-[18%] bg-gradient-to-l from-[#4a4a3a]/30 to-transparent" />

        {/* Left solid edge line */}
        <div className="absolute left-[18%] top-0 bottom-0 w-[3px] bg-white/70" />
        {/* Right solid edge line */}
        <div className="absolute right-[18%] top-0 bottom-0 w-[3px] bg-white/70" />

        {/* Center double yellow line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-[3px] w-[2px] bg-[#f5d442]/80" />
        <div className="absolute left-1/2 top-0 bottom-0 translate-x-[3px] w-[2px] bg-[#f5d442]/80" />

        {/* Left lane dashes */}
        <div className="absolute left-[34%] top-0 bottom-0 w-[2px] overflow-hidden">
          <div
            className="w-full"
            style={{
              height: "200%",
              backgroundImage: "repeating-linear-gradient(to bottom, white 0px, white 30px, transparent 30px, transparent 70px)",
              animation: "road-dash 2s linear infinite",
            }}
          />
        </div>
        {/* Right lane dashes */}
        <div className="absolute right-[34%] top-0 bottom-0 w-[2px] overflow-hidden">
          <div
            className="w-full"
            style={{
              height: "200%",
              backgroundImage: "repeating-linear-gradient(to bottom, white 0px, white 30px, transparent 30px, transparent 70px)",
              animation: "road-dash 2s linear infinite",
            }}
          />
        </div>

        {/* Road reflectors left edge */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={`ref-l-${i}`}
            className="absolute left-[18%] w-2 h-1 rounded-full bg-[#f26725]/60"
            style={{
              top: `${15 + i * 14}%`,
              animation: `cone-pulse 1.5s ease-in-out infinite ${i * 0.2}s`,
            }}
          />
        ))}
        {/* Road reflectors right edge */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={`ref-r-${i}`}
            className="absolute right-[18%] w-2 h-1 rounded-full bg-[#f26725]/60"
            style={{
              top: `${15 + i * 14}%`,
              animation: `cone-pulse 1.5s ease-in-out infinite ${i * 0.2 + 0.1}s`,
            }}
          />
        ))}

        {/* Headlight sweep on road surface */}
        <div
          className="absolute left-[35%] top-0 w-[30%] h-full"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,200,0.03) 30%, rgba(255,255,200,0.06) 60%, transparent 100%)",
            animation: "headlight-sweep 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* Interactive traffic cones with parallax */}
      {coneLayout.map((cone, i) => {
        const parallaxX = mouse.x * cone.z * 12;
        const parallaxY = mouse.y * cone.z * 6;
        const isLeft = cone.side === "left";
        const baseX = isLeft ? cone.x : cone.x;

        return (
          <motion.div
            key={`cone-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
            className="absolute"
            style={{
              left: `${baseX}%`,
              bottom: `${cone.y}%`,
              transform: `translate(${parallaxX}px, ${parallaxY}px)`,
              willChange: "transform",
            }}
          >
            <TrafficCone3D size={cone.size} glowIntensity={cone.z} />
          </motion.div>
        );
      })}

      {/* Safety barriers bottom sides */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-[14%] left-[4%] md:left-[10%]"
        style={{
          transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
        }}
      >
        <SafetyBarrier />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-[14%] right-[4%] md:right-[10%]"
        style={{
          transform: `translate(${mouse.x * 10}px, ${mouse.y * 5}px)`,
        }}
      >
        <SafetyBarrier flipped />
      </motion.div>

      {/* Arrow board sign */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-[26%] left-1/2 -translate-x-1/2"
        style={{
          transform: `translate(calc(-50% + ${mouse.x * 3}px), ${mouse.y * 2}px)`,
        }}
      >
        <ArrowBoard />
      </motion.div>

      {/* Animated headlights coming down the road */}
      <div className="absolute inset-0 pointer-events-none">
        <HeadlightPair delay={0} />
        <HeadlightPair delay={2.5} />
      </div>

      {/* Vanishing point glow */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 w-3 h-3 bg-white/30 rounded-full blur-[2px]" />

      {/* Road surface ambient light at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#1b3a5c]/40 to-transparent" />
    </div>
  );
}

function TrafficCone3D({ size = "md", glowIntensity = 0.5 }: { size?: "sm" | "md" | "lg"; glowIntensity?: number }) {
  const sizes = {
    sm: { width: 14, height: 20 },
    md: { width: 20, height: 30 },
    lg: { width: 28, height: 40 },
  };
  const { width, height } = sizes[size];
  const glowRadius = size === "lg" ? 8 : size === "md" ? 6 : 4;

  return (
    <div className="relative" style={{ filter: `drop-shadow(0 0 ${glowRadius}px rgba(242, 103, 37, ${glowIntensity * 0.4}))` }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 40"
        fill="none"
        style={{ animation: "cone-pulse 3s ease-in-out infinite" }}
      >
        {/* Cone shadow on ground */}
        <ellipse cx="14" cy="38" rx="12" ry="2" fill="rgba(0,0,0,0.3)" />
        {/* Base */}
        <rect x="2" y="34" width="24" height="6" rx="1" fill="#333" />
        {/* Base highlight */}
        <rect x="2" y="34" width="24" height="2" rx="1" fill="#444" />
        {/* Cone body with gradient */}
        <defs>
          <linearGradient id={`cone-grad-${size}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d4561e" />
            <stop offset="40%" stopColor="#f26725" />
            <stop offset="100%" stopColor="#f8823f" />
          </linearGradient>
        </defs>
        <path d="M6 34L12 4H16L22 34H6Z" fill={`url(#cone-grad-${size})`} />
        {/* White stripe 1 */}
        <path d="M8.5 26L10 18H18L19.5 26H8.5Z" fill="white" opacity="0.92" />
        {/* White stripe 2 */}
        <path d="M11 14L12 8H16L17 14H11Z" fill="white" opacity="0.92" />
        {/* Cone tip */}
        <circle cx="14" cy="4" r="2" fill="#f26725" />
        {/* Tip highlight */}
        <circle cx="13" cy="3.5" r="0.8" fill="#f8a060" opacity="0.6" />
        {/* Reflective highlight */}
        <path d="M10 34L13 10H15L18 34" fill="white" opacity="0.08" />
        {/* Left shadow on cone */}
        <path d="M6 34L12 4H13L9 34H6Z" fill="black" opacity="0.1" />
      </svg>
    </div>
  );
}

function SafetyBarrier({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="90"
      height="40"
      viewBox="0 0 90 40"
      fill="none"
      style={{ transform: flipped ? "scaleX(-1)" : undefined }}
    >
      {/* Posts */}
      <rect x="6" y="10" width="4" height="30" rx="1" fill="#555" />
      <rect x="80" y="10" width="4" height="30" rx="1" fill="#555" />
      {/* Top bar */}
      <rect x="0" y="4" width="90" height="14" rx="2" fill="#f26725" />
      {/* White stripe */}
      <rect x="0" y="9" width="90" height="4" fill="white" opacity="0.85" />
      {/* Diagonal warning stripes */}
      <g opacity="0.5">
        <path d="M8 4L22 18H18L4 4H8Z" fill="#1a1a1a" />
        <path d="M26 4L40 18H36L22 4H26Z" fill="#1a1a1a" />
        <path d="M44 4L58 18H54L40 4H44Z" fill="#1a1a1a" />
        <path d="M62 4L76 18H72L58 4H62Z" fill="#1a1a1a" />
      </g>
      {/* Reflective top edge */}
      <rect x="0" y="4" width="90" height="2" fill="white" opacity="0.12" />
      {/* Warning lights */}
      <circle cx="20" cy="4" r="3" fill="#f5d442" opacity="0.7" style={{ animation: "cone-pulse 1.2s ease-in-out infinite" }} />
      <circle cx="70" cy="4" r="3" fill="#f5d442" opacity="0.7" style={{ animation: "cone-pulse 1.2s ease-in-out infinite 0.6s" }} />
    </svg>
  );
}

function ArrowBoard() {
  return (
    <svg
      width="60"
      height="24"
      viewBox="0 0 60 24"
      fill="none"
    >
      {/* Board background */}
      <rect x="0" y="0" width="60" height="24" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      {/* Arrow lights with sequential flash */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          cx={10 + i * 10}
          cy={12}
          r={3}
          fill="#f5d442"
          opacity="0.5"
          style={{ animation: `cone-pulse 0.8s ease-in-out infinite ${i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}

function HeadlightPair({ delay }: { delay: number }) {
  return (
    <>
      {/* Left headlight */}
      <div
        className="absolute w-2 h-2 rounded-full bg-white"
        style={{
          animation: `headlight-drive 5s linear infinite ${delay}s`,
          boxShadow: "0 0 12px 4px rgba(255,255,220,0.6), 0 0 30px 8px rgba(255,255,200,0.2)",
          opacity: 0,
        }}
      />
      {/* Right headlight */}
      <div
        className="absolute w-2 h-2 rounded-full bg-white"
        style={{
          animation: `headlight-drive-r 5s linear infinite ${delay}s`,
          boxShadow: "0 0 12px 4px rgba(255,255,220,0.6), 0 0 30px 8px rgba(255,255,200,0.2)",
          opacity: 0,
        }}
      />
    </>
  );
}
