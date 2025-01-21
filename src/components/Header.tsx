import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';
import logo from '../public/assets/logo.png';

const navigationLinks = [
  { href: '#services', label: 'Home' },
  { href: '#benefits', label: 'Beneficios' },
  { href: '#tracking', label: 'Seguimiento' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-black backdrop-blur-lg border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logistica Matías Logo"
              className="ml-3 h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-white">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition-all"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
            >
              Contáctanos
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black backdrop-blur-lg border-b border-gray-500">
            <div className="px-4 py-2 space-y-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="block text-white hover:text-gray-300 transition-all"
                >
                  {link.label}
                </NavLink>
              ))}
              {/* <button className="w-full px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300">
                Contáctanos
              </button> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
