"use client"

export function CurrencyTabs({ activeTab, onTabChange }) {
  return (
    <div className="px-4 mb-6">
      <div className="flex space-x-8">
        <button
          onClick={() => onTabChange("crypto")}
          className={`pb-3 font-semibold transition-all relative ${
            activeTab === "crypto" ? "text-white" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Crypto
          {activeTab === "crypto" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>}
        </button>
        <button
          onClick={() => onTabChange("fiat")}
          className={`pb-3 font-semibold transition-all relative ${
            activeTab === "fiat" ? "text-white" : "text-gray-400 hover:text-gray-300"
          }`}
        >
          Fiat
          {activeTab === "fiat" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"></div>}
        </button>
      </div>
    </div>
  )
}
