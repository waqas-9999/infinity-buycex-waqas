"use client";

import { useEffect, useState } from "react";

export default function InfinitySymbol() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center">
            <div className="relative">
                <svg
                    viewBox="0 0 600 200"
                    className="overflow-visible h-[200px] w-[300px]"
                >
                    {/* Proper Infinity symbol path */}
                    <defs>
                        <path
                            id="infinityPath"
                            d="M 100 150 
                            C 100 75, 250 75, 300 150 
                            C 350 225, 500 225, 500 150 
                            C 500 75, 350 75, 300 150 
                            C 250 225, 100 225, 100 150 Z"
                            fill="none"
                        />

                        {/* Gradient for snake segments */}
                        <linearGradient
                            id="snakeGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#efb81c"
                                stopOpacity="1"
                            />
                            <stop
                                offset="50%"
                                stopColor="#ffffff"
                                stopOpacity="0.8"
                            />
                            <stop
                                offset="100%"
                                stopColor="#efb81c"
                                stopOpacity="0.6"
                            />
                        </linearGradient>

                        {/* Radial gradient for head */}
                        <radialGradient
                            id="headGradient"
                            cx="50%"
                            cy="50%"
                            r="50%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#ffffff"
                                stopOpacity="1"
                            />
                            <stop
                                offset="70%"
                                stopColor="#efb81c"
                                stopOpacity="0.9"
                            />
                            <stop
                                offset="100%"
                                stopColor="#efb81c"
                                stopOpacity="0.3"
                            />
                        </radialGradient>
                    </defs>

                    {/* Background infinity symbol outline */}
                    <use
                        href="#infinityPath"
                        stroke="rgba(239, 184, 28, 0.3)"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                    />

                    {/* Snake body segments */}
                    {Array.from({ length: 25 }, (_, i) => {
                        const size = Math.max(12 - i * 0.4, 3);
                        const opacity = Math.max(1 - i * 0.03, 0.2);

                        return (
                            <circle
                                key={i}
                                r={size}
                                fill={i < 5 ? "#ffffff" : "#efb81c"}
                                className="snake-segment"
                                style={{
                                    opacity: opacity,
                                    filter: `drop-shadow(0 0 ${size / 2}px ${
                                        i < 5 ? "#ffffff" : "#efb81c"
                                    })`,
                                }}
                            >
                                <animateMotion
                                    dur="6s"
                                    repeatCount="indefinite"
                                    begin={`${i * 0.08}s`}
                                    calcMode="linear"
                                >
                                    <mpath href="#infinityPath" />
                                </animateMotion>
                            </circle>
                        );
                    })}

                    {/* Snake head with extra glow */}
                    <circle
                        r="15"
                        fill="url(#headGradient)"
                        className="snake-head"
                    >
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        >
                            <mpath href="#infinityPath" />
                        </animateMotion>
                    </circle>

                    {/* Additional glow effect for head */}
                    <circle
                        r="25"
                        fill="#ffffff"
                        opacity="0.1"
                        className="head-glow"
                    >
                        <animateMotion
                            dur="6s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        >
                            <mpath href="#infinityPath" />
                        </animateMotion>
                    </circle>
                </svg>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 20 }, (_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full animate-float"
                            style={{
                                width: `${2 + Math.random() * 4}px`,
                                height: `${2 + Math.random() * 4}px`,
                                backgroundColor:
                                    Math.random() > 0.5 ? "#ffffff" : "#efb81c",
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${3 + Math.random() * 2}s`,
                                opacity: 0.6,
                                boxShadow: `0 0 10px ${
                                    Math.random() > 0.5 ? "#ffffff" : "#efb81c"
                                }`,
                            }}
                        />
                    ))}
                </div>

                {/* Center intersection glow */}
                <div
                    className="absolute w-20 h-20 rounded-full opacity-30 blur-xl animate-pulse"
                    style={{
                        backgroundColor: "#efb81c",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
