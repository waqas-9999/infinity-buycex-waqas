"use client"
import { RiInfinityLine } from "react-icons/ri";

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-30 flex items-center justify-between px-2 sm:px-6 py-4 container mx-auto"
    >
      {/* Logo Section */}
      <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
        <motion.div
          className="w-8 h-8 bg-[#efb81c] rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <RiInfinityLine size={22}/>
        </motion.div>
        <span className="text-white text-xl font-semibold">Infinity Buycex</span>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {["Stats", "Docs", "Ecosystem"].map((item, index) => (
          <motion.a
            key={item}
            href="#"
            className="text-white/90 hover:text-white transition-colors font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {item}
          </motion.a>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.div className="md:hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </motion.div>
    </motion.nav>
  )
}
