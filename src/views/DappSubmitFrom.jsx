"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Upload, CheckCircle, AlertCircle, Github, Twitter, Send, ArrowLeft } from "lucide-react"
import Navbar from "../components/global/Navbar"
import { Link } from "react-router-dom/cjs/react-router-dom"

export default function SubmitAppPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    appName: "",
    description: "",
    category: "",
    website: "",
    github: "",
    twitter: "",
    telegram: "",
    discord: "",
    contactEmail: "",
    contactName: "",
    logoFile: null,
    screenshots: [],
    isOpenSource: false,
    isAudited: false,
    auditReport: "",
    contractAddress: "",
    networkType: "mainnet",
    tags: [],
    additionalInfo: "",
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const isHeroInView = useInView(heroRef, { once: true, threshold: 0.3 })
  const isFormInView = useInView(formRef, { once: true, threshold: 0.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const categories = [
    "DeFi",
    "NFT",
    "Gaming",
    "DEX",
    "Lending",
    "Yield Farming",
    "Bridge",
    "Tools",
    "Wallet",
    "Analytics",
    "Social",
    "Marketplace",
  ]

  const availableTags = [
    "New",
    "Popular",
    "Audited",
    "Open Source",
    "High TVL",
    "Mobile",
    "Web3",
    "Cross-chain",
    "DAO",
    "Staking",
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileUpload = (field, files) => {
    if (field === "logoFile") {
      setFormData((prev) => ({
        ...prev,
        [field]: files[0],
      }))
    } else if (field === "screenshots") {
      setFormData((prev) => ({
        ...prev,
        [field]: [...prev[field], ...Array.from(files)],
      }))
    }
  }

  const handleTagToggle = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitSuccess(true)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-black">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl"
          >
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ backgroundColor: "#efb81c" }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <CheckCircle className="w-12 h-12 text-black" />
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Submission Successful!</h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Thank you for submitting your dApp to BuyCex. Our team will review your application and get back to you
              within 3-5 business days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
              to="/eco-system-project">
                <button size="lg" className="text-black font-semibold px-8 py-2 sm:py-4" style={{ backgroundColor: "#efb81c" }}>
                  Browse dApps
                </button>
              </Link>
              <button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Submit Another
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c15" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: "#efb81c20" }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/eco-system-project"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to dApps
            </Link>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            <motion.span
              animate={
                isHeroInView
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
              Submit Your <span style={{ color: "#efb81c" }}>dApp</span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-sm lg:text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Join the BuyCex ecosystem and showcase your dApp to thousands of users. Get listed in our official dApp
            directory.
          </motion.p>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center gap-4 mb-12"
          >
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step ? "text-black" : "bg-white/10 text-white/50 border-2 border-white/20"
                  }`}
                  style={{
                    backgroundColor: currentStep >= step ? "#efb81c" : undefined,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                </motion.div>
                {step < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step ? "bg-yellow-400" : "bg-white/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section ref={formRef} className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-0 sm:px-6 relative z-10">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 lg:p-12"
          >
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Basic Information</h2>
                  <p className="text-gray-600">Tell us about your dApp</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* App Name */}
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      dApp Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.appName}
                      onChange={(e) => handleInputChange("appName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your dApp name"
                    />
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe what your dApp does and its key features"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Network Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Network <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.networkType}
                      onChange={(e) => handleInputChange("networkType", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    >
                      <option value="mainnet">BuyCex Mainnet</option>
                      <option value="testnet">BuyCex Testnet</option>
                    </select>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Website URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://your-dapp.com"
                    />
                  </div>

                  {/* Contract Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Contract Address</label>
                    <input
                      type="text"
                      value={formData.contractAddress}
                      onChange={(e) => handleInputChange("contractAddress", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="0x..."
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">Tags (Optional)</label>
                  <div className="flex flex-wrap gap-3">
                    {availableTags.map((tag) => (
                      <motion.button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          formData.tags.includes(tag) ? "text-black" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        style={{
                          backgroundColor: formData.tags.includes(tag) ? "#efb81c" : undefined,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Media & Links */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Media & Social Links</h2>
                  <p className="text-gray-600">Upload your logo and provide social media links</p>
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Logo <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-yellow-400 transition-colors duration-300">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">
                      {formData.logoFile ? formData.logoFile.name : "Upload your dApp logo"}
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload("logoFile", e.target.files)}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-2">PNG, JPG, SVG up to 2MB. Recommended: 256x256px</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Github className="w-4 h-4 inline mr-2" />
                      GitHub Repository
                    </label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => handleInputChange("github", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://github.com/your-repo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Twitter className="w-4 h-4 inline mr-2" />
                      Twitter
                    </label>
                    <input
                      type="url"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange("twitter", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://twitter.com/your-handle"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telegram</label>
                    <input
                      type="url"
                      value={formData.telegram}
                      onChange={(e) => handleInputChange("telegram", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://t.me/your-channel"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Discord</label>
                    <input
                      type="url"
                      value={formData.discord}
                      onChange={(e) => handleInputChange("discord", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://discord.gg/your-server"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isOpenSource}
                      onChange={(e) => handleInputChange("isOpenSource", e.target.checked)}
                      className="w-5 h-5 text-yellow-400 rounded focus:ring-yellow-400"
                    />
                    <span className="text-gray-700">This is an open-source project</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isAudited}
                      onChange={(e) => handleInputChange("isAudited", e.target.checked)}
                      className="w-5 h-5 text-yellow-400 rounded focus:ring-yellow-400"
                    />
                    <span className="text-gray-700">This project has been audited</span>
                  </label>
                </div>

                {/* Audit Report */}
                {formData.isAudited && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Audit Report URL</label>
                    <input
                      type="url"
                      value={formData.auditReport}
                      onChange={(e) => handleInputChange("auditReport", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="https://audit-report-url.com"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 3: Contact & Review */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Contact & Final Details</h2>
                  <p className="text-gray-600">How can we reach you?</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => handleInputChange("contactName", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                  <textarea
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any additional information you'd like to share about your dApp"
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Submission Guidelines</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Your dApp must be deployed on BuyCex network
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      All information provided must be accurate and up-to-date
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Your dApp should be functional and user-ready
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      Review process typically takes 3-5 business days
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                variant="outline"
                className="px-6 py-3 disabled:opacity-50 bg-transparent"
              >
                Previous
              </button>

              <div className="flex gap-4">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 rounded-md text-black font-semibold"
                    style={{ backgroundColor: "#efb81c" }}
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 text-black rounded-md font-semibold flex items-center gap-2"
                    style={{ backgroundColor: "#efb81c" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit dApp
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  )
}
