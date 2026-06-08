import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);

  const springConfig = { stiffness: 320, damping: 28, mass: 0.4 };
  const ringSpringConfig = { stiffness: 180, damping: 22, mass: 0.7 };

  const springCursorX = useSpring(cursorX, springConfig);
  const springCursorY = useSpring(cursorY, springConfig);

  const springRingX = useSpring(ringX, ringSpringConfig);
  const springRingY = useSpring(ringY, ringSpringConfig);

  const rafRef = useRef<number | null>(null);

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

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHoverState);

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
      {/* Soft halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-black/10 blur-xl"
        style={{
          x: springRingX,
          y: springRingY,
          width: hovered ? 72 : 52,
          height: hovered ? 72 : 52,
          opacity: hovered ? 0.22 : 0.12,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-black/25"
        style={{
          x: springRingX,
          y: springRingY,
          width: hovered ? 52 : 36,
          height: hovered ? 52 : 36,
          backgroundColor: hovered ? "rgba(0,0,0,0.04)" : "transparent",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.85 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      />

      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-black shadow-[0_0_18px_rgba(0,0,0,0.22)]"
        style={{
          x: springCursorX,
          y: springCursorY,
          width: hovered ? 10 : 8,
          height: hovered ? 10 : 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicked ? 0.6 : hovered ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 24,
        }}
      />
    </>
  );
}
