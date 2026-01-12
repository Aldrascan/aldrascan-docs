import React from 'react';
import { companyInfo } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-[#243C5B] h-[90px] flex items-center sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="https://customer-assets.emergentagent.com/job_scanner-compare/artifacts/6xzo2lig_AldraScan%20Blanco.png"
            alt={companyInfo.name}
            className="h-12 object-contain"
          />
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hola%20AldraScan`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-white/80 font-medium text-sm hover:text-white transition-colors"
          >
            SOPORTE
          </a>
          <button
            onClick={() => scrollToSection('models')}
            className="bg-[#63B3ED] text-white px-6 py-2.5 rounded-full font-bold text-xs
                       hover:bg-[#4facfe] transition-all duration-300 hover:-translate-y-0.5
                       shadow-[0_4px_14px_rgba(99,179,237,0.4)]"
          >
            VER MODELOS
          </button>
          <a
            href={`https://wa.me/${companyInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#63B3ED] text-[#63B3ED] px-6 py-2.5 rounded-full font-bold text-xs
                       hover:bg-[#63B3ED] hover:text-white transition-all duration-300"
          >
            CONTACTAR
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
