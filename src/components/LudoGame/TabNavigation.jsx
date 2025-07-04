"use client"

export function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="flex bg-gray-800">
      <button
        onClick={() => onTabChange("deposit")}
        className={`flex-1 py-4 px-6 font-medium transition-colors ${
          activeTab === "deposit" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
        }`}
      >
        Deposit
      </button>
      <button
        onClick={() => onTabChange("withdraw")}
        className={`flex-1 py-4 px-6 font-medium transition-colors ${
          activeTab === "withdraw" ? "bg-blue-600 text-white" : "text-gray-300 hover:text-white hover:bg-gray-700"
        }`}
      >
        Withdraw
      </button>
    </div>
  )
}
