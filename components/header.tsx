"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-sans font-extrabold text-right bg-transparent tracking-wide leading-4">
              <img src="/images/novagrowth-logo.png" alt="NovaGrowth Logo" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-white font-bold text-xl">NovaGrowth</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-secondary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-secondary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-white hover:text-secondary transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-secondary transition-colors">
              Contact Us
            </a>
          </nav>

          <div className="hidden md:block">
            <Button variant="secondary" className="bg-secondary text-primary hover:bg-secondary/90">
              Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-white hover:text-secondary transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-secondary transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-white hover:text-secondary transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-secondary transition-colors">
                Contact Us
              </a>
              <Button variant="secondary" className="bg-secondary text-primary hover:bg-secondary/90 w-fit">
                Free Trial
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
