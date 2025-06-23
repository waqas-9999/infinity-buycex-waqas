"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, TrendingUp, ExternalLink, Coins } from "lucide-react"
import Bcx from '../../assets/img/bcx.png'

export default function BuyBcx() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animated price counter
  const useAnimatedPrice = (targetPrice, duration = 2000) => {
    const [price, setPrice] = useState(0)

    useEffect(() => {
      if (!isInView) return

      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentPrice = targetPrice * easeOutQuart

        setPrice(currentPrice)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      if (mounted && isInView) {
        const timeout = setTimeout(() => {
          animationFrame = requestAnimationFrame(animate)
        }, 800)

        return () => {
          clearTimeout(timeout)
          if (animationFrame) {
            cancelAnimationFrame(animationFrame)
          }
        }
      }

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }, [targetPrice, duration, mounted, isInView])

    return price.toFixed(2)
  }

  const animatedPrice = useAnimatedPrice(51.02)

  return (
    <div ref={sectionRef} className="bg-black py-20 relative overflow-hidden">

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-6xl font-bold text-white mb-8 leading-tight"
        >
          <motion.span
            animate={
              isInView
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
            BCX, <span style={{ color: "#efb81c" }}>BuyCex Infinity Chain's</span> cornerstone
          </motion.span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-xl lg:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          BCX is the native token of BuyCex Infinity Chain — the core asset powering the blockchain’s operations, governance, and utility. It also fuels the BuyCex Exchange, unlocking real use cases across both chain and platform.
        </motion.p>

        {/* Token Price Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
          className="relative max-w-2xl mx-auto mb-16"
        >
          {/* Card Background */}
          <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Card Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0"
              animate={
                isInView
                  ? {
                      opacity: [0, 0.1, 0],
                      boxShadow: ["0 0 0px #efb81c00", "0 0 40px #efb81c30", "0 0 0px #efb81c00"],
                    }
                  : {}
              }
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            />

            <div className="flex items-center justify-between gap-8">
              {/* Token Icon and Price */}
              <div className="flex items-center gap-6">
                {/* Token Icon */}
                <motion.div
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center relative"
                  style={{ backgroundColor: "#efb81c20" }}
                  animate={
                    isInView
                      ? {
                          boxShadow: ["0 0 0px #efb81c00", "0 0 20px #efb81c40", "0 0 0px #efb81c00"],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                >
                  {/* <Coins className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: "#efb81c" }} /> */}
                  <img src={Bcx} alt='Bcx' className="w-8 h-8 lg:w-10 lg:h-10" />

                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 rounded-2xl opacity-30"
                    style={{ borderColor: "#efb81c" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.div>

                {/* Price Display */}
                <div className="text-left">
                  <motion.div
                    className="text-4xl lg:text-5xl font-bold text-white font-mono"
                    animate={
                      isInView
                        ? {
                            textShadow: [
                              "0 0 10px rgba(255, 255, 255, 0.5)",
                              "0 0 20px rgba(255, 255, 255, 0.8)",
                              "0 0 10px rgba(255, 255, 255, 0.5)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 }}
                  >
                    ${animatedPrice}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex items-center gap-2 text-green-400 text-sm lg:text-base mt-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>+2.34% (24h)</span>
                  </motion.div>
                </div>
              </div>

              {/* Get Token Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  size="lg"
                  className="text-black rounded-md cursor-pointer font-semibold px-8 py-4 text-lg transition-all duration-300 shadow-lg"
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
                  Buy BCX
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-16"
        >
          {/* Buy-back & Burn Report */}
          <motion.a
            href="#"
            className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 group"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-5 h-5 rotate-180 group-hover:text-yellow-400 transition-colors" />
            <span className="text-lg font-medium">BCX Buy-back & Burn report</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
