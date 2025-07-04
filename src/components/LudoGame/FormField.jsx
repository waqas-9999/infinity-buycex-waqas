"use client"

import { ChevronDown } from "lucide-react"

export function FormField({ label, type = "input", value, onChange, options, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="block text-gray-300 font-medium">{label}:</label>
      {type === "select" ? (
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500/30 rounded-lg px-4 py-3 text-white appearance-none focus:border-blue-500 focus:outline-none"
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-gray-800 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />
      )}
    </div>
  )
}
