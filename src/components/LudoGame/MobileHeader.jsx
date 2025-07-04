"use client"

import { ArrowLeft } from "lucide-react"
import { FaAngleRight } from "react-icons/fa6";

export function MobileHeader({ onBack, title = "Deposit" }) {
  return (
    <div className="bg-gray-900/95 backdrop-blur-sm">
      {/* Status Bar */}

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-4">
        <button onClick={onBack} className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 mr-4 transition-colors">
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <a href="/transaction"><button className="flex items-center gap-1">Transaction <FaAngleRight/></button></a>
      </div>
    </div>
  )
}
