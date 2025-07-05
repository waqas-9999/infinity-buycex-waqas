import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FormField({
    label,
    type = "input",
    value,
    onChange,
    options,
    placeholder,
    icon,
    hasError,
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-3 relative">
            <label className="text-gray-300 font-medium text-sm flex items-center gap-2">
                {icon && <span className="text-orange-400">{icon}</span>}
                {label}
            </label>

            {type === "select" ? (
                <div>
                    <div
                        className="relative bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-4 text-white cursor-pointer flex justify-between items-center"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="flex items-center gap-2">
                            {options?.find((o) => o.label === value)?.icon && (
                                <img
                                    src={
                                        options.find((o) => o.label === value)
                                            ?.icon
                                    }
                                    alt={value}
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            )}
                            <span>{value || placeholder}</span>
                        </div>
                        <ChevronDown className="text-gray-400 w-5 h-5" />
                    </div>

                    {open && (
                        <ul className="absolute z-10 mt-2 w-full bg-gray-900 border border-gray-700 rounded-xl max-h-60 overflow-auto">
                            {options.map((option) => (
                                <li
                                    key={option.label}
                                    onClick={() => {
                                        onChange(option.label);
                                        setOpen(false);
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                                >
                                    {option.icon && (
                                        <img
                                            src={option.icon}
                                            alt={option.label}
                                            width={24}
                                            height={24}
                                            className="rounded-full"
                                        />
                                    )}
                                    <span>{option.label}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`w-full bg-gray-800/50 backdrop-blur-sm rounded-xl px-4 py-4 text-white placeholder-gray-500 text-base focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all border ${
                        hasError ? "border-gray-600/50" : "border-gray-600/50"
                    }`}
                />
            )}
        </div>
    );
}
