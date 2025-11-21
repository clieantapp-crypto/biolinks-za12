"use client"

import { Loader2 } from "lucide-react"

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl">
      {/* Animated gradient blobs */}
      <div className="absolute top-20 right-[20%] w-96 h-96 bg-purple-700/40 rounded-full blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-20 left-[20%] w-96 h-96 bg-pink-700/40 rounded-full blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[50%] left-[50%] w-80 h-80 bg-cyan-700/30 rounded-full blur-[100px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Spinning loader with gradient */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center animate-spin-slow">
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
              <Loader2 className="w-10 h-10 text-purple-800 animate-spin" />
            </div>
          </div>
        </div>

  
      </div>
    </div>
  )
}
