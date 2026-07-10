'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import MagneticButton from '@/components/MagneticButton';

const contactInfo = [
  { label: 'Email', value: 'kameshwarisowjanya@gmail.com', href: 'mailto:kameshwarisowjanya@gmail.com' },
  { label: 'Phone', value: '+91 7989218633', href: 'tel:+917989218633' },
  { label: 'Location', value: 'India', href: '#' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Sowjanya12125' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sowjanya-s-k-susarla-498632308' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: submitError } = await supabase.from('contact_messages').insert([
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
      ]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again or email directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative section-padding bg-ink-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-16 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left — heading + info */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="text-eyebrow mb-6">Contact</p>
            <h2 className="text-display text-[clamp(2rem,5vw,3.5rem)] text-cream-100">
              Let&apos;s work together<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-500">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </p>

            {/* Contact info */}
            <div className="mt-12 space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-baseline justify-between border-b border-ink-700 pb-4 transition-colors hover:border-accent"
                >
                  <span className="text-sm text-cream-600">{info.label}</span>
                  <span className="text-base text-cream-200 transition-colors group-hover:text-accent">
                    {info.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-cream-400 transition-colors hover:text-accent"
                >
                  {social.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle className="mb-4 h-12 w-12 text-accent" />
                  <h3 className="text-2xl font-display font-bold text-cream-100">
                    Message sent.
                  </h3>
                  <p className="mt-2 text-cream-500">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 border-l-2 border-accent px-4 py-3 text-sm text-accent"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </motion.div>
                  )}

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-eyebrow">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="input-minimal"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-eyebrow">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input-minimal"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-eyebrow">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="input-minimal"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-eyebrow">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-minimal resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <MagneticButton
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-ink-950 transition-colors hover:bg-accent-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowUpRight className="h-4 w-4" />
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
