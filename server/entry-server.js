import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUp, X, Menu, ArrowRight, Brain, Code, BarChart3, Zap, Search, PenTool, Rocket, TrendingUp, Cpu, Mail, Phone, MessageCircle, Send, Linkedin, Github, Instagram } from "lucide-react";
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / windowHeight * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "fixed top-0 left-0 h-[3px] bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.5)] z-50",
      style: { width: `${progress}%` },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    }
  );
}
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isVisible && /* @__PURE__ */ jsx(
    motion.button,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.4, ease: "easeInOut" },
      onClick: scrollToTop,
      whileHover: { scale: 1.05, y: -2 },
      className: "fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-violet-500/85 via-blue-500/80 to-cyan-500/80 border border-white/25 flex items-center justify-center shadow-[0_10px_26px_rgba(59,130,246,0.45)] transition-all duration-300",
      "aria-label": "Back to top",
      children: /* @__PURE__ */ jsx(ArrowUp, { size: 18, className: "text-white" })
    }
  ) });
}
function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: "pointer-events-none fixed inset-0 z-30 hidden lg:block",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: {
            x: position.x - 180,
            y: position.y - 180
          },
          transition: { type: "spring", damping: 28, stiffness: 140, mass: 0.35 },
          className: "h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(88,101,242,0.25)_0%,rgba(34,211,238,0.18)_30%,rgba(11,15,26,0)_70%)] blur-2xl"
        }
      )
    }
  );
}
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.6, ease: "easeInOut" },
      className: `fixed w-full top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[#0b0f1a]/72 backdrop-blur-2xl border-b border-white/10 shadow-[0_12px_34px_rgba(0,0,0,0.45)]" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container-shell px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: `flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`, children: [
          /* @__PURE__ */ jsx(
            motion.a,
            {
              href: "#home",
              whileHover: { opacity: 0.85 },
              whileTap: { scale: 0.99 },
              className: "text-xl md:text-2xl font-semibold text-white tracking-tight",
              children: /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "DAZO TECH" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2", children: navItems.map((item, index) => /* @__PURE__ */ jsx(
            motion.a,
            {
              href: item.href,
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.55, delay: index * 0.08, ease: "easeInOut" },
              className: "nav-link",
              children: item.label
            },
            item.label
          )) }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.98 },
              className: "hidden md:block btn-primary text-sm",
              children: "Get Started"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-white",
              onClick: () => setIsOpen(!isOpen),
              children: isOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        isOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            className: "md:hidden pb-6 pt-2 backdrop-blur-xl bg-[#0b0f1a]/90 border-t border-white/10 rounded-b-2xl",
            children: [
              navItems.map((item) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.href,
                  className: "block py-3 text-white/75 hover:text-white",
                  onClick: () => setIsOpen(false),
                  children: item.label
                },
                item.label
              )),
              /* @__PURE__ */ jsx("button", { className: "w-full mt-4 btn-primary", children: "Get Started" })
            ]
          }
        ),
        isScrolled && /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" })
      ] })
    }
  );
}
function Hero() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 80]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" }
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-24", children: [
    /* @__PURE__ */ jsx("div", { className: "section-separator" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
          transition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          className: "absolute inset-0",
          style: {
            y: parallaxY,
            backgroundImage: "radial-gradient(circle at 20% 15%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(120,170,255,0.10), transparent 38%)",
            backgroundSize: "160% 160%"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { y: [0, -30, 0], x: [0, 12, 0] },
          transition: { duration: 11, repeat: Infinity, ease: "easeInOut" },
          className: "floating-blob h-72 w-72 bg-violet-500/35 left-[-6rem] top-24"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { y: [0, 26, 0], x: [0, -14, 0] },
          transition: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          className: "floating-blob h-80 w-80 bg-cyan-400/30 right-[-8rem] bottom-20"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        className: "container-shell px-6 lg:px-8 text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-10 mx-auto w-[44rem] h-56 rounded-full bg-indigo-400/[0.18] blur-3xl -z-10" }),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              variants: itemVariants,
              className: "mb-6 text-xs md:text-sm uppercase tracking-[0.2em] text-slate-300/80",
              children: "AI Product Engineering Agency"
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              variants: itemVariants,
              className: "text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.02] tracking-tight",
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Crafting" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Elite Digital Systems" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-5xl text-white/65 font-medium", children: "for ambitious brands" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              variants: itemVariants,
              className: "text-lg md:text-xl text-white/70 mb-14 max-w-3xl mx-auto leading-relaxed",
              children: "DAZO TECH designs AI-powered experiences, high-converting products, and scalable platforms that feel premium from the first interaction."
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: itemVariants,
              className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
              children: /* @__PURE__ */ jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.98 },
                  className: "btn-primary flex items-center gap-2",
                  children: [
                    "Start a Project",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: itemVariants,
              animate: { y: [0, 9, 0] },
              transition: { duration: 2.2, repeat: Infinity },
              className: "mt-3 flex justify-center pointer-events-none",
              children: /* @__PURE__ */ jsx("div", { className: "w-6 h-10 border border-white/30 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, 4, 0] },
                  transition: { duration: 2, repeat: Infinity },
                  className: "w-1 h-2 bg-white/65 rounded-full"
                }
              ) })
            }
          )
        ]
      }
    )
  ] });
}
function SectionHeader({ title, description, eyebrow }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.65, ease: "easeInOut" },
      viewport: { once: true, amount: 0.35 },
      className: "text-center mb-16 md:mb-20",
      children: [
        eyebrow && /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs md:text-sm uppercase tracking-[0.18em] text-slate-300/80", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "section-title", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "section-copy", children: description })
      ]
    }
  );
}
function Services() {
  const services = [
    {
      id: 1,
      title: "AI Systems & Automation",
      description: "Intelligent automation solutions powered by cutting-edge AI and machine learning technologies.",
      icon: Brain,
      tint: "from-violet-500/30 via-blue-500/20 to-cyan-400/25"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Modern, responsive web applications built with React, Vue, and the latest web technologies.",
      icon: Code,
      tint: "from-cyan-400/30 via-blue-500/20 to-violet-500/20"
    },
    {
      id: 3,
      title: "Data & Dashboards",
      description: "Real-time analytics dashboards and data visualization solutions for actionable insights.",
      icon: BarChart3,
      tint: "from-blue-500/25 via-violet-500/20 to-cyan-300/20"
    },
    {
      id: 4,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs and goals.",
      icon: Zap,
      tint: "from-violet-400/30 via-blue-400/20 to-cyan-300/25"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeInOut" }
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "section-shell section-tone-a", "data-section": true, children: [
    /* @__PURE__ */ jsx("div", { className: "section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container-shell", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: "Core Capabilities",
          title: "Services Built for Growth",
          description: "We blend strategy, design, and AI engineering to craft products that drive measurable business momentum."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: services.map((service) => {
            const Icon = service.icon;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: cardVariants,
                whileHover: { y: -5, scale: 1.03 },
                className: "card-glass card-tilt group relative overflow-hidden",
                children: [
                  /* @__PURE__ */ jsx("div", { className: `absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.tint} transition-opacity duration-300` }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { rotate: 3 },
                      className: "w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_0_rgba(56,189,248,0)] group-hover:shadow-[0_0_26px_rgba(56,189,248,0.35)]",
                      children: /* @__PURE__ */ jsx(Icon, { size: 22, className: "text-white/85" })
                    }
                  ),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-3 text-white transition-colors duration-300 relative z-10", children: service.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/65 text-sm leading-relaxed mb-5 relative z-10", children: service.description }),
                  /* @__PURE__ */ jsxs(
                    motion.a,
                    {
                      href: "#",
                      whileHover: { x: 3 },
                      className: "text-cyan-200/90 text-sm font-medium flex items-center gap-2 transition-all duration-300 relative z-10",
                      children: [
                        "Explore ",
                        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
                      ]
                    }
                  )
                ]
              },
              service.id
            );
          })
        }
      )
    ] })
  ] });
}
const appointment = "/dazo-tech/assets/appointment-system-DuwGraU1.png";
const gesture = "/dazo-tech/assets/gesture-system-Do8lIy4R.png";
const mouse = "/dazo-tech/assets/virtual-mouse-CcqTOPVe.png";
const portfolio = "/dazo-tech/assets/portfolio-website-eHbz5dHL.png";
const restaurant = "/dazo-tech/assets/restaurant-system-B7s-p5rq.png";
const salon = "/dazo-tech/assets/salon-system-DzLbtjJP.png";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smart Appointment Management System",
      description: "Developed a digital appointment scheduling system that allows businesses to manage bookings efficiently with real-time updates.",
      tech: ["React", "Node.js", "MongoDB", "Real-time Updates"],
      achievements: ["Live booking status updates", "Automated slot management", "Business workflow optimization"],
      tone: "from-violet-500/35 to-cyan-400/25",
      image: appointment,
      imageAlt: "Calendar and booking dashboard interface on a laptop display",
      imageLabel: "Scheduling Dashboard",
      imageSummary: "Modern booking dashboard for a health clinic."
    },
    {
      id: 2,
      title: "Gesture-Based Control System",
      description: "Built a computer vision-based system that enables interaction using hand gestures for touchless control.",
      tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      achievements: ["Touchless user interaction", "Low-latency gesture response", "Real-time movement detection"],
      tone: "from-cyan-500/30 to-blue-500/25",
      image: gesture,
      imageAlt: "Computer vision setup with hand tracking and gesture recognition",
      imageLabel: "Gesture Detection",
      imageSummary: "A visualization of a computer vision interface."
    },
    {
      id: 3,
      title: "AI Virtual Mouse using Hand Gestures",
      description: "Designed an AI-powered virtual mouse system that replaces traditional input devices using real-time hand tracking.",
      tech: ["Python", "OpenCV", "MediaPipe", "AI Tracking"],
      achievements: ["Cursor control via gestures", "No hardware input dependency", "Smooth real-time tracking"],
      tone: "from-blue-500/30 to-violet-500/25",
      image: mouse,
      imageAlt: "Hand-driven interaction with screen and cursor-based control interface",
      imageLabel: "Virtual Cursor Control",
      imageSummary: "Application interface for virtual cursor control."
    },
    {
      id: 4,
      title: "Modern Portfolio Web Application",
      description: "Created a responsive portfolio platform with modern UI/UX design principles and optimized performance.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      achievements: ["Responsive multi-device layout", "Performance-optimized frontend", "Modern interaction design"],
      tone: "from-violet-500/30 to-cyan-300/30",
      image: portfolio,
      imageAlt: "Modern developer portfolio website layout shown on desktop screen",
      imageLabel: "Portfolio Interface",
      imageSummary: "A clean portfolio web layout with modern UI blocks."
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Developed a web-based system for managing restaurant operations including orders, menu, and customer interaction.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      achievements: ["Order and menu management", "Streamlined restaurant workflows", "Customer engagement features"],
      tone: "from-blue-500/30 to-cyan-400/25",
      image: restaurant,
      imageAlt: "Restaurant ordering and menu experience on a modern web interface",
      imageLabel: "Food Ordering UI",
      imageSummary: "A visualized menu and ordering web experience."
    },
    {
      id: 6,
      title: "Salon Booking System",
      description: "Built a complete booking system for salons enabling appointment scheduling and customer management.",
      tech: ["React", "Firebase", "Scheduler UI", "Dashboard"],
      achievements: ["End-to-end booking flow", "Customer profile management", "Salon operations dashboard"],
      tone: "from-cyan-500/30 to-violet-400/30",
      image: salon,
      imageAlt: "Salon appointment and service booking interface",
      imageLabel: "Salon Appointments",
      imageSummary: "A streamlined salon booking and scheduling interface."
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: "easeInOut" }
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "projects", className: "section-shell section-tone-b", "data-section": true, children: [
    /* @__PURE__ */ jsx("div", { className: "section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container-shell", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: "Case Studies",
          title: "Projects That Move Metrics",
          description: "From AI products to operational systems, each build is engineered to be usable, scalable, and conversion-focused."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "grid md:grid-cols-2 gap-6",
          children: projects.map((project) => /* @__PURE__ */ jsx(
            motion.div,
            {
              variants: cardVariants,
              whileHover: { y: -5, rotateX: 2.5, rotateY: -2.5, scale: 1.01 },
              style: { transformStyle: "preserve-3d" },
              className: "card-glass card-tilt h-full group",
              children: /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative group mb-6 rounded-xl overflow-hidden border border-white/10", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: project.image,
                      alt: project.imageAlt,
                      loading: "lazy",
                      decoding: "async",
                      className: "w-full h-60 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl", children: /* @__PURE__ */ jsx("span", { className: "text-white font-semibold text-lg", children: "View Case Study" }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition rounded-xl" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-white", children: project.title }),
                /* @__PURE__ */ jsx("p", { className: "text-white/65 text-sm mb-6 leading-relaxed flex-grow", children: project.description }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: project.tech.map((tech) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/15 text-white/75",
                    children: tech
                  },
                  tech
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-white/55 mb-3 font-semibold uppercase tracking-wide", children: "Highlights" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: project.achievements.map((achievement) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-white/70 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white/40" }),
                    achievement
                  ] }, achievement)) })
                ] })
              ] })
            },
            project.id
          ))
        }
      )
    ] })
  ] });
}
function Process() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discovery",
      description: "We understand your vision, market, and goals through in-depth research and strategic analysis.",
      icon: Search
    },
    {
      id: 2,
      number: "02",
      title: "Planning",
      description: "Strategic roadmap creation with detailed wireframes, prototypes, and technical specifications.",
      icon: PenTool
    },
    {
      id: 3,
      number: "03",
      title: "Development",
      description: "Agile development with continuous integration, testing, and cutting-edge technology implementation.",
      icon: Zap
    },
    {
      id: 4,
      number: "04",
      title: "Deployment",
      description: "Seamless launch, continuous monitoring, optimization, and 24/7 support for peak performance.",
      icon: Rocket
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "section-shell section-tone-c", "data-section": true, children: /* @__PURE__ */ jsxs("div", { className: "container-shell", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Execution Framework",
        title: "A Clear Process, Every Time",
        description: "We work in transparent phases, keeping your team informed from strategy through launch and optimization."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { scaleY: 0 },
          whileInView: { scaleY: 1 },
          transition: { duration: 0.8, ease: "easeInOut" },
          viewport: { once: true },
          className: "absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-violet-400/50 via-blue-400/50 to-cyan-300/50"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "space-y-10",
          children: steps.map((step, index) => {
            const Icon = step.icon;
            const isRight = index % 2 === 1;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: stepVariants,
                className: `grid md:grid-cols-2 gap-6 md:gap-12 items-start ${isRight ? "md:[&>*:first-child]:order-2" : ""}`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: `pl-14 md:pl-0 ${isRight ? "md:text-left" : "md:text-right"}`, children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-cyan-200/80 mb-2", children: step.number }),
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-white mb-3", children: step.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/62 leading-relaxed", children: step.description })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: `relative pl-14 md:pl-0 ${isRight ? "md:text-left" : "md:text-left"}`, children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-9 h-9 rounded-full bg-white/10 border border-cyan-300/40 flex items-center justify-center shadow-[0_0_24px_rgba(56,189,248,0.25)]", children: /* @__PURE__ */ jsx(Icon, { size: 16, className: "text-cyan-100" }) }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm text-white/50", children: [
                      "Phase ",
                      index + 1
                    ] })
                  ] })
                ]
              },
              step.id
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.5 },
        viewport: { once: true },
        className: "text-center mt-20",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-white/65 mb-7 text-lg", children: "Ready to start your transformation?" }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.03 },
              whileTap: { scale: 0.98 },
              className: "btn-primary",
              children: "Begin Your Journey"
            }
          )
        ]
      }
    )
  ] }) });
}
function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid development without compromising quality. From concept to launch in weeks, not months.",
      icon: Zap,
      stat: "2-4 Weeks",
      tone: "from-violet-500/30 to-blue-500/20"
    },
    {
      id: 2,
      title: "AI-Driven Solutions",
      description: "Leverage machine learning and AI to build intelligent systems that learn and evolve with your business dynamically.",
      icon: Brain,
      stat: "98% Accuracy",
      tone: "from-blue-500/30 to-cyan-400/20"
    },
    {
      id: 3,
      title: "Scalable Systems",
      description: "Infrastructure designed to grow with you. Cloud-native architecture supporting millions of concurrent users globally.",
      icon: TrendingUp,
      stat: "99.9% Uptime",
      tone: "from-cyan-500/25 to-violet-500/20"
    },
    {
      id: 4,
      title: "Modern Tech Stack",
      description: "Using the latest technologies: React, Node.js, Python, Cloud platforms, and enterprise-grade tools for competitive advantage.",
      icon: Cpu,
      stat: "Cutting Edge",
      tone: "from-violet-500/30 to-cyan-400/20"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  return /* @__PURE__ */ jsxs("section", { className: "section-shell section-tone-a", "data-section": true, children: [
    /* @__PURE__ */ jsx("div", { className: "section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container-shell", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: "Why DAZO TECH",
          title: "Designed to Win Competitive Markets",
          description: "We merge product strategy, engineering precision, and AI innovation to help teams scale with confidence."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20",
          children: reasons.map((reason) => {
            const Icon = reason.icon;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: itemVariants,
                whileHover: { y: -5 },
                className: "card-glass relative overflow-hidden group",
                children: [
                  /* @__PURE__ */ jsx("div", { className: `absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${reason.tone} transition-opacity duration-300` }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shadow-[0_0_24px_rgba(59,130,246,0.2)]", children: /* @__PURE__ */ jsx(Icon, { size: 18, className: "text-white/80" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-white/55 uppercase tracking-wide", children: reason.stat })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-white", children: reason.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/65 text-sm leading-relaxed", children: reason.description })
                ]
              },
              reason.id
            );
          })
        }
      )
    ] })
  ] });
}
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "dazo9646@gmail.com",
      link: "mailto:dazo9646@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone 1",
      value: "+91 7780420796",
      link: "tel:+917780420796"
    },
    {
      icon: Phone,
      label: "Phone 2",
      value: "+91 8712141646",
      link: "tel:+918712141646"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "section-shell section-tone-b", "data-section": true, children: [
    /* @__PURE__ */ jsx("div", { className: "section-glow" }),
    /* @__PURE__ */ jsxs("div", { className: "container-shell", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: "Start a Conversation",
          title: "Let's Build Your Next Breakthrough",
          description: "Share your idea and we will help shape it into a high-performance product your users will love."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-10 text-white", children: "Get in Touch" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: contactMethods.map((method) => {
                const Icon = method.icon;
                return /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: method.link,
                    whileHover: { x: 3 },
                    className: "card-glass p-4 cursor-pointer block group",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]", children: /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-white/85" }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-white/55 mb-1 uppercase tracking-wide", children: method.label }),
                        /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: method.value })
                      ] })
                    ] })
                  },
                  method.label
                );
              }) }),
              /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "https://wa.me/918712141646",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.98 },
                  className: "relative w-full mt-8 px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500/90 via-blue-500/85 to-cyan-500/85 border border-white/25 hover:brightness-110 transition-all text-white shadow-[0_14px_32px_rgba(59,130,246,0.35)]",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "pulse-ring absolute inset-0 rounded-xl border border-cyan-200/60" }),
                    /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
                    "Message on WhatsApp"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.form,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            onSubmit: handleSubmit,
            className: "md:col-span-2 gradient-border",
            children: /* @__PURE__ */ jsxs("div", { className: "card-glass p-8 space-y-6", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.3, delay: 0.1 },
                  viewport: { once: true },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        name: "name",
                        value: formData.name,
                        onChange: handleChange,
                        placeholder: " ",
                        className: "peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-transparent focus:outline-none focus:border-cyan-300/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx("label", { className: "absolute left-4 top-3 text-white/55 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:text-cyan-200", children: "Your Name" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.3, delay: 0.2 },
                  viewport: { once: true },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "email",
                        name: "email",
                        value: formData.email,
                        onChange: handleChange,
                        placeholder: " ",
                        className: "peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-transparent focus:outline-none focus:border-cyan-300/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx("label", { className: "absolute left-4 top-3 text-white/55 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:text-cyan-200", children: "Email Address" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.3, delay: 0.3 },
                  viewport: { once: true },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsx(
                      "textarea",
                      {
                        name: "message",
                        value: formData.message,
                        onChange: handleChange,
                        placeholder: " ",
                        rows: "5",
                        className: "peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-transparent focus:outline-none focus:border-cyan-300/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all resize-none",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx("label", { className: "absolute left-4 top-3 text-white/55 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:text-cyan-200", children: "Message" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.3, delay: 0.4 },
                  viewport: { once: true },
                  children: /* @__PURE__ */ jsxs(
                    motion.button,
                    {
                      whileHover: { scale: 1.03 },
                      whileTap: { scale: 0.98 },
                      type: "submit",
                      className: "w-full btn-primary flex items-center justify-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Send, { size: 18 }),
                        "Send Message"
                      ]
                    }
                  )
                }
              )
            ] })
          }
        )
      ] })
    ] })
  ] });
}
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/dazotech"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/dazo9646"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:dazo9646@gmail.com"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/dazo.tech/"
    }
  ];
  return /* @__PURE__ */ jsxs("footer", { className: "relative border-t border-white/10 bg-black/70 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "section-separator" }),
    /* @__PURE__ */ jsxs("div", { className: "container-shell px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-12 py-20", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4 tracking-tight gradient-text", children: "DAZO TECH" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm leading-relaxed", children: "Building AI-powered digital systems and innovative solutions for enterprises and startups worldwide." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white/85 font-medium mb-6 uppercase tracking-wide text-sm", children: "Quick Links" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: footerLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: link.href,
                  whileHover: { x: 2, color: "#ffffff" },
                  className: "text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white/40" }),
                    link.label
                  ]
                }
              ) }, link.label)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white/85 font-medium mb-6 uppercase tracking-wide text-sm", children: "Services" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: ["AI Systems", "Web Development", "Data Analytics", "Custom Solutions"].map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                motion.a,
                {
                  href: "#services",
                  whileHover: { x: 2, color: "#ffffff" },
                  className: "text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-white/40" }),
                    service
                  ]
                }
              ) }, service)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h4", { className: "text-white/85 font-medium mb-6 uppercase tracking-wide text-sm", children: "Connect" }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-4 flex-wrap", children: socialLinks.map((social) => {
                const Icon = social.icon;
                return /* @__PURE__ */ jsx(
                  motion.a,
                  {
                    href: social.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    whileHover: { scale: 1.04 },
                    whileTap: { scale: 0.96 },
                    className: "w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:text-cyan-100 hover:bg-white/10 hover:border-cyan-300/40 hover:shadow-[0_0_22px_rgba(56,189,248,0.35)] transition-all",
                    "aria-label": social.label,
                    children: /* @__PURE__ */ jsx(Icon, { size: 18 })
                  },
                  social.label
                );
              }) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          transition: { duration: 0.6 },
          viewport: { once: true },
          className: "py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left",
          children: [
            /* @__PURE__ */ jsxs("p", { className: "text-white/60 text-sm", children: [
              "© ",
              currentYear,
              " Dazo Tech. All rights reserved. | Building the future, one system at a time."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-6 mt-4 md:mt-0", children: [
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "#",
                  whileHover: { color: "#ffffff" },
                  className: "text-white/60 text-sm hover:text-white transition-colors",
                  children: "Privacy Policy"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.a,
                {
                  href: "#",
                  whileHover: { color: "#ffffff" },
                  className: "text-white/60 text-sm hover:text-white transition-colors",
                  children: "Terms of Service"
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "site-shell", children: [
    /* @__PURE__ */ jsx("div", { className: "noise-overlay" }),
    /* @__PURE__ */ jsx(CursorGlow, {}),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(BackToTop, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render(_url, options) {
  return renderToPipeableStream(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) }),
    options
  );
}
export {
  render
};
