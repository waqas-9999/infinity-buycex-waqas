"use client"

import { ArrowLeft, MoreHorizontal } from "lucide-react"

export function MobileHeader({ onClose, onBack, showBack = false }) {
  return (
    <div className="bg-gray-900/95 backdrop-blur-sm">
      {/* Status Bar */}

      {/* App Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <button onClick={onClose} className="text-blue-400 font-medium">
          Close
        </button>
        <div className="text-center">
          <h1 className="text-white font-semibold text-lg">LudoBit</h1>
          <p className="text-gray-400 text-sm">mini app</p>
        </div>
        <button className="text-blue-400">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      {showBack && (
        <div className="px-4 py-3">
          <button onClick={onBack} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}
