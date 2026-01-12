import React from 'react';
import { heroData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="w-full max-w-[1200px] mx-auto px-5 text-center">
        <h1 
          className="text-5xl md:text-[48px] font-bold text-[#243C5B] mb-6
                     animate-fadeIn"
          style={{ lineHeight: 1.2 }}
        >
          {heroData.title}
        </h1>
        <p className="text-xl text-[#4B5563] max-w-[800px] mx-auto mb-8">
          {heroData.subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('ai-tool')}
            className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white
                       px-8 py-3 rounded-full font-bold text-sm
                       hover:opacity-90 transition-all duration-300 hover:scale-105
                       hover:shadow-lg inline-flex items-center gap-2"
          >
            Asistente IA <span>✨</span>
          </button>
          <button
            onClick={() => scrollToSection('models')}
            className="border-2 border-[#243C5B] text-[#243C5B] bg-transparent
                       px-8 py-3 rounded-full font-bold text-sm
                       hover:bg-[#243C5B] hover:text-white transition-all duration-300
                       inline-flex items-center"
          >
            Ver Modelos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
