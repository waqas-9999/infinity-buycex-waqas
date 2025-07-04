"use client"

import { ArrowLeft } from "lucide-react"

export function MobileHeader({ onBack, title = "Deposit" }) {
  return (
    <div className="bg-gray-900/95 backdrop-blur-sm">
      {/* Status Bar */}

      {/* Header */}
      <div className="flex items-center px-4 py-4">
        <button onClick={onBack} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 mr-4 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white font-bold text-xl flex-1 text-center mr-12">{title}</h1>
      </div>
    </div>
  )
}
