"use client"

import { useState } from "react"
import { cn } from "@/app/utils/cn"

interface TintSimulatorProps {
  className?: string
}

export function TintSimulator({ className }: TintSimulatorProps) {
  const [tintPercentage, setTintPercentage] = useState(35)

  const tintOptions = [
    { value: 5, label: "5%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
    { value: 35, label: "35%" },
    { value: 50, label: "50%" },
    { value: 70, label: "70%" },
  ]

  return (
    <div className={cn("flex flex-col items-center space-y-6 p-6", className)}>
      {/* Car Window Visualization */}
      <div className="relative w-full max-w-md">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-gray-300 bg-gray-100">
          {/* Car Window Frame */}
          <div className="absolute inset-4 rounded border-2 border-gray-800 bg-white">
            {/* Tint Overlay */}
            <div
              className="absolute inset-0 rounded transition-all duration-300 ease-in-out"
              style={{
                backgroundColor: `rgba(0, 0, 0, ${tintPercentage / 100})`,
              }}
            />
            {/* Window Reflection Effect */}
            <div className="absolute inset-0 rounded bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          </div>
          
          {/* Car Body Outline */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-600 rounded-b-lg" />
          <div className="absolute top-0 left-0 right-0 h-4 bg-gray-600 rounded-t-lg" />
        </div>
        
        {/* Percentage Display */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
          {tintPercentage}% Tint
        </div>
      </div>

      {/* Slider Control */}
      <div className="w-full max-w-md space-y-4">
        <div className="relative">
          <input
            type="range"
            min="5"
            max="70"
            step="5"
            value={tintPercentage}
            onChange={(e) => setTintPercentage(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>70%</span>
          </div>
        </div>

        {/* Quick Select Buttons */}
        <div className="grid grid-cols-3 gap-2">
          {tintOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setTintPercentage(option.value)}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                tintPercentage === option.value
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Legal Notice */}
      <div className="text-center text-xs text-gray-500 max-w-md">
        <p>
          Washington State law requires minimum 24% VLT on front side windows.
          Always check local regulations before installation.
        </p>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}