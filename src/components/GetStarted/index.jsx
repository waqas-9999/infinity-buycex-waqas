"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  Code,
  Github,
  BookOpen,
  Headphones,
  DollarSign,
  Zap,
  Database,
  Terminal,
  ArrowRight,
  ExternalLink,
  Users,
} from "lucide-react"
import Navbar from "../global/Navbar"

export default function DeveloperPage() {
  const heroRef = useRef(null)
  const startRef = useRef(null)
  const resourcesRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 })
  const isStartInView = useInView(startRef, { once: true, threshold: 0.3 })
  const isResourcesInView = useInView(resourcesRef, { once: true, threshold: 0.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const startNowCards = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete guides and API references to get you started quickly",
      href: "#",
      color: "#3b82f6",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Access our open-source repositories and contribute to the ecosystem",
      href: "#",
      color: "#10b981",
    },
    {
      icon: Headphones,
      title: "Developer Support",
      description: "Get help from our developer community and support team",
      href: "#",
      color: "#8b5cf6",
    },
    {
      icon: DollarSign,
      title: "Grants & Funding",
      description: "Apply for grants and funding to build on BCX Infinity",
      href: "#",
      color: "#efb81c",
    },
  ]

  const resourceCards = [
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Command-line tools for development and deployment",
      features: ["Smart contract deployment", "Network interaction", "Account management"],
      action: "Download CLI",
    },
    {
      icon: Code,
      title: "SDK & Libraries",
      description: "Software development kits for multiple programming languages",
      features: ["JavaScript/TypeScript", "Python", "Go", "Rust"],
      action: "Browse SDKs",
    },
    {
      icon: Database,
      title: "API Endpoints",
      description: "RESTful APIs and GraphQL endpoints for blockchain data",
      features: ["Real-time data", "Historical queries", "WebSocket support"],
      action: "View API Docs",
    },
    {
      icon: Zap,
      title: "Quick Start Templates",
      description: "Pre-built templates to jumpstart your development",
      features: ["DeFi protocols", "NFT marketplaces", "DAO frameworks"],
      action: "Get Templates",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-8 sm:py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c15" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c20" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Code Particles */}
        <div className="absolute inset-0 z-0">
          {mounted &&
            isHeroInView &&
            Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10 font-mono text-sm select-none pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  y: [20, -80, 20],
                  opacity: [0, 0.3, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              >
                {["</>", "{}", "[]", "()", "fn", "=>", "&&", "||"][Math.floor(Math.random() * 8)]}
              </motion.div>
            ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-7xl sm:text-8xl font-bold text-white leading-tight mb-2 sm:mb-4"
                >
                  Build Beyond Go
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl md:text-7xl sm:text-8xl font-bold leading-tight"
                  style={{ color: "#efb81c" }}
                >
                  <motion.span
                    animate={
                      isHeroInView
                        ? {
                            textShadow: ["0 0 20px #efb81c50", "0 0 30px #efb81c80", "0 0 20px #efb81c50"],
                          }
                        : {}
                    }
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  >
                    Limitless
                  </motion.span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-white/80 text-md sm:text-xl leading-relaxed max-w-lg"
              >
                From idea to impact — build, deploy, and scale with BCX Infinity. Unlock the potential of new horizons
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
              </motion.div>
            </motion.div>

            {/* Right Visual - 3D Crystal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={isHeroInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative w-80 h-80"
                animate={
                  isHeroInView
                    ? {
                        rotateY: [0, 360],
                      }
                    : {}
                }
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 2 }}
              >
                {/* Central Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
                  style={{
                    background: `radial-gradient(circle, #efb81c, #d4a017)`,
                    boxShadow: "0 0 40px #efb81c50",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: ["0 0 40px #efb81c50", "0 0 60px #efb81c80", "0 0 40px #efb81c50"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* Crystal Shards */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: "60px",
                      height: "120px",
                      background: `linear-gradient(135deg, #3b82f6, #8b5cf6, #efb81c)`,
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      transformOrigin: "50% 100%",
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-80px)`,
                      opacity: 0.8,
                    }}
                    animate={{
                      rotateZ: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4 + (i % 3),
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />
                ))}

                {/* Floating Particles */}
                {isHeroInView &&
                  Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-60"
                      style={{
                        backgroundColor: "#efb81c",
                        left: `${30 + Math.random() * 40}%`,
                        top: `${30 + Math.random() * 40}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1.2, 0.5],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Start Now Section */}
      <section ref={startRef} className="py-8 sm:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c08" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStartInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-6xl font-bold text-start sm:text-center text-white mb-0 sm:mb-4">
              <motion.span
                animate={
                  isStartInView
                    ? {
                        textShadow: [
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                          `0 0 30px #efb81c40`,
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              >
                Start Now
              </motion.span>
            </h2>
          </motion.div>

          {/* Start Now Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {startNowCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={isStartInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="group relative cursor-pointer"
              >
                <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-4 sm:p-8 h-full transition-all duration-300 group-hover:border-gray-600/50 group-hover:bg-gray-900/60">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${card.color}20` }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: `${card.color}30`,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <card.icon className="w-8 h-8" style={{ color: card.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{card.description}</p>

                  {/* Action Button */}
                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: card.color }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent, ${card.color}05, transparent)`,
                      border: `1px solid ${card.color}20`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Code Showcase Section */}
      <section className="py-8 sm:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c10" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c15" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Code Symbols */}
        <div className="absolute inset-0 z-0">
          {mounted &&
            Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/5 font-mono text-lg select-none pointer-events-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.05, 0.15, 0.05],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              >
                {["async", "const", "=>", "{}", "[]", "export", "import", "function"][Math.floor(Math.random() * 8)]}
              </motion.div>
            ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-8">

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-5xl font-bold text-white leading-tight"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                      `0 0 30px #efb81c40`,
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  Supercharge your development journey with <span style={{ color: "#efb81c" }}>BCX Infinity</span>
                </motion.span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-white/80 text-sm sm:text-lg leading-relaxed max-w-lg"
              >
                BCX Infinity empowers developers with EVM compatibility, Cosmos interoperability, and lightning-fast performance. Whether you're building DeFi protocols, NFT platforms, or cross-chain dApps, our robust SDKs, APIs, and tooling make development seamless and scalable.
              </motion.p>

              {/* Feature Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="space-y-4 text-sm sm:text-lg"
              >
                {[
                  "EVM & Cosmos SDK Support",
                  "Native IBC Interoperability",
                  "Ultra-Fast Transactions",
                  "Proven security model",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#efb81c" }} />
                    <span className="text-white/70">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Code Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Code Editor Container */}
              <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/50 bg-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-white/60 text-sm font-mono">buycex-sdk.js</span>
                  </div>
                  <motion.button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300"
                    style={{
                      backgroundColor: "#efb81c20",
                      color: "#efb81c",
                      border: "1px solid #efb81c40",
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#efb81c30",
                      borderColor: "#efb81c60",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                    </svg>
                    Copy code
                  </motion.button>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="text-white/90">
                      <span className="text-red-400">export</span> <span className="text-blue-400">const</span>{" "}
                      <span className="text-purple-400">streamDerivativeMarketOrderbook</span>{" "}
                      <span className="text-white">=</span> <span className="text-blue-400">async</span>{" "}
                      <span className="text-yellow-400">(</span>
                    </div>
                    <div className="text-white/90 pl-4">
                      <span className="text-orange-400">marketId</span>
                      <span className="text-white">:</span> <span className="text-green-400">string</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="text-white/90">
                      <span className="text-yellow-400">)</span> <span className="text-blue-400">=&gt;</span>{" "}
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="text-white/90 pl-4">
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-white">streamOrderbookUpdates</span> <span className="text-white">=</span>{" "}
                      <span className="text-orange-400">indexerDerivativesStream</span>
                      <span className="text-white">.</span>
                    </div>
                    <div className="text-white/90 pl-4">
                      <span className="text-blue-400">const</span> <span className="text-orange-400">callback</span>{" "}
                      <span className="text-white">=</span> <span className="text-yellow-400">(</span>
                      <span className="text-orange-400">orderbookUpdate</span>
                      <span className="text-yellow-400">)</span> <span className="text-blue-400">=&gt;</span>{" "}
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="text-white/90 pl-8">
                      <span className="text-orange-400">console</span>
                      <span className="text-white">.</span>
                      <span className="text-yellow-400">log</span>
                      <span className="text-yellow-400">(</span>
                      <span className="text-orange-400">orderbookUpdate</span>
                      <span className="text-yellow-400">)</span>
                    </div>
                    <div className="text-white/90 pl-4">
                      <span className="text-yellow-400">{"}"}</span>
                    </div>
                    <div className="text-white/90 pl-4">
                      <span className="text-purple-400">streamOrderbookUpdates</span>
                      <span className="text-yellow-400">(</span>
                      <span className="text-orange-400">marketId</span>
                      <span className="text-white">,</span> <span className="text-orange-400">callback</span>
                      <span className="text-yellow-400">)</span>
                    </div>
                    <div className="text-white/90">
                      <span className="text-yellow-400">{"}"}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
                  animate={{
                    opacity: [0, 0.1, 0],
                    boxShadow: ["0 0 0px #efb81c00", "0 0 30px #efb81c30", "0 0 0px #efb81c00"],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                />
              </div>

              {/* Floating Code Particles around Editor */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                  style={{
                    backgroundColor: "#efb81c",
                    left: `${-10 + Math.random() * 120}%`,
                    top: `${-10 + Math.random() * 120}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

         
        </div>
      </section>

       {/* Ready to Build and Earn Section */}
      <section className="py-8 sm:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c15" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c20" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Decorative Circle */}
        <motion.div
          className="absolute top-8 right-8 w-32 h-32 rounded-full opacity-60"
          style={{ backgroundColor: "#efb81c" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold text-white leading-tight mb-8"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                      `0 0 30px #efb81c50`,
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  Ready to Build and <span style={{ color: "#efb81c" }}>Earn?</span>
                </motion.span>
              </motion.h2>

              {/* Build Relationships Card - Now takes remaining height */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group flex-1"
              >
                <div
                  className="relative h-full p-4 sm:p-8 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
                  style={{
                    background: `linear-gradient(135deg, #efb81c, #d4a017)`,
                  }}
                >
                  <div>
                    {/* Speech Bubble Icon */}
                    <motion.div
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                      </svg>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-2xl font-bold text-black mb-4">Build Relationships</h3>
                    <p className="text-black/80 text-sm sm:text-lg leading-relaxed mb-8">
                      Want to partner up or build a dapp? Get in touch with our core contributors and ecosystem
                      partners.
                    </p>
                  </div>

                  {/* Button - Positioned at bottom */}
                  <motion.button
                    className="bg-black/10 backdrop-blur-sm text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-black/20 self-start"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      borderColor: "rgba(0, 0, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full blur-xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col h-full space-y-6"
            >
              {/* Build dApps Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative flex-1"
              >
                <div className="relative h-full bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-8 transition-all duration-300 group-hover:border-gray-600/70 group-hover:bg-gray-900/80 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: "#efb81c20" }}
                      whileHover={{ scale: 1.1, backgroundColor: "#efb81c30" }}
                    >
                      <BookOpen className="w-6 h-6" style={{ color: "#efb81c" }} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">Build dApps</h3>
                    <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-6">
                      Find everything you need to start building on GateChain today.
                    </p>
                  </div>

                  {/* Link - Positioned at bottom */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 font-medium transition-colors self-start"
                    style={{ color: "#efb81c" }}
                    whileHover={{ x: 5 }}
                  >
                    View Documentation
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent, #efb81c05, transparent)`,
                      border: `1px solid #efb81c20`,
                    }}
                  />
                </div>
              </motion.div>

              {/* Build Bonds Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative flex-1"
              >
                <div className="relative h-full bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-8 transition-all duration-300 group-hover:border-gray-600/70 group-hover:bg-gray-900/80 flex flex-col justify-between">
                  <div>
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: "#efb81c20" }}
                      whileHover={{ scale: 1.1, backgroundColor: "#efb81c30" }}
                    >
                      <Users className="w-6 h-6" style={{ color: "#efb81c" }} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">Build Bonds</h3>
                    <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-6">
                      Connect with people from across the ecosystem. Build and grow together.
                    </p>
                  </div>

                  {/* Link - Positioned at bottom */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 font-medium transition-colors self-start"
                    style={{ color: "#efb81c" }}
                    whileHover={{ x: 5 }}
                  >
                    Access the Community Hub
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent, #efb81c05, transparent)`,
                      border: `1px solid #efb81c20`,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {mounted &&
            Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-40"
                style={{
                  backgroundColor: "#efb81c",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-8 sm:py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #000000, #1a1a1a, #efb81c20, #000000)`,
            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c25" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c30" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {mounted &&
            Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-40"
                style={{
                  backgroundColor: "#efb81c",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                  `0 0 40px #efb81c60`,
                  "0 0 20px rgba(255, 255, 255, 0.3)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              The real regret? Never giving it a shot
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/80 text-md lg:text-2xl mb-8 sm:mb-16 leading-relaxed"
          >
            Join us in building the financial system for tomorrow.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            {[
              { name: "Discord", icon: "💬", href: "#" },
              { name: "Twitter", icon: "🐦", href: "#" },
              { name: "Reddit", icon: "📱", href: "#" },
              { name: "GitHub", icon: "⚡", href: "#" },
              { name: "YouTube", icon: "📺", href: "#" },
              { name: "Telegram", icon: "✈️", href: "#" },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="flex items-center gap-3 px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-white transition-all duration-300 font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(239, 184, 28, 0.1)",
                  borderColor: "#efb81c80",
                  boxShadow: "0 0 20px #efb81c30",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{social.icon}</span>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Additional CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                className="text-black inline-flex items-center rounded-md font-semibold px-4 sm:px-12 py-3 text-md sm:text-lg transition-all duration-300 shadow-2xl"
                style={{
                  backgroundColor: "#efb81c",
                  borderColor: "#efb81c",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d4a017"
                  e.currentTarget.style.boxShadow = `0 20px 40px #efb81c50`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#efb81c"
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
              >
                Start Building Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </section>
    </div>
  )
}
