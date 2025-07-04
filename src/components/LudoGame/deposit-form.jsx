"use client"

import { ChevronDown, HelpCircle } from "lucide-react"

export function DepositForm({ currency, network, onCurrencyChange, onNetworkChange }) {
  return (
    <div className="px-4 mb-6">
      <div className="border-2 border-orange-500 rounded-2xl p-4 bg-orange-500/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Deposit Currency</label>
            <div className="relative">
              <div className="flex items-center bg-gray-800 rounded-lg px-3 py-3 border border-gray-600">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                  T
                </div>
                <span className="text-white font-medium flex-1">{currency}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Choose CoinNetwork</label>
            <div className="relative">
              <div className="flex items-center bg-gray-800 rounded-lg px-3 py-3 border border-gray-600">
                <span className="text-white font-medium flex-1">{network}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm">How to deposit crypto?</span>
        </button>
      </div>
    </div>
  )
}
