import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeInOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div className="section-separator" />

      {/* Rich Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            y: parallaxY,
            backgroundImage:
              'radial-gradient(circle at 20% 15%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(120,170,255,0.10), transparent 38%)',
            backgroundSize: '160% 160%',
          }}
        />

        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="floating-blob h-72 w-72 bg-violet-500/35 left-[-6rem] top-24"
        />
        <motion.div
          animate={{ y: [0, 26, 0], x: [0, -14, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
          className="floating-blob h-80 w-80 bg-cyan-400/30 right-[-8rem] bottom-20"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-shell px-6 lg:px-8 text-center"
      >
        <div className="absolute inset-x-0 top-10 mx-auto w-[44rem] h-56 rounded-full bg-indigo-400/[0.18] blur-3xl -z-10" />

        <motion.p
          variants={itemVariants}
          className="mb-6 text-xs md:text-sm uppercase tracking-[0.2em] text-slate-300/80"
        >
          AI Product Engineering Agency
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.02] tracking-tight"
        >
          <span className="text-white">Crafting</span>
          <br />
          <span className="gradient-text">Elite Digital Systems</span>
          <br />
          <span className="text-3xl md:text-5xl text-white/65 font-medium">for ambitious brands</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 mb-14 max-w-3xl mx-auto leading-relaxed"
        >
          DAZO TECH designs AI-powered experiences, high-converting products, and scalable platforms that feel premium from the first interaction.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex items-center gap-2"
          >
            Start a Project
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-3 flex justify-center pointer-events-none"
        >
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-white/65 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
