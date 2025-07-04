import { Info, ChevronRight, ArrowDown } from "lucide-react"
import { IoLogoUsd } from "react-icons/io"
import usdt from '../assets/img/usdt.png'
import { PiMedalFill } from "react-icons/pi";

export default function WalletDashboard() {
  return (
    <div className="min-h-screen bg-black/90 p-6 text-white">
      <div className="max-w-md mx-auto space-y-6">

        {/* Deposit Section */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-300 text-lg">Deposit</span>
              <div className="relative group inline-block">
  <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
  
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 text-xs text-white bg-green-500 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
    This is your deposit balance

    {/* Triangle Arrow */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-green-500"></div>
  </div>
</div>

            </div>
            <div className="text-4xl font-bold flex gap-2 items-center"><img src={usdt} alt="usdt"  className="w-7 h-7"/>0</div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl flex items-center gap-3 transition-colors">
            <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">ADD FUND</span>
          </button>
        </div>

        {/* Cashback Section */}
        <div className="bg-orange-700/40 rounded-3xl p-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold text-green-400 flex gap-2 items-center">$1000.000</span>
              <span className="text-gray-300 text-lg ml-2">Cashback</span>
            </div>
          </div>
          <button className="text-white hover:text-gray-200 flex items-center gap-2 transition-colors">
            <span className="text-lg font-medium">VIEW ALL</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <hr className="border-purple-600/30" />

        {/* Winnings Section */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-300 text-lg">Winnings</span>
              <div className="relative group inline-block">
  <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
  
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 text-xs text-white bg-orange-700 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
    This is your Winnings balance

    {/* Triangle Arrow */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-orange-700"></div>
  </div>
</div>

            </div>
            <div className="text-4xl font-bold flex gap-2 items-center"><img src={usdt} alt="usdt"  className="w-7 h-7"/>0</div>
          </div>
          <button className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 px-8 py-4 rounded-2xl flex items-center gap-3 transition-colors">
            <div className="flex items-center">
              <span className="text-2xl">$</span>
              <ArrowDown className="w-5 h-5 ml-1" />
            </div>
            <span className="text-xl font-bold">WITHDRAW</span>
          </button>
        </div>

        <hr className="border-purple-600/30" />

        {/* Rush Rewards Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PiMedalFill className="text-orange-500" size={32}/>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-300 text-lg ml-2">LudoBit Rewards</span>
              </div>
            </div>
          </div>
          <button className="text-white hover:text-gray-200 flex items-center gap-2 transition-colors">
            <span className="text-lg font-medium">PLAY TO USE</span>
          </button>
        </div>
      </div>
    </div>
  )
}
