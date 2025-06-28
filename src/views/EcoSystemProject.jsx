"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Plus, Search, ExternalLink, Star, Users, TrendingUp, Zap, Coins } from "lucide-react"
import Navbar from "../components/global/Navbar"
import { Link } from "react-router-dom/cjs/react-router-dom"

export default function EcoSystemProject() {
  const heroRef = useRef(null)
  const appsRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 })
  const isAppsInView = useInView(appsRef, { once: true, threshold: 0.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = ["All Categories", "DeFi", "NFT", "Gaming", "DEX", "Lending", "Yield Farming", "Bridge", "Tools"]

  const dApps = [
    {
      id: 1,
      name: "GateSwap",
      description: "Decentralized exchange for seamless token swapping",
      category: "DEX",
      icon: "🔄",
      color: "#3b82f6",
      users: "12.5K",
      tvl: "$2.4M",
      featured: true,
    },
    {
      id: 2,
      name: "GateLend",
      description: "Lending and borrowing protocol with competitive rates",
      category: "Lending",
      icon: "🏦",
      color: "#10b981",
      users: "8.2K",
      tvl: "$1.8M",
      featured: true,
    },
    {
      id: 3,
      name: "GateNFT",
      description: "NFT marketplace for digital collectibles",
      category: "NFT",
      icon: "🎨",
      color: "#8b5cf6",
      users: "15.3K",
      tvl: "$890K",
      featured: false,
    },
    {
      id: 4,
      name: "GateFarm",
      description: "Yield farming platform with auto-compounding",
      category: "Yield Farming",
      icon: "🌾",
      color: "#f59e0b",
      users: "6.7K",
      tvl: "$3.2M",
      featured: true,
    },
    {
      id: 5,
      name: "GatePlay",
      description: "Blockchain gaming platform with P2E mechanics",
      category: "Gaming",
      icon: "🎮",
      color: "#ef4444",
      users: "22.1K",
      tvl: "$1.1M",
      featured: false,
    },
    {
      id: 6,
      name: "GateBridge",
      description: "Cross-chain bridge for multi-chain assets",
      category: "Bridge",
      icon: "🌉",
      color: "#06b6d4",
      users: "9.8K",
      tvl: "$5.6M",
      featured: true,
    },
    {
      id: 7,
      name: "GateTools",
      description: "Developer tools and analytics dashboard",
      category: "Tools",
      icon: "🛠️",
      color: "#84cc16",
      users: "4.3K",
      tvl: "N/A",
      featured: false,
    },
    {
      id: 8,
      name: "GateVault",
      description: "Secure multi-signature wallet solution",
      category: "DeFi",
      icon: "🔐",
      color: "#6366f1",
      users: "7.9K",
      tvl: "$2.7M",
      featured: false,
    },
  ]

  const filteredDApps = dApps.filter((dapp) => {
    const matchesCategory = selectedCategory === "All Categories" || dapp.category === selectedCategory
    const matchesSearch =
      dapp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dapp.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const floatingIcons = [
    { icon: "🔄", color: "#3b82f6", delay: 0 },
    { icon: "🏦", color: "#10b981", delay: 0.2 },
    { icon: "🎨", color: "#8b5cf6", delay: 0.4 },
    { icon: "🌾", color: "#f59e0b", delay: 0.6 },
    { icon: "🎮", color: "#ef4444", delay: 0.8 },
    { icon: "🌉", color: "#06b6d4", delay: 1.0 },
    { icon: "🛠️", color: "#84cc16", delay: 1.2 },
    { icon: "🔐", color: "#6366f1", delay: 1.4 },
    { icon: "⚡", color: "#efb81c", delay: 1.6 },
    { icon: "🛡️", color: "#f97316", delay: 1.8 },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-10 lg:py-20">
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

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 lg:space-y-8"
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl lg:text-7xl font-bold text-white leading-tight"
              >
                <motion.span
                  animate={
                    isHeroInView
                      ? {
                          textShadow: [
                            "0 0 20px rgba(255, 255, 255, 0.3)",
                            `0 0 30px #efb81c50`,
                            "0 0 20px rgba(255, 255, 255, 0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  Discover <span style={{ color: "#efb81c" }}>dApps</span>
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/80 text-lg lg:text-2xl leading-relaxed max-w-lg"
              >
                An overview of the dApps in the BCX Infinity ecosystem.
              </motion.p>

              {/* Add dApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div className="flex justify-self-start self-start" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/dapp/submit-form">
                  <button
                    size="lg"
                    className="text-black flex items-center self-start justify-self-start cursor-pointer rounded-md font-semibold px-4 sm:px-6 py-3 text-sm lg:text-lg transition-all duration-300 shadow-lg"
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
                    <Plus className="mr-2 w-5 h-5" />
                    Add dApp
                  </button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Visual - Floating App Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative h-96 flex justify-center items-center"
            >
              {/* Floating App Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-2xl"
                  style={{
                    backgroundColor: item.color,
                    left: `${20 + (index % 3) * 30}%`,
                    top: `${10 + Math.floor(index / 3) * 25}%`,
                  }}
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={
                    isHeroInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        }
                      : { opacity: 0, scale: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 1 + item.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: `0 20px 40px ${item.color}40`,
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: -1 }}>
                {floatingIcons.slice(0, -2).map((_, index) => (
                  <motion.line
                    key={index}
                    x1={`${20 + (index % 3) * 30 + 8}%`}
                    y1={`${10 + Math.floor(index / 3) * 25 + 8}%`}
                    x2={`${20 + ((index + 1) % 3) * 30 + 8}%`}
                    y2={`${10 + Math.floor((index + 1) / 3) * 25 + 8}%`}
                    stroke="#efb81c"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={isHeroInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, delay: 2 + index * 0.1 }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section ref={appsRef} className="py-10 lg:py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAppsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-6 py-1 sm:py-3 rounded-full text-sm lg:text-md font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "text-black shadow-lg"
                        : "bg-black text-gray-100 hover:bg-[#151415] border border-[#454545]"
                    }`}
                    style={{
                      backgroundColor: selectedCategory === category ? "#efb81c" : undefined,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isAppsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isAppsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search dApps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-1 sm:py-3 w-80 bg-black border border-[#454545] rounded-md sn:rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Apps Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isAppsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
          >
            {filteredDApps.map((dapp, index) => (
              <motion.div
                key={dapp.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isAppsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: 1 + index * 0.1,
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
                <div className="relative bg-black rounded-2xl p-4 lg:p-6 shadow-lg border border-[#454545] transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#454545]">
                  {/* Featured Badge */}
                  {dapp.featured && (
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#efb81c" }}
                    >
                      <Star className="w-3 h-3 text-black fill-current" />
                    </div>
                  )}

                  {/* App Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg"
                    style={{ backgroundColor: dapp.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dapp.icon}
                  </motion.div>

                  {/* App Info */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#efb81c] transition-colors">
                    {dapp.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{dapp.description}</p>

                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mb-4">
                    {dapp.category}
                  </div>


                  {/* Launch Button */}
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 py-1.5 sm:py-3 rounded-xl font-medium transition-all duration-300 border-2 border-[#454545]"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: dapp.color,
                      color: dapp.color,
                    }}
                    whileHover={{
                      backgroundColor: dapp.color,
                      color: "white",
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Launch App
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent, ${dapp.color}05, transparent)`,
                      border: `1px solid ${dapp.color}20`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredDApps.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-10 lg:py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No dApps found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All Categories")
                  setSearchQuery("")
                }}
                className="text-black font-medium"
                style={{ backgroundColor: "#efb81c" }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isAppsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Zap, label: "Total dApps", value: "50+", color: "#efb81c" },
              { icon: Users, label: "Active Users", value: "125K+", color: "#3b82f6" },
              { icon: Coins, label: "Total TVL", value: "$18.2M", color: "#10b981" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isAppsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
                className="text-center p-4 sm:p-8  rounded-2xl shadow-lg border border-[#454545]"
              >
                <motion.div
                  className="w-10 sm:w-16 h-10 sm:h-16 rounded-md sm:rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${stat.color}20` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-6 sm:w-8 h-6 sm:h-8" style={{ color: stat.color }} />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isAppsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm max-w-4xl mx-auto px-6">
            ⓘ BCX Infinity is an open source community that is fully open to everyone. All projects and dApps running on
            BCX Infinity are independently developed by third party developers.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
