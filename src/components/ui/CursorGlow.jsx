import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          x: position.x - 180,
          y: position.y - 180,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 140, mass: 0.35 }}
        className="h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(88,101,242,0.25)_0%,rgba(34,211,238,0.18)_30%,rgba(11,15,26,0)_70%)] blur-2xl"
      />
    </motion.div>
  );
}
