"use client"

import { useState } from "react"
import { CurrencyTabs } from "./currency-tabs"
import { CurrencySelector } from "./currency-selector"
import { DepositForm } from "./deposit-form"
import { QRSection } from "./qr-section"

export function DepositScreen({ onSwitchToWithdraw }) {
  const [activeTab, setActiveTab] = useState("crypto")
  const [selectedCurrency, setSelectedCurrency] = useState("USDT")
  const [selectedNetwork, setSelectedNetwork] = useState("Tron (TRC20)")

  return (
    <div className="pb-8">
      {/* Tab Navigation */}
      <div className="px-4 mb-6">
        <div className="flex bg-gray-800 rounded-2xl overflow-hidden border border-gray-700/50">
          <button className="flex-1 py-4 px-6 font-semibold transition-all duration-300 bg-[#f6921b] text-white shadow-lg shadow-orange-500/25">
            💰 Deposit
          </button>
          <button
            onClick={onSwitchToWithdraw}
            className="flex-1 py-4 px-6 font-semibold transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-700"
          >
            💸 Withdraw
          </button>
        </div>
      </div>

      {/* <CurrencyTabs activeTab={activeTab} onTabChange={setActiveTab} /> */}

      {activeTab === "crypto" && (
        <>
          <CurrencySelector selectedCurrency={selectedCurrency} onCurrencySelect={setSelectedCurrency} />

          <DepositForm
            currency={selectedCurrency}
            network={selectedNetwork}
            onCurrencyChange={setSelectedCurrency}
            onNetworkChange={setSelectedNetwork}
          />

          {/* <BonusBanner /> */}

          {/* <QRSection /> */}
        </>
      )}

      {activeTab === "fiat" && (
        <div className="px-4 py-12 text-center">
          <div className="text-gray-400 text-lg">Fiat deposits coming soon!</div>
        </div>
      )}
    </div>
  )
}
