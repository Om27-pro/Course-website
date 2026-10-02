"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Terminal, CheckCircle2, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative font-mono">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-10">
          <div className="p-2 rounded-lg bg-primary-cyan/10 border border-primary-cyan/30">
            <Terminal className="w-5 h-5 text-primary-cyan" />
          </div>
          <div>
            <div className="text-xs text-primary-cyan font-mono tracking-widest uppercase">// TRANSMISSION_CHANNEL</div>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text">Open Channel</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Direct Commands Panel */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 border border-white/10 space-y-6">
            <div>
              <div className="text-xs font-bold text-primary-cyan mb-1">// DIRECT_SYSTEM_COMMANDS</div>
              <p className="text-xs text-muted-text font-body">
                Connect directly with Om Solanki via email, phone or social platforms.
              </p>
            </div>

            <div className="space-y-3 text-xs">

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-cyan/40 transition-colors flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-primary-cyan flex-shrink-0" />
                  <div className="truncate">
                    <div className="text-[10px] text-muted-text">EMAIL_ENDPOINT</div>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-text font-bold hover:text-primary-cyan">
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-muted-text hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-success-green" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-cyan/40 transition-colors flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary-violet flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-muted-text">VOICE_LINE</div>
                  <a href={`tel:${portfolioData.contact.phone}`} className="text-text font-bold hover:text-secondary-violet">
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-cyan/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-primary-cyan flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-muted-text">LINKEDIN_NETWORK</div>
                    <span className="text-text font-bold group-hover:text-primary-cyan">solanki-om27</span>
                  </div>
                </div>
                <span className="text-[10px] text-muted-text group-hover:text-primary-cyan">CONNECT &rarr;</span>
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary-cyan/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <Github className="w-4 h-4 text-accent-magenta flex-shrink-0" />
                  <div>
                    <div className="text-[10px] text-muted-text">GITHUB_REPOSITORY</div>
                    <span className="text-text font-bold group-hover:text-accent-magenta">Om27-pro</span>
                  </div>
                </div>
                <span className="text-[10px] text-muted-text group-hover:text-accent-magenta">VIEW REPOS &rarr;</span>
              </a>

            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 border border-primary-cyan/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center space-x-2 text-xs font-bold text-primary-cyan mb-6 pb-3 border-b border-white/10">
              <Send className="w-4 h-4" />
              <span>TRANSMIT_MESSAGE_PACKET</span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center space-y-4 font-mono"
              >
                <div className="w-12 h-12 rounded-full bg-success-green/20 border-2 border-success-green text-success-green flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text">MESSAGE TRANSMITTED</h3>
                <p className="text-xs text-muted-text font-body max-w-md mx-auto">
                  Packet delivered successfully. Om Solanki will process your query shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-text px-4 py-2 rounded-xl text-xs font-mono transition-colors"
                >
                  SEND ANOTHER PACKET
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-muted-text mb-1 text-[11px]">SENDER_NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-surface border border-white/10 focus:border-primary-cyan rounded-xl p-3 text-text placeholder-muted-text/60 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-muted-text mb-1 text-[11px]">SENDER_EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-surface border border-white/10 focus:border-primary-cyan rounded-xl p-3 text-text placeholder-muted-text/60 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-muted-text mb-1 text-[11px]">TRANSMISSION_PAYLOAD *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or query..."
                    className="w-full bg-surface border border-white/10 focus:border-primary-cyan rounded-xl p-3 text-text placeholder-muted-text/60 focus:outline-none transition-colors font-body text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-cyan to-secondary-violet hover:opacity-90 disabled:opacity-50 text-black font-semibold p-3.5 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all flex items-center justify-center space-x-2 font-mono text-xs"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING PACKET...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT PACKET</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted-text font-mono gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
            <span>SYSTEM STATUS: ONLINE & OPERATIONAL</span>
          </div>
          <div>© {new Date().getFullYear()} OM SOLANKI. All Rights Reserved.</div>
        </div>

      </div>
    </section>
  );
}
