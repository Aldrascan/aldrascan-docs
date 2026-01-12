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
    <section className="bg-[#EEF3FA] py-24 md:py-[100px]">
      <div className="w-full max-w-[1200px] mx-auto px-5 text-center">
        <span className="text-[#007AFF] font-bold tracking-[2px] uppercase text-sm mb-4 block">
          {heroData.tag}
        </span>
        <h1 className="text-4xl md:text-[56px] font-bold text-[#0B0F18] mb-6 leading-tight">
          {heroData.title}
        </h1>
        <p className="text-lg md:text-xl text-[#5B667A] max-w-[700px] mx-auto mb-10 font-light">
          {heroData.subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('ai-tool')}
            className="bg-[#007AFF] text-white border-2 border-[#007AFF]
                       px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:-translate-y-0.5 transition-all duration-300
                       shadow-[0_4px_14px_rgba(0,122,255,0.4)]
                       hover:shadow-[0_6px_20px_rgba(0,122,255,0.5)]
                       hover:bg-[#0066D6] hover:border-[#0066D6]"
          >
            Asistente IA
          </button>
          <button
            onClick={() => scrollToSection('models')}
            className="bg-transparent text-[#0B0F18] border-2 border-[#0B0F18]
                       px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:bg-[#0B0F18] hover:text-white transition-all duration-300"
          >
            Ver Comparativa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
