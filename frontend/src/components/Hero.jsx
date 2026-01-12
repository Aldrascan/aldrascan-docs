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
    <section className="bg-[#F9FAFB] py-24 md:py-[100px]">
      <div className="w-full max-w-[1200px] mx-auto px-5 text-center">
        <span className="text-[#63B3ED] font-bold tracking-[2px] uppercase text-sm mb-4 block">
          {heroData.tag}
        </span>
        <h1 className="text-4xl md:text-[56px] font-bold text-[#243C5B] mb-6 leading-tight">
          {heroData.title}
        </h1>
        <p className="text-lg md:text-xl text-[#4B5563] max-w-[700px] mx-auto mb-10 font-light">
          {heroData.subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => scrollToSection('ai-tool')}
            className="bg-[#63B3ED] text-white border-2 border-[#63B3ED]
                       px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:-translate-y-0.5 transition-all duration-300
                       shadow-[0_4px_14px_rgba(99,179,237,0.4)]
                       hover:shadow-[0_6px_20px_rgba(99,179,237,0.6)]
                       hover:bg-[#4facfe] hover:border-[#4facfe]"
          >
            Asistente IA
          </button>
          <button
            onClick={() => scrollToSection('models')}
            className="bg-transparent text-[#243C5B] border-2 border-[#243C5B]
                       px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:bg-[#243C5B] hover:text-white transition-all duration-300"
          >
            Ver Comparativa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
