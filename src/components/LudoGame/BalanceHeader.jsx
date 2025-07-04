"use client"

import { ChevronDown, Plus, HelpCircle } from "lucide-react"

export function BalanceHeader() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 px-4 py-6">
      <div className="flex items-center justify-between">
        {/* LudoBit Logo */}
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold text-lg px-3 py-2 rounded-lg shadow-lg">
            LudoBit
          </div>
        </div>

        {/* Balance Display */}
        <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600/30">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
            T
          </div>
          <span className="text-white font-medium mr-1">0.0000</span>
          <ChevronDown className="w-4 h-4 text-gray-300" />
          <div className="w-px h-4 bg-gray-600 mx-3"></div>
          <button className="bg-orange-500 hover:bg-orange-600 rounded-full p-1 transition-colors">
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Help Icon */}
        <button className="bg-blue-600/50 backdrop-blur-sm rounded-full p-2 border border-blue-400/30">
          <HelpCircle className="w-5 h-5 text-blue-300" />
        </button>
      </div>
    </div>
  )
}
