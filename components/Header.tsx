import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Contactos', href: '#contactos' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/95 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="p-1.5 bg-amber-600 rounded-lg group-hover:bg-amber-500 transition-colors">
            <Scissors className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white uppercase">
            Carlos Vaz
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-stone-300 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-stone-950 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-8`}>
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif text-stone-100 border-b border-stone-800 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contactos"
            className="bg-amber-600 text-white py-4 text-center rounded-sm font-bold uppercase tracking-widest"
            onClick={() => setIsOpen(false)}
          >
            Agendar Agora
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
