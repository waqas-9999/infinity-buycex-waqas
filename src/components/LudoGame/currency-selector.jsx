"use client"

import Usdt from '../../assets/img/usdt.png'
export function CurrencySelector({ selectedCurrency, onCurrencySelect }) {
  const currencies = [
    { symbol: "USDT", name: "Tether", color: "bg-green-500", icon: "T" },
  ]

  return (
    <div className="px-4 mb-1">
      <div className="flex items-center space-x-3 overflow-x-auto pb-2">
        {currencies.map((currency) => (
          <button
            key={currency.symbol}
            onClick={() => onCurrencySelect(currency.symbol)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full border-2 transition-all whitespace-nowrap ${
              selectedCurrency === currency.symbol
                ? "border-[#f6921b] bg-[#f6921b]/10"
                : "border-gray-600 bg-gray-800 hover:border-gray-500"
            }`}
          >
            <div
              className={`flex items-center justify-center text-white text-sm font-bold`}
            >
              <img src={Usdt} alt='usdt' className='w-7 h-7'/>
            </div>
            <span className="text-white font-medium">{currency.symbol}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
