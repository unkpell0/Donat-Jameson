import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center bg-white">
       <div className="absolute inset-0 bg-brand-cream z-0"></div>
       <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-amber-200/50 rounded-full filter blur-3xl opacity-50"></div>
       <div className="absolute -top-1/4 -right-1/4 w-2/3 h-2/3 bg-orange-200/50 rounded-full filter blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 sm:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-brown leading-tight">
              Bikin Tim Happy, <span className="text-brand-orange">Tanpa Repot.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay="duration-1000">
            <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0">
              Sajikan donat premium untuk meeting, event, atau sebagai kejutan manis harian. Higienis, lezat, dan disukai semua kalangan.
            </p>
          </AnimatedSection>
          <AnimatedSection delay="duration-1000">
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#cta" className="w-full sm:w-auto bg-brand-orange hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
                Pesan Untuk Tim Anda
              </a>
              <a href="#features" className="w-full sm:w-auto text-brand-brown font-semibold hover:text-brand-orange transition-colors">
                Lihat Keunggulan
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <AnimatedSection className="w-full h-full" delay="duration-1000">
             <div className="relative aspect-square">
                 <img src="https://picsum.photos/id/326/800/800" alt="Kotak berisi donat premium" className="rounded-3xl shadow-2xl object-cover w-full h-full" />
                 <div className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg font-semibold text-brand-brown">
                    ✨ Snack Kantor Premium
                 </div>
             </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;