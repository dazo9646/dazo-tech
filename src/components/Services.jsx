import { motion } from 'framer-motion';
import { Brain, Code, BarChart3, Zap } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'AI Systems & Automation',
      description: 'Intelligent automation solutions powered by cutting-edge AI and machine learning technologies.',
      icon: Brain,
      tint: 'from-violet-500/30 via-blue-500/20 to-cyan-400/25',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Vue, and the latest web technologies.',
      icon: Code,
      tint: 'from-cyan-400/30 via-blue-500/20 to-violet-500/20',
    },
    {
      id: 3,
      title: 'Data & Dashboards',
      description: 'Real-time analytics dashboards and data visualization solutions for actionable insights.',
      icon: BarChart3,
      tint: 'from-blue-500/25 via-violet-500/20 to-cyan-300/20',
    },
    {
      id: 4,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your business needs and goals.',
      icon: Zap,
      tint: 'from-violet-400/30 via-blue-400/20 to-cyan-300/25',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeInOut' },
    },
  };

  return (
    <section id="services" className="section-shell section-tone-a" data-section>
      <div className="section-glow" />
      <div className="container-shell">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Services Built for Growth"
          description="We blend strategy, design, and AI engineering to craft products that drive measurable business momentum."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.03 }}
                className="card-glass card-tilt group relative overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.tint} transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 3 }}
                  className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_0_rgba(56,189,248,0)] group-hover:shadow-[0_0_26px_rgba(56,189,248,0.35)]"
                >
                  <Icon size={22} className="text-white/85" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-white transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 text-sm leading-relaxed mb-5 relative z-10">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 3 }}
                  className="text-cyan-200/90 text-sm font-medium flex items-center gap-2 transition-all duration-300 relative z-10"
                >
                  Explore <span aria-hidden="true">→</span>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
