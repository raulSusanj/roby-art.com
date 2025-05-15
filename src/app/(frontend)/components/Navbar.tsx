'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface NavbarProps {
  showLogo?: boolean
  sticky?: boolean
  bgColor?: string
  textColor?: string
}

export default function Navbar({
  bgColor = 'bg-white',
  textColor = 'text-gray-700',
  showLogo = true,
  sticky = true,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`w-full ${bgColor} ${textColor} bg-opacity-50 p-4 z-50 backdrop-blur-sm ${
        sticky ? 'fixed top-0 left-0' : 'absolute top-0 left-0'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        {showLogo && (
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Roby Art Logo"
                width={200} // Adjust size as needed
                height={100}
                className="mr-2"
              />
            </div>
          </Link>
        )}

        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links and Phone Button (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-gray-600 transition-colors">
            Početna
          </Link>
          <Link href="/#aboutUs" className="text-gray-700 hover:text-gray-600 transition-colors">
            O nama
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-gray-600 transition-colors">
            Naši proizvodi
          </Link>

          <a
            href={`tel:+385(0)91 516 8526`}
            className="border-1 border-amber-600 text-gray-700 hover:text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
          >
            +385(0)91 516 8526
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-sm mt-4 p-4 rounded-lg shadow-lg">
          <Link href="/" className="block text-gray-700 hover:text-gray-600 py-2">
            Početna
          </Link>
          <Link href="#aboutUs" className="block text-gray-700 hover:text-gray-600 py-2">
            O nama
          </Link>
          <Link href="#products" className="block text-gray-700 hover:text-gray-600 py-2">
            Naši proizvodi
          </Link>
          <a
            href={`tel:+385(0)91 516 8526`}
            className="block border-1 border-amber-600 text-gray-700 hover:text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors mt-2"
          >
            385(0)91 516 8526
          </a>
        </div>
      )}
    </nav>
  )
}
