"use client"

import { motion } from "framer-motion"
import { ArrowRight, Infinity } from "lucide-react"
import { useEffect, useState } from "react"
import Navbar from "../global/Navbar"
import InfinitySymbol from "../global/InfinitySymbol"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#efb81c20" }}
          animate={{
            scale: [1, 1.2, 1],
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
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: "#efb81c15" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {mounted &&
          Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: "#efb81c",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.6,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 text-center">
        {/* Animated Infinity Icon */}
        <InfinitySymbol/>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl sm:text-8xl font-light text-white mb-8 max-w-5xl leading-tight relative z-10"
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.5)",
                `0 0 30px #efb81c70`,
                "0 0 20px rgba(255, 255, 255, 0.5)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            The Chain That Lets You Own the World’s Value Layer
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-sm md:text-xl max-w-2xl mb-12 leading-relaxed relative z-10"
        >
          <p className="mb-2 font-medium">Crypto is fragmented today, but it doesn't need to be.
          For the first time, build projects, create value, and
          exchange assets on the same hyper-performant chain.</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 relative z-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className="text-black flex items-center text-sm sm:text-lg font-semibold px-3 sm:px-10 py-4 rounded-md transition-all duration-300 shadow-lg"
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
              Start Building
                  <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
