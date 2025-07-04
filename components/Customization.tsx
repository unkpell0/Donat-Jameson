import React from 'react';
import AnimatedSection from './AnimatedSection';

const Customization: React.FC = () => {
  return (
    <section id="customization" className="py-20 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <AnimatedSection>
              <img 
                src="https://picsum.photos/id/1025/800/600" 
                alt="Kemasan donat dengan logo perusahaan" 
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </AnimatedSection>
          </div>
          <div className="lg:w-1/2">
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-brown leading-tight">
                Tunjukkan Identitas <span className="text-brand-orange">Perusahaan Anda</span>
              </h2>
              <p className="mt-6 text-lg text-stone-600">
                Buat acara internal, ucapan selamat, atau hampers akhir tahun menjadi lebih personal dan berkesan.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-stone-700">Request custom logo pada kemasan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-stone-700">Pilih warna pita dan kartu ucapan.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-stone-700">Jadikan setiap bingkisan tanda apresiasi yang unik.</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;