import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Semantiska länkar
  const navLinks = [
    { name: 'Projekt', href: '#projects' },
    { name: 'Om mig', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      {/* mobile/tablet/desktop/TV */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[120rem]">
        <div className="flex items-center justify-between h-20">
          
          {/* Logotyp / Namn */}
          <a 
            href="#" 
            aria-label="Hem" 
            className="text-xl font-bold text-slate-50 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md outline-none"
          >
            Daniel<span className="text-blue-500">Pallin</span>.
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Huvudnavigation" className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md outline-none p-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobilmeny knapp */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-300 hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md outline-none cursor-pointer"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">{isOpen ? 'Stäng meny' : 'Öppna meny'}</span>
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobilmeny Dropdown */}
      {isOpen && (
        <nav id="mobile-menu" className="md:hidden bg-slate-900 border-b border-white/10 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}