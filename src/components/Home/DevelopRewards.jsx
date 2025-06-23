"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code, Coins, Zap } from "lucide-react";

export default function DevelopRewardsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

    return (
        <div
            ref={sectionRef}
            className="bg-black py-20 relative overflow-hidden"
        >
            {/* Continuous Background Effects */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: "#efb81c15" }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
                    style={{ backgroundColor: "#efb81c20" }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
                    style={{ backgroundColor: "#efb81c08" }}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Floating Code Particles */}
            <div className="absolute inset-0 z-0">
                {isInView &&
                    Array.from({ length: 15 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/10 font-mono text-sm select-none pointer-events-none"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                y: [20, -80, 20],
                                opacity: [0, 0.3, 0],
                                rotate: [0, 180],
                            }}
                            transition={{
                                duration: 6 + Math.random() * 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: Math.random() * 2,
                                ease: "easeInOut",
                            }}
                        >
                            {
                                ["</>", "{}", "[]", "()"][
                                    Math.floor(Math.random() * 4)
                                ]
                            }
                        </motion.div>
                    ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Main Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-2xl lg:text-6xl font-bold text-white leading-tight"
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
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            >
                                No limits. {" "}
                                <span style={{ color: "#efb81c" }}>
                                    Just possibilities
                                </span>
                            </motion.span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-white/80 text-md sm:text-lg leading-relaxed max-w-lg"
                        >
                            We empower builders like you to shape the future of
                            decentralized finance. BuyCex Infinity Chain offers
                            the tools, scalability, and ownership incentives to
                            launch, grow, and thrive — all while unlocking
                            powerful rewards for your community.
                        </motion.p>

                        {/* Feature Points */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="space-y-4"
                        >
                            {[
                                {
                                    icon: Code,
                                    text: "Developer-friendly tools and APIs",
                                },
                                {
                                    icon: Coins,
                                    text: "Reward programs for active builders",
                                },
                                {
                                    icon: Zap,
                                    text: "Lightning-fast deployment and scaling",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: -20 }
                                    }
                                    transition={{
                                        duration: 0.5,
                                        delay: 1 + index * 0.1,
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: "#efb81c20" }}
                                    >
                                        <feature.icon
                                            className="w-4 h-4"
                                            style={{ color: "#efb81c" }}
                                        />
                                    </div>
                                    <span className="text-white/70">
                                        {feature.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.6, delay: 1.4 }}
                            className="flex flex-col sm:flex-row gap-4 items-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <button
                                    className="text-black font-semibold rounded-md px-8 py-3 sm:py-4 flex items-center text-sm sm:text-lg transition-all duration-300 shadow-lg"
                                    style={{
                                        backgroundColor: "#efb81c",
                                        borderColor: "#efb81c",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#d4a017";
                                        e.currentTarget.style.boxShadow = `0 10px 25px #efb81c40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor =
                                            "#efb81c";
                                        e.currentTarget.style.boxShadow =
                                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                                    }}
                                >
                                    Apply Now
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.05, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white/80 hover:text-white font-medium text-sm sm:text-lg transition-all duration-300 underline underline-offset-4 flex items-center gap-2"
                                style={{
                                    textDecorationColor: "#efb81c80",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.textDecorationColor =
                                        "#efb81c";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.textDecorationColor =
                                        "#efb81c80";
                                }}
                            >
                                View Documentation
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual - Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        animate={
                            isInView
                                ? { opacity: 1, scale: 1, rotateY: 0 }
                                : { opacity: 0, scale: 0.8, rotateY: -20 }
                        }
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            className="relative"
                            animate={
                                isInView
                                    ? {
                                          rotateY: [0, 3, 0, -3, 0],
                                          rotateX: [0, 1, 0, -1, 0],
                                      }
                                    : {}
                            }
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                                delay: 2,
                            }}
                        >
                            {/* Device Frame */}
                            <div className="relative w-80 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
                                {/* Screen */}
                                <div className="absolute inset-4 bg-black rounded-xl overflow-hidden">
                                    {/* Screen Content */}
                                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black p-6">
                                        {/* User Icon */}
                                        <motion.div
                                            className="absolute top-6 left-6 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center"
                                            animate={
                                                isInView
                                                    ? { scale: [1, 1.1, 1] }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                                delay: 3,
                                            }}
                                        >
                                            <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                        </motion.div>

                                        {/* Cursor/Arrow */}
                                        <motion.div
                                            className="absolute top-16 right-12"
                                            animate={
                                                isInView
                                                    ? {
                                                          x: [0, -20, 0],
                                                          y: [0, 10, 0],
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 3,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                                delay: 2.5,
                                            }}
                                        >
                                            <div
                                                className="w-8 h-8 transform rotate-45"
                                                style={{
                                                    background: `linear-gradient(135deg, #efb81c, #d4a017)`,
                                                    clipPath:
                                                        "polygon(0% 0%, 0% 100%, 100% 50%)",
                                                }}
                                            ></div>
                                        </motion.div>

                                        {/* Dashed Box */}
                                        <motion.div
                                            className="absolute bottom-8 left-6 right-6 h-16 border-2 border-dashed border-white/30 rounded-lg flex items-center justify-center"
                                            animate={
                                                isInView
                                                    ? {
                                                          borderColor: [
                                                              "rgba(255,255,255,0.3)",
                                                              "#efb81c80",
                                                              "rgba(255,255,255,0.3)",
                                                          ],
                                                      }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 2,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                                delay: 4,
                                            }}
                                        >
                                            <span className="text-white/50 text-sm font-mono">
                                                Deploy Contract
                                            </span>
                                        </motion.div>

                                        {/* Floating Code Elements */}
                                        {isInView &&
                                            Array.from({ length: 3 }).map(
                                                (_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="absolute text-white/20 font-mono text-xs"
                                                        style={{
                                                            left: `${
                                                                20 + i * 25
                                                            }%`,
                                                            top: `${
                                                                30 + i * 15
                                                            }%`,
                                                        }}
                                                        animate={{
                                                            opacity: [
                                                                0.2, 0.6, 0.2,
                                                            ],
                                                            y: [0, -5, 0],
                                                        }}
                                                        transition={{
                                                            duration:
                                                                2 + i * 0.5,
                                                            repeat: Number.POSITIVE_INFINITY,
                                                            delay: 3 + i * 0.3,
                                                            ease: "easeInOut",
                                                        }}
                                                    >
                                                        {
                                                            [
                                                                "func()",
                                                                "0x...",
                                                                "gas",
                                                            ][i]
                                                        }
                                                    </motion.div>
                                                )
                                            )}
                                    </div>
                                </div>

                                {/* Device Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                            </div>

                            {/* Floating Particles around Device */}
                            {isInView &&
                                Array.from({ length: 6 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full opacity-60"
                                        style={{
                                            backgroundColor: "#efb81c",
                                            left: `${
                                                -10 + Math.random() * 120
                                            }%`,
                                            top: `${
                                                -10 + Math.random() * 120
                                            }%`,
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            opacity: [0.3, 0.8, 0.3],
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
