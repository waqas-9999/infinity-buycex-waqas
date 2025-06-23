import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const features = [
    {
        title: "INTEROPERABLE",
        description:
            "It combines the strengths of Ethereum smart contract capabilities and Cosmos’s modular architecture, leveraging the best of both open-source ecosystems to deliver scalability, security, and seamless interoperability.",
    },
    {
        title: "Almost Zero Gas Fees",
        description:
            "Lightning-fast and low-cost transactions — all powered by an eco-friendly, carbon-neutral network. With average fees kept ultra-low, BuyCex Infinity Chain breaks down entry barriers and accelerates mainstream blockchain adoption.",
    },
    {
        title: "Optimized for High-Performance Applications",
        description:
            "BuyCex Infinity Chain delivers real-time block confirmations that significantly boost transaction speed, eliminate execution uncertainty, and prevent rollbacks. Its robust scalability ensures smooth performance even during peak demand, making it the ideal foundation for sustained growth and mass adoption.",
    },
];

export default function Section1() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="bg-black py-20 relative overflow-hidden">
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
                            className="text-2xl sm:text-6xl font-bold text-white !leading-[1.2]"
                        >
                            <motion.span
                                animate={{
                                    textShadow: [
                                        "0 0 20px rgba(255, 255, 255, 0.3)",
                                        `0 0 30px #efb81c50`,
                                        "0 0 20px rgba(255, 255, 255, 0.3)",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                Engineered for the Infinite Future of dApps
                            </motion.span>
                        </motion.h2>

                        {/* Feature List */}
                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + index * 0.2,
                                    }}
                                    className="flex gap-4 cursor-pointer"
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <motion.div
                                        className="w-1 rounded-full flex-shrink-0 h-8"
                                        style={{
                                            backgroundColor:
                                                activeIndex === index
                                                    ? "#efb81c"
                                                    : "rgba(255,255,255,0.3)",
                                        }}
                                        animate={
                                            activeIndex === index
                                                ? {
                                                      boxShadow: [
                                                          `0 0 10px #efb81c50`,
                                                          `0 0 20px #efb81c80`,
                                                          `0 0 10px #efb81c50`,
                                                      ],
                                                  }
                                                : {}
                                        }
                                        transition={{
                                            duration: 3,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    ></motion.div>
                                    <div>
                                        <h3
                                            className={`text-sm sm:text-xl ${
                                                activeIndex === index
                                                    ? "font-semibold text-white"
                                                    : "font-medium text-white/60"
                                            }`}
                                        >
                                            {feature.title}
                                        </h3>
                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <motion.p
                                                    key="description"
                                                    className="text-white/80 mt-2 leading-relaxed"
                                                    initial={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "auto",
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                    }}
                                                >
                                                    {feature.description}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
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
                                boxShadow: [
                                    `0 0 20px #efb81c50`,
                                    `0 0 40px #efb81c80`,
                                    `0 0 20px #efb81c50`,
                                ],
                            }}
                            transition={{
                                rotate: {
                                    duration: 30,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                },
                                boxShadow: {
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            <span className="text-black font-bold text-xl">
                                G
                            </span>
                        </motion.div>

                        {/* Connecting Lines */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            style={{ zIndex: 1 }}
                        >
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
                                    transition={{
                                        duration: 2,
                                        delay: 1 + index * 0.1,
                                    }}
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
                                transition={{
                                    duration: 0.5,
                                    delay: 1.2 + index * 0.1,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    borderColor: "#efb81c",
                                    boxShadow: `0 0 20px #efb81c40`,
                                }}
                            >
                                <span className="text-white font-bold text-sm">
                                    {logo.symbol}
                                </span>
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
    );
}
