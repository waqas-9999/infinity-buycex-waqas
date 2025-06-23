"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useState, useRef } from "react"

export default function RealtimeDataSection() {
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animated counter hook that only starts when in view
  const useAnimatedCounter = (end, duration = 2000, decimals = 0) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = end * easeOutQuart

        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      if (mounted && isInView) {
        // Small delay to make it feel more natural
        const timeout = setTimeout(() => {
          animationFrame = requestAnimationFrame(animate)
        }, 500)

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
    }, [end, duration, mounted, isInView])

    return decimals > 0 ? count.toFixed(decimals) : Math.floor(count)
  }

  const transactionCost = useAnimatedCounter(0.00133, 2000, 5)
  const blockTime = useAnimatedCounter(4, 1500)
  const transactions = useAnimatedCounter(48593933, 3000)
  const blocksMined = useAnimatedCounter(19846835, 3000)

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const formatTransactionNumber = (numStr) => {
    const parts = numStr.split(",")
    if (parts.length > 1) {
      const lastPart = parts[parts.length - 1]
      const otherParts = parts.slice(0, -1).join(",")
      return (
        <>
          {otherParts},<span className="text-[#efb81c]">{lastPart}</span>
        </>
      )
    }
    return numStr
  }

  const formatBlockNumber = (numStr) => {
    const parts = numStr.split(",")
    if (parts.length > 1) {
      const lastPart = parts[parts.length - 1]
      const otherParts = parts.slice(0, -1).join(",")
      return (
        <>
          {otherParts},<span className="text-[#efb81c]">{lastPart}</span>
        </>
      )
    }
    return numStr
  }

  return (
    <div ref={sectionRef} className="bg-black py-32 relative overflow-hidden">
      {/* Floating Number Animations - Only when in view */}
      <div className="absolute inset-0 z-0">
        {mounted &&
          isInView &&
          Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 font-mono text-lg select-none pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                y: [20, -100, 20],
                opacity: [0, 0.3, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              {Math.floor(Math.random() * 9)}
            </motion.div>
          ))}
      </div>

      {/* Binary Code Animation - Only when in view */}
      <div className="absolute inset-0 z-0">
        {mounted &&
          isInView &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-white/5 font-mono text-sm select-none pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                y: [50, -150, 50],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 1.5,
                ease: "linear",
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
      </div>

      {/* Subtle Golden Particles - Only when in view */}
      <div className="absolute inset-0 z-0">
        {mounted &&
          isInView &&
          Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "#efb81c",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.5, 1, 0.5],
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

      <div className="w-full max-w-full sm:max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            <motion.span
              animate={
                isInView
                  ? {
                      textShadow: [
                        "0 0 20px rgba(255, 255, 255, 0.3)",
                        `0 0 30px #efb81c30`,
                        "0 0 20px rgba(255, 255, 255, 0.3)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              BuyCex Infinity Chain Real-Time Data
            </motion.span>
          </h2>
        </motion.div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Average Transaction Cost */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-center group"
          >
            <motion.div
              className="text-2xl sm:text-5xl font-bold text-white mb-4 font-mono"
              whileHover={{ scale: 1.05 }}
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
              transition={{
                textShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 },
                scale: { duration: 0.2 },
              }}
            >
              ${transactionCost}
            </motion.div>
            <motion.p
              className="text-white/70 text-md sm:text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Average Transaction Cost
            </motion.p>
          </motion.div>

          {/* Block Time */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            className="text-center group"
          >
            <motion.div
              className="text-2xl sm:text-5xl font-bold text-white mb-4 font-mono"
              whileHover={{ scale: 1.05 }}
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
              transition={{
                textShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 },
                scale: { duration: 0.2 },
              }}
            >
              {blockTime}s
            </motion.div>
            <motion.p
              className="text-white/70 text-md sm:text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Block Time
            </motion.p>
          </motion.div>

          {/* On-chain Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="text-center group"
          >
            <motion.div
              className="text-2xl sm:text-5xl font-bold text-white mb-4 font-mono"
              whileHover={{ scale: 1.05 }}
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
              transition={{
                textShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.5 },
                scale: { duration: 0.2 },
              }}
            >
              {formatTransactionNumber(formatNumber(transactions))}
            </motion.div>
            <motion.p
              className="text-white/70 text-md sm:text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              On-chain Transactions
            </motion.p>
          </motion.div>

          {/* Blocks Mined */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
            className="text-center group"
          >
            <motion.div
              className="text-2xl sm:text-5xl font-bold text-white mb-4 font-mono"
              whileHover={{ scale: 1.05 }}
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
              transition={{
                textShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 },
                scale: { duration: 0.2 },
              }}
            >
              {formatBlockNumber(formatNumber(blocksMined))}
            </motion.div>
            <motion.p
              className="text-white/70 text-sm sm:text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Blocks Mined
            </motion.p>
          </motion.div>
        </div>

        {/* Additional scroll-triggered effects */}
        {isInView && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            {/* Scanning line effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#efb81c] to-transparent opacity-60"
              animate={{
                y: [0, 400, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
