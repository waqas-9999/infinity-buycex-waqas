"use client"

import { Copy, AlertCircle } from "lucide-react"

export function QRSection({ address = "TR4i6nKRqYQ8yY9iLdLpvV HcDPVd6dbUjy" }) {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address)
    // You could add a toast notification here
  }

  return (
    <div className="px-4 space-y-6">
      <div className="flex items-start space-x-4">
        {/* QR Code */}

        {/* Address Section */}
        <div className="flex-1">
          <h3 className="text-gray-300 text-sm font-medium mb-3">Deposit address</h3>
          <div className="bg-gray-800 rounded-lg p-3 mb-4">
            <div className="text-white font-mono text-sm break-all leading-relaxed">
              <span className="text-orange-400">TR4i</span>
              <span>6nKRqYQ8yY9i</span>
              <span className="text-orange-400">LdLpvV</span>
              <br />
              <span>HcDPVd6d</span>
              <span className="text-orange-400">bUjy</span>
            </div>
          </div>

          <button
            onClick={handleCopyAddress}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Copy className="w-4 h-4" />
            <span>Copy Address</span>
          </button>
        </div>
      </div>

      {/* Warning */}
      <div className="bg-orange-900/30 border border-orange-500/50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <span className="text-white">Send only </span>
            <span className="text-orange-400 font-bold">USDT</span>
            <span className="text-white"> to this deposit address.</span>
            <br />
            <span className="text-white">Transfers below </span>
            <span className="text-orange-400 font-bold">1 USDT</span>
            <span className="text-white"> will not be credited.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
