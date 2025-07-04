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
    </div>
    </div>
  )
}
