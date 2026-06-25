"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = (theme ?? resolvedTheme) === "dark"

  return (
    <button
      type="button"
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center rounded-full",
        "border border-border/70 bg-card/70 text-foreground/70 shadow-lg backdrop-blur-lg",
        "transition hover:text-foreground hover:bg-card/90",
        className,
      )}
    >
      <Sun
        size={18}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "scale-75 opacity-0" : "scale-100 opacity-100",
        )}
      />
      <Moon
        size={18}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "scale-100 opacity-100" : "scale-75 opacity-0",
        )}
      />
    </button>
  )
}
