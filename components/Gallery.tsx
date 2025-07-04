import React from 'react';
import AnimatedSection from './AnimatedSection';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/id/225/600/800', alt: 'Donat dengan topping coklat', caption: 'Varian Rasa Klasik' },
    { src: 'https://picsum.photos/id/1080/600/800', alt: 'Kotak donat siap untuk acara', caption: 'Kemasan Acara Spesial' },
    { src: 'https://picsum.photos/id/379/600/800', alt: 'Donat dengan kopi di meja kantor', caption: 'Teman Kerja Sempurna' },
    { src: 'https://picsum.photos/id/431/600/800', alt: 'Donat dengan hiasan custom', caption: 'Donat Kustom Ceria' },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-brown">Estetik, Enak, dan Siap Dibagi</h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">Cocok untuk segala momen di kantor, dari rapat penting hingga perayaan kecil.</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <AnimatedSection key={index} className="group overflow-hidden rounded-2xl shadow-lg relative" delay={`duration-${700 + index * 100}`}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-[3/4] transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <p className="absolute bottom-4 left-4 font-semibold text-white text-lg">{image.caption}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;