'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Solutions', href: '#features' },
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Case Studies', href: '#testimonials' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 nav-blur shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">A</span>
            </div>
            <span
              className={`font-display font-bold text-lg transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Accredian
              <span className="text-brand-500 ml-1 text-sm font-medium">Enterprise</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#lead-form"
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Login
            </a>
            <a
              href="#lead-form"
              className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-transform duration-200 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform duration-200 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl border border-gray-100 mb-4 overflow-hidden">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 mt-3 space-y-2">
                <a
                  href="#lead-form"
                  className="block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
