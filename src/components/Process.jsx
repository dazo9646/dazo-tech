import { motion } from 'framer-motion';
import { Search, PenTool, Zap, Rocket } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function Process() {
  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery',
      description: 'We understand your vision, market, and goals through in-depth research and strategic analysis.',
      icon: Search,
    },
    {
      id: 2,
      number: '02',
      title: 'Planning',
      description: 'Strategic roadmap creation with detailed wireframes, prototypes, and technical specifications.',
      icon: PenTool,
    },
    {
      id: 3,
      number: '03',
      title: 'Development',
      description: 'Agile development with continuous integration, testing, and cutting-edge technology implementation.',
      icon: Zap,
    },
    {
      id: 4,
      number: '04',
      title: 'Deployment',
      description: 'Seamless launch, continuous monitoring, optimization, and 24/7 support for peak performance.',
      icon: Rocket,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-shell section-tone-c" data-section>
      <div className="container-shell">
        <SectionHeader
          eyebrow="Execution Framework"
          title="A Clear Process, Every Time"
          description="We work in transparent phases, keeping your team informed from strategy through launch and optimization."
        />

        {/* Timeline */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-violet-400/50 via-blue-400/50 to-cyan-300/50"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 items-start ${isRight ? 'md:[&>*:first-child]:order-2' : ''}`}
                >
                  <div className={`pl-14 md:pl-0 ${isRight ? 'md:text-left' : 'md:text-right'}`}>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80 mb-2">{step.number}</p>
                    <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-white/62 leading-relaxed">{step.description}</p>
                  </div>

                  <div className={`relative pl-14 md:pl-0 ${isRight ? 'md:text-left' : 'md:text-left'}`}>
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-9 h-9 rounded-full bg-white/10 border border-cyan-300/40 flex items-center justify-center shadow-[0_0_24px_rgba(56,189,248,0.25)]">
                      <Icon size={16} className="text-cyan-100" />
                    </div>
                    <p className="text-sm text-white/50">Phase {index + 1}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/65 mb-7 text-lg">Ready to start your transformation?</p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
