"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"
import { FormField } from "./FormField"

export function DepositScreen() {
  const [currency, setCurrency] = useState("USDT")
  const [network, setNetwork] = useState("BEP20")
  const [amount, setAmount] = useState("")

  return (
    <div className="p-6 space-y-6">
      <FormField
        label="Deposit Currency"
        type="select"
        value={currency}
        onChange={setCurrency}
        options={["USDT", "BTC", "ETH"]}
      />

      <FormField
        label="Choose Network"
        type="select"
        value={network}
        onChange={setNetwork}
        options={["BEP20", "ERC20", "TRC20"]}
      />

      <FormField label="Deposit Amount" value={amount} onChange={setAmount} placeholder="0" />

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors">
        Generate Deposit Address
      </button>

      <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm">
          <span className="text-white">Send only </span>
          <span className="text-green-400 font-semibold">USDT</span>
          <span className="text-white"> to this deposit address. Transfers below </span>
          <span className="font-semibold">10 USDT</span>
          <span className="text-white"> will not be credited.</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-white text-lg font-semibold">Deposit History</h3>
        <div className="bg-blue-600/20 rounded-lg overflow-hidden">
          <div className="grid grid-cols-5 gap-2 p-3 bg-blue-600 text-white text-sm font-medium">
            <span>Record ID</span>
            <span>Amount</span>
            <span>Network</span>
            <span>Time</span>
            <span>Status</span>
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
