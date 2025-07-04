"use client"

import { useState } from "react"
import { FormField } from "./FormField"

export function WithdrawScreen() {
  const [currency, setCurrency] = useState("USDT")
  const [chain, setChain] = useState("BSC")
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")

  return (
    <div className="p-6 space-y-6">
      <FormField
        label="Choose Currency"
        type="select"
        value={currency}
        onChange={setCurrency}
        options={["USDT", "BTC", "ETH"]}
      />

      <FormField label="Choose Chain" type="select" value={chain} onChange={setChain} options={["BSC", "ETH", "TRX"]} />

      <FormField label="Withdraw Address" value={address} onChange={setAddress} placeholder="Enter wallet address" />

      <FormField label="Amount" value={amount} onChange={setAmount} placeholder="Enter amount" />

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors">
        Withdraw
      </button>

      <div className="flex justify-between text-sm">
        <span className="text-gray-300">
          Your Balance: <span className="text-white">0 USDT</span>
        </span>
        <span className="text-gray-300">
          Min Withdrawal: <span className="text-white">10 USDT</span>
        </span>
      </div>

      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold">Withdrawal History</h3>
        <div className="bg-blue-600/20 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-3 bg-blue-600 text-white text-sm font-medium">
            <span>Record ID</span>
            <span>Amount</span>
            <span>Network</span>
          </div>
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-500 rounded border-dashed"></div>
            </div>
            <p className="text-gray-400">No Records!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
