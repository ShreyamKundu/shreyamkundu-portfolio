"use client"

import { useState, useEffect } from "react"
import { GitCommit } from "lucide-react"

export function GitCommitCounter() {
  const [commitCount, setCommitCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Simulate a random starting commit count
    const initialCount = Math.floor(Math.random() * 1000) + 500
    setCommitCount(initialCount)

    // Simulate new commits periodically
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance of a new commit
        setCommitCount((prev) => prev + 1)
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 1000)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900/80 backdrop-blur-sm rounded-full px-4 py-2">
      <GitCommit className={`h-4 w-4 ${isAnimating ? "text-emerald-400" : ""} transition-colors`} />
      <div className="text-sm">
        <span className="font-mono">{commitCount.toLocaleString()}</span> commits and counting
      </div>
    </div>
  )
}
