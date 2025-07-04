"use client"

import { ChevronRight } from "lucide-react"

export function CurrencySelector({ selectedCurrency, onCurrencySelect }) {
  const currencies = [
    { symbol: "ETH", name: "Ethereum", color: "bg-blue-500", icon: "⟠" },
    { symbol: "BTC", name: "Bitcoin", color: "bg-orange-500", icon: "₿" },
    { symbol: "USDT", name: "Tether", color: "bg-green-500", icon: "T" },
    { symbol: "USDC", name: "USD Coin", color: "bg-blue-600", icon: "$" },
  ]

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center space-x-3 overflow-x-auto pb-2">
        {currencies.map((currency) => (
          <button
            key={currency.symbol}
            onClick={() => onCurrencySelect(currency.symbol)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-full border-2 transition-all whitespace-nowrap ${
              selectedCurrency === currency.symbol
                ? "border-orange-500 bg-orange-500/10"
                : "border-gray-600 bg-gray-800 hover:border-gray-500"
            }`}
          >
            <div
              className={`w-6 h-6 ${currency.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}
            >
              {currency.icon}
            </div>
            <span className="text-white font-medium">{currency.symbol}</span>
          </button>
        ))}
        <button className="flex items-center space-x-2 px-4 py-3 rounded-full border-2 border-gray-600 bg-gray-800 hover:border-gray-500 transition-all whitespace-nowrap">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            D
          </div>
          <span className="text-white font-medium">More</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="mt-4">
        <span className="text-gray-400 text-sm">
          Didn't see your currency?
          <button className="text-orange-400 hover:text-orange-300 ml-1 font-medium">Add here</button>
        </span>
      </div>
    </div>
  )
}
