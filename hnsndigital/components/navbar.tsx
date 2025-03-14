"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 dark:bg-black/90 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-medium">
              HNSN Digital
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm hover:text-gray-500 transition-colors"
            >
              Services
            </button>
            {isHomePage ? (
              <button
                onClick={() => scrollToSection("how-we-think")}
                className="text-sm hover:text-gray-500 transition-colors"
              >
                How We Think
              </button>
            ) : (
              <Link href="/#how-we-think" className="text-sm hover:text-gray-500 transition-colors">
                How We Think
              </Link>
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-gray-500 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-5 pt-2">
            <button
              onClick={() => scrollToSection("services")}
              className="block py-2 text-base hover:text-gray-500 w-full text-left"
            >
              Services
            </button>
            {isHomePage ? (
              <button
                onClick={() => scrollToSection("how-we-think")}
                className="block py-2 text-base hover:text-gray-500 w-full text-left"
              >
                How We Think
              </button>
            ) : (
              <Link
                href="/#how-we-think"
                className="block py-2 text-base hover:text-gray-500"
                onClick={() => setIsMenuOpen(false)}
              >
                How We Think
              </Link>
            )}
            <button
              onClick={() => scrollToSection("contact")}
              className="block py-2 text-base hover:text-gray-500 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

