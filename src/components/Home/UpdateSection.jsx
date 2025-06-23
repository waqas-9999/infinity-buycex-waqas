"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, TrendingUp, Flame, ArrowRight } from "lucide-react";

export default function UpdatesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

    const updates = [
        {
            icon: Flame,
            title: "Plans for further destruction of Gate Token (GT)",
            description:
                "GT is a utility token on BuyCex Infinity Chain, with a total issuance of 300 million, which has been deflated to less than 133 million, and the...",
            date: "Dec 2024",
            category: "Tokenomics",
        },
        {
            icon: TrendingUp,
            title: "BuyCex Infinity Chain v1.1.6 Upgrade",
            description:
                "BuyCex Infinity Chain v1.1.6 has now been released. With the new release, a new fee mechanism, already adopted in EIP1559 on Ethereum, will...",
            date: "Nov 2024",
            category: "Network",
        },
        {
            icon: Calendar,
            title: "Announcement of on-chain burning of Gate Token (GT) in the fourth quarter of...",
            description:
                "Gate Token (GT) on-chain burning for the fourth quarter of 2024 has been completed, with 2,904,885.4321514 GT transferred to the...",
            date: "Oct 2024",
            category: "Burning",
        },
    ];

    return (
        <div
            ref={sectionRef}
            className="bg-black py-20 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: "#efb81c10" }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-3xl"
                    style={{ backgroundColor: "#efb81c15" }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Floating Update Icons */}
            <div className="absolute inset-0 z-0">
                {isInView &&
                    Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/5 select-none pointer-events-none"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.05, 0.15, 0.05],
                                rotate: [0, 360],
                                scale: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: Math.random() * 3,
                                ease: "easeInOut",
                            }}
                        >
                            {(() => {
                                const Icon = [Calendar, TrendingUp, Flame][
                                    Math.floor(Math.random() * 3)
                                ];
                                return <Icon size={24} />;
                            })()}
                        </motion.div>
                    ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-6xl font-bold text-white mb-4">
                        <motion.span
                            animate={
                                isInView
                                    ? {
                                          textShadow: [
                                              "0 0 20px rgba(255, 255, 255, 0.3)",
                                              `0 0 30px #efb81c40`,
                                              "0 0 20px rgba(255, 255, 255, 0.3)",
                                          ],
                                      }
                                    : {}
                            }
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        >
                            BuyCex Infinity Chain{" "}
                            <span style={{ color: "#efb81c" }}>Updates</span>
                        </motion.span>
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-white/70 text-sm sm:text-lg max-w-2xl mx-auto"
                    >
                        Stay informed with the latest developments, upgrades,
                        and announcements from the BuyCex Infinity Chain
                        ecosystem
                    </motion.p>
                </motion.div>

                {/* Updates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {updates.map((update, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80, scale: 0.9 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0, scale: 1 }
                                    : { opacity: 0, y: 80, scale: 0.9 }
                            }
                            transition={{
                                duration: 0.8,
                                delay: 0.4 + index * 0.2,
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-gray-700/70 group-hover:bg-gray-900/70">
                                {/* Category Badge */}
                                <motion.div
                                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                                    style={{
                                        backgroundColor: "#efb81c20",
                                        color: "#efb81c",
                                        border: "1px solid #efb81c40",
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {update.category}
                                </motion.div>

                                {/* Icon */}
                                <motion.div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                    style={{ backgroundColor: "#efb81c15" }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#efb81c25",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <update.icon
                                        className="w-6 h-6"
                                        style={{ color: "#efb81c" }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight group-hover:text-white/90 transition-colors">
                                        {update.title}
                                    </h3>

                                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-3">
                                        {update.description}
                                    </p>

                                    {/* Date and Read More */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                                        <span className="text-white/40 text-sm font-medium">
                                            {update.date}
                                        </span>
                                        <motion.button
                                            className="flex items-center gap-2 text-sm font-medium transition-colors"
                                            style={{ color: "#efb81c" }}
                                            whileHover={{
                                                scale: 1.05,
                                                x: 2,
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Read More
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        background: `linear-gradient(135deg, transparent, #efb81c05, transparent)`,
                                        border: "1px solid #efb81c20",
                                    }}
                                />
                            </div>

                            {/* Floating Particles for Each Card */}
                            {isInView && (
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 + index * 0.3 }}
                                >
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 rounded-full opacity-40"
                                            style={{
                                                backgroundColor: "#efb81c",
                                                left: `${
                                                    20 + Math.random() * 60
                                                }%`,
                                                top: `${
                                                    20 + Math.random() * 60
                                                }%`,
                                            }}
                                            animate={{
                                                y: [0, -15, 0],
                                                opacity: [0.2, 0.6, 0.2],
                                                scale: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 3 + Math.random() * 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                delay: Math.random() * 2,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* View All Updates Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        className="inline-flex items-center gap-3 px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 border-2"
                        style={{
                            backgroundColor: "transparent",
                            borderColor: "#efb81c80",
                            color: "#efb81c",
                        }}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "#efb81c",
                            boxShadow: `0 0 20px #efb81c30`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#efb81c10";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                "transparent";
                        }}
                    >
                        View All Updates
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
