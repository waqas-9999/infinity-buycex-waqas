import { Info, ChevronRight, ArrowDown } from "lucide-react";
import { MdAddCircleOutline } from "react-icons/md";
import usdt from "../assets/img/usdt.png";
import { PiMedalFill } from "react-icons/pi";

export default function WalletDashboard() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#111827] p-6 text-white">
            <div className="max-w-md mx-auto space-y-6 border border-gray-700 rounded-2xl p-3">
                {/* Deposit Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-300 text-lg">
                                Deposit
                            </span>
                            <div className="relative group inline-block">
                                <Info className="w-4 h-4 text-gray-400 cursor-pointer" />

                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 text-xs text-white bg-[#f6921b] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
                                    <p className="text-[16px] font-semibold pb-1">Fund you added to LudoBit</p>
                                    <span>You can’t withdraw it. Use it to play only</span>
                                    {/* Triangle Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-[#f6921b]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold flex gap-2 items-center">
                            <img src={usdt} alt="usdt" className="w-7 h-7" />0.0000
                        </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-2xl flex items-center gap-1 sm:gap-3 transition-colors">
                        <MdAddCircleOutline size={20}/>
                        <span className="text-sm sm:text-xl font-bold">ADD FUND</span>
                    </button>
                </div>

                {/* Cashback Section */}
                <div className="bg-[#f6921b]/10 rounded-xl px-2 py-3 border border-[#f6921b]/30">
                    <div className="flex items-center space-x-3">
                        <div className="text-lg">🎁</div>
                        <div className="text-xs">
                            <span className="text-white font-bold">
                                Get extra{" "}
                            </span>
                            <span className="text-green-500 font-bold text-sm">
                                5%
                            </span>
                            <span className="text-white font-bold">
                                {" "}
                                bonus on minimum of{" "}
                            </span>
                            <span className="text-green-500 font-bold text-sm">
                                10 USDT
                            </span>
                            <span className="text-white font-bold">
                                {" "}
                                deposit.
                            </span>
                        </div>
                    </div>
                </div>

                <hr className="border-purple-600/30" />

                {/* Winnings Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-300 text-lg">
                                Winnings
                            </span>
                            <div className="relative group inline-block">
                                <Info className="w-4 h-4 text-gray-400 cursor-pointer" />

                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 text-xs text-white bg-[#f6921b] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 whitespace-nowrap">
                                    <p className="text-[16px] font-semibold pb-1">Your Fund Winnings</p>
                                    <span>Withdraw this Fund or use it to play</span>
                                    {/* Triangle Arrow */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#f6921b]"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold flex gap-2 items-center">
                            <img src={usdt} alt="usdt" className="w-7 h-7" />0.0000
                        </div>
                    </div>
                    <button className="bg-[#f6921b] hover:bg-[#f6921b]/70 px-2 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-2xl  flex items-center gap-1 sm:gap-3 transition-colors">
                        <div className="flex items-center">
                            <ArrowDown className="w-5 h-5" />
                        </div>
                        <span className="text-sm sm:text-xl font-bold">WITHDRAW</span>
                    </button>
                </div>

                <hr className="border-purple-600/30" />

                {/* Rush Rewards Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <PiMedalFill className="text-orange-500" size={32} />
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold">$0.0000</span>
                                <span className="text-gray-300 text-xs ml-2">
                                    LudoBit Rewards
                                </span>
                            </div>
                        </div>
                    </div>
                    <button className="text-white hover:text-gray-200 flex items-center gap-2 transition-colors">
                        <span className="text-xs font-medium">PLAY TO USE</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
