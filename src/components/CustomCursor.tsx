import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);

  // Optimized spring config for better performance
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const ringSpringConfig = { stiffness: 150, damping: 25, mass: 0.8 };

  const springCursorX = useSpring(cursorX, springConfig);
  const springCursorY = useSpring(cursorY, springConfig);

  const springRingX = useSpring(ringX, ringSpringConfig);
  const springRingY = useSpring(ringY, ringSpringConfig);

  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const checkViewportAndTouch = () => {
      const mobile =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024;

      setIsMobile(mobile);
    };

    checkViewportAndTouch();
    window.addEventListener("resize", checkViewportAndTouch);

    return () => window.removeEventListener("resize", checkViewportAndTouch);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle to ~60fps max
      const now = Date.now();
      if (now - lastUpdateRef.current < 16) return;
      lastUpdateRef.current = now;

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        ringX.set(e.clientX);
        ringY.set(e.clientY);
      });

      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive-card");

      setHovered(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHoverState, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHoverState);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, cursorX, cursorY, ringX, ringY]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-slate-900/80 dark:bg-white/90"
        style={{
          x: springCursorX,
          y: springCursorY,
          width: clicked ? 6 : hovered ? 10 : 8,
          height: clicked ? 6 : hovered ? 10 : 8,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border-2 border-slate-900/30 dark:border-white/30"
        style={{
          x: springRingX,
          y: springRingY,
          width: clicked ? 24 : hovered ? 48 : 32,
          height: clicked ? 24 : hovered ? 48 : 32,
          translateX: "-50%",
          translateY: "-50%",
          willChange: "transform",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
