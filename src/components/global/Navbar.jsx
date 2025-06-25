"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Infinity } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRefs = useRef({});

    const navItems = [
        {
            label: "Build",
            dropdown: [
                {
                    name: "Get Started Now",
                    href: "/get-started",
                    description: "Start building on BuyCex",
                },
                {
                    name: "Documentation",
                    href: "#",
                    description: "Dev guides and API docs",
                },
                {
                    name: "Blockchain Explorer",
                    href: "#",
                    description: "View blocks and TXs",
                },
                {
                    name: "Faucet",
                    href: "#",
                    description: "Claim test tokens",
                },
                {
                    name: "GitHub",
                    href: "#",
                    description: "Source code & repos",
                },
            ],
        },
        {
            label: "Explore",
            dropdown: [
                {
                    name: "Ecosystem Projects",
                    href: "/eco-system-project",
                    description: "Browse live dApps",
                },
                {
                    name: "Cross-chain Bridge",
                    href: "#",
                    description: "Swap across chains",
                    comingSoon: true,
                },

                {
                    name: "Become a Validator Node",
                    href: "#",
                    description: "Run a node",
                },
                {
                    name: "Staking",
                    href: "#",
                    description: "Earn via staking",
                },
            ],
        },
        {
            label: "Community",
            dropdown: [
                {
                    name: "Blog",
                    href: "https://buycex.com/blog",
                    description: "Check blog details",
                },
                {
                    name: "Careers",
                    href: "https://buycex.com/join-us",
                    description: "Get in touch",
                },
            ],
        },
    ];

    const handleDropdown = (label) => {
        setActiveDropdown((prev) => (prev === label ? null : label));
    };

    // Detect clicks outside dropdowns
    useEffect(() => {
        const handleClickOutside = (e) => {
            const clickedInside = Object.values(dropdownRefs.current).some(
                (ref) => ref?.contains(e.target)
            );
            if (!clickedInside) {
                setActiveDropdown(null);
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-30 flex items-center justify-between px-6 py-4 container mx-auto"
        >
            {/* Logo Section */}
            <Link to="/">
                <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div className="w-12 h-12 flex items-center justify-center">
                        <img
                            src="/img/BUYCEX-INFINITY.png"
                            alt="BuycexInfinityLogo"
                        />
                    </motion.div>
                    <h1 className="text-white text-2xl font-bold">
                        BCX Infinity
                    </h1>
                </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 relative">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`relative ${
                            index === navItems.length - 1
                                ? "dropdown-right"
                                : ""
                        }`}
                        ref={(el) => (dropdownRefs.current[item.label] = el)}
                    >
                        <button
                            onClick={() => handleDropdown(item.label)}
                            className="flex items-center text-white/90 hover:text-white transition-all duration-300 font-medium space-x-1 py-2 px-3 rounded-lg hover:bg-white/5"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {item.label}
                            </motion.span>
                            <motion.span
                                animate={{
                                    rotate:
                                        activeDropdown === item.label ? 180 : 0,
                                    color:
                                        activeDropdown === item.label
                                            ? "#efb81c"
                                            : "currentColor",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={16} />
                            </motion.span>
                        </button>

                        {activeDropdown === item.label && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className={`absolute top-full mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-xl overflow-hidden z-50 ${
                                    index === navItems.length - 1
                                        ? "right-0"
                                        : "left-0"
                                }`}
                                style={{
                                    boxShadow:
                                        "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                {/* Dropdown Items */}
                                <div className="py-2">
                                    {item.dropdown.map((link, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={link.href}
                                            className="block px-4 py-3 text-white/80 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
                                            whileHover={{ x: 4 }}
                                            onClick={() =>
                                                setActiveDropdown(null)
                                            }
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="font-medium text-sm group-hover:text-white flex items-center space-x-2">
                                                        <span>{link.name}</span>
                                                        {link.comingSoon && (
                                                            <span className="bg-yellow-500 text-black text-[10px] font-semibold px-2 py-0.5 rounded-md">
                                                                Coming Soon
                                                            </span>
                                                        )}
                                                    </div>

                                                    <div className="text-xs text-white/50 mt-1 group-hover:text-white/70">
                                                        {link.description}
                                                    </div>
                                                </div>
                                                <motion.div
                                                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    style={{ color: "#efb81c" }}
                                                >
                                                    →
                                                </motion.div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
                className="md:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <button
                    className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                isMobileMenuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </motion.svg>
                </button>
            </motion.div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 right-0 mt-2 mx-6 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl md:hidden z-50"
                >
                    <div className="py-4">
                        {navItems.map((item, index) => (
                            <div key={index} className="px-4 py-2">
                                <button
                                    onClick={() => handleDropdown(item.label)}
                                    className="flex items-center justify-between w-full text-white/90 hover:text-white transition-colors font-medium py-2"
                                >
                                    <span>{item.label}</span>
                                    <motion.span
                                        animate={{
                                            rotate:
                                                activeDropdown === item.label
                                                    ? 180
                                                    : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown size={16} />
                                    </motion.span>
                                </button>

                                {activeDropdown === item.label && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-2 pl-4 border-l-2 border-gray-700/50"
                                    >
                                        {item.dropdown.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.href}
                                                className="block py-2 text-sm text-white/70 hover:text-white transition-colors"
                                                onClick={() => {
                                                    setActiveDropdown(null);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
