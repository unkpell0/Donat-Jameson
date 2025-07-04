import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Customization from './components/Customization';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream text-brand-brown font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Customization />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
