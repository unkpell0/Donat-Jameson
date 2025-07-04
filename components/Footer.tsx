
import React from 'react';
import { WhatsAppIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-brand-cream/80 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <a href="#" className="inline-block">
               <img src="https://iili.io/FcRWza2.png" alt="Donat Kentang DONERS Logo" className="h-14 w-auto mx-auto md:mx-0" />
            </a>
            <p className="mt-3 font-serif font-bold text-lg text-white">Donat Kentang DONERS</p>
            <p className="mt-1 text-sm text-brand-cream/60">Solusi snack premium untuk kebahagiaan tim Anda.</p>
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
          <p>&copy; {currentYear} Donat Kentang DONERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
