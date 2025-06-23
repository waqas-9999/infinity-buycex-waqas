import { motion } from "framer-motion"

export default function Section1() {
  return (
    <div className="bg-black py-20 relative overflow-hidden">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "#efb81c10" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "#efb81c15" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div> */}

      {/* Floating Particles */}
      {/* <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: "#efb81c",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-6xl font-bold text-white leading-tight"
            >
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
                Designed for the Next Generation of dApps
              </motion.span>
            </motion.h2>

            {/* Feature List */}
            <div className="space-y-8">
              {/* EVM-compatible Feature */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4"
              >
                <motion.div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#efb81c" }}
                  animate={{
                    boxShadow: [`0 0 10px #efb81c50`, `0 0 20px #efb81c80`, `0 0 10px #efb81c50`],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                ></motion.div>
                <div className="space-y-3">
                  <h3 className="text-sm sm:text-xl font-semibold text-white">EVM-compatible, Layer-1 blockchain</h3>
                  <p className="text-white/80 leading-relaxed">
                    BuyCex Infinity Chain is an EVM-compatible Layer-1 blockchain, enabling developers to quickly deploy and run
                    applications with zero cost. Existing EVM applications can be easily migrated to BuyCex Infinity Chain,
                    benefiting from improved performance and reduced costs.
                  </p>
                </div>
              </motion.div>

              {/* Almost Zero Gas Fees */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4"
              >
                <div className="w-1 bg-white/30 rounded-full flex-shrink-0 h-8"></div>
                <div>
                  <h3 className="text-sm sm:text-xl font-medium text-white/60">Almost Zero Gas Fees</h3>
                </div>
              </motion.div>

              {/* High-Performance */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex gap-4"
              >
                <div className="w-1 bg-white/30 rounded-full flex-shrink-0 h-8"></div>
                <div>
                  <h3 className="text-sm sm:text-xl font-medium text-white/60">High-Performance for Applications</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual - Logo Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-96 flex justify-center items-center"
          >
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10"
              style={{ backgroundColor: "#efb81c" }}
              animate={{
                rotate: 360,
                boxShadow: [`0 0 20px #efb81c50`, `0 0 40px #efb81c80`, `0 0 20px #efb81c50`],
              }}
              transition={{
                rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                boxShadow: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <span className="text-black font-bold text-xl">G</span>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {Array.from({ length: 14 }).map((_, index) => (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`${50 + (index % 2 === 0 ? 25 : -25)}%`}
                  y2={`${30 + index * 5}%`}
                  stroke="#efb81c"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 + index * 0.1 }}
                />
              ))}
            </svg>

            {/* Logo Circles */}
            {[
              // Top row
              { symbol: "₮", top: "5%", left: "75%" },
              { symbol: "$", top: "10%", left: "60%" },
              { symbol: "♦", top: "15%", left: "45%" },
              { symbol: "⬢", top: "20%", left: "30%" },
              { symbol: "◐", top: "25%", left: "15%" },

              // Middle rows
              { symbol: "Ξ", top: "35%", left: "85%" },
              { symbol: "₿", top: "40%", left: "10%" },
              { symbol: "▲", top: "45%", left: "70%" },
              { symbol: "●", top: "50%", left: "25%" },

              // Bottom rows
              { symbol: "⚛", top: "65%", left: "80%" },
              { symbol: "N", top: "70%", left: "20%" },
              { symbol: "₳", top: "75%", left: "65%" },
              { symbol: "◆", top: "80%", left: "35%" },
              { symbol: "⬟", top: "85%", left: "50%" },
            ].map((logo, index) => (
              <motion.div
                key={index}
                className="absolute w-12 h-12 bg-black border-2 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  top: logo.top,
                  left: logo.left,
                  borderColor: "#efb81c40",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  borderColor: "#efb81c",
                  boxShadow: `0 0 20px #efb81c40`,
                }}
              >
                <span className="text-white font-bold text-sm">{logo.symbol}</span>
              </motion.div>
            ))}

            {/* Enhanced Floating Animation Particles */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                  backgroundColor: "#efb81c",
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                }}
                animate={{
                  y: [0, -15, 0],
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

            {/* Orbital Rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={`ring-${ring}`}
                className="absolute border rounded-full opacity-20"
                style={{
                  width: `${ring * 80}px`,
                  height: `${ring * 80}px`,
                  borderColor: "#efb81c",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20 + ring * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
