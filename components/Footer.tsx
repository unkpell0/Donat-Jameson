import React from 'react';
import { DonutIcon, WhatsAppIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-brand-cream/80 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold font-serif text-white">
              <DonutIcon className="w-8 h-8 text-brand-orange" />
              Donat Bahagia
            </a>
            <p className="mt-2 text-sm text-brand-cream/60">Solusi snack premium untuk kebahagiaan tim Anda.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-cream/80 hover:text-white transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-brand-cream/80 hover:text-white transition-colors">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-brand-cream/60">
          <p>&copy; {currentYear} Donat Bahagia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
