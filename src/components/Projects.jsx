import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import appointment from '../assets/images/appointment-system.png';
import gesture from '../assets/images/gesture-system.png';
import mouse from '../assets/images/virtual-mouse.png';
import portfolio from '../assets/images/portfolio-website.png';
import restaurant from '../assets/images/restaurant-system.png';
import salon from '../assets/images/salon-system.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart Appointment Management System',
      description: 'Developed a digital appointment scheduling system that allows businesses to manage bookings efficiently with real-time updates.',
      tech: ['React', 'Node.js', 'MongoDB', 'Real-time Updates'],
      achievements: ['Live booking status updates', 'Automated slot management', 'Business workflow optimization'],
      tone: 'from-violet-500/35 to-cyan-400/25',
      image: appointment,
      imageAlt: 'Calendar and booking dashboard interface on a laptop display',
      imageLabel: 'Scheduling Dashboard',
      imageSummary: 'Modern booking dashboard for a health clinic.',
    },
    {
      id: 2,
      title: 'Gesture-Based Control System',
      description: 'Built a computer vision-based system that enables interaction using hand gestures for touchless control.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      achievements: ['Touchless user interaction', 'Low-latency gesture response', 'Real-time movement detection'],
      tone: 'from-cyan-500/30 to-blue-500/25',
      image: gesture,
      imageAlt: 'Computer vision setup with hand tracking and gesture recognition',
      imageLabel: 'Gesture Detection',
      imageSummary: 'A visualization of a computer vision interface.',
    },
    {
      id: 3,
      title: 'AI Virtual Mouse using Hand Gestures',
      description: 'Designed an AI-powered virtual mouse system that replaces traditional input devices using real-time hand tracking.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'AI Tracking'],
      achievements: ['Cursor control via gestures', 'No hardware input dependency', 'Smooth real-time tracking'],
      tone: 'from-blue-500/30 to-violet-500/25',
      image: mouse,
      imageAlt: 'Hand-driven interaction with screen and cursor-based control interface',
      imageLabel: 'Virtual Cursor Control',
      imageSummary: 'Application interface for virtual cursor control.',
    },
    {
      id: 4,
      title: 'Modern Portfolio Web Application',
      description: 'Created a responsive portfolio platform with modern UI/UX design principles and optimized performance.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      achievements: ['Responsive multi-device layout', 'Performance-optimized frontend', 'Modern interaction design'],
      tone: 'from-violet-500/30 to-cyan-300/30',
      image: portfolio,
      imageAlt: 'Modern developer portfolio website layout shown on desktop screen',
      imageLabel: 'Portfolio Interface',
      imageSummary: 'A clean portfolio web layout with modern UI blocks.',
    },
    {
      id: 5,
      title: 'Restaurant Website',
      description: 'Developed a web-based system for managing restaurant operations including orders, menu, and customer interaction.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      achievements: ['Order and menu management', 'Streamlined restaurant workflows', 'Customer engagement features'],
      tone: 'from-blue-500/30 to-cyan-400/25',
      image: restaurant,
      imageAlt: 'Restaurant ordering and menu experience on a modern web interface',
      imageLabel: 'Food Ordering UI',
      imageSummary: 'A visualized menu and ordering web experience.',
    },
    {
      id: 6,
      title: 'Salon Booking System',
      description: 'Built a complete booking system for salons enabling appointment scheduling and customer management.',
      tech: ['React', 'Firebase', 'Scheduler UI', 'Dashboard'],
      achievements: ['End-to-end booking flow', 'Customer profile management', 'Salon operations dashboard'],
      tone: 'from-cyan-500/30 to-violet-400/30',
      image: salon,
      imageAlt: 'Salon appointment and service booking interface',
      imageLabel: 'Salon Appointments',
      imageSummary: 'A streamlined salon booking and scheduling interface.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: 'easeInOut' },
    },
  };

  return (
    <section id="projects" className="section-shell section-tone-b" data-section>
      <div className="section-glow" />
      <div className="container-shell">
        <SectionHeader
          eyebrow="Case Studies"
          title="Projects That Move Metrics"
          description="From AI products to operational systems, each build is engineered to be usable, scalable, and conversion-focused."
        />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -5, rotateX: 2.5, rotateY: -2.5, scale: 1.01 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="card-glass card-tilt h-full group"
            >
              <div className="h-full flex flex-col">
                <div className="relative group mb-6 rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-60 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
                    <span className="text-white font-semibold text-lg">View Case Study</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition rounded-xl"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-white/65 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/15 text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-white/55 mb-3 font-semibold uppercase tracking-wide">Highlights</p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="text-xs text-white/70 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
