
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BriefcaseIcon, SparklesIcon, BanknotesIcon } from './Icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-white">
    <div className="bg-brand-orange text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="font-serif text-2xl font-bold mb-3 text-brand-brown">{title}</h3>
    <p className="text-stone-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: "Snack Meeting Anti Ngantuk",
      description: "Donat lezat dan kopi adalah kombinasi hemat energi yang mengembalikan fokus dan semangat tim Anda saat meeting.",
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: "Bisa Pakai Logo Perusahaan",
      description: "Jadikan acara internal, ucapan selamat, atau hampers akhir tahun lebih berkesan dengan logo dan branding kustom.",
    },
    {
      icon: <BanknotesIcon className="w-8 h-8" />,
      title: "Budget Kantor Aman, Semua Puas",
      description: "Harga yang masuk akal dengan tampilan premium. Karyawan puas, atasan pun setuju. Pilihan cerdas untuk semua acara.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-brand-brown">Kenapa Memilih Donat Kentang DONERS?</h2>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">Kami menyediakan lebih dari sekedar snack, kami memberikan kebahagiaan.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
             <AnimatedSection key={index} delay={`duration-${700 + index * 150}`}>
                <FeatureCard {...feature} />
             </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;