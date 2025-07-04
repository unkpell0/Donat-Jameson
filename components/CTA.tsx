import React from 'react';
import AnimatedSection from './AnimatedSection';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-brown">
            Siap Manjakan Tim Anda?
          </h2>
          <p className="mt-4 text-lg text-stone-600 max-w-xl mx-auto">
            Hubungi kami sekarang untuk pemesanan, kustomisasi, atau penawaran khusus untuk perusahaan Anda.
          </p>
          <div className="mt-10">
            <a 
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20memesan%20Donat%20Bahagia%20untuk%20kantor."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-orange hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg text-lg"
            >
              Pesan via WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
