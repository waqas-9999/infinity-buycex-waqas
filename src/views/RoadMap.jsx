"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { CheckCircle, Clock, ArrowRight, ExternalLink, Calendar, Zap, Users, Code } from "lucide-react"
import Navbar from "../components/global/Navbar"
import { TimelineDemo } from "../components/RoadMap/Timeline"

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

      
      <TimelineDemo />
    </div>
  )
}
