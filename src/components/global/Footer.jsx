"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Twitter,
  Github,
  MessageCircle,
  Mail,
  ArrowRight,
  ExternalLink,
  Code,
  BookOpen,
  Users,
  Zap,
} from "lucide-react"

export default function Footer() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 })

  const footerLinks = {
    developers: [
      { name: "Documentation", href: "#", icon: BookOpen },
      { name: "API Reference", href: "#", icon: Code },
      { name: "SDK & Tools", href: "#", icon: Zap },
      { name: "GitHub", href: "#", icon: Github },
    ],
    community: [
      { name: "Discord", href: "#", icon: MessageCircle },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Telegram", href: "#", icon: Users },
      { name: "Reddit", href: "#", icon: ExternalLink },
    ],
    resources: [
      { name: "Whitepaper", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Status Page", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Contact", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  return (
    <footer ref={sectionRef} className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#efb81c08" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "#efb81c10" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {isInView &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-30"
              style={{
                backgroundColor: "#efb81c",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-16 border-b border-gray-800/50"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-4xl font-bold text-white mb-4"
            >
              Stay Updated with{" "}
              <motion.span
                style={{ color: "#efb81c" }}
                animate={
                  isInView
                    ? {
                        textShadow: ["0 0 10px #efb81c50", "0 0 20px #efb81c80", "0 0 10px #efb81c50"],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                BuyCex Infinity Chain
              </motion.span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/70 text-sm sm:text-lg mb-8"
            >
              Get the latest updates, announcements, and developer resources delivered to your inbox.
            </motion.p>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gray-600 transition-colors"
              />
              <motion.button
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "#efb81c",
                  color: "black",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#d4a017",
                  boxShadow: "0 10px 25px #efb81c40",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#efb81c" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                </motion.div>
                <span className="text-white text-2xl font-bold">BuyCex Infinity Chain</span>
              </div>

              <p className="text-white/70 text-sm sm:text-lg leading-relaxed max-w-md">
                The blockchain built for infinite possibilities. Fast, secure, and reliable infrastructure for the
                future of decentralized finance.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gray-900/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "#efb81c80",
                      backgroundColor: "#efb81c10",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Developers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">Developers</h4>
              <ul className="space-y-3">
                {footerLinks.developers.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">Community</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      {link.icon && <link.icon className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors duration-300">
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="py-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/50 text-sm">
            <span>© 2024 BuyCex Infinity Chain. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <motion.button
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-sm">Back to top</span>
            <motion.div
              className="w-8 h-8 border border-gray-700/50 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors"
              whileHover={{ borderColor: "#efb81c80" }}
            >
              <ArrowRight className="w-4 h-4 -rotate-90" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Border Line */}
      {isInView && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        />
      )}
    </footer>
  )
}
