import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/company/dazotech',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/dazo9646',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:dazo9646@gmail.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/dazo.tech/',
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="section-separator" />
      <div className="container-shell px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <h3 className="text-2xl font-semibold mb-4 tracking-tight gradient-text">
              DAZO TECH
            </h3>
              <p className="text-white/60 text-sm leading-relaxed">
              Building AI-powered digital systems and innovative solutions for enterprises and startups worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
              <h4 className="text-white/85 font-medium mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                      whileHover={{ x: 2, color: '#ffffff' }}
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <h4 className="text-white/85 font-medium mb-6 uppercase tracking-wide text-sm">Services</h4>
            <ul className="space-y-3">
              {['AI Systems', 'Web Development', 'Data Analytics', 'Custom Solutions'].map((service) => (
                <li key={service}>
                  <motion.a
                    href="#services"
                      whileHover={{ x: 2, color: '#ffffff' }}
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm"
                  >
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
              <h4 className="text-white/85 font-medium mb-6 uppercase tracking-wide text-sm">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/65 hover:text-cyan-100 hover:bg-white/10 hover:border-cyan-300/40 hover:shadow-[0_0_22px_rgba(56,189,248,0.35)] transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Dazo Tech. All rights reserved. | Building the future, one system at a time.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ color: '#ffffff' }}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#ffffff' }}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
