import { motion } from 'framer-motion';
import { Zap, Brain, TrendingUp, Cpu } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: 'Fast Delivery',
      description: 'Agile methodology ensures rapid development without compromising quality. From concept to launch in weeks, not months.',
      icon: Zap,
      stat: '2-4 Weeks',
      tone: 'from-violet-500/30 to-blue-500/20',
    },
    {
      id: 2,
      title: 'AI-Driven Solutions',
      description: 'Leverage machine learning and AI to build intelligent systems that learn and evolve with your business dynamically.',
      icon: Brain,
      stat: '98% Accuracy',
      tone: 'from-blue-500/30 to-cyan-400/20',
    },
    {
      id: 3,
      title: 'Scalable Systems',
      description: 'Infrastructure designed to grow with you. Cloud-native architecture supporting millions of concurrent users globally.',
      icon: TrendingUp,
      stat: '99.9% Uptime',
      tone: 'from-cyan-500/25 to-violet-500/20',
    },
    {
      id: 4,
      title: 'Modern Tech Stack',
      description: 'Using the latest technologies: React, Node.js, Python, Cloud platforms, and enterprise-grade tools for competitive advantage.',
      icon: Cpu,
      stat: 'Cutting Edge',
      tone: 'from-violet-500/30 to-cyan-400/20',
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-shell section-tone-a" data-section>
      <div className="section-glow" />
      <div className="container-shell">
        <SectionHeader
          eyebrow="Why DAZO TECH"
          title="Designed to Win Competitive Markets"
          description="We merge product strategy, engineering precision, and AI innovation to help teams scale with confidence."
        />

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card-glass relative overflow-hidden group"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${reason.tone} transition-opacity duration-300`} />
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.2)]">
                    <Icon size={18} className="text-white/80" />
                  </div>
                  <span className="text-xs font-medium text-white/55 uppercase tracking-wide">{reason.stat}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-white">{reason.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
