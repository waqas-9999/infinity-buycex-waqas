"use client"

import { ChevronDown } from "lucide-react"

export function FormField({ label, type = "input", value, onChange, options, placeholder, icon }) {
  return (
    <div className="space-y-3">
      <label className="block text-gray-300 font-medium text-sm flex items-center gap-2">
        {icon && <span className="text-orange-400">{icon}</span>}
        {label}
      </label>
      {type === "select" ? (
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-4 py-4 text-white appearance-none focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
          >
            {options?.map((option) => (
              <option key={option} value={option} className="bg-gray-800">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
        />
      )}
    </div>
  )
}
