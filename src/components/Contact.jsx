import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dazo9646@gmail.com',
      link: 'mailto:dazo9646@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone 1',
      value: '+91 7780420796',
      link: 'tel:+917780420796',
    },
    {
      icon: Phone,
      label: 'Phone 2',
      value: '+91 8712141646',
      link: 'tel:+918712141646',
    },
  ];

  return (
    <section id="contact" className="section-shell section-tone-b" data-section>
      <div className="section-glow" />
      <div className="container-shell">
        <SectionHeader
          eyebrow="Start a Conversation"
          title="Let's Build Your Next Breakthrough"
          description="Share your idea and we will help shape it into a high-performance product your users will love."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-10 text-white">Get in Touch</h3>

            <div className="space-y-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    whileHover={{ x: 3 }}
                    className="card-glass p-4 cursor-pointer block group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                        <Icon size={20} className="text-white/85" />
                      </div>
                      <div>
                        <p className="text-xs text-white/55 mb-1 uppercase tracking-wide">{method.label}</p>
                        <p className="text-white font-medium">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918712141646"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full mt-8 px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500/90 via-blue-500/85 to-cyan-500/85 border border-white/25 hover:brightness-110 transition-all text-white shadow-[0_14px_32px_rgba(59,130,246,0.35)]"
            >
              <span className="pulse-ring absolute inset-0 rounded-xl border border-cyan-200/60" />
              <MessageCircle size={18} />
              Message on WhatsApp
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-2 gradient-border"
          >
            <div className="card-glass p-8 space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-transparent focus:outline-none focus:border-cyan-300/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all"
                  required
                />
                <label className="absolute left-4 top-3 text-white/55 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:text-cyan-200">
                  Your Name
                </label>
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-transparent focus:outline-none focus:border-cyan-300/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all"
                  required
                />
                <label className="absolute left-4 top-3 text-white/55 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:text-cyan-200">
                  Email Address
                </label>
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows="5"
                  className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-transparent focus:outline-none focus:border-cyan-300/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)] transition-all resize-none"
                  required
                ></textarea>
                <label className="absolute left-4 top-3 text-white/55 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:text-xs peer-focus:text-cyan-200">
                  Message
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
