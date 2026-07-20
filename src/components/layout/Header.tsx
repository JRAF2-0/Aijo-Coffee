import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "../../data/siteConfig";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center cursor-pointer">
          <img src={siteConfig.logo} alt={siteConfig.name} className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
