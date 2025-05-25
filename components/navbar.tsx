"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("#home")
            }}
          >
            Jidnyasa Patil
          </Link>

          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          ) : (
            <div className="flex items-center space-x-1">
              <nav className="flex items-center space-x-1 mr-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    className="text-foreground/80 hover:text-foreground hover:bg-accent"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.name}
                  </Button>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-md">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                className="justify-start rounded-none h-12 px-4"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
              >
                {link.name}
              </Button>
            ))}
            <div className="flex items-center px-4 py-2">
              <span className="text-sm mr-2">Theme:</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
