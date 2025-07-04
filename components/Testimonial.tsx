import React from 'react';
import AnimatedSection from './AnimatedSection';
import { QuoteIcon } from './Icons';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonial" className="py-20 sm:py-32 bg-brand-cream">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-white max-w-3xl mx-auto rounded-2xl shadow-xl p-8 sm:p-12 text-center relative">
            <QuoteIcon className="absolute top-8 left-8 w-16 h-16 text-amber-100 -z-0" />
            <div className="relative z-10">
              <img src="https://i.pravatar.cc/100?u=manager" alt="Foto profil manajer" className="w-24 h-24 mx-auto rounded-full mb-6 border-4 border-brand-orange" />
              <blockquote className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown italic">
                “Donatnya lembut dan premium, beda dari yang lain. Tim jadi makin semangat meetingnya! Proses pesannya juga gampang banget.”
              </blockquote>
              <footer className="mt-8">
                <p className="font-bold text-lg text-brand-brown">Andini Putri</p>
                <p className="text-stone-500">Project Manager di Startup Ternama</p>
              </footer>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonial;