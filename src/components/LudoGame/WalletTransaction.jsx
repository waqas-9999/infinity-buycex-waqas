"use client"
import { MobileHeader } from "./MobileHeader"
import { DepositScreen } from "./DepositScreen"
import { WithdrawScreen } from "./WithdrawScreen"
import { useState } from "react"

export default function WalletTransaction() {
  const [activeTab, setActiveTab] = useState("deposit")

  return (
    <div className="bg-gray-900">
    <div className="min-h-screen max-w-5xl mx-auto  text-white">
      <MobileHeader title={activeTab === "deposit" ? "Deposit" : "Withdraw"} />
      {activeTab === "deposit" ? (
        <DepositScreen onSwitchToWithdraw={() => setActiveTab("withdraw")} />
      ) : (
        <WithdrawScreen onSwitchToDeposit={() => setActiveTab("deposit")} />
      )}

      {/* Bottom Browser Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-sm p-4">
        <div className="bg-gray-700 rounded-full px-4 py-2 flex items-center justify-center">
          <span className="text-gray-300 text-sm">bc.game</span>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2">
        <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
    </div>
  )
}
