"use client"

import { useState } from "react"
import { FormField } from "./FormField"
import { TrendingDown, Hash } from "lucide-react"

export function WithdrawScreen({ onSwitchToDeposit }) {
  const [currency, setCurrency] = useState("USDT")
  const [chain, setChain] = useState("BSC")
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div>
      {/* Tab Navigation */}
      <div className="px-4 mb-6">
        <div className="flex bg-gray-800 rounded-2xl overflow-hidden border border-gray-700/50">
          <button
            onClick={onSwitchToDeposit}
            className="flex-1 py-4 px-6 font-semibold transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-700"
          >
            💰 Deposit
          </button>
          <button className="flex-1 py-4 px-6 font-semibold transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25">
            💸 Withdraw
          </button>
        </div>
      </div>

      {/* Withdraw Visual */}
      <div className="text-center py-8">
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/30 relative">
          <div className="text-4xl">💸</div>
          <TrendingDown className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full p-1 text-white" />
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Withdraw Your Winnings</h2>
        <p className="text-gray-400 text-sm">Cash out your crypto winnings securely</p>
      </div>

      <div className="space-y-5">
        <FormField
          label="Choose Currency"
          type="select"
          value={currency}
          onChange={setCurrency}
          options={["USDT", "BTC", "ETH"]}
          icon="🪙"
        />

        <FormField
          label="Choose Chain"
          type="select"
          value={chain}
          onChange={setChain}
          options={["BSC", "ETH", "TRX"]}
          icon="⛓️"
        />

        <FormField
          label="Withdraw Address"
          value={address}
          onChange={setAddress}
          placeholder="Enter your wallet address"
          icon="📍"
        />

        <FormField label="Amount" value={amount} onChange={setAmount} placeholder="Enter withdrawal amount" icon="💰" />
      </div>

      <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:scale-[1.02]">
        🚀 Withdraw Funds
      </button>

      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Your Balance:</span>
            <div className="text-white font-bold text-lg flex items-center gap-1">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                T
              </div>
              0 USDT
            </div>
          </div>
          <div>
            <span className="text-gray-400">Min Withdrawal:</span>
            <div className="text-orange-400 font-bold text-lg">10 USDT</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
            <Hash className="w-4 h-4 text-orange-400" />
          </div>
          <h3 className="text-white text-lg font-bold">Withdrawal History</h3>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white text-xs font-semibold">
            <span>Record ID</span>
            <span>Amount</span>
            <span>Network</span>
          </div>
          <div className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700/50 rounded-xl flex items-center justify-center">
              <div className="text-2xl opacity-50">📤</div>
            </div>
            <p className="text-gray-400 font-medium">No withdrawal records yet</p>
            <p className="text-gray-500 text-sm mt-1">Your withdrawals will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
