"use client";

import { useState } from "react";
import { ChevronDown, Copy, HelpCircle } from "lucide-react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Usdt from "../../assets/img/usdt.png";
import { QRCodeCanvas } from "qrcode.react";
import { FormField } from "./FormField";

export function DepositForm({
    currency,
    network,
    onCurrencyChange,
    onNetworkChange,
}) {
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);
    const [depositAmount, setDepositAmount] = useState("");
    const [showAddress, setShowAddress] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const currencies = ["USDT"];
    const networks = ["ERC20", "BEP20", "TRC20", "Polygon"];

    const isButtonActive = depositAmount.trim().length > 0;
    const depositAddress = "0xABCDEF1234567890ABCDEF1234567890ABCDEF12";

    const handleGenerateClick = () => {
        if (isButtonActive) {
            setShowAddress(true);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(depositAddress);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className="px-4 mb-6">
            <div className="border-2 border-[#f6921b] rounded-2xl p-4 bg-[#f6921b]/5">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {/* Currency Dropdown */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Deposit Currency
                        </label>
                        <div className="relative">
                            <div
                                onClick={() =>
                                    setShowCurrencyDropdown(
                                        !showCurrencyDropdown
                                    )
                                }
                                className="flex items-center bg-gray-800 rounded-lg px-3 py-3 border border-gray-600 cursor-pointer"
                            >
                                <div className="flex items-center justify-center text-white text-sm font-bold mr-3">
                                    <img
                                        src={Usdt}
                                        alt="usdt"
                                        className="w-7 h-7"
                                    />
                                </div>
                                <span className="text-white font-medium flex-1">
                                    {currency}
                                </span>
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            </div>
                            {showCurrencyDropdown && (
                                <div className="absolute z-10 mt-2 bg-gray-900 border border-gray-600 rounded-lg w-full">
                                    {currencies.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => {
                                                onCurrencyChange(item);
                                                setShowCurrencyDropdown(false);
                                            }}
                                            className="px-4 py-2 flex items-center gap-2 font-semibold hover:bg-gray-700 text-white cursor-pointer"
                                        >
                                            <img
                                                src={Usdt}
                                                alt="usdt"
                                                className="w-7 h-7"
                                            />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Network Dropdown */}
                    <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Choose Coin Network
                        </label>
                        <div className="relative">
                            <div
                                onClick={() =>
                                    setShowNetworkDropdown(!showNetworkDropdown)
                                }
                                className="flex items-center bg-gray-800 rounded-lg px-3 py-3 border border-gray-600 cursor-pointer"
                            >
                                <span className="text-white font-medium flex-1">
                                    {network}
                                </span>
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            </div>
                            {showNetworkDropdown && (
                                <div className="absolute z-10 mt-2 bg-gray-900 border border-gray-600 rounded-lg w-full">
                                    {networks.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => {
                                                onNetworkChange(item);
                                                setShowNetworkDropdown(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-3">
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
            </div>

            {/* Deposit Input and Button */}
            <div className="flex-1 mt-4">
                <FormField
                    label="Deposit Amount"
                    value={depositAmount}
                    onChange={setDepositAmount}
                    placeholder="Enter deposit amount"
                    icon="💵"
                />

                <button
                    disabled={!isButtonActive}
                    onClick={handleGenerateClick}
                    className={`w-full font-medium py-3 mt-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2
            ${
                isButtonActive
                    ? "bg-[#f6921b]/80 hover:bg-[#f6921b] text-white"
                    : "bg-gray-700 text-white"
            }
          `}
                >
                    <span>Generate Deposit Address</span>
                </button>
            </div>
            <div className="flex-1 mt-3">
                <h3 className="text-gray-300 text-sm font-medium mb-3">
                    Deposit address
                </h3>
                <div className="bg-gray-800 rounded-lg p-6 mb-4">
                    {showAddress && (
                        <>
                            <div className="flex break-all items-start md:items-center gap-3">
                                <div className="flex flex-col items-center">
                                    <QRCodeCanvas
                                        value={depositAddress}
                                        className="rounded-lg"
                                        size={100}
                                        bgColor={"#ffffff"}
                                        fgColor={"#000000"}
                                        level={"H"}
                                        includeMargin={true}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col items-start gap-2 p-3">
                                        <div className="bg-gray-800 text-white text-sm break-words">
                                            <span className="font-mono text-[16px] text-[#f6921b]">
                                                {depositAddress}
                                            </span>
                                        </div>
                                        <div
                                            onClick={handleCopy}
                                            className="flex items-center gap-2 border w-full justify-center rounded-md py-1 hover:opacity-60 cursor-pointer"
                                        >
                                            <Copy className="w-4 h-4" />
                                            <span className="font-semibold text-white">
                                                Copy
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="border-2 border-green-500 bg-green-500/10 flex items-center gap-3 rounded-lg p-3  ">
                    <IoMdInformationCircleOutline
                        className="text-green-500"
                        size={20}
                    />
                    <span>
                        Send only{" "}
                        <span className="font-semibold text-green-500">
                            USDT
                        </span>{" "}
                        to this deposit address
                    </span>
                </div>
            </div>
            {showToast && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded shadow-lg transition-opacity duration-300">
                    Address copied to clipboard!
                </div>
            )}
        </div>
    );
}
