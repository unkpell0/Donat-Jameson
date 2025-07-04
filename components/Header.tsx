
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#features', label: 'Keunggulan' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#customization', label: 'Kustomisasi' },
    { href: '#testimonial', label: 'Testimoni' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`w-full py-4 px-4 sm:px-8 z-50 transition-all duration-300 ${isSticky || isMenuOpen ? 'fixed top-0 bg-brand-cream/80 backdrop-blur-lg shadow-lg' : 'absolute top-0 bg-transparent'}`}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#" className="flex-shrink-0 flex items-center gap-3">
            <img src="https://iili.io/FcRWza2.png" alt="Donat Kentang DONERS Logo" className="h-12 w-auto" />
            <span className="font-serif font-bold text-lg sm:text-xl text-brand-brown">Donat Kentang DONERS</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8 mx-auto">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="font-semibold text-brand-brown hover:text-brand-orange transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#cta" className="hidden sm:inline-block bg-brand-orange hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
              Pesan Sekarang
            </a>
            <button
              className="lg:hidden text-brand-brown z-50"
              onClick={() => setMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-brand-cream/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleLinkClick}>
        <div 
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="font-serif text-3xl text-brand-brown hover:text-brand-orange transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a 
              href="#cta" 
              className="bg-brand-orange hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
              onClick={handleLinkClick}
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
