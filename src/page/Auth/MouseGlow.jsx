import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 120,
        y: pos.y - 120,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      className="z-50 h-60 w-60 rounded-full bg-lime-400/20 pointer-events-none fixed blur-[120px]"
    />
  );
}
