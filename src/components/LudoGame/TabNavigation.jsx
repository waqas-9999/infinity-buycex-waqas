"use client"

export function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="flex bg-gray-900 mx-4 mt-6 rounded-2xl overflow-hidden border border-gray-700/50">
      <button
        onClick={() => onTabChange("deposit")}
        className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
          activeTab === "deposit"
            ? "bg-[#f6921b] text-white shadow-lg shadow-orange-500/25"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        }`}
      >
        💰 Deposit
      </button>
      <button
        onClick={() => onTabChange("withdraw")}
        className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
          activeTab === "withdraw"
            ? "bg-[#f6921b] text-white shadow-lg shadow-orange-500/25"
            : "text-gray-400 hover:text-white hover:bg-gray-800"
        }`}
      >
        💸 Withdraw
      </button>
    </div>
  )
}
