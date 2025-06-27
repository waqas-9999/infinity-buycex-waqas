"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { CheckCircle, Clock, ArrowRight, ExternalLink, Calendar, Zap, Users, Code } from "lucide-react"
import Navbar from "../components/global/Navbar"

export default function RoadmapPage() {
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 })
  const isTimelineInView = useInView(timelineRef, { once: true, threshold: 0.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const roadmapItems = [
    {
      period: "2024 Q1",
      status: "completed",
      items: [
        {
          title: "BuyCex Mainnet Launch",
          description:
            "Official launch of BuyCex mainnet with full EVM compatibility, enabling developers to deploy smart contracts and dApps seamlessly.",
          date: "March 2024",
          type: "milestone",
          icon: Zap,
        },
        {
          title: "Developer Tools Release",
          description:
            "Comprehensive SDK, CLI tools, and documentation released to support developers building on BuyCex ecosystem.",
          date: "February 2024",
          type: "development",
          icon: Code,
        },
      ],
    },
    {
      period: "2024 Q2",
      status: "completed",
      items: [
        {
          title: "DeFi Ecosystem Expansion",
          description:
            "Launch of native DEX, lending protocols, and yield farming platforms, establishing BuyCex as a DeFi hub with over $10M TVL.",
          date: "June 2024",
          type: "ecosystem",
          icon: Users,
        },
        {
          title: "Cross-Chain Bridge Integration",
          description:
            "Multi-chain bridge supporting Ethereum, BSC, and Polygon, enabling seamless asset transfers across major blockchain networks.",
          date: "May 2024",
          type: "infrastructure",
          icon: ArrowRight,
        },
      ],
    },
    {
      period: "2024 Q3",
      status: "in-progress",
      items: [
        {
          title: "BuyCex AI Integration at DevCon",
          description:
            "BuyCex AI is officially unveiled at DevCon 2024, marking the beginning of BuyCex's evolution into a leader in decentralized AI (DeAI).",
          date: "September 2024",
          type: "milestone",
          icon: Zap,
          featured: true,
        },
        {
          title: "Mobile Wallet Launch",
          description:
            "Native mobile wallet with built-in dApp browser, staking features, and seamless DeFi integration for iOS and Android platforms.",
          date: "August 2024",
          type: "product",
          icon: Users,
        },
      ],
    },
    {
      period: "2024 Q4",
      status: "upcoming",
      items: [
        {
          title: "BuyCex announces decentralized AI marketplace",
          description:
            "Launch of the first decentralized AI marketplace on BuyCex, enabling developers to monetize AI models and users to access AI services.",
          date: "December 2024",
          type: "innovation",
          icon: Zap,
          featured: true,
        },
        {
          title: "Enterprise Partnerships Program",
          description:
            "Strategic partnerships with Fortune 500 companies to integrate BuyCex technology into enterprise blockchain solutions.",
          date: "November 2024",
          type: "business",
          icon: Users,
        },
      ],
    },
    {
      period: "2025 Q1",
      status: "planned",
      items: [
        {
          title: "Layer 2 Scaling Solution",
          description:
            "Implementation of advanced Layer 2 scaling technology, increasing transaction throughput to 100,000+ TPS while maintaining security.",
          date: "March 2025",
          type: "infrastructure",
          icon: Zap,
        },
        {
          title: "Governance Token Launch",
          description:
            "Introduction of decentralized governance with GT token holders voting on protocol upgrades and ecosystem development decisions.",
          date: "February 2025",
          type: "governance",
          icon: Users,
        },
      ],
    },
    {
      period: "2025 Q2",
      status: "planned",
      items: [
        {
          title: "Global Developer Conference",
          description:
            "First annual BuyCex Developer Conference bringing together 1000+ developers, showcasing ecosystem growth and future innovations.",
          date: "June 2025",
          type: "community",
          icon: Users,
        },
        {
          title: "Institutional DeFi Suite",
          description:
            "Professional-grade DeFi tools and custody solutions designed for institutional investors and traditional financial institutions.",
          date: "May 2025",
          type: "product",
          icon: Code,
        },
      ],
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#10b981"
      case "in-progress":
        return "#efb81c"
      case "upcoming":
        return "#3b82f6"
      case "planned":
        return "#8b5cf6"
      default:
        return "#6b7280"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return CheckCircle
      case "in-progress":
        return Clock
      case "upcoming":
        return Calendar
      case "planned":
        return Calendar
      default:
        return Clock
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20">
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

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {mounted &&
            isHeroInView &&
            Array.from({ length: 20 }).map((_, i) => (
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

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl lg:text-8xl font-bold leading-tight mb-8"
          >
            <span className="text-white">BuyCex</span>
            <br />
            <motion.span
              style={{ color: "#efb81c" }}
              animate={
                isHeroInView
                  ? {
                      textShadow: ["0 0 20px #efb81c50", "0 0 40px #efb81c80", "0 0 20px #efb81c50"],
                    }
                  : {}
              }
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              Roadmap
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-xl lg:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Discover our journey from inception to becoming the leading blockchain platform for decentralized finance
            and AI innovation.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                size="lg"
                className="text-black font-semibold px-8 py-4 rounded-md text-lg transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: "#efb81c",
                  borderColor: "#efb81c",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#d4a017"
                  e.currentTarget.style.boxShadow = `0 10px 25px #efb81c40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#efb81c"
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center">
                    Join Our Journey
                <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 relative overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {roadmapItems.map((period, periodIndex) => (
                <motion.div
                  key={period.period}
                  initial={{ opacity: 0, y: 100 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + periodIndex * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="relative"
                >
                  {/* Period Header */}
                  <div className="flex items-center justify-center mb-12">
                    <motion.div
                      className="relative bg-black border-4 rounded-2xl px-8 py-4 z-10"
                      style={{ borderColor: getStatusColor(period.status) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center gap-4">
                        {(() => {
                          const StatusIcon = getStatusIcon(period.status)
                          return <StatusIcon className="w-6 h-6" style={{ color: getStatusColor(period.status) }} />
                        })()}
                        <h2 className="text-3xl font-bold text-white">{period.period}</h2>
                        <div
                          className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide"
                          style={{
                            backgroundColor: `${getStatusColor(period.status)}20`,
                            color: getStatusColor(period.status),
                          }}
                        >
                          {period.status.replace("-", " ")}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Period Items */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {period.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -50 : 50 }}
                        animate={
                          isTimelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: itemIndex % 2 === 0 ? -50 : 50 }
                        }
                        transition={{
                          duration: 0.6,
                          delay: 0.4 + periodIndex * 0.2 + itemIndex * 0.1,
                        }}
                        className={`relative ${itemIndex % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}
                      >
                        {/* Timeline Connector */}
                        <div
                          className={`hidden lg:block absolute top-8 w-8 h-0.5 ${
                            itemIndex % 2 === 0 ? "right-0" : "left-0"
                          }`}
                          style={{ backgroundColor: "#efb81c40" }}
                        ></div>

                        {/* Item Card */}
                        <motion.div
                          className={`relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-300 hover:border-gray-600/70 hover:bg-gray-900/80 group ${
                            item.featured ? "ring-2 ring-yellow-400/30" : ""
                          }`}
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          {/* Featured Badge */}
                          {item.featured && (
                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center bg-yellow-400">
                              <Zap className="w-3 h-3 text-black" />
                            </div>
                          )}

                          {/* Item Header */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div
                              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: "#efb81c20" }}
                              whileHover={{ scale: 1.1, backgroundColor: "#efb81c30" }}
                            >
                              <item.icon className="w-6 h-6" style={{ color: "#efb81c" }} />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-3 text-sm text-white/60">
                                <span>{item.date}</span>
                                <span>•</span>
                                <span className="capitalize">{item.type}</span>
                              </div>
                            </div>
                          </div>

                          {/* Item Description */}
                          <p className="text-white/70 leading-relaxed mb-6">{item.description}</p>

                          {/* Learn More Link */}
                          <motion.button
                            className="inline-flex items-center gap-2 font-medium transition-colors"
                            style={{ color: "#efb81c" }}
                            whileHover={{ x: 5 }}
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4" />
                          </motion.button>

                          {/* Hover Glow */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{
                              background: `linear-gradient(135deg, transparent, #efb81c05, transparent)`,
                              border: `1px solid #efb81c20`,
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-32 text-center"
          >
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 lg:p-16">
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0"
                animate={{
                  opacity: [0, 0.1, 0],
                  boxShadow: ["0 0 0px #efb81c00", "0 0 60px #efb81c30", "0 0 0px #efb81c00"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                      `0 0 30px #efb81c50`,
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  The Future is <span style={{ color: "#efb81c" }}>Decentralized</span>
                </motion.span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                Our roadmap extends beyond 2025, with ambitious plans for quantum-resistant security, interplanetary
                blockchain networks, and AI-human collaboration protocols. Join us in building the future of
                decentralized technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button
                    size="lg"
                    className="text-black font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg"
                    style={{
                      backgroundColor: "#efb81c",
                      borderColor: "#efb81c",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#d4a017"
                      e.currentTarget.style.boxShadow = `0 10px 25px #efb81c40`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#efb81c"
                      e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="flex items-center">
                        Start Building Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </button>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/80 hover:text-white font-medium text-lg transition-all duration-300 underline underline-offset-4 flex items-center gap-2 justify-center"
                  style={{
                    textDecorationColor: "#efb81c80",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textDecorationColor = "#efb81c"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textDecorationColor = "#efb81c80"
                  }}
                >
                  View Documentation
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
