"use client";

import { useState } from "react";
import { ArrowLeft, Filter, ChevronRight } from "lucide-react";
import Usdt from "../../assets/img/usdt.png";

export default function TransactionHistory() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Withdrawals", "Deposits", "Bonus"];

    const transactions = [
    {
        id: 1,
        category: "Deposits",
        type: "cashback_expired",
        title: "Deposit",
        status: "Success",
        description: "123abczyz",
        amount: 10,
        currency: "$",
        date: "03 May, 14:42",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
    {
        id: 2,
        category: "Deposits",
        type: "cashback_pending",
        title: "Deposit",
        status: "Pending",
        description: "456defghi",
        amount: 25,
        currency: "$",
        date: "04 May, 10:15",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
    {
        id: 3,
        category: "Deposits",
        type: "cashback_failed",
        title: "Deposit",
        status: "Failed",
        description: "789xyzuvw",
        amount: 15,
        currency: "$",
        date: "05 May, 08:30",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
    {
        id: 4,
        category: "Withdrawals",
        type: "withdrawal_success",
        title: "Withdrawal",
        status: "Success",
        description: "abc123",
        amount: -20,
        currency: "$",
        date: "06 May, 09:45",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
    {
        id: 5,
        category: "Withdrawals",
        type: "withdrawal_pending",
        title: "Withdrawal",
        status: "Pending",
        description: "def456",
        amount: -35,
        currency: "$",
        date: "07 May, 11:00",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
    {
        id: 6,
        category: "Withdrawals",
        type: "withdrawal_failed",
        title: "Withdrawal",
        status: "Failed",
        description: "ghi789",
        amount: -50,
        currency: "$",
        date: "08 May, 15:30",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
    {
        id: 7,
        category: "Bonus",
        type: "cashback_failed",
        title: "Referal Bonus",
        description: "789xyzuvw",
        amount: 15,
        currency: "$",
        date: "05 May, 08:30",
        icon: Usdt,
        iconBg: "bg-transparent",
        rf_id:"EF2316"
    },
    {
        id: 8,
        category: "Bonus",
        type: "cashback_failed",
        title: "Deposit Bonus",
        description: "789xyzuvw",
        amount: 15,
        currency: "$",
        date: "05 May, 08:30",
        icon: Usdt,
        iconBg: "bg-transparent",
    },
];


    const formatAmount = (amount, currency = "$") => {
        const sign = amount >= 0 ? "" : "-";
        const absAmount = Math.abs(amount).toFixed(2);
        return `${sign}${currency}${absAmount}`;
    };

    return (
        <div className="min-h-screen bg-[#111827]">
            {/* Header */}
            <div className="flex items-center px-4 py-4">
                <button className="mr-4">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <h1 className="text-white font-medium text-xl">
                    Transaction History
                </h1>
            </div>

            {/* Filter Section */}
            <div className="px-4 py-4">
                <div className="border-2 border-[#f6921b] rounded-2xl p-2 bg-[#1f2937]">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-2 overflow-x-auto no-scrollbar">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                                        activeFilter === filter
                                            ? "bg-[#f6921b] text-white shadow-md"
                                            : " text-white/70 hover:bg-gray-100"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction List */}
            <div className="px-4 space-y-3">
                {transactions
                    .filter(
                        (t) =>
                            activeFilter === "All" ||
                            t.category === activeFilter
                    )
                    .map((transaction) => (
                        <div
                            key={transaction.id}
                            className="bg-[#1f2937] rounded-xl p-4 shadow-sm border border-gray-700"
                        >
                            <div
                                className={`relative top-0 right-0 text-sm font-semibold ${
                                    transaction.status === "Success"
                                        ? "text-green-500"
                                        : transaction.status === "Pending"
                                        ? "text-yellow-400"
                                        : transaction.status === "Failed"
                                        ? "text-red-500"
                                        : "text-white/50"
                                }`}
                            >
                                {transaction.status}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1">
                                    <div
                                        className={`w-8 h-12 ${transaction.iconBg} rounded-full flex items-center justify-center`}
                                    >
                                        {(typeof transaction.icon ===
                                            "string" &&
                                            transaction.icon.startsWith(
                                                "data:image"
                                            )) ||
                                        transaction.icon?.startsWith("/") ? (
                                            <img
                                                src={transaction.icon}
                                                alt="icon"
                                                className="w-7 h-7 rounded-full"
                                            />
                                        ) : typeof transaction.icon ===
                                          "object" ? (
                                            <img
                                                src={transaction.icon.src}
                                                alt="icon"
                                                className="w-7 h-7 rounded-full"
                                            />
                                        ) : (
                                            <span className="text-white font-bold text-lg">
                                                {transaction.icon}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white">
                                            {transaction.title}
                                        </h3>
                                        {transaction.description && (
                                            <div className="flex gap-2 items-center">
                                            <p className="text-xs text-gray-300 mt-1">
                                                <span className="font-semibold">
                                                    Txid:{" "}
                                                </span>
                                                {transaction.description}
                                            </p>
                                            {transaction.title !== "Deposit Bonus" && transaction.rf_id && (
  <p className="text-xs mt-1 text-gray-300">
    <span className="font-semibold">Rf ID: </span>
    {transaction.rf_id}
  </p>
)}

                                            </div>
                                        )}
                                    </div>
                                </div>
{transaction.category !== "Bonus" && (
    <div>
        <p className="text-white font-medium text-sm">Network</p>
        <span className="text-white text-xs">BEP20</span>
    </div>
)}

                                <div className="flex items-center space-x-3">
                                    <div className="text-right">
                                        <div
                                            className={`font-bold ${
                                                transaction.status === "Success"
                                                    ? "text-green-500"
                                                    : transaction.status ===
                                                      "Pending"
                                                    ? "text-yellow-400"
                                                    : transaction.status ===
                                                      "Failed"
                                                    ? "text-red-500"
                                                    : transaction.amount >= 0
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {formatAmount(
                                                transaction.amount,
                                                transaction.currency
                                            )}
                                        </div>

                                        <div className="text-xs text-gray-300">
                                            {transaction.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Empty State (if no transactions) */}
            {transactions.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <div className="text-2xl">📋</div>
                    </div>
                    <p className="text-gray-500 font-medium">
                        No transactions found
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                        Your transaction history will appear here
                    </p>
                </div>
            )}

            {/* Bottom indicator */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
                <div className="w-32 h-1 bg-gray-800 rounded-full"></div>
            </div>
            <style>{`
            /* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

            `}</style>
        </div>
    );
}
