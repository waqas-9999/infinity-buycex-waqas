"use client";

import { useState } from "react";
import { FormField } from "./FormField";
import Usdt from "../../assets/img/usdt.png";
import { IoMdInformationCircleOutline } from "react-icons/io";

export function WithdrawScreen({ onSwitchToDeposit }) {
    const [currency, setCurrency] = useState("USDT");
    const [chain, setChain] = useState("BSC");
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const availableBalance = 20;
    const minAmount = 10;

    const numericAmount = parseFloat(amount);
    const isValidAmount = amount.trim() !== "" && !isNaN(numericAmount);
    const isAmountLow = isValidAmount && numericAmount < minAmount;
    const isAmountHigh = isValidAmount && numericAmount > availableBalance;

    const canWithdraw =
        currency &&
        chain &&
        address.trim() !== "" &&
        isValidAmount &&
        numericAmount >= minAmount &&
        numericAmount <= availableBalance;

    const handleWithdraw = () => {
        if (!canWithdraw) return;
        setShowSuccessModal(true);
    };

    return (
        <div>
            {/* Tab Navigation */}
            <div className="px-4 mb-6">
                <div className="flex bg-gray-800 rounded-2xl overflow-hidden border border-gray-700/50">
                    <button
                        onClick={onSwitchToDeposit}
                        className="flex-1 py-4 px-6 font-semibold transition-all duration-300 text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                        💰 Deposit
                    </button>
                    <button className="flex-1 py-4 px-6 font-semibold transition-all duration-300 bg-[#f6921b] text-white shadow-lg shadow-orange-500/25">
                        💸 Withdraw
                    </button>
                </div>
            </div>

            <div className="space-y-5 px-4">
                <FormField
                    label="Choose Currency"
                    type="select"
                    value={currency}
                    onChange={setCurrency}
                    options={[{ label: "USDT", icon: Usdt }]}
                    icon="🪙"
                />

                <FormField
                    label="Choose Chain"
                    type="select"
                    value={chain}
                    onChange={setChain}
                    options={["BSC", "ETH", "TRX"]}
                    icon="⛓️"
                />

                <FormField
                    label="Withdraw Address"
                    value={address}
                    onChange={setAddress}
                    placeholder="Enter your wallet address"
                    icon="📍"
                    hasError={address.trim() === ""}
                />
                

                <FormField
                    label="Amount"
                    value={amount}
                    onChange={setAmount}
                    placeholder="Enter withdrawal amount"
                    icon="💰"
                    hasError={isAmountLow || isAmountHigh}
                />
                {(isAmountLow || isAmountHigh) && (
                    <p className="text-red-500 text-sm px-1">
                        {isAmountLow &&
                            `Minimum withdrawal amount is ${minAmount} USDT.`}
                        {isAmountHigh &&
                            `You don’t have enough balance. Maximum is ${availableBalance} USDT.`}
                    </p>
                )}
            </div>
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-[90%] max-w-md text-center shadow-lg shadow-orange-500/20">
                        <div className="text-4xl mb-4">✅</div>
                        <h2 className="text-white text-xl font-bold mb-2">
                            Withdrawal Submitted Successfully!
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Your funds are on the way!
                        </p>
                        <button
                            onClick={() => setShowSuccessModal(false)}
                            className="mt-2 bg-[#f6921b] hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="px-4">
                <button
                    onClick={handleWithdraw}
                    disabled={!canWithdraw}
                    className={`w-full my-3 font-bold py-4 rounded-xl transition-all duration-300 transform ${
                        canWithdraw
                            ? "bg-[#f6921b] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02]"
                            : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    }`}
                >
                    🚀 Withdraw Funds
                </button>

                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-400">
                                Withdraw Balance
                            </span>
                            <div className="text-white text-sm flex items-center gap-1">
                                20 USDT
                            </div>
                        </div>
                        <div>
                            <span className="text-gray-400 flex items-end justify-end text-end">
                                Min Withdrawal
                            </span>
                            <div className="text-sm text-end">10 USDT</div>
                        </div>
                    </div>
                </div>
                
                <div className="border-2 border-green-500 bg-green-500/10 flex items-center gap-3 rounded-lg p-3  ">
                            <div className="w-10"><IoMdInformationCircleOutline className="text-green-500" size={20}/></div>
                            <span className="text-xs">For security purposes, large or suspicious withdrawal may take 1-7 hours for audit process. We appreciate your patience!</span>
                          </div>
            </div>

            {/* <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
            <Hash className="w-4 h-4 text-orange-400" />
          </div>
          <h3 className="text-white text-lg font-bold">Withdrawal History</h3>
        </div>

        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white text-xs font-semibold">
            <span>Record ID</span>
            <span>Amount</span>
            <span>Network</span>
          </div>
          <div className="p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-700/50 rounded-xl flex items-center justify-center">
              <div className="text-2xl opacity-50">📤</div>
            </div>
            <p className="text-gray-400 font-medium">No withdrawal records yet</p>
            <p className="text-gray-500 text-sm mt-1">Your withdrawals will appear here</p>
          </div>
        </div>
      </div> */}
        </div>
    );
}
