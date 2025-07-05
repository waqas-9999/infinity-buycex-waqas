"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Trophy } from "lucide-react"
import { GoInfo } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { HiOutlineDocument } from "react-icons/hi2";

export default function Component() {
  const [showToast, setShowToast] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("https://your-referral-link.com")
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 2000) // Hide after 2 seconds
  }

  return (
    <div className="min-h-screen bg-[#111827] p-4 relative">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#f6921b] text-white px-6 py-2 rounded-full shadow-lg z-50 text-sm font-medium">
          Link copied!
        </div>
      )}

      {/* Header */}
      <div className="flex flex-row-reverse items-center justify-between mb-6 pt-2">
        <button className="text-white hover:bg-white/10 p-2 rounded-full">
          <ArrowRight className="h-6 w-6" />
        </button>
        <h1 className="text-white text-xl font-semibold">My Profile</h1>
        <div className="w-10" />
      </div>

      {/* Profile Card */}
      <div className="bg-[#111827]/60 backdrop-blur-sm rounded-3xl p-6 space-y-6 border border-gray-800">
        {/* Avatar */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-red-400 rounded-full flex items-center justify-center">
              <span className="text-3xl">👨‍🦱</span>
            </div>
          </div>
          <div className="text-white text-lg font-medium">8770775647</div>
        </div>

        {/* Balance */}
        <div className="flex items-center gap-2 justify-center text-white bg-[#f6921b]/10 border border-[#f6921b] rounded-lg px-4 py-2 w-fit mx-auto">
          Total Balance:
          <span className="font-medium"> $0.0000</span>
        </div>

        {/* Game Stats */}
        <div className="bg-[#f6921b]/10 border border-[#f6921b] rounded-2xl p-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Game Played</span>
          </div>

          <div className="flex justify-around items-center">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-yellow-400 text-2xl font-bold">0</span>
              <span className="text-white text-sm">Total match</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="text-red-400 text-2xl font-bold">0</span>
              <span className="text-white text-sm">Total win</span>
            </div>
          </div>
        </div>

        {/* Referral Section */}
        <div className="space-y-3">
          <h3 className="text-white font-medium text-center">Referral Details</h3>
          <div className="flex justify-center items-center space-x-2">
            <button className="text-white px-6 rounded-xl">
              My Referrals: 10
            </button>
            <button
              className="bg-[#f6921b] py-2 text-white text-sm px-4 rounded-xl"
              onClick={handleCopy}
            >
              Copy Link
            </button>
          </div>
        </div>
         <div className="bg-[#f6921b]/10 rounded-xl px-2 py-3 border border-[#f6921b]/30">
        <div className="flex items-center space-x-3">
          <div className="text-lg">🎉</div>
          <div className="text-xs">
            <span className="text-white text-sm font-medium pb-1">Refer a Friend & Earn up to $20! </span><br/>
            {/* <span className="text-green-500 font-bold text-sm">5%</span> */}
            <span className="text-white text-xs">Invite your friends to play – you both win when they join! </span>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-gray-700 flex gap-4 items-center text-white rounded-md px-4 py-3">
        <GoInfo size={20}/>
        <p>Frequently Asked Questions</p>
      </div>
      <div className="border border-gray-700 flex gap-4 items-center text-white rounded-md px-4 py-3">
        <BiSupport size={20}/>
        <p>Support</p>
      </div>
      <div className="border border-gray-700 flex gap-4 items-center text-white rounded-md px-4 py-3">
        <HiOutlineDocument size={20}/>
        <p>Terms and condition</p>
      </div>
      </div>
      </div>
    </div>
  )
}
