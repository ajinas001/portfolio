import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseBubble = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Use framer-motion's motion values for smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use a spring animation for a delayed and smooth movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        position: "fixed",
        width: "40px",
        height: "40px",
        left: "-20px", // Offset to center the bubble on the cursor
        top: "-20px",
        pointerEvents: "none", // Allow interactions with elements beneath
        zIndex: 9999,
       // Glass effect background
        // backdropFilter: "blur(5px)", // Glass blur effect
        borderRadius: "50%", // Ensure circular shape
        // border: "1px solid rgba(255, 255, 255, 0.3)", // Slight border to enhance the effect
      }}
      className="rounded-full"
    >
      {/* Inner glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="w-6 h-6 rounded-full   border-2 border-gray-700 "
      ></motion.div>
    </motion.div>
  );
};

export default MouseBubble;
