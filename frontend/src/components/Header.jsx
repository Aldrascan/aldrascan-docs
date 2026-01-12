import React from 'react';
import { companyInfo } from '../data/mock';

const Header = () => {
  return (
    <header className="bg-[#243C5B] h-20 flex items-center sticky top-0 z-50">
      <div className="w-full max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        <img 
          src="https://customer-assets.emergentagent.com/job_scanner-compare/artifacts/6xzo2lig_AldraScan%20Blanco.png"
          alt={companyInfo.name}
          className="h-10 object-contain"
        />
        <a
          href={`https://wa.me/${companyInfo.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#63B3ED] text-white px-8 py-3 rounded-full font-bold text-sm
                     hover:bg-[#4299E1] transition-all duration-300 hover:scale-105
                     inline-flex items-center justify-center"
        >
          CONTACTAR
        </a>
      </div>
    </header>
  );
};

export default Header;
