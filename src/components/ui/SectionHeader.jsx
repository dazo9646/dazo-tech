import { motion } from 'framer-motion';

export default function SectionHeader({ title, description, eyebrow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.35 }}
      className="text-center mb-16 md:mb-20"
    >
      {eyebrow && (
        <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.18em] text-slate-300/80">
          {eyebrow}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </motion.div>
  );
}
