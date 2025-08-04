"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Plus, Search, ExternalLink, Star, Users, TrendingUp, Zap, Coins } from "lucide-react"
import Navbar from "../components/global/Navbar"
import { Link } from "react-router-dom/cjs/react-router-dom"
import Keplr from "../assets/img/keplr.jpeg"
import Metamask from "../assets/img/metamask.png"
import BCXEx from "../assets/img/bcx-exchange.png"
import Atoms from "../assets/img/atoms.webp"
import BlockScout from "../assets/img/blockscout.jpeg"

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

  const categories = ["All Categories", "DeFi", "NFT", "Gaming", "DEX", "Lending", "Yield Farming", "Bridge", "Tools","Wallet","CEX"]

  const dApps = [
  {
      id: 1,
      name: "Keplr",
      description: "Cosmos wallet for managing and interacting with blockchain assets.",
      category: "Wallet",
      icon: <img src={Keplr} alt="Keplr" className="w-8 h-8 rounded-md" />,
      color: "#2e3148",
      users: "18.4K",
      tvl: "$4.2M",
      url:"https://chains.keplr.app/",
      featured: false,
    },
    {
      id: 2,
      name: "MetaMask",
      description: "Trusted EVM wallet for secure and seamless Web3 access.",
      category: "Wallet",
      icon: <img src={Metamask} alt="MetaMask" className="w-8 h-8 rounded-md" />,
      color: "#f6851b",
      users: "35.7K",
      tvl: "$7.8M",
      url:"https://metamask.io/",
      featured: true,
    },
    {
      id: 3,
      name: "BUYCEX",
      description: "Fast, secure centralized exchange with BCX utility.",
      category: "CEX",
      icon: <img src={BCXEx} alt="BCX Exchange" className="w-8 h-8 rounded-md" />,
      color: "white",
      users: "35.7K",
      url:"https://buycex.com",
      tvl: "$7.8M",
      featured: true,
    },
    {
      id: 4,
      name: "Atom Scan",
      description: "Explore Cosmos blockchain data and transactions easily.",
      category: "Tools",
      icon: <img src={Atoms} alt="Atoms" className="w-8 h-8 rounded-md" />,
      color: "#84cc16",
      users: "4.3K",
      tvl: "N/A",
      url:"https://atomscan.com/frontier/buycex",
      featured: false,
    },
    {
      id: 5,
      name: "Blockscout",
      description: "Open-source explorer for EVM-compatible blockchain networks.",
      category: "Tools",
      icon: <img src={BlockScout} alt="BlockScout" className="w-8 h-8 rounded-md" />,
      color: "white",
      users: "35.7K",
      url:"https://www.blockscout.com/",
      tvl: "$7.8M",
      featured: true,
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
                  {dapp.url ? (
                    <a
                      href={dapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
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
                    </a>
                  ) : (
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
                  )}

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
