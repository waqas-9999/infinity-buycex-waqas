"use client"

import { useState } from "react"
import { MobileHeader } from "./MobileHeader"
import { TabNavigation } from "./TabNavigation"
import { DepositScreen } from "./DepositScreen"
import { WithdrawScreen } from "./WithdrawScreen"

export default function WalletTransaction() {
  const [activeTab, setActiveTab] = useState("deposit")

  return (
    <div className="bg-gray-900">
    <div className="min-h-screen text-white max-w-4xl px-6 mx-auto">
      <MobileHeader showBack />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="pb-8">{activeTab === "deposit" ? <DepositScreen /> : <WithdrawScreen />}</div>

      {/* Bottom indicator */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <div className="w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
    </div>
  )
}
