"use client"

import type React from "react"

import Link from "next/link"
import { useTheme } from "./ThemeProvider"
import { Sun, Moon } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useTheme()

  // Determine which icon to show based on current theme
  const ThemeIcon = theme === "dark" ? Sun : Moon

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            i D i
          </Link>

          <div className="flex items-center space-x-4 md:space-x-6">
            <Link href="/blog" className="text-sm md:text-base hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/gems" className="text-sm md:text-base hover:text-primary transition-colors">
              Cool Gems
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <ThemeIcon size={18} className="md:size-[20px]" />
            </button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 pt-20 md:pt-24 pb-6 md:pb-8">{children}</main>
      <footer className="border-t py-3 md:py-4 mt-2">
        <div className="container mx-auto px-4 text-center text-xs md:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} iDi. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

